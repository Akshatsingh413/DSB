function validate(){
    let un = document.getElementById('un').value;
    let ps = document.getElementById('ps').value;
    if(un === 'ak' && ps==='123'){
        alert("Login successful");
        document.getElementById('res').innerHTML = "Login Sucessfull";
    }
    else{
        alert("Wrong!!!");
        document.getElementById('res').innerHTML = "Wrong!!!";
    }
}

// let a = 12;
// let b = '12';
// console.log(a==b);
// console.log(a===b);

let a=(x,y)=>{
    console.log(x+y);
}
a(10,20);
