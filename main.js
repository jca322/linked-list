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

//Remove a value from a linked list, assuming not removing first node
var remove = function(node, value) {
    var cur = node;
    while (cur.next !== null) {
        if (cur.next.value === value) {
            cur.next = cur.next.next;
            return true;
        }
        cur = cur.next;
    }
    return false;
};

//Reverse a linked list and return new head node
var reverse = function(node) {
    if (node.next === null) {
        return node;
    }
    var prev = node;
    var cur = node.next;
    var next = node.next.next;
    node.next = null;
    while (next !== null) {
        cur.next = prev;
        prev = cur;
        cur = next;
        next = next.next;
    }
    cur.next = prev;
    return cur;
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

console.log("remove a value from a linked list");
console.log(remove(x, 3));
console.log(remove(x, 22));
print(x);

console.log("reverse a linked list");
var reversed = reverse(x);
print(reversed);
