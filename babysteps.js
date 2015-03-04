

var initial = process.argv;
// console.log(process.argv);
// console.log(initial.length);

var newarr = initial.slice(2);
var result = newarr.reduce(function(a, b) {
    return Number(a) + Number(b);
});
console.log(result);
// console.log(typeof result);