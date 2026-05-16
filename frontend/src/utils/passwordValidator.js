export function validatePassword(password) {
  const errors = [];

  if (!password || password.length < 8) {
    errors.push("Mínimo de 8 caracteres");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("1 letra maiúscula");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("1 letra minúscula");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("1 número");
  }

  if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/.test(password)) {
    errors.push("1 caractere especial");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
