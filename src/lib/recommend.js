import { outfits } from '../data/outfits';
import { clothing, colors, labelFor, occasions, styles } from '../data/options';

const WEIGHTS = {
  clothing: 50,
  color: 35,
  style: 20,
  occasion: 15,
};

export function preferenceSignature(prefs) {
  return [prefs.occasion, prefs.style, prefs.color, prefs.clothing].join('|');
}

export function scoreOutfit(outfit, prefs) {
  const hits = {
    clothing: outfit.clothingTypes.includes(prefs.clothing),
    color: outfit.colorKeys.includes(prefs.color),
    style: outfit.styles.includes(prefs.style),
    occasion: outfit.occasions.includes(prefs.occasion),
  };

  const reasons = [];
  if (hits.occasion) reasons.push(labelFor(occasions, prefs.occasion));
  if (hits.style) reasons.push(labelFor(styles, prefs.style));
  if (hits.color) reasons.push(labelFor(colors, prefs.color));
  if (hits.clothing) reasons.push(labelFor(clothing, prefs.clothing));

  const hitCount = Object.values(hits).filter(Boolean).length;
  let score = 0;
  if (hits.clothing) score += WEIGHTS.clothing;
  if (hits.color) score += WEIGHTS.color;
  if (hits.style) score += WEIGHTS.style;
  if (hits.occasion) score += WEIGHTS.occasion;
  if (hitCount === 4) score += 40;
  else if (hitCount === 3 && hits.clothing && hits.color) score += 18;

  return { outfit, reasons, hits, hitCount, score };
}

export function matchReasons(outfit, prefs) {
  return scoreOutfit(outfit, prefs).reasons;
}

export function strengthLabel(hitCount) {
  if (hitCount >= 4) return 'Exact match';
  if (hitCount === 3) return 'Strong match';
  if (hitCount === 2) return 'Partial match';
  if (hitCount === 1) return 'A shared thread';
  return 'Nearby edit';
}

function narrowToExactShape(ranked) {
  const both = ranked.filter((item) => item.hits.clothing && item.hits.color);
  if (both.length) return both;

  const byClothing = ranked.filter((item) => item.hits.clothing);
  if (byClothing.length) return byClothing;

  const byColor = ranked.filter((item) => item.hits.color);
  if (byColor.length) return byColor;

  return ranked.filter((item) => item.hitCount > 0);
}

function missingLabels(pick, prefs) {
  if (!pick) return [];
  const missing = [];
  if (!pick.hits.occasion) missing.push(labelFor(occasions, prefs.occasion));
  if (!pick.hits.style) missing.push(labelFor(styles, prefs.style));
  if (!pick.hits.color) missing.push(labelFor(colors, prefs.color));
  if (!pick.hits.clothing) missing.push(labelFor(clothing, prefs.clothing));
  return missing;
}

export function recommend(prefs, offset = 0) {
  const ranked = outfits
    .map((outfit) => scoreOutfit(outfit, prefs))
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.hitCount - a.hitCount ||
        Number(b.hits.clothing) - Number(a.hits.clothing) ||
        Number(b.hits.color) - Number(a.hits.color) ||
        a.outfit.name.localeCompare(b.outfit.name),
    );

  const candidates = narrowToExactShape(ranked);
  if (candidates.length === 0) {
    return {
      picks: [],
      exact: false,
      strong: false,
      relaxed: true,
      partial: false,
      poolSize: 0,
      nextOffset: 0,
      signature: preferenceSignature(prefs),
      missing: [
        labelFor(occasions, prefs.occasion),
        labelFor(styles, prefs.style),
        labelFor(colors, prefs.color),
        labelFor(clothing, prefs.clothing),
      ],
    };
  }

  const bestHits = Math.max(...candidates.map((item) => item.hitCount));
  const leadPool = candidates.filter((item) => item.hitCount === bestHits);
  const leadIndex = ((offset % leadPool.length) + leadPool.length) % leadPool.length;
  const lead = leadPool[leadIndex];

  const minSupport = bestHits >= 3 ? Math.max(2, bestHits - 1) : 1;
  const supporting = candidates
    .filter((item) => item.outfit.id !== lead.outfit.id && item.hitCount >= minSupport)
    .slice(0, 2);

  const picks = [lead, ...supporting].map((item, index) => ({
    ...item,
    lead: index === 0,
    score: item.hitCount,
  }));

  return {
    picks,
    exact: bestHits === 4,
    strong: bestHits === 3,
    relaxed: bestHits <= 1,
    partial: bestHits === 2,
    poolSize: leadPool.length,
    nextOffset: leadIndex + 1,
    signature: preferenceSignature(prefs),
    missing: missingLabels(lead, prefs),
  };
}

export function styleNoteFor(prefs, outfit) {
  const color = labelFor(colors, prefs.color).toLowerCase();
  const occasion = labelFor(occasions, prefs.occasion).toLowerCase();
  const clothingLabel = labelFor(clothing, prefs.clothing).toLowerCase();
  const style = labelFor(styles, prefs.style).toLowerCase();
  const tip = outfit.tips[0];

  return `Built for ${occasion}, in a ${style} register, with ${color} leading the ${clothingLabel}. ${tip}`;
}
