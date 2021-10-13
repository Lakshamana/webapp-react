import { Settings, User, CreditCard } from "react-feather";
import { colors } from "styles";
import { MenuOption } from "./types";

export const options: Array<MenuOption> = [
  { id: "profile", label: "profile", icon: <User width={20} height={20} /> },
  {
    id: "settings",
    label: "settings",
    icon: <Settings width={20} height={20} />,
  },
  {
    id: "billing",
    label: "billing",
    icon: <CreditCard width={20} height={20} />,
  },
];

export const RADIO_LANGUAGES = [
  {
    id: "english",
    value: "english",
    children: "English",
    spacing: { pr: 3 },
    font: { color: colors.white },
  },
  {
    id: "portuguese",
    value: "portuguese",
    children: "Portuguese",
    spacing: { pr: 3 },
    font: { color: colors.white },
  },
];
