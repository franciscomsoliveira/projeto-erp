export function validatePassword(password) {
  if (!password || password.length < 8) {
    throw new Error("Senha deve ter no mínimo 8 caracteres");
  }

  if (!/[A-Z]/.test(password)) {
    throw new Error("Senha deve conter letra maiúscula");
  }

  if (!/[a-z]/.test(password)) {
    throw new Error("Senha deve conter letra minúscula");
  }

  if (!/[0-9]/.test(password)) {
    throw new Error("Senha deve conter número");
  }

  if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/.test(password)) {
    throw new Error("Senha deve conter caractere especial");
  }

  return true;
}
