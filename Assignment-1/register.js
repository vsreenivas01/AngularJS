var firstName = document.getElementById("txtFirstName");
var lastName = document.getElementById("txtLastName");
var age = document.getElementById("txtAge");
var genderDetails = document.getElementsByName("gender");

function dataSet(){
    firstName.value="Sreenivas";
    lastName.value="Valluripalli";
    age.value="37";
    genderDetails[1].checked=true;
}

function changeData(){
    firstName.value="Valluripalli";
    lastName.value="Sreenivas";
    age.value="37";
    genderDetails[0].checked=true;    
}

function clearData(){
    firstName.value="";
    lastName.value="";
    age.value="";
    genderDetails[0].checked=false;
    genderDetails[1].checked=false;
    
}

dataSet();