//to update the time every second
function updateTime(){
    today = new Date();
    var timeAndDate = today.toLocaleString();
    document.getElementById("dateAndTime").innerHTML = timeAndDate;
}
setInterval(updateTime, 1000);


/*function displayPet(n){
    let pets = document.getElementsByClassName("petsList");
    pets[n].style.display = "block";
}
*/
function checkGA(){
    alert("clicked");
    let gender = document.getElementsByName("cORd").checked; //boolean
    let breed = document.getElementById("breed").value; //""
    let age = document.getElementById("age").value; //""
    let gender = document.getElementById("gender").value; //""
    let otherPets = document.getElementsByName("otherPets").checked; //boolean
    let otherKids = document.getElementsByName("otherKids").checked; //boolean
    let lastName = document.getElementById("lastName").value; //""
    let firstName = document.getElementById("firstName").value; //""
    let email = document.getElementById("email").value; //""
    
    
    if (!gender||breed==""||age==""||gender==""||!otherPets||!otherKids||lastName==""||firstName==""||email==""){
        alert("Please fill all fields...");
    }
}
function Test(){
    alert("hi");
}

