function add(event) {
    let getValue = document.getElementById('input').value; 
    event.preventDefault();
    if(getValue === "12345"){
      window.location.href = "home.html"
    }
    else{
     document.getElementById('alert').style.display = "block"
    document.getElementById('input').value = ""
    }  
 }