//Create a swap function for sorting
var swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

//Sort an array using a selection sort
var sort = function(arr) {
    for(var i = 0; i < arr.length; i++) {
        var smallest = arr[i];
        var index = i;
        for(var j = index + 1; j < arr.length; j++) {
            if(arr[j] < smallest) {
                smallest = arr[j];
                index = j;
            }
        }
        swap(arr, i, index);
    }  
};

//Sort an array using an insertion sort
var insert = function(arr) {
    for(var i = 1; i < arr.length; i++) {
        for(var j = i; j > 0; j--) {
            if(arr[j] > arr[j-1]) {
                break;
            }
            swap(arr, j, (j-1));
        }
    }
};


//Sort an array using merge sort
var mergeSort = function(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    var mid = arr.length / 2;
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
};

var merge = function(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;

    //While both left and right contain elements that have not yet been merged
    while(leftIndex < left.length && rightIndex < right.length) {
        var leftValue = left[leftIndex];
        var rightValue = right[rightIndex];
        if(leftValue > rightValue) {
            result.push(rightValue)
            rightIndex++;
        } else {
            result.push(leftValue);
            leftIndex++;
        }
    }

    while(leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
};





console.log("return sorted array");
var arr = [7, 4, 19, 6, 22, 2];
sort(arr);
console.log(arr);

console.log("insert value into sorted array");
var arr2 = [4, 32, 6, 1, 17, 5, 7];
insert(arr2);
console.log(arr2);

console.log("sort array using merge sort");
console.log(mergeSort(arr2));


