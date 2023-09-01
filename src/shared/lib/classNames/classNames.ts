/**
 * @type Mods - An object containing modifier classes as keys and their corresponding boolean/string values.
 */
type Mods = Record<string, boolean | string>;


/**
 * Generates a class name by combining the base class, additional classes, and modified classes.
 *
 * @param {string} cls - The base class name.
 * @param {Mods} [mods={}] - An object containing modifier classes as keys and their corresponding boolean/string values. 
 * @param {string[]} [additional=[]] - An array of additional class names.
 * @returns {string} - The generated class name.
 * 
 * 
 *  @example
 * // Returns: "button primary large"
 * className("button", { primary: true, large: false }, ["extra"]);
 * 
 * @example
 * // Returns: "card active extra"
 * className("card", { active: true, extra: true });
 * 
 * @example
 * // Returns: "card"
 * className("card");
 */
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [

    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map((className) => className)

  ].join(' ');
}