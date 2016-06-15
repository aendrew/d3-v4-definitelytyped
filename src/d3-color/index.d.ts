// Type definitions for d3JS d3-color module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information

// ---------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// ---------------------------------------------------------------------------

/**
 * Type allowing for color objects from a specified color space
 */
export type ColorSpaceObject = RGBColor | HSLColor | LabColor | HCLColor | CubehelixColor;


export interface Color {
    displayable(): boolean // Note: While this method is used in prototyping for colors of specific colorspaces, it should not be called directly, as 'this.rgb' would not be implemented on Color
    toString(): string; // Note: While this method is used in prototyping for colors of specific colorspaces, it should not be called directly, as 'this.rgb' would not be implemented on Color
}

export interface ColorFn extends Function {
    (cssColorSpecifier: string): RGBColor | HSLColor;
    (color: ColorSpaceObject): RGBColor | HSLColor;
    prototype: Color;
}

export interface RGBColor extends Color {
    r: number;
    g: number;
    b: number;
    opacity: number;
    brighter(k?: number): RGBColor;
    darker(k?: number): RGBColor;
    displayable(): boolean
    rgb(): RGBColor;
    toString(): string;
}

export interface RGBColorFn extends Function {
    (r: number, g: number, b: number, opacity?: number): RGBColor;
    (cssColorSpecifier: string): RGBColor;
    (color: ColorSpaceObject): RGBColor;
    prototype: RGBColor;
}

export interface HSLColor extends Color {
    h: number;
    s: number;
    l: number;
    opacity: number;
    brighter(k?: number): HSLColor;
    darker(k?: number): HSLColor;
    displayable(): boolean
    rgb(): RGBColor;
}

export interface HSLColorFn extends Function {
    (h: number, s: number, l: number, opacity?: number): HSLColor;
    (cssColorSpecifier: string): HSLColor;
    (color: ColorSpaceObject): HSLColor;
    prototype: HSLColor;
}

export interface LabColor extends Color {
    l: number;
    a: number;
    b: number;
    opacity: number;
    brighter(k?: number): LabColor;
    darker(k?: number): LabColor;
    rgb(): RGBColor;
}

export interface LabColorFn extends Function {
    (l: number, a: number, b: number, opacity?: number): LabColor;
    (cssColorSpecifier: string): LabColor;
    (color: ColorSpaceObject): LabColor;
    prototype: LabColor;
}

export interface HCLColor extends Color {
    h: number;
    c: number;
    l: number;
    opacity: number;
    brighter(k?: number): HCLColor;
    darker(k?: number): HCLColor;
    rgb(): RGBColor;
}

export interface HCLColorFn extends Function {
    (h: number, l: number, c: number, opacity?: number): HCLColor;
    (cssColorSpecifier: string): HCLColor;
    (color: ColorSpaceObject): HCLColor;
    prototype: HCLColor;
}

export interface CubehelixColor extends Color {
    h: number;
    s: number;
    l: number;
    opacity: number;
    brighter(k?: number): CubehelixColor;
    darker(k?: number): CubehelixColor;
    rgb(): RGBColor;
}

export interface CubehelixColorFn extends Function {
    (h: number, s: number, l: number, opacity?: number): CubehelixColor;
    (cssColorSpecifier: string): CubehelixColor;
    (color: ColorSpaceObject): CubehelixColor;
    prototype: CubehelixColor;
}

// --------------------------------------------------------------------------
// Color object factories
// --------------------------------------------------------------------------

export var color: ColorFn;

export var rgb: RGBColorFn;

export var hsl: HSLColorFn;

export var lab: LabColorFn;

export var hcl: HCLColorFn;

export var cubehelix: CubehelixColorFn;
