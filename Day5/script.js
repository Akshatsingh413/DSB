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