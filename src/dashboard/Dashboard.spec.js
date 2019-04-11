import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

import Display from "../display/display.js"
import Controls from "../controls/controls.js"
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'


describe("Dashboard", () => { 

it('Display is rendering', () => {
  const tree = renderer
    .create(<Display/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Controls is rendering', () => {
    const tree = renderer
      .create(<Controls/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});