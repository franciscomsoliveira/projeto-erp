export { Input } from "./Input";
export { InputPassword } from "./InputPassword";

import { createInputVariant } from "./createInputVariant";
import { INPUT_CONFIGS } from "./input.configs";

export const InputLogin = createInputVariant(INPUT_CONFIGS.login);
export const InputEmail = createInputVariant(INPUT_CONFIGS.email);
export const InputSearch = createInputVariant(INPUT_CONFIGS.search);
export const InputName = createInputVariant(INPUT_CONFIGS.name);
export const InputUppercase = createInputVariant(INPUT_CONFIGS.uppercase);

export const InputPhone = createInputVariant(INPUT_CONFIGS.phone);
export const InputCEP = createInputVariant(INPUT_CONFIGS.cep);
export const InputCPF = createInputVariant(INPUT_CONFIGS.cpf);
export const InputCNPJ = createInputVariant(INPUT_CONFIGS.cnpj);

export const InputCurrency = createInputVariant(INPUT_CONFIGS.currency);
export const InputPercent = createInputVariant(INPUT_CONFIGS.percent);
export const InputNumber = createInputVariant(INPUT_CONFIGS.number);
export const InputQuantity = createInputVariant(INPUT_CONFIGS.quantity);
export const InputCost = createInputVariant(INPUT_CONFIGS.cost);
export const InputPrice = createInputVariant(INPUT_CONFIGS.price);
export const InputMargin = createInputVariant(INPUT_CONFIGS.margin);
export const InputCMV = createInputVariant(INPUT_CONFIGS.cmv);

export const InputSKU = createInputVariant(INPUT_CONFIGS.sku);
export const InputBarcode = createInputVariant(INPUT_CONFIGS.barcode);
export const InputStoreCode = createInputVariant(INPUT_CONFIGS.storeCode);

export const InputDate = createInputVariant(INPUT_CONFIGS.date);
export const InputTime = createInputVariant(INPUT_CONFIGS.time);

export const InputUnit = createInputVariant(INPUT_CONFIGS.unit);
export const InputAddress = createInputVariant(INPUT_CONFIGS.address);
export const InputCity = createInputVariant(INPUT_CONFIGS.city);
export const InputState = createInputVariant(INPUT_CONFIGS.state);
