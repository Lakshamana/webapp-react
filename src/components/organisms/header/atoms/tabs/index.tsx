import { Tab } from "components";
import { MENUTABS } from "../../settings";
import { PropsTabs } from "../../types";

const Tabs = ({ selected, setSelected }: PropsTabs) => (
  <>
    {MENUTABS.map((tab: any) => (
      <Tab
        mx={2}
        key={tab.id}
        link={tab.link}
        selected={selected === tab.label}
        onSelect={() => setSelected(tab.label)}
      >
        {tab.label}
      </Tab>
    ))}
  </>
);

export { Tabs };
