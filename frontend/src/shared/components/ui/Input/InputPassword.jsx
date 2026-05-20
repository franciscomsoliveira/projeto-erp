import { useState } from "react";
import * as Fi from "react-icons/fi";

import { Input } from "./Input";

export function InputPassword(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      label="Senha"
      placeholder="Digite sua senha"
      leftIcon={<Fi.FiLock />}
      rightIcon={
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
        >
          {showPassword ? <Fi.FiEyeOff /> : <Fi.FiEye />}
        </button>
      }
      autoComplete="current-password"
      {...props}
    />
  );
}
