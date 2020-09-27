function myFunc(){
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('email').value);
    
    try {
        console.log(document.getElementById('issue').value);
        document.getElementById('issue').value = "";
        console.log(document.getElementById('issue').value);
    }
    catch(err) {
        console.log("issue not there");
    }

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('email').value);
    //console.log(document.getElementById('issue').value);
}