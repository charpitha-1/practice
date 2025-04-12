interface Employee{
    id:number,
    name:string,
    address?:string; //optional
}
let emp1:Employee={
    id:20,
    name:"charpitha",
    address:"ooty"
}
let emp2:Employee={
    id:22,
    name:"thavishala",
    address:"shimla"
}
let emp3:Employee={
    id:22,
    name:"thavishala",
}
interface fly{ //interface method
    fly();//will not show in js bcz interface is not a js feature
}

class Bird implements fly{
    // private name:string; //default public in ts
    // private id:number;
    constructor(private id:number,private name:string){
        // this.id=bid; //access memeber of the class within class method
        // this.name=name;
    }
    DoEat()
    {
        console.log(`Bird id:${this.id} and name :${this.name}`);
    }
    fly(){
        console.log(`Bird id:${this.id} and name :${this.name}`);
    }
}
let b1=new Bird(1,'Crow');//object creation for class
// b1.name='Crow'; //access the properties 
// b1.id=1;
b1.DoEat();
b1.fly();
// console.log(b1.name);//access the bird name //cannot access the class member bcz it is private member

class SplBird extends Bird{ //inheritance
    splfeature:string;
    Move(){
        super.DoEat(); //calling Basr Class Function
    }
}
var s=new SplBird(2,"Duck");
s.Move();
