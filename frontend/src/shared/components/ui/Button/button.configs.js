import * as Fi from "react-icons/fi";

export const BUTTON_CONFIGS = {
  login: {
    label: "Entrar",
    variant: "primary",
    icon: Fi.FiLogIn,
    loadingText: "Entrando...",
  },

  save: {
    label: "Salvar",
    variant: "success",
    icon: Fi.FiSave,
    loadingText: "Salvando...",
  },

  delete: {
    label: "Excluir",
    variant: "danger",
    icon: Fi.FiTrash2,
    loadingText: "Excluindo...",
  },

  cancel: {
    label: "Cancelar",
    variant: "secondary",
    icon: Fi.FiX,
  },

  clear: {
    label: "Limpar",
    variant: "ghost",
    icon: Fi.FiRefreshCw,
  },

  edit: {
    label: "Editar",
    variant: "outline",
    icon: Fi.FiEdit2,
  },

  new: {
    label: "Novo",
    variant: "primary",
    icon: Fi.FiPlus,
  },

  search: {
    label: "Buscar",
    variant: "secondary",
    icon: Fi.FiSearch,
    loadingText: "Buscando...",
  },

  back: {
    label: "Voltar",
    variant: "ghost",
    icon: Fi.FiArrowLeft,
  },
};
