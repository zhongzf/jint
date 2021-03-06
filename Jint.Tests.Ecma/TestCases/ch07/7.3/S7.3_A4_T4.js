// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Single line comments can contain Line Terminator at the end of line
 *
 * @path ch07/7.3/S7.3_A4_T4.js
 * @description Insert PARAGRAPH SEPARATOR (U+2029) into the end of single line comment
 */

// CHECK#1
eval("// single line comment\u2029");

// CHECK#2
var x = 0;
eval("// single line comment\u2029 x = 1;");
if (x !== 1) {
  $ERROR('#1: var x = 0; eval("// single line comment\\u2029 x = 1;"); x === 1. Actual: ' + (x));
}

