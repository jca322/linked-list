//Create a swap function for sorting
var swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

//Sort an array selection sort
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

var arr = [7, 4, 19, 6, 22, 2];
sort(arr);
console.log(arr);
