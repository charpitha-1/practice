var item1:string="charpitha";
alert(item1)
var item2:any="hdfuy";
var item3:boolean;
var item4:object;
var item5:number[]=[1,2,3]; //array
var item6:20;//type inferring
const pi=3.15;
console.log(val);
var val:any=23;
item6:'hi'//error

function AddNumbers(num1:number,num2:number):number //function
{
    return num1+num2;
}
//alert(AddNumbers(5,6));

var obj1:any={//any to switch specific data type
    id:1,
    name:'hello',
    addr:'hotel'
}
//alert("hello")

function add1(n1:number,n2:number):string{//template string
    return `result:${n1+n2}`;
}
//alert(add1(3,4));

function AppendNumber(inp:number):void{//adding item to array
    item5.push(inp);
}
//alert(AppendNumber(6));
function show(name:string,addr:string):void{//fun with default parameter
    console.log(`${addr}! ${name}`);
}

function showN(...Nums:number[]):string{//spread operator
    return Nums.join(',');
}

function DoOperation(nums:number[],callback:(inp:string)=>void){//arrow Operation
    var temp=nums.join('-');
    callback(temp);
}