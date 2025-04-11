var item1 = "charpitha";
alert(item1);
var item2 = "hdfuy";
var item3;
var item4;
var item5 = [1, 2, 3]; //array
var item6; //type inferring
var pi = 3.15;
console.log(val);
var val = 23;
item6: 'hi'; //error
function AddNumbers(num1, num2) {
    return num1 + num2;
}
//alert(AddNumbers(5,6));
var obj1 = {
    id: 1,
    name: 'hello',
    addr: 'hotel'
};
//alert("hello")
function add1(n1, n2) {
    return "result:".concat(n1 + n2);
}
//alert(add1(3,4));
function AppendNumber(inp) {
    item5.push(inp);
}
//alert(AppendNumber(6));
function show(name, addr) {
    console.log("".concat(addr, "! ").concat(name));
}
function showN() {
    var Nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Nums[_i] = arguments[_i];
    }
    return Nums.join(',');
}
function DoOperation(nums, callback) {
    var temp = nums.join('-');
    callback(temp);
}
