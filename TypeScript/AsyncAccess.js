function GetUserData() {
    fetch('http://localhost:3004/userinfo')
        .then(function (res) {
        console.log(res);
    }).catch(function () {
        console.log("error display");
    });
}
