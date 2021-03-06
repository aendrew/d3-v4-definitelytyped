/**
 * Typescript definition tests for d3/d3-dispatch module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Dispatch from '../../src/d3-dispatch';

// Preparation --------------------------------------------

interface Datum {
    a: number;
    b: string;
}

let dispatch: d3Dispatch.Dispatch<HTMLElement>,
    copy: d3Dispatch.Dispatch<HTMLElement>,
    copy2: d3Dispatch.Dispatch<SVGElement>;

// Signature Tests ----------------------------------------

// create new dispatch object
dispatch = d3Dispatch.dispatch('foo', 'bar');


function cbFn (this: HTMLElement, d: Datum, i: number) {
    console.log(this.baseURI ? this.baseURI : 'nada');
    console.log(d ? d.a : 'nada');
};

function cbFn2 (this: SVGElement, d: Datum, i: number) {
    console.log(this.baseURI ? this.baseURI : 'nada');
    console.log(d ? d.a : 'nada');
};

dispatch.on('foo', cbFn);
// dispatch.on('foo', cbFn2); // test fails as 'this' context type is mismatched between dispatch and callback function

dispatch.on('bar', dispatch.on('bar'));

dispatch.call('foo');
dispatch.call('foo', document.body);
dispatch.call('foo', document.body, { a: 3, b: 'test' }, 1);

dispatch.apply('bar');
dispatch.apply('bar', document.body);
dispatch.apply('bar', document.body, [{ a: 3, b: 'test' }, 1]);

dispatch.on('bar', null);

// Copy dispatch -----------------------------------------------
copy = dispatch.copy();
// copy2 = dispatch.copy(); // test fails type mismatch of underlying event target