import { Tab } from "components";

import { colors } from "styles";
import { TabContainer } from "./styles";
import { PropsTabs } from "../../types";

const Tabs = ({ selected, setSelected, data, colorMode }: PropsTabs) => (
  <TabContainer display="flex">
    {data.map((tab: any) => (
      <Tab
        key={tab.id}
        link={tab.url}
        selected={selected === tab.id}
        onSelect={() => setSelected(tab.label)}
        color={colors.secondaryText[colorMode]}
        {...tab.style}
      >
        {tab.label}
      </Tab>
    ))}
  </TabContainer>
);

export { Tabs };
