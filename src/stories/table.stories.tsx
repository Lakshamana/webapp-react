import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "WEBAPP/Table",
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  defaultMessage: "There is no content in this table",
  columns: [
    {
      label: "Coluna 1",
      id: "column1",
    },
    {
      label: "Coluna 2",
      id: "column2",
      render: (props: any) => <span>{props.column2}</span>,
    },
  ],
  data: [
    { column1: "value11", column2: "value12" },
    { column1: "value21", column2: "value22" },
  ],
  count: 2,
  currentPage: 1,
};
