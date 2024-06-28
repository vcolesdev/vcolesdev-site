import classNames from "classnames";

interface ClassNames {
  (...args: classNames.ArgumentArray): string;
  default: ClassNames;
}

export interface CSSStyles {
  [key: string]: ClassNames | {
    [key: string]: ClassNames;
  };
}

/**
 * Styles
 * @class Styles
 * A class for managing CSS styles and TailwindCSS classes
 */
export class Styles {
  public styles: CSSStyles;

  constructor({ ...styles }: CSSStyles) {
    this.styles = styles;
  }

  /**
   * getStyles()
   * @desc Returns all styles.
   */
  public getStyles(): CSSStyles {
    return this.styles;
  }

  /**
   * setStyles()
   * @desc Set all styles. Overwrites existing styles.
   * @param styles
   */
  public setStyles(styles: CSSStyles): void {
    this.styles = styles;
  }

  /**
   * removeStyles()
   * @desc Remove all styles, resetting to an empty object.
   */
  public removeStyles(): void {
    this.styles = {};
  }

  /**
   * getStyle()
   * @desc Get a specific style by name (key).
   * @param name
   */
  public getStyle(name: string): ClassNames {
    return <ClassNames>this.styles[name];
  }

  /**
   * addStyle()
   * @desc Add a new style by name (key).
   * @param name
   * @param style
   */
  public addStyle(name: string, style: ClassNames): void {
    this.styles[name] = style;
  }
}
