exports.min = function min(array) {
    if (array<=0 || !array) {
        return 0;
    } else {
        array.sort((a, b) => b - a);
        array.reverse();
        return array[0];
    }
}

exports.max = function max(array) {
    if (array<=0 || !array) {
        return 0;
    } else {
        array.sort((a, b) => b - a);
        return array[0];
    }

}

exports.avg = function avg(array) {
    if (array<=0 || !array) {
        return 0;
    } else {
        let len = array.length,
            sum = 0;

        for (let i = 0; i < len; i++) {
            sum += array[i];
        }

        return sum / len;
    }
}

