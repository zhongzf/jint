// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and
 * returns an Array object containing the results of the match, or null if the string did not match
 *
 * @path ch15/15.10/15.10.6/15.10.6.2/S15.10.6.2_A1_T17.js
 * @description String is null and RegExp is /ll|l/
 */

__executed = /ll|l/.exec(null);

__expected = ["ll"];
__expected.index=2;
__expected.input="null";

//CHECK#0
if ((__executed instanceof Array) !== true) {
	$ERROR('#0: __executed = /ll|l/.exec(null); (__executed instanceof Array) === true');
}

//CHECK#1
if (__executed.length !== __expected.length) {
  $ERROR('#1: __executed = /ll|l/.exec(null); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
  $ERROR('#2: __executed = /ll|l/.exec(null); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
  $ERROR('#3: __executed = /ll|l/.exec(null); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
  if (__executed[index] !== __expected[index]) {
    $ERROR('#4: __executed = /ll|l/.exec(null); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
  }
}


