/**
 * Created by izaac on 12/25/2015.
 */
function add() {
    "use strict";
    function sum(num) {
        if (typeof(arguments[0]) !== "number") return undefined;
        return tmp + num;
    }

    if (typeof(arguments[0]) !== "number") return undefined;
    var tmp = arguments[0];
    if (arguments.length === 1){
        return sum;
    }

    if (typeof(arguments[1]) !== "number") return undefined;
    return arguments[0] + arguments[1];
}

add(2,3);

