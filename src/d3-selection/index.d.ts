// Type definitions for d3JS d3-selection module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information


// IMPORTANT: This typescript definitions file is intended for use with typescript version 1.9.0 or up. It uses
// a new compiler feature that allows the typing of 'this' context in functions, which is not supported in earlier
// versions of the compiler.
// The primary use case is for D3 selection related functions which are passed a DOM element
// as their 'this' context, e.g. attr(...), style(...) and prop(...).


// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------

/**
 * JavaScript primitive types, or "things that toString() predictably".
 */
export type Primitive = number | string | boolean;

/**
 * BaseType serves as an alias for the 'minimal' data type which can be selected
 * without 'd3-selection' trying to use properties internally which would otherwise not
 * be supported.
 */
export type BaseType = Element;



// TODO: Review Use for enter()
export type EnterElement = {
    ownerDocument: Document;
    namespaceURI: string;
    appendChild(newChild: Node): Node;
    insertBefore(newChild: Node, refChild: Node): Node;
    querySelector(selectors: string): Element;
    querySelectorAll(selectors: string): NodeListOf<Element>
}

/**
 * Container element type usable for mouse/touch functions
 */
export type ContainerElement = HTMLElement | SVGSVGElement | SVGGElement;


/**
 * Type for optional parameters map, when dispatching custom events
 * on a selection
 */
export type CustomEventParameters = {
    /**
     * If true, the event is dispatched to ancestors in reverse tree order
     */
    bubbles: boolean;
    /**
     * If true, event.preventDefault is allowed
     */
    cancelable: boolean;
    /**
     * Any custom data associated with the event
     */
    detail: any;
}


// --------------------------------------------------------------------------
// All Selection related interfaces and function
// --------------------------------------------------------------------------

// NB: Note that, d3.select does not generate the same parent element, when targeting the same DOM element with string selector
// or node element  
export function select<GElement extends BaseType, Datum>(selector: string): Selection<GElement, Datum, HTMLElement, any>;
export function select<GElement extends BaseType, Datum>(node: GElement): Selection<GElement, Datum, null, undefined>;

export function selectAll(): Selection<undefined, undefined, null, undefined>; // _groups are set to empty array, first generic type is set to undefined by convention
export function selectAll(selector: null): Selection<undefined, undefined, null, undefined>; // _groups are set to empty array, first generic type is set to undefined by convention
export function selectAll<GElement extends BaseType, OldDatum>(selector: string): Selection<GElement, OldDatum, HTMLElement, any>;
export function selectAll<GElement extends BaseType, OldDatum>(nodes: GElement[]): Selection<GElement, OldDatum, null, undefined>;
export function selectAll<GElement extends BaseType, OldDatum>(nodes: NodeListOf<GElement>): Selection<GElement, OldDatum, null, undefined>;



interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {

    // Sub-selection -------------------------

    select<DescElement extends BaseType>(selector: string): Selection<DescElement, Datum, PElement, PDatum>;
    select<DescElement extends BaseType>(selector: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => DescElement): Selection<DescElement, Datum, PElement, PDatum>;

    selectAll(): Selection<undefined, undefined, GElement, Datum>; // _groups are set to empty array, first generic type is set to undefined by convention
    selectAll(selector: null): Selection<undefined, undefined, GElement, Datum>; // _groups are set to empty array, first generic type is set to undefined by convention
    selectAll<DescElement extends BaseType, OldDatum>(selector: string): Selection<DescElement, OldDatum, GElement, Datum>;
    selectAll<DescElement extends BaseType, OldDatum>(selector: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => (Array<DescElement> | NodeListOf<DescElement>)): Selection<DescElement, OldDatum, GElement, Datum>;

    // Modifying -------------------------------

    attr(name: string): string;
    attr(name: string, value: Primitive): Selection<GElement, Datum, PElement, PDatum>;
    attr(name: string, value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => Primitive): Selection<GElement, Datum, PElement, PDatum>;

    classed(name: string): boolean;
    classed(name: string, value: boolean): Selection<GElement, Datum, PElement, PDatum>;
    classed(name: string, value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => boolean): Selection<GElement, Datum, PElement, PDatum>;

    style(name: string): string;
    style(name: string, value: Primitive, priority?: string): Selection<GElement, Datum, PElement, PDatum>;
    style(name: string, value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => Primitive, priority?: string): Selection<GElement, Datum, PElement, PDatum>;

    property(name: string): any;
    property(name: string, value: any): Selection<GElement, Datum, PElement, PDatum>;
    property(name: string, value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => any): Selection<GElement, Datum, PElement, PDatum>;

    text(): string;
    text(value: Primitive): Selection<GElement, Datum, PElement, PDatum>;
    text(value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => Primitive): Selection<GElement, Datum, PElement, PDatum>;

    html(): string;
    html(value: string): Selection<GElement, Datum, PElement, PDatum>;
    html(value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => string): Selection<GElement, Datum, PElement, PDatum>;
    
    append<ChildElement extends BaseType>(type: string): Selection<ChildElement, Datum, PElement, PDatum>;
    append<ChildElement extends BaseType>(type: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => ChildElement): Selection<ChildElement, Datum, PElement, PDatum>;
    
    insert<ChildElement extends BaseType>(type: string, before: string): Selection<ChildElement, Datum, PElement, PDatum>;
    insert<ChildElement extends BaseType>(type: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => ChildElement, before: string): Selection<ChildElement, Datum, PElement, PDatum>;
    insert<ChildElement extends BaseType>(type: string, before: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => BaseType): Selection<ChildElement, Datum, PElement, PDatum>;
    insert<ChildElement extends BaseType>(type: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => ChildElement,
        before: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => BaseType): Selection<ChildElement, Datum, PElement, PDatum>;

    /**
     * Removes the selected elements from the document.
     * Returns this selection (the removed elements) which are now detached from the DOM.
     */
    remove(): Selection<GElement, Datum, PElement, PDatum>;

    merge(other: Selection<GElement, Datum, PElement, PDatum>): Selection<GElement, Datum, PElement, PDatum>;

    filter(selector: string): Selection<GElement, Datum, PElement, PDatum>;
    filter(selector: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => boolean): Selection<GElement, Datum, PElement, PDatum>;



    sort(comparator?: (a: Datum, b: Datum) => number): Selection<GElement, Datum, PElement, PDatum>;

    order(): Selection<GElement, Datum, PElement, PDatum>;

    raise(): Selection<GElement, Datum, PElement, PDatum>;

    lower(): Selection<GElement, Datum, PElement, PDatum>;


    // Data Join ---------------------------------

    datum(): Datum;
    datum<NewDatum>(value: NewDatum): Selection<GElement, NewDatum, PElement, PDatum>;
    // TODO: Review below
    datum<NewDatum>(value: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => NewDatum): Selection<GElement, NewDatum, PElement, PDatum>;

    data(): Datum[];
    data<NewDatum>(
        data: Array<NewDatum>,
        key?: (this: GElement | PElement, datum?: Datum | NewDatum, index?: number, group?: Array<GElement | PElement> | NodeListOf<GElement | PElement>) => string
    ): Selection<GElement, NewDatum, PElement, PDatum>;
    data<NewDatum>(
        data: (this: PElement, datum?: PDatum, index?: number, group?: Array<PElement> | NodeListOf<PElement>) => Array<NewDatum>,
        key?: (this: GElement | PElement, datum?: Datum | NewDatum, index?: number, group?: Array<GElement | PElement> | NodeListOf<GElement | PElement>) => string
    ): Selection<GElement, NewDatum, PElement, PDatum>;

    // TODO: Enter Selection returns GElements of type EnterNode, which do not meet the minimum interface of BaseType = Element
    // HACK: Keep enter() selection 'as-if' they  are of type GElement, while overly permissive, this may be of little practical relevance,
    // given that the normal next step is an .append(...), which would address the matter
    enter(): Selection<GElement, Datum, PElement, PDatum>;

    // TODO: Review this: The type Datum on the exit items is actually of the type prior to calling data(...), as by definition, no new data of type NewDatum exists for these
    // elements. Due to the chaining, .data(...).exit(...), however, the definition would imply that the exit group elements have assumed the NewDatum type.
    // This seems to imply the following workaroud: Recast the exit Selection to OldDatum, if needed, or ommit and allow exit group elements to be of type any.
    exit<OldDatum>(): Selection<GElement, OldDatum, PElement, PDatum>;

    // Event Handling -------------------

    on(type: string): (this: GElement, datum: Datum, index: number, group: Array<GElement> | NodeListOf<GElement>) => any;
    on(type: string, listener: null): Selection<GElement, Datum, PElement, PDatum>;
    on(type: string, listener: (this: GElement, datum: Datum, index: number, group: Array<GElement> | NodeListOf<GElement>) => any, capture?: boolean): Selection<GElement, Datum, PElement, PDatum>;
    

    dispatch(type: string, parameters?: CustomEventParameters): Selection<GElement, Datum, PElement, PDatum>;
    dispatch(type: string, parameters?: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => CustomEventParameters): Selection<GElement, Datum, PElement, PDatum>;

    // Control Flow ----------------------

    each(valueFn: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => void): Selection<GElement, Datum, PElement, PDatum>;

    call(func: (selection: Selection<GElement, Datum, PElement, PDatum>, ...args: any[]) => void, ...args: any[]): Selection<GElement, Datum, PElement, PDatum>;

    empty(): boolean;

    node(): GElement;
    nodes(): Array<GElement>

    size(): number;


}


