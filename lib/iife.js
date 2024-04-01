// see article https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures?retiredLocale=de

function IIFE () {
    return function() {
        var counter = 0;

        const increase = function() {
            counter++;
        }

        const decrease = function() {
            counter--;
        }

        const getValue = function() {
            return counter;
        }
        return {
            increase: increase,
            decrease: decrease,
            getValue: getValue
        };
    }();
}

export default IIFE();

