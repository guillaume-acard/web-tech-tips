//#: ES6 Syntax - Not supported in NodeJS yet

import { sub } from "./8.1 - Import-Export";

export const TEST = "hello";
export const sub3 = (a, b, c) => sub(a, sub(b, c));
export default { scott : "tiger" };