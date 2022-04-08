myArr = [2, 5, 9, 8, 1];

function bubbleSort(arr) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                var tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};

console.log(bubbleSort(myArr));
module.exports = bubbleSort;