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

console.log("return sorted array");
var arr = [7, 4, 19, 6, 22, 2];
sort(arr);
console.log(arr);

console.log("insert value into sorted array");
var arr2 = [4, 32, 6, 1, 17, 5, 7];
insert(arr2);
console.log(arr2);

