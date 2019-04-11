import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';
import Display from "./Display";

describe("Display", () => { 

    it('If Display Gate is locked', () => {
    const tree = renderer
        .create(<Display locked={true} closed={true}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });

    it('If Display Gate is unlocked', () => {
        const tree = renderer
        .create(<Display locked={false} closed={false}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

});