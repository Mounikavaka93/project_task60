import { getCategory } from './categories';
import { seasons } from './options';

export const outfits = [
  {
    id: 'camel-wrap',
    name: 'Camel Wrap',
    category: 'casual',
    season: 'winter',
    occasions: ['office', 'travel', 'weekend'],
    styles: ['classic', 'minimal'],
    colorKeys: ['camel', 'black'],
    clothingTypes: ['layers', 'knitwear'],
    image: '/images/camel-wrap.jpg',
    alt: 'A belted camel wrap coat over black, with nude strap heels',
    description:
      'The coat does the talking. A camel wrap, closed with its own belt, sits over a black turtleneck and a narrow black trouser. The shoe is the same family as the coat, so the black reads as a line rather than a block.',
    items: [
      { name: 'Camel wrap coat', detail: 'Notched lapel, self-belt, hem that breaks over the knee.' },
      { name: 'Black turtleneck', detail: 'Fine gauge, close at the neck, no logo.' },
      { name: 'Black trousers', detail: 'Straight, cropped just above the heel.' },
    ],
    accessories: [
      { name: 'Nude strap heel', detail: 'A low strap in the color of the coat, not a contrast shoe.' },
      { name: 'Fine pendant', detail: 'One small silver drop, visible only when the coat opens.' },
      { name: 'No scarf', detail: 'The turtleneck already finishes the neck.' },
    ],
    matchingColors: [
      { name: 'Camel', hex: '#c4a06a' },
      { name: 'Ink', hex: '#1c1915' },
      { name: 'Stone', hex: '#b7b1a8' },
    ],
    tips: [
      'Belt the coat at the waist you actually have. A loose knot makes the wrap look like a robe.',
      'Keep the bag structured and black, or carry nothing. A slouchy tote fights the line.',
      'If the day runs long, the coat can come off and the black underneath still holds.',
    ],
  },
  {
    id: 'weekend-camel',
    name: 'Weekend Camel',
    category: 'casual',
    season: 'autumn',
    occasions: ['weekend', 'travel', 'office'],
    styles: ['classic', 'minimal'],
    colorKeys: ['camel', 'ivory'],
    clothingTypes: ['layers'],
    image: '/images/weekend-camel.jpg',
    alt: 'A long camel coat over a white T-shirt, pale trousers, and high-top sneakers',
    description:
      'A long camel coat left open, a plain white T-shirt, and a pale trouser. The high-top sneaker keeps it from turning into costume tailoring. This is the weekend uniform when you still want a shoulder.',
    items: [
      { name: 'Long camel coat', detail: 'Unbelted, worn open so the white shirt shows.' },
      { name: 'White T-shirt', detail: 'Clean neck, tucked once in front only.' },
      { name: 'Pale trousers', detail: 'Soft cotton or washed denim in ivory, not bright white.' },
    ],
    accessories: [
      { name: 'Two-tone high-tops', detail: 'Ivory leather with a black toe cap and a thick sole.' },
      { name: 'One ring', detail: 'A thin band is enough. Skip the watch if the cuff is already full.' },
      { name: 'No hat', detail: 'The hair and the coat collar are the top of the look.' },
    ],
    matchingColors: [
      { name: 'Camel', hex: '#c49a6c' },
      { name: 'Ivory', hex: '#f4efe6' },
      { name: 'Black', hex: '#2a2724' },
    ],
    tips: [
      'Let the coat hang. Buttoning it turns the easy proportion into a robe.',
      'Roll the trouser once if it stacks on the sneaker.',
      'A canvas tote in camel or natural canvas is the only bag that belongs here.',
    ],
  },
  {
    id: 'chevron-knit',
    name: 'Chevron Knit',
    category: 'casual',
    season: 'autumn',
    occasions: ['weekend', 'travel', 'date'],
    styles: ['bold', 'classic', 'bohemian'],
    colorKeys: ['camel', 'ivory'],
    clothingTypes: ['knitwear'],
    image: '/images/chevron-knit.jpg',
    alt: 'A camel and ivory chevron sweater with white shorts and brown over-the-knee boots',
    description:
      'A graphic knit in camel and ivory, cut short, with a white short and a brown boot that repeats the sweater. The pattern is loud, so the rest of the clothes stay plain.',
    items: [
      { name: 'Chevron sweater', detail: 'Camel and ivory zig-zag, ribbed neck and cuff, cropped at the waist.' },
      { name: 'White shorts', detail: 'Tailored, not athletic, with a clean hem.' },
      { name: 'Brown suede boots', detail: 'Over the knee, matte, in the same camel family as the knit.' },
    ],
    accessories: [
      { name: 'Thin chain bracelet', detail: 'One fine line on the wrist that is not in a pocket.' },
      { name: 'No belt', detail: 'The cropped hem already marks the waist.' },
      { name: 'Small shoulder bag', detail: 'If you need one, camel suede. Not a backpack.' },
    ],
    matchingColors: [
      { name: 'Camel', hex: '#b7773e' },
      { name: 'Ivory', hex: '#f7f4ee' },
      { name: 'Suede', hex: '#8d5a32' },
    ],
    tips: [
      'Wear the sweater tucked nowhere. The point is the strip of skin or the short hem.',
      'Keep makeup and jewelry quiet. The chevron is the print.',
      'On a colder day, swap the shorts for an ivory trouser and keep the same boot.',
    ],
  },
  {
    id: 'sea-floral',
    name: 'Sea Floral',
    category: 'casual',
    season: 'summer',
    occasions: ['weekend', 'date', 'travel', 'celebration'],
    styles: ['romantic', 'bohemian', 'classic'],
    colorKeys: ['ivory', 'crimson'],
    clothingTypes: ['dress'],
    image: '/images/sea-floral.jpg',
    alt: 'An ivory floral wrap dress with a straw circle bag by the water',
    description:
      'An ivory wrap printed with crimson flowers, tied at the waist, with a straw circle bag. It is a summer dress that still has a shape, because the wrap and the slit do the fitting for you.',
    items: [
      { name: 'Floral wrap dress', detail: 'Ivory ground, crimson and green flowers, flutter sleeve, self-tie belt.' },
      { name: 'Straw circle bag', detail: 'Small, rounded, held in the hand rather than across the body.' },
    ],
    accessories: [
      { name: 'Thin gold bracelet', detail: 'One chain. The dress already has enough pattern.' },
      { name: 'Flat sandal', detail: 'Leather, nude or natural, with a bare heel.' },
      { name: 'No hat required', detail: 'If the sun is hard, a simple straw with a low crown.' },
    ],
    matchingColors: [
      { name: 'Ivory', hex: '#f6f1e7' },
      { name: 'Crimson', hex: '#9a3b3b' },
      { name: 'Sea', hex: '#7ea3b5' },
    ],
    tips: [
      'Tie the wrap at the natural waist and let the ends hang. A bow that is too neat looks like a robe.',
      'Keep jewelry to one metal. Gold against the ivory ground is enough.',
      'The bag stays round and natural. A black leather bag would cut the dress in half.',
    ],
  },
  {
    id: 'ivory-shirtdress',
    name: 'Ivory Shirtdress',
    category: 'casual',
    season: 'summer',
    occasions: ['weekend', 'date', 'travel', 'office'],
    styles: ['minimal', 'classic'],
    colorKeys: ['ivory'],
    clothingTypes: ['dress'],
    image: '/images/ivory-shirtdress.jpg',
    alt: 'An ivory shirt dress with a self-tie belt, dark sunglasses, and long earrings',
    description:
      'One ivory shirt, cut as a dress and tied with its own belt. Dark sunglasses and a long earring are the only interruptions. It travels, it does lunch, and it does not need a jacket until evening.',
    items: [
      { name: 'Ivory shirt dress', detail: 'Button front, long sleeve, self-fabric belt, hem above the knee.' },
    ],
    accessories: [
      { name: 'Dark sunglasses', detail: 'A strong frame. The dress is pale and needs one dark note.' },
      { name: 'Long drop earrings', detail: 'Fine metal, visible against the open collar.' },
      { name: 'Leather sandal', detail: 'Tan or black, flat or a low heel. Not a sneaker with this one.' },
    ],
    matchingColors: [
      { name: 'Ivory', hex: '#f3ead8' },
      { name: 'Black', hex: '#1c1915' },
      { name: 'Sand', hex: '#d9c4a3' },
    ],
    tips: [
      'Belt it. Without the tie the shirt dress loses its waist and starts to look borrowed.',
      'Sleeve up or sleeve down, but not one of each.',
      'A black leather mini bag is the cleanest add. Canvas makes it too beach.',
    ],
  },
  {
    id: 'burgundy-coat',
    name: 'Burgundy Coat',
    category: 'casual',
    season: 'winter',
    occasions: ['weekend', 'office', 'travel'],
    styles: ['classic', 'bold', 'romantic'],
    colorKeys: ['crimson', 'blush'],
    clothingTypes: ['layers', 'knitwear'],
    image: '/images/burgundy-coat.jpg',
    alt: 'A burgundy coat over a blush turtleneck, with black gloves and sunglasses',
    description:
      'A deep burgundy coat with a high collar, a blush turtleneck, and a grey skirt. Black gloves and a sharp sunglass make the color look chosen. It is city cold-weather dressing with a point of view.',
    items: [
      { name: 'Burgundy coat', detail: 'Zip front, tall collar, hem at the hip.' },
      { name: 'Blush turtleneck', detail: 'Pale pink, fine knit, tucked into the skirt.' },
      { name: 'Grey skirt', detail: 'Straight, knee length, in a quiet wool.' },
    ],
    accessories: [
      { name: 'Black leather gloves', detail: 'They sharpen the coat. Do not swap them for a bright knit mitten.' },
      { name: 'Dark sunglasses', detail: 'A slight cat-eye or a clean rectangle.' },
      { name: 'Red lip', detail: 'The only makeup that needs to match the coat.' },
    ],
    matchingColors: [
      { name: 'Burgundy', hex: '#6e2433' },
      { name: 'Blush', hex: '#e4cfc6' },
      { name: 'Grey', hex: '#8d8a86' },
    ],
    tips: [
      'Keep the collar up. It is the shape of the coat.',
      'The skirt should be grey or black. A matching burgundy skirt is too much of one note.',
      'Gloves stay black. A brown glove dulls the red.',
    ],
  },
  {
    id: 'city-plaid',
    name: 'City Plaid',
    category: 'casual',
    season: 'winter',
    occasions: ['office', 'weekend', 'travel'],
    styles: ['classic', 'edgy', 'minimal'],
    colorKeys: ['navy', 'crimson', 'black'],
    clothingTypes: ['layers'],
    image: '/images/city-plaid.jpg',
    alt: 'A navy windowpane coat carried with a burgundy woven bag',
    description:
      'A long navy coat in a green windowpane, black underneath, and a burgundy bag with a woven texture. The check is enough pattern. Everything else is a solid.',
    items: [
      { name: 'Navy windowpane coat', detail: 'Long, single-breasted, teal-green line on a dark ground.' },
      { name: 'Black trousers', detail: 'Slim, disappearing into a dark boot.' },
    ],
    accessories: [
      { name: 'Burgundy woven bag', detail: 'Structured, with a short handle. The red is the accent.' },
      { name: 'Dark boot', detail: 'Black, low heel, no hardware.' },
      { name: 'No scarf', detail: 'The coat pattern should not share the neck with another print.' },
    ],
    matchingColors: [
      { name: 'Navy', hex: '#16343a' },
      { name: 'Windowpane', hex: '#2f6d66' },
      { name: 'Burgundy', hex: '#7a2433' },
    ],
    tips: [
      'Wear black or navy under the coat. A white shirt is fine only if it is mostly covered.',
      'One burgundy object. Bag or lip, not both plus a shoe.',
      'If you add knit, make it a solid black polo or turtleneck, not another check.',
    ],
  },
  {
    id: 'blue-mile',
    name: 'Blue Mile',
    category: 'casual',
    season: 'spring',
    occasions: ['travel', 'weekend', 'date'],
    styles: ['romantic', 'classic', 'minimal'],
    colorKeys: ['navy'],
    clothingTypes: ['layers', 'dress'],
    image: '/images/blue-mile.jpg',
    alt: 'A powder-blue coat and dress with a grey scarf, blush belt bag, and white boots',
    description:
      'A powder-blue coat over a matching dress, a long grey scarf, a blush belt bag, and a white boot. It is a travel look that photographs as one color, with two soft interruptions.',
    items: [
      { name: 'Powder-blue coat', detail: 'Long, open, in the same cloth family as the dress.' },
      { name: 'Blue dress', detail: 'Midi, soft, moving under the coat rather than tailored to it.' },
      { name: 'Grey scarf', detail: 'Long, lightweight, looped once and left to hang.' },
    ],
    accessories: [
      { name: 'Blush belt bag', detail: 'Worn at the waist so the hands stay free.' },
      { name: 'White boot', detail: 'A mid heel, square or slightly pointed.' },
      { name: 'Dark sunglasses', detail: 'Small, so they do not fight the scarf.' },
    ],
    matchingColors: [
      { name: 'Powder blue', hex: '#8eb0d4' },
      { name: 'Grey', hex: '#c5c8cc' },
      { name: 'Blush', hex: '#e6c2b8' },
    ],
    tips: [
      'Stay inside the blue. A black bag would punch a hole in the look.',
      'The scarf should be long enough to move. A short neck scarf looks like an afterthought.',
      'White boots only. A tan boot makes the blue look accidental.',
    ],
  },
  {
    id: 'blush-rail',
    name: 'Blush Rail',
    category: 'casual',
    season: 'spring',
    occasions: ['weekend', 'office', 'date'],
    styles: ['romantic', 'classic', 'minimal'],
    colorKeys: ['blush', 'camel'],
    clothingTypes: ['separates'],
    image: '/images/blush-rail.jpg',
    alt: 'A camel jacket, blush ruffle blouse, braided belt, and blue jeans on a rail',
    description:
      'A formula you can lift off the rail: a camel jacket, a blush blouse with a soft ruffle, and a blue jean, tied together by a braided belt. Nothing is trying to be evening.',
    items: [
      { name: 'Camel jacket', detail: 'Unstructured, hip length, worn open.' },
      { name: 'Blush ruffle blouse', detail: 'Pale pink, a little volume at the front, tucked or half-tucked.' },
      { name: 'Blue jeans', detail: 'Straight, mid rise, with a clean hem over a simple shoe.' },
    ],
    accessories: [
      { name: 'Braided belt', detail: 'Tan leather, worn on the jeans, not through every loop if the blouse is out.' },
      { name: 'Hoop or nothing', detail: 'Small gold hoops. The ruffle is already a detail.' },
      { name: 'Leather loafer', detail: 'Tan or black. A white sneaker softens it further if the day is truly off.' },
    ],
    matchingColors: [
      { name: 'Camel', hex: '#a86b32' },
      { name: 'Blush', hex: '#f0c9be' },
      { name: 'Denim', hex: '#6d88a8' },
    ],
    tips: [
      'One ruffle is plenty. Do not add a ruffle skirt or a printed scarf.',
      'Tuck the front of the blouse so the belt has a job.',
      'If you drop the jacket, the blouse and jean still read as a look.',
    ],
  },
  {
    id: 'navy-line',
    name: 'Navy Line',
    category: 'formal',
    season: 'spring',
    occasions: ['office', 'wedding', 'celebration'],
    styles: ['classic', 'minimal'],
    colorKeys: ['navy', 'ivory'],
    clothingTypes: ['tailoring'],
    image: '/images/navy-line.jpg',
    alt: 'A navy suit with a white open-collar shirt, brown belt, and brown oxfords',
    description:
      'A navy suit with a white shirt, no tie, a brown belt, and a brown shoe. The pocket square is a small rust note. It is formal without the uniform stiffness of a full black tie.',
    items: [
      { name: 'Navy suit', detail: 'Single-breasted jacket, straight trouser, no excess break.' },
      { name: 'White shirt', detail: 'Open at the collar for the day, buttoned if the invitation says night.' },
    ],
    accessories: [
      { name: 'Brown belt', detail: 'Matches the shoe. A black belt would split the look.' },
      { name: 'Brown oxford', detail: 'Polished, not a casual derby.' },
      { name: 'Rust pocket square', detail: 'Folded straight. It is the only pattern.' },
    ],
    matchingColors: [
      { name: 'Navy', hex: '#1c2f73' },
      { name: 'White', hex: '#f7f4ee' },
      { name: 'Brown', hex: '#7a4a2a' },
    ],
    tips: [
      'If the event is a wedding, add a narrow navy or brown tie and keep the square.',
      'The jacket stays buttoned when you stand and open when you sit.',
      'Socks match the trouser, not the shoe.',
    ],
  },
  {
    id: 'windowpane-suit',
    name: 'Windowpane Suit',
    category: 'formal',
    season: 'autumn',
    occasions: ['wedding', 'office', 'celebration'],
    styles: ['classic', 'minimal', 'bold'],
    colorKeys: ['navy', 'crimson'],
    clothingTypes: ['tailoring'],
    image: '/images/windowpane-suit.jpg',
    alt: 'A blue windowpane three-piece suit with a striped tie and white pocket square',
    description:
      'A blue three-piece in a quiet windowpane, with a striped tie and a white pocket square. The waistcoat makes it ceremonial. Leave the jacket open if you want the vest to be the point.',
    items: [
      { name: 'Windowpane three-piece', detail: 'Jacket, five-button waistcoat, and trouser in blue check.' },
      { name: 'White shirt', detail: 'Cuff showing a centimeter. No casual collar.' },
      { name: 'Striped tie', detail: 'Navy ground, a thin red line. Knot kept small.' },
    ],
    accessories: [
      { name: 'White pocket square', detail: 'Straight fold, not a puff.' },
      { name: 'Brown-strap watch', detail: 'Leather, under the cuff, not a sports watch.' },
      { name: 'Oxford shoe', detail: 'Dark brown or black, polished.' },
    ],
    matchingColors: [
      { name: 'Windowpane blue', hex: '#3e5f8a' },
      { name: 'White', hex: '#f4f1ea' },
      { name: 'Tie red', hex: '#7a3038' },
    ],
    tips: [
      'The waistcoat is buttoned. The bottom button of a waistcoat stays open only if the cut is traditional and you know it.',
      'Do not add a patterned shirt. The suit is already the pattern.',
      'For the office, lose the waistcoat and keep the jacket and tie.',
    ],
  },
  {
    id: 'court-yellow',
    name: 'Court Yellow',
    category: 'streetwear',
    season: 'summer',
    occasions: ['weekend', 'celebration', 'travel'],
    styles: ['bold', 'edgy'],
    colorKeys: ['gold'],
    clothingTypes: ['separates'],
    image: '/images/court-yellow.jpg',
    alt: 'A yellow cropped hoodie and matching sweatpants with white pointed boots',
    description:
      'A yellow set, cropped at the rib and cuffed at the ankle, finished with a white pointed boot. The color is the whole idea. Nothing else should try to be interesting.',
    items: [
      { name: 'Yellow cropped hoodie', detail: 'Heavy cotton, hood up or down, hem above the waist.' },
      { name: 'Matching sweatpant', detail: 'Elastic cuff, a slight taper, same yellow as the hoodie.' },
    ],
    accessories: [
      { name: 'White pointed boot', detail: 'A heel, not a runner. It is what makes the set look styled.' },
      { name: 'Small gold hoop', detail: 'One pair. No layered necklaces.' },
      { name: 'No cap', detail: 'The hood is the headwear.' },
    ],
    matchingColors: [
      { name: 'Yellow', hex: '#f0c21e' },
      { name: 'White', hex: '#f7f4ee' },
      { name: 'Skin', hex: '#c98962' },
    ],
    tips: [
      'Keep the boot white. A black sneaker turns this into gym wear.',
      'If you need a cover-up, a long black coat thrown over the set is the only layer that works.',
      'Bag in white or yellow. A brown tote muddies the block of color.',
    ],
  },
  {
    id: 'stripe-edit',
    name: 'Stripe Edit',
    category: 'streetwear',
    season: 'spring',
    occasions: ['weekend', 'celebration', 'date'],
    styles: ['bold', 'edgy', 'minimal'],
    colorKeys: ['black', 'ivory'],
    clothingTypes: ['separates'],
    image: '/images/stripe-edit.jpg',
    alt: 'A white one-shoulder top with wide black striped trousers, red sunglasses, and a pink belt bag',
    description:
      'A white one-shoulder top and a wide black trouser with a white stripe. Red sunglasses and a small pink belt bag are the only color. The volume is in the leg, so the top stays close.',
    items: [
      { name: 'White one-shoulder top', detail: 'Close fit, bare shoulder, tucked into the trouser.' },
      { name: 'Striped wide trousers', detail: 'Black ground, white vertical stripe, full length over the shoe.' },
    ],
    accessories: [
      { name: 'Red sunglasses', detail: 'Small, slightly cat-eyed. They are the accent.' },
      { name: 'Pink belt bag', detail: 'Tiny, worn across the hip, not a backpack.' },
      { name: 'Black sneaker', detail: 'Low, simple, mostly hidden by the hem.' },
    ],
    matchingColors: [
      { name: 'Black', hex: '#161616' },
      { name: 'Ivory', hex: '#f4f1ea' },
      { name: 'Red', hex: '#d23b45' },
    ],
    tips: [
      'Do not add another stripe. The trouser has used up the print allowance.',
      'The top stays tucked so the waist is visible between the volume of the legs.',
      'Red appears once: the glasses, or a lip, not a red shoe as well.',
    ],
  },
  {
    id: 'lace-gold',
    name: 'Lace and Gold',
    category: 'streetwear',
    season: 'summer',
    occasions: ['celebration', 'date', 'weekend'],
    styles: ['bold', 'edgy', 'romantic'],
    colorKeys: ['emerald', 'gold', 'black'],
    clothingTypes: ['separates'],
    image: '/images/lace-gold.jpg',
    alt: 'An emerald lace crop top styled with round tinted sunglasses and gold jewelry',
    description:
      'An emerald lace top, cut short, with round tinted glasses and a stack of gold. It is street because of the crop and the jewelry, and evening because of the lace. Finish it with black, not with more color.',
    items: [
      { name: 'Emerald lace top', detail: 'Cropped, scalloped edge, worn on skin rather than over a shirt.' },
    ],
    accessories: [
      { name: 'Round tinted sunglasses', detail: 'Pale frame, brown lens, a fine chain if you like.' },
      { name: 'Gold rings and cuffs', detail: 'Several, kept to one metal.' },
      { name: 'Black lace choker', detail: 'Sits under the glasses chain, not layered with a pendant.' },
    ],
    matchingColors: [
      { name: 'Emerald', hex: '#0e7a62' },
      { name: 'Gold', hex: '#c6a15b' },
      { name: 'Black', hex: '#1c1915' },
    ],
    tips: [
      'Pair the top with a black trouser or a dark denim. A printed skirt fights the lace.',
      'Gold only. Silver next to this much yellow-gold looks unfinished.',
      'Hair off the neck or tucked. The jewelry needs the skin.',
    ],
  },
  {
    id: 'moto-camel',
    name: 'Moto Camel',
    category: 'streetwear',
    season: 'spring',
    occasions: ['weekend', 'date', 'office'],
    styles: ['edgy', 'classic', 'bold'],
    colorKeys: ['camel', 'navy'],
    clothingTypes: ['layers', 'separates'],
    image: '/images/moto-camel.jpg',
    alt: 'A brown leather moto jacket over a light blue shirt and navy tie, with gold sunglasses',
    description:
      'A brown leather moto over a light blue shirt and a navy tie. The tie is the surprise. Gold-rimmed sunglasses keep it from becoming a costume of toughness.',
    items: [
      { name: 'Brown leather moto', detail: 'Asymmetric zip, worn open so the tie shows.' },
      { name: 'Light blue shirt', detail: 'Button-down collar, tucked.' },
      { name: 'Navy tie', detail: 'Solid, narrow, loosened a finger if the day is casual.' },
    ],
    accessories: [
      { name: 'Gold-rimmed sunglasses', detail: 'Round, dark lens.' },
      { name: 'Metal watch', detail: 'Gold or mixed metal, on the wrist that is not holding the zipper.' },
      { name: 'Dark jean or trouser', detail: 'The jacket is the statement. The leg stays plain.' },
    ],
    matchingColors: [
      { name: 'Leather', hex: '#8a6246' },
      { name: 'Shirt blue', hex: '#b9c9d4' },
      { name: 'Navy', hex: '#1a2744' },
    ],
    tips: [
      'Leave the jacket unzipped. Zipped, the tie disappears and the point is lost.',
      'Do not add a hoodie under this. The shirt and tie are the contrast.',
      'Shoes in brown leather or a clean white sneaker. Not a boot with more hardware.',
    ],
  },
  {
    id: 'plum-column',
    name: 'Plum Column',
    category: 'party',
    season: 'winter',
    occasions: ['celebration', 'date', 'wedding'],
    styles: ['classic', 'romantic', 'minimal'],
    colorKeys: ['crimson', 'black'],
    clothingTypes: ['dress'],
    image: '/images/plum-column.jpg',
    alt: 'An off-the-shoulder plum column dress with chandelier earrings and thin gold bracelets',
    description:
      'A plum column, off the shoulder, with one pair of chandelier earrings. The dress is a single line, so the jewelry can be long. Nothing else should sparkle.',
    items: [
      { name: 'Plum column dress', detail: 'Off-shoulder, ribbed neckline, fitted through the hip.' },
    ],
    accessories: [
      { name: 'Chandelier earrings', detail: 'Crystal or pearl, long enough to move.' },
      { name: 'Thin gold bracelets', detail: 'Two or three fine chains on one wrist.' },
      { name: 'Barely-there heel', detail: 'Nude or plum. A black shoe cuts the column.' },
    ],
    matchingColors: [
      { name: 'Plum', hex: '#6e2150' },
      { name: 'Gold', hex: '#d4c09a' },
      { name: 'Skin', hex: '#e6c2ad' },
    ],
    tips: [
      'Hair off the shoulder or swept to one side so the earring has air.',
      'Skip the necklace. The neckline and the earrings are the jewelry.',
      'A small box clutch in plum or black, held, not a chain that crosses the dress.',
    ],
  },
  {
    id: 'scarlet-gown',
    name: 'Scarlet Gown',
    category: 'party',
    season: 'spring',
    occasions: ['wedding', 'celebration', 'date'],
    styles: ['romantic', 'classic', 'bold'],
    colorKeys: ['crimson'],
    clothingTypes: ['dress'],
    image: '/images/scarlet-gown.jpg',
    alt: 'A scarlet halter ballgown with a full skirt and a small floral corsage',
    description:
      'A scarlet halter gown with a full skirt. The color is the entrance. A small floral corsage at the wrist is the only extra, and even that should feel light.',
    items: [
      { name: 'Scarlet halter gown', detail: 'Fitted bodice, full skirt, a red deep enough to read as crimson in daylight.' },
    ],
    accessories: [
      { name: 'Floral wrist corsage', detail: 'White and red, small, not a prom cluster.' },
      { name: 'Drop earring', detail: 'Simple, gold or pearl. The dress does not need a chandelier.' },
      { name: 'Nude or gold heel', detail: 'Hidden by the hem. Comfort matters more than a statement shoe.' },
    ],
    matchingColors: [
      { name: 'Scarlet', hex: '#d0121a' },
      { name: 'Leaf', hex: '#3f6b3a' },
      { name: 'Stone', hex: '#d9d3cb' },
    ],
    tips: [
      'No red accessory. The gown has used the entire red budget.',
      'Hair can move. A severe updo fights the skirt.',
      'Walk the skirt. It is part of the look, so give it room rather than clutching it in both fists.',
    ],
  },
  {
    id: 'gold-thread',
    name: 'Gold Thread',
    category: 'party',
    season: 'autumn',
    occasions: ['celebration', 'date', 'wedding'],
    styles: ['bold', 'romantic', 'classic'],
    colorKeys: ['crimson', 'gold'],
    clothingTypes: ['dress'],
    image: '/images/gold-thread.jpg',
    alt: 'A red dress embroidered with gold flowers and finished with a woven belt',
    description:
      'A red dress covered in small gold flowers, cinched with a woven belt. It sits between party and ceremony: bright enough for a celebration, specific enough to feel dressed rather than themed.',
    items: [
      { name: 'Embroidered red dress', detail: 'V-neck, short sleeve, full skirt, gold and navy floral thread.' },
      { name: 'Woven belt', detail: 'Tan, with a square buckle, worn at the natural waist.' },
    ],
    accessories: [
      { name: 'Small gold hoop', detail: 'The dress is already jeweled with thread. Earrings stay small.' },
      { name: 'Bare sandal', detail: 'Gold or nude. A heavy boot would kill the skirt.' },
      { name: 'No extra necklace', detail: 'The neckline is open and the embroidery climbs toward it.' },
    ],
    matchingColors: [
      { name: 'Red', hex: '#d3131a' },
      { name: 'Gold thread', hex: '#d4b15a' },
      { name: 'Tan', hex: '#c69a62' },
    ],
    tips: [
      'The belt stays. Without it the embroidery reads as a costume rather than a waist.',
      'Keep hair smooth or simply off the face. A flower crown is too much with this much thread.',
      'Lip in a blue-red or a brown-red. A pink lip disappears next to the dress.',
    ],
  },
  {
    id: 'meadow-tulle',
    name: 'Meadow Tulle',
    category: 'party',
    season: 'spring',
    occasions: ['wedding', 'date', 'celebration'],
    styles: ['romantic', 'bohemian', 'classic'],
    colorKeys: ['blush', 'ivory'],
    clothingTypes: ['dress'],
    image: '/images/meadow-tulle.jpg',
    alt: 'A blush off-the-shoulder tulle dress with dotted sleeves and hoop earrings',
    description:
      'Blush tulle, off the shoulder, with a dotted sleeve and a quiet hoop. It is a guest dress for daylight ceremonies and long lunches, not a gown that needs a ballroom.',
    items: [
      { name: 'Blush tulle dress', detail: 'Off-shoulder, dotted sheer sleeve, soft volume through the skirt.' },
    ],
    accessories: [
      { name: 'Hoop earrings', detail: 'Medium, silver or gold, one pair only.' },
      { name: 'A held pair of sunglasses', detail: 'Black frames, not worn with the full face of makeup.' },
      { name: 'Strappy heel or a dressed sandal', detail: 'Nude, thin strap.' },
    ],
    matchingColors: [
      { name: 'Blush', hex: '#f0d5dc' },
      { name: 'Dot', hex: '#5c564e' },
      { name: 'Field', hex: '#c4a574' },
    ],
    tips: [
      'Let the sleeve sit off the shoulder. Pulling it up turns the dress into a blouse.',
      'Hair up, so the neck and the hoop read clearly.',
      'A pale lip and a stronger eye, or the reverse. Not both at full volume.',
    ],
  },
  {
    id: 'sheer-ink',
    name: 'Sheer Ink',
    category: 'party',
    season: 'winter',
    occasions: ['date', 'celebration', 'office'],
    styles: ['minimal', 'edgy', 'romantic'],
    colorKeys: ['black'],
    clothingTypes: ['separates'],
    image: '/images/sheer-portrait.jpg',
    alt: 'A sheer black blouse worn close, with the neck left bare',
    description:
      'A sheer black blouse for evenings that do not need a gown. The transparency is the detail, so the neck stays bare and the rest of the clothes stay in the same ink.',
    items: [
      { name: 'Sheer black blouse', detail: 'Short sleeve, soft transparency, worn close to the body.' },
    ],
    accessories: [
      { name: 'No necklace', detail: 'The open neck is the jewelry.' },
      { name: 'Small stud', detail: 'If the ear shows. Nothing that dangles into the sheer cloth.' },
      { name: 'Black heel', detail: 'Pointed, simple, the same value as the blouse.' },
    ],
    matchingColors: [
      { name: 'Ink', hex: '#1a1816' },
      { name: 'Sheer', hex: '#3a342f' },
      { name: 'Skin', hex: '#e4c8b0' },
    ],
    tips: [
      'Finish with a black trouser or a narrow skirt. A printed bottom fights the blouse.',
      'Hair can be loose. It replaces the necklace.',
      'One texture is enough. Do not add lace, sequin, and sheer in the same outfit.',
    ],
  },
  {
    id: 'banquet-saree',
    name: 'Banquet Saree',
    category: 'traditional',
    season: 'winter',
    occasions: ['wedding', 'celebration', 'date'],
    styles: ['classic', 'romantic', 'bold'],
    colorKeys: ['gold', 'crimson', 'black'],
    clothingTypes: ['traditional'],
    image: '/images/banquet-saree.jpg',
    alt: 'A purple saree with a wide gold border, black blouse, and silver pendant',
    description:
      'A deep purple saree with a wide gold border, a black velvet blouse, and silver at the ear and the throat. The border is the jewelry. Add metal, not more pattern.',
    items: [
      { name: 'Purple saree', detail: 'Gold zari border with a crimson edge, pleats falling straight.' },
      { name: 'Black velvet blouse', detail: 'Elbow sleeve, close fit, a matte contrast to the silk.' },
    ],
    accessories: [
      { name: 'Silver pendant', detail: 'One large piece on a long chain, centered.' },
      { name: 'Jhumka earrings', detail: 'Silver, long, echoing the pendant rather than a second style.' },
      { name: 'Bangles kept few', detail: 'A small stack. The border is already a bracelet of gold.' },
    ],
    matchingColors: [
      { name: 'Purple', hex: '#4c335c' },
      { name: 'Gold', hex: '#c6a15b' },
      { name: 'Crimson', hex: '#9a1c2f' },
    ],
    tips: [
      'Pleats in front, border visible. A fussy drape hides the thing that makes the saree.',
      'Silver with this gold border is a deliberate contrast. Do not mix in a third metal.',
      'Shoes in black or gold, covered by the fall of the saree. Comfort over a novelty heel.',
    ],
  },
  {
    id: 'ivory-anarkali',
    name: 'Ivory Anarkali',
    category: 'traditional',
    season: 'spring',
    occasions: ['wedding', 'celebration', 'date'],
    styles: ['romantic', 'minimal', 'classic', 'bohemian'],
    colorKeys: ['ivory', 'gold'],
    clothingTypes: ['traditional', 'dress'],
    image: '/images/ivory-anarkali.jpg',
    alt: 'An ivory embroidered anarkali with a tiered skirt and a sheer gold-edged dupatta',
    description:
      'Ivory on ivory: an embroidered kurta, a tiered skirt, and a sheer dupatta edged in gold. It is traditional dressing at its lightest, for a day ceremony or a long evening that starts in daylight.',
    items: [
      { name: 'Embroidered kurta', detail: 'Ivory, with tonal thread and a soft V at the neck.' },
      { name: 'Tiered skirt', detail: 'Same ivory, light volume, hem that moves.' },
      { name: 'Sheer dupatta', detail: 'Gold edge, scattered motifs, worn so the border can be seen.' },
    ],
    accessories: [
      { name: 'Gold jhumkas', detail: 'The main jewel. They show against the hair.' },
      { name: 'A thin bangle stack', detail: 'Gold, not a full ceremonial arm.' },
      { name: 'Kolhapuri or a gold jutti', detail: 'Flat, so the skirt stays the volume.' },
    ],
    matchingColors: [
      { name: 'Ivory', hex: '#f4f0e6' },
      { name: 'Gold edge', hex: '#c6a15b' },
      { name: 'Shadow', hex: '#d9d3c7' },
    ],
    tips: [
      'Keep the dupatta moving. Pinning it flat turns the look into a costume still.',
      'Hair tied back so the earring and the neck embroidery both show.',
      'No heavy contrast dupatta. A red one would shout over a dress that is trying to be quiet.',
    ],
  },
];

export function getOutfit(id) {
  return outfits.find((outfit) => outfit.id === id);
}

export function categoryName(slug) {
  return getCategory(slug)?.name ?? slug;
}

export function seasonName(id) {
  return seasons.find((season) => season.id === id)?.name ?? id;
}

export function outfitsForCategory(slug) {
  if (slug === 'seasonal') return outfits;
  return outfits.filter((outfit) => outfit.category === slug);
}

export function relatedLooks(outfit, count = 3) {
  const sameCategory = outfits.filter(
    (item) => item.id !== outfit.id && item.category === outfit.category,
  );
  const sameSeason = outfits.filter(
    (item) => item.id !== outfit.id && item.season === outfit.season && item.category !== outfit.category,
  );
  return [...sameCategory, ...sameSeason].slice(0, count);
}
