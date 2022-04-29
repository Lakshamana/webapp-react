import { shallow } from "setupTests";
import toJson from 'enzyme-to-json'
import { Input } from "../index";

const setup = () => {
const props = {};

 return {
   props,
   wrapper: shallow(<Input {...props} />)
 };
};

describe("Input test suit -", () => {
 it("Input renders without crashing given the required props", () => {
   const { wrapper } = setup();
   expect(wrapper.exists()).toBeTruthy();
   expect(toJson(wrapper)).toMatchSnapshot()
 });
});