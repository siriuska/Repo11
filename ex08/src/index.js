function largestNumFromArr(arr) {
    var maxNumArray = [];
    for (var i = 0; i < arr.length; i++) {
        var sub_arr = arr[i];

        if (sub_arr !== []) {
            var biggest_sub = sub_arr[0];
            for (var j = 0; j < sub_arr.length; j++) {
                if (sub_arr[j] > biggest_sub) {
                    biggest_sub = sub_arr[j];
                }
            }
            maxNumArray.push(biggest_sub);
        }
    }
    return maxNumArray;
}

console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestNumFromArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestNumFromArr([[23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10]]));

module.exports = largestNumFromArr;