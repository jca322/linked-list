var x = {value: 1, next:{value: 2, next:{value: 3, next: null}}};

//Print all values in linked list using recursion
var print = function(node) {
    if(node === null) {
        return;
    }
    console.log(node.value);
    print(node.next);
};

//Print all values in linked list using a loop
var print = function(node) {
    var cur = node;
    while (cur !== null) {
        console.log(cur.value);
        cur = cur.next;
    }
};

//Add a new node to the end of linked list using a loop
var append = function(node, value) {
    var cur = node;
    while (cur.next !== null) {
        cur = cur.next;
    }
    cur.next = {value: value, next: null};
};


console.log("initial list");
print(x);

console.log("append new value to list");
append(x, 7);
print(x);