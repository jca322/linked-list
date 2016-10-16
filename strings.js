//write a function to find the first nonrepeated character in a string
var firstUnique = function(str) {
    var map = {};
    for(var i = 0; i < str.length; i++) {
        var c = str[i];
        if(map[c] === undefined) {
            map[c] = 1;
        } else {
            map[c]++;
        }
    }
    for(var j = 0; j < str.length; j++) {
        var c = str[j];
        if(map[c] === 1) {
            return c;
        }
    } 
    return undefined;
};



console.log("function to find first nonrepeated character");
var str = "teeter";
console.log(firstUnique(str));                                                                                                                                                                  