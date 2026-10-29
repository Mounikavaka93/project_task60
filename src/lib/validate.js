import { choiceGroups } from '../data/options';

const FIELD_ERRORS = {
  occasion: 'Select an occasion.',
  style: 'Select a style.',
  color: 'Select a color story.',
  clothing: 'Select a clothing preference.',
};

export function isAllowed(field, value) {
  return choiceGroups[field]?.some((option) => option.id === value) ?? false;
}

export function validateStyleForm(values) {
  const errors = {};
  for (const field of Object.keys(FIELD_ERRORS)) {
    if (!isAllowed(field, values[field])) errors[field] = FIELD_ERRORS[field];
  }

  const note = (values.note ?? '').trim();
  if (note.length > 0 && note.length < 8) {
    errors.note = 'Add a little more detail (at least 8 characters), or leave this blank.';
  } else if (note.length > 180) {
    errors.note = 'Keep the note under 180 characters.';
  }

  return errors;
}

export function firstInvalidField(errors) {
  return ['occasion', 'style', 'color', 'clothing', 'note'].find((field) => errors[field]);
}

export function validateEmail(value) {
  const email = value.trim();
  if (!email) return 'Enter an email to join the list.';
  if (email.length > 80) return 'That email is too long.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address.';
  return '';
}
