interface UserInfo
{
    id:string;
    role:string;
    location:string;
    email:string;
    password:string
}
var ulist:UserInfo[]=[];
function GetUserData(){
    fetch('http://localhost:3004/userinfo') //promise //json url to fetch the data
    .then( //success
        (res)=>{
            res.json().then((data)=>
            {
                ulist=data;
                console.log(ulist); 
            })
        }
    ).catch( //failure
        ()=>{
        console.log("error display");
        }
    )
}