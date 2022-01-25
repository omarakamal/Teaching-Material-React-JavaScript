import React from "react";
import App from "../src/App";
import renderer from "react-test-renderer";

test('renders correctly', () => {
    const tree = renderer
  .create(<App page="http://www.facebook.com">Facebook</App>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });