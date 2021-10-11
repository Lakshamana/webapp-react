import { Tab } from "components";

import { TabContainer } from "./styles";
import { PropsTabs } from "../../types";

const Tabs = ({ selected, setSelected, data }: PropsTabs) => (
  <TabContainer display="flex">
    {data.map((tab: any) => (
      <Tab
        mx={2}
        key={tab.id}
        link={tab.url}
        selected={selected === tab.label}
        onSelect={() => setSelected(tab.label)}
      >
        {tab.label}
      </Tab>
    ))}
  </TabContainer>
);

export { Tabs };
