document.getElementById('login-btn')
.addEventListener("click",function (){
    // 1 mobile number
    const numberInput = document.getElementById("input-number")
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    // 2 pin
    const pinInput = document.getElementById("input-pin")
    const pin = pinInput.value;
    console.log(pin);
    // 3 mas fo number && pin
    if(contactNumber == "Usarname" , pin == "admin123"){
        // 3-1 true 
        alert("login Succes");
        window.location.assign("./Home.html")
    }else{
        // 3-2 false 
        alert ("login failed")
        return;
    }

})