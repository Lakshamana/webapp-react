import { Tab, Container } from "components";

import { PropsTabs } from "../../types";

const Tabs = ({ selected, setSelected, data }: PropsTabs) => (
  <Container>
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
  </Container>
);

export { Tabs };
