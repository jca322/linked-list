var x = {value: 1, next:{value: 2, next:{value: 3, next: null}}};

var print = function(node) {
    if(node === null) {
        return;
    }
    console.log(node.value);
    print(node.next);
};

print(x);