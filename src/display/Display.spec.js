import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';
import Display from "./Display";
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'


describe("Display", () => { 

    it('If Display Gate is locked', () => {
    const tree = renderer
        .create(<Display locked={true}/>)
        .toJSON();
    expect(tree).toMatchInLineSnapshot(
        <div className="display panel">
        <div className={lockedClass}>Locked</div>
        <div className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
      </div>
    );
    });

    it('If Display Gate is unlocked', () => {
        const tree = renderer
        .create(<Display locked={false}/>)
        .toJSON();
        expect(tree).toMatchInLineSnapshot(

            <div className="display panel">
            <div className={lockedClass}>Unlocked</div>
            <div className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
          </div>

        );
    });

    it('If Display Gate is closed', () => {
        const tree = renderer
            .create(<Display closed={true}/>)
            .toJSON();
        expect(tree).toMatchInLineSnapshot(

            <div className="display panel">
            <div className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
            <div className={closedClass}>Closed</div>
            </div>

        );
        });
    
    it('If Display Gate is open', () => {
            const tree = renderer
            .create(<Display closed={false}/>)
            .toJSON();
            expect(tree).toMatchInLineSnapshot(

                <div className="display panel">
                <div className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
                <div className={closedClass}>Open</div>
                </div>

            );
    });

});