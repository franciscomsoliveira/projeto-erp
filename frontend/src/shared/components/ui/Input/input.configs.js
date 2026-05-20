import * as Fi from "react-icons/fi";

export const INPUT_CONFIGS = {
  login: {
    label: "Login",
    placeholder: "Digite o login",
    leftIcon: Fi.FiUser,
    autoComplete: "username",
  },

  email: {
    type: "email",
    label: "E-mail",
    placeholder: "Digite o e-mail",
    leftIcon: Fi.FiMail,
    autoComplete: "email",
  },

  password: {
    type: "password",
    label: "Senha",
    placeholder: "Digite a senha",
    leftIcon: Fi.FiLock,
    autoComplete: "current-password",
  },

  search: {
    type: "search",
    placeholder: "Buscar...",
    leftIcon: Fi.FiSearch,
  },

  name: {
    label: "Nome",
    placeholder: "Digite o nome",
    leftIcon: Fi.FiUser,
  },

  uppercase: {
    label: "Nome",
    placeholder: "Digite em caixa alta",
    leftIcon: Fi.FiUser,
    transform: "uppercase",
  },

  phone: {
    label: "Telefone",
    placeholder: "(00) 00000-0000",
    inputMode: "tel",
    leftIcon: Fi.FiPhone,
    maxLength: 15,
  },

  cep: {
    label: "CEP",
    placeholder: "00000-000",
    inputMode: "numeric",
    leftIcon: Fi.FiMapPin,
    maxLength: 9,
  },

  cpf: {
    label: "CPF",
    placeholder: "000.000.000-00",
    inputMode: "numeric",
    leftIcon: Fi.FiUserCheck,
    maxLength: 14,
  },

  cnpj: {
    label: "CNPJ",
    placeholder: "00.000.000/0000-00",
    inputMode: "numeric",
    leftIcon: Fi.FiBriefcase,
    maxLength: 18,
  },

  currency: {
    label: "Valor",
    placeholder: "R$ 0,00",
    inputMode: "decimal",
    leftIcon: Fi.FiDollarSign,
  },

  percent: {
    label: "Percentual",
    placeholder: "0%",
    inputMode: "decimal",
    leftIcon: Fi.FiPercent,
  },

  number: {
    type: "number",
    label: "Número",
    placeholder: "0",
    inputMode: "numeric",
    leftIcon: Fi.FiHash,
  },

  quantity: {
    type: "number",
    label: "Quantidade",
    placeholder: "0,000",
    inputMode: "decimal",
    leftIcon: Fi.FiPackage,
  },

  cost: {
    label: "Custo",
    placeholder: "R$ 0,00",
    inputMode: "decimal",
    leftIcon: Fi.FiDollarSign,
  },

  price: {
    label: "Preço de venda",
    placeholder: "R$ 0,00",
    inputMode: "decimal",
    leftIcon: Fi.FiTag,
  },

  margin: {
    label: "Margem",
    placeholder: "0%",
    inputMode: "decimal",
    leftIcon: Fi.FiTrendingUp,
  },

  cmv: {
    label: "CMV",
    placeholder: "0%",
    inputMode: "decimal",
    leftIcon: Fi.FiPieChart,
  },

  sku: {
    label: "SKU",
    placeholder: "Ex: INS-0001",
    leftIcon: Fi.FiBox,
    transform: "uppercase",
  },

  barcode: {
    label: "Código de barras",
    placeholder: "Digite ou escaneie",
    inputMode: "numeric",
    leftIcon: Fi.FiCode,
  },

  storeCode: {
    label: "Código da loja",
    placeholder: "Ex: LJ001",
    leftIcon: Fi.FiHome,
    transform: "uppercase",
  },

  date: {
    type: "date",
    label: "Data",
    leftIcon: Fi.FiCalendar,
  },

  time: {
    type: "time",
    label: "Horário",
    leftIcon: Fi.FiClock,
  },

  unit: {
    label: "Unidade",
    placeholder: "Ex: KG, UN, LT",
    leftIcon: Fi.FiLayers,
    transform: "uppercase",
  },

  address: {
    label: "Endereço",
    placeholder: "Digite o endereço",
    leftIcon: Fi.FiMap,
  },

  city: {
    label: "Cidade",
    placeholder: "Digite a cidade",
    leftIcon: Fi.FiMapPin,
  },

  state: {
    label: "UF",
    placeholder: "SP",
    maxLength: 2,
    leftIcon: Fi.FiMapPin,
    transform: "uppercase",
  },
};
