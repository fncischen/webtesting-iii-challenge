// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import Controls from "./Controls";


describe("Controls", () => { 

it('Control button is toggled for locked and closed', () => {
  const tree = renderer
    .create(<Controls locked={true} closed={true}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Control button is toggled for unlocked and open', () => {
    const tree = renderer
      .create(<Controls locked={false} closed={false}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});