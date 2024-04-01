export default function createClosureCounter () {
    var counter = 0;

    function _increase() {
        counter++;
    }

    function _decrease() {
        counter--;
    }

    function _getValue() {
        return counter;
    }

    return {
        increase: _increase,
        decrease: _decrease,
        getValue: _getValue
    }
}

