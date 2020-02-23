// react libraries
import * as React from "react";

// third-party libraries
import { expect } from "chai";
import { shallow } from "enzyme";

// component
import HomePage from "../HomePage";

// test suites
describe("Home Page ", () => {
  const wrapper = shallow(<HomePage />);

  it("should render a paragraph", () => {
    expect(wrapper.find("p")).to.have.lengthOf(1);
  });
});
