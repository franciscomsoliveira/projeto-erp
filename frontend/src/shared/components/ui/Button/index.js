export { Button } from "./Button";

import { createButtonVariant } from "./createButtonVariant";
import { BUTTON_CONFIGS } from "./button.configs";

export const ButtonLogin = createButtonVariant(BUTTON_CONFIGS.login);
export const ButtonSave = createButtonVariant(BUTTON_CONFIGS.save);
export const ButtonDelete = createButtonVariant(BUTTON_CONFIGS.delete);
export const ButtonCancel = createButtonVariant(BUTTON_CONFIGS.cancel);
export const ButtonClear = createButtonVariant(BUTTON_CONFIGS.clear);
export const ButtonEdit = createButtonVariant(BUTTON_CONFIGS.edit);
export const ButtonNew = createButtonVariant(BUTTON_CONFIGS.new);
export const ButtonSearch = createButtonVariant(BUTTON_CONFIGS.search);
export const ButtonBack = createButtonVariant(BUTTON_CONFIGS.back);
