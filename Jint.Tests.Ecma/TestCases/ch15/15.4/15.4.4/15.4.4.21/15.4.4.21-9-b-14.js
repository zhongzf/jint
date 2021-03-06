/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-9-b-14.js
 * @description Array.prototype.reduce - decreasing length of array in step 8 causes deleted index property not to be visited
 */


function testcase() {

        var accessed = false;
        var testResult = true;

        function callbackfn(accum, val, idx, obj) {
            accessed = true;
            if (idx === 2) {
                testResult = false;
            }
        }

        var arr = [0, 1, 2, 3];

        Object.defineProperty(arr, "0", {
            get: function () {
                arr.length = 2;
                return 0;
            },
            configurable: true
        });

        arr.reduce(callbackfn);

        return testResult && accessed;
    }
runTestCase(testcase);