interface selectionFn extends Function {
    (): Selection<HTMLElement, any, null, undefined>;
}
export var selection: selectionFn;


// ---------------------------------------------------------------------------
// on.js event and customEvent related
// ---------------------------------------------------------------------------

// TODO: Review this section this is incorporated from D3js 3.x.x and had
// some related issues like .pageX, .pageY
// TODO: Review preferred approach to integration with D3DragEvent and D3ZoomEvent currently defined in d3-drag and d3-zoom, respectively
// Need to consider module dependencency between definitions vs d3 source code (coupling minimization and module/definition resolution)
interface BaseEvent extends Event {
    type: string;
    sourceEvent?: Event | MouseEvent | TouchEvent;
}

export var event: BaseEvent | Event | MouseEvent | TouchEvent;

// TODO: Check signature w.r.t event and this-context and ...args
// returns return value of invoked listener
export function customEvent<Datum>(event: BaseEvent | Event, listener: (d: Datum, index: number) => any, that: any, ...args: any[]): any;

// ---------------------------------------------------------------------------
// mouse.js related
// ---------------------------------------------------------------------------

/**
 * Get (x, y)-coordinates of the current event relative to the specified container element.
 * The coordinates are returned as a two-element array of numbers [x, y].
 * @param container
 */
export function mouse(container: ContainerElement): [number, number];

// ---------------------------------------------------------------------------
// touch.js and touches.js related
// ---------------------------------------------------------------------------

export function touch(container: ContainerElement, identifier: number): [number, number];
export function touch(container: ContainerElement, touches: TouchList, identifier: number): [number, number];

export function touches(container: ContainerElement, touches?: TouchList): Array<[number, number]>;

// ---------------------------------------------------------------------------
// local.js related
// ---------------------------------------------------------------------------


export interface Local {
    get(node: BaseType): any;
    remove(node: BaseType): boolean;
    set(node: BaseType, value: any): BaseType;
    /**
     * Obtain a string with the internally assigned property name for the local
     * which is used to store the value on a node 
     */
    toString(): string;
}

/**
 * Obtain a new local variable
 */
export function local(): Local;

// ---------------------------------------------------------------------------
// namespace.js related
// ---------------------------------------------------------------------------

/**
 * Type for object literal containing local name with related fully qualified namespace
 */
export type NamespaceLocalObject = {
    /**
     * Fully qualified namespace
     */
    space: string,
    /**
     * Name of the local to be namespaced.
     */
    local: string
}

/**
 * Obtain an object with properties of fully qualified namespace string and
 * name of local by parsing a shorthand string "prefix:local". If the prefix
 * does not exist in the "namespaces" object provided by d3-selection, then
 * the local name is returned as a simple string.
 * 
 * @param prefixedLocal A string composed of the namespace prefix and local 
 * name separated by colon, e.g. "svg:text".
 */
export function namespace(prefixedLocal: string): NamespaceLocalObject | string;


// ---------------------------------------------------------------------------
// namespaces.js related
// ---------------------------------------------------------------------------

/**
 * Type for maps of namespace prefixes to corresponding fully qualified namespace strings
 */
export type NamespaceMap = { [prefix: string]: string };

/**
 * Map of namespace prefixes to corresponding fully qualified namespace strings
 */
export var namespaces: NamespaceMap;


// ---------------------------------------------------------------------------
// window.js related
// ---------------------------------------------------------------------------

export function window(DOMNode: Window | Document | BaseType): Window;


// ---------------------------------------------------------------------------
// creator.js and matcher.js Complex helper closure generating functions
// for explicit bound-context dependent use
// ---------------------------------------------------------------------------


/**
 * Returns a closure structure which can be invoked in the 'this' context
 * of a group element. Depending on the use of namespacing, the NewGElement can be HTMLElement,
 * SVGElement an extension thereof or an element from a different namespace.
 * 
 * @param elementName Name of the element to be added
 */
export function creator<NewGElement extends BaseType>(elementName: string): (this: BaseType) => NewGElement;

/**
 * Returns a closure structure which can be invoked in the 'this' context
 * of a group element. Returns true, if the element in the 'this' context matches the selector
 * 
 * @param selector A valid selector string
 */
export function matcher<GElement extends BaseType>(selector: string): (this: BaseType) => boolean;

// ----------------------------------------------------------------------------
// selector.js and selectorAll.js related functions
// ----------------------------------------------------------------------------

export function selector<DescElement extends BaseType>(selector: string): (this: BaseType) => DescElement

export function selectorAll<DescElement extends BaseType>(selector: string): (this: BaseType) => NodeListOf<DescElement>;
