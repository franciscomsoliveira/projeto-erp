import * as Fi from "react-icons/fi";

export const CARD_CONFIGS = {
  default: {
    variant: "default",
    hoverable: false,
    padding: "md",
  },

  soft: {
    variant: "soft",
    hoverable: false,
    padding: "md",
  },

  glass: {
    variant: "glass",
    hoverable: true,
    padding: "md",
  },

  outlined: {
    variant: "outlined",
    hoverable: true,
    padding: "md",
  },

  success: {
    variant: "success",
    icon: Fi.FiCheckCircle,
    padding: "md",
  },

  warning: {
    variant: "warning",
    icon: Fi.FiAlertTriangle,
    padding: "md",
  },

  danger: {
    variant: "danger",
    icon: Fi.FiXCircle,
    padding: "md",
  },

  info: {
    variant: "info",
    icon: Fi.FiInfo,
    padding: "md",
  },
};
