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

//Determine whether linked list contains a given value using a loop
var containsVal = function(node, value) {
    var cur = node;
    while (cur !== null) {
        if (cur.value === value) {
            return true;
        }
        cur = cur.next;
    }
    return false;
};

//Combine two linked lists into a new list
var join = function(node1, node2) {
    var cur = node1;
    while (cur.next !== null) {
        cur = cur.next;
    }
    cur.next = node2;
};


console.log("initial list");
print(x);

console.log("append new value to list");
append(x, 7);
print(x);

console.log("determine if given value in list");
console.log(containsVal(x, 2));
console.log(containsVal(x, 5));

console.log("join two linked lists");
var y = {value: 6, next:{value: 7, next:{value: 8, next: null}}};
join(x, y);
print(x);