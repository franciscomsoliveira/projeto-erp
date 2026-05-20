export { Card } from "./Card";
export { StatCard } from "./StatCard";
export { InfoCard } from "./InfoCard";

import { createCardVariant } from "./createCardVariant";
import { CARD_CONFIGS } from "./card.configs";

export const CardDefault = createCardVariant(CARD_CONFIGS.default);
export const CardSoft = createCardVariant(CARD_CONFIGS.soft);
export const CardGlass = createCardVariant(CARD_CONFIGS.glass);
export const CardOutlined = createCardVariant(CARD_CONFIGS.outlined);
export const CardSuccess = createCardVariant(CARD_CONFIGS.success);
export const CardWarning = createCardVariant(CARD_CONFIGS.warning);
export const CardDanger = createCardVariant(CARD_CONFIGS.danger);
export const CardInfo = createCardVariant(CARD_CONFIGS.info);

export {
  Header as CardHeader,
  Content as CardContent,
  Footer as CardFooter,
  Actions as CardActions,
  Title as CardTitle,
  Description as CardDescription,
} from "./styles";
