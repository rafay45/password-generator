function add(event) {
  let getValue = document.getElementById('input').value;
  event.preventDefault();
  if (getValue === "12345678910") {
    window.location.href = "home.html"
  }
  else {
    document.getElementById('alert').style.display = "block"
    document.getElementById('input').value = ""
  }
}

function rangeCounter() {
  let range = document.getElementById('input').value;
  if (range < 10) {
    range = 0 + range
    document.getElementById('box').innerText = range
  } else {
    document.getElementById('box').innerText = range
  }

}
function random() {
  let getAll = document.getElementById("all");
  let allCheck = getAll.checked

  if (allCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let passLength = document.getElementById('input').value;
    let allPass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let allUpdate = ""
    for (var i = 0; i < passLength; i++) {
      let allRandom = Math.floor(Math.random() * allPass.length)
      allUpdate += allPass[allRandom]
      document.getElementById('random-pass').innerText = allUpdate;
    }
  }
  let getUpperCase = document.getElementById("uppercase");
  let upperCheck = getUpperCase.checked;
  if (upperCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let firstPassLength = document.getElementById('input').value;
    let upperPass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let upperUpdate = ""
    for (var i = 0; i < firstPassLength; i++) {
      let upperRandom = Math.floor(Math.random() * upperPass.length)
      upperUpdate += upperPass[upperRandom]
      document.getElementById('random-pass').innerText = upperUpdate;
    }
  }
  let getLowerCase = document.getElementById("lowercase");
  let lowerCheck = getLowerCase.checked;
  if (lowerCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let secondPassLength = document.getElementById('input').value;
    let lowerPass = "abcdefghijklmnopqrstuvwxyz"
    let lowerUpdate = ""
    for (var i = 0; i < secondPassLength; i++) {
      let lowerRandom = Math.floor(Math.random() * lowerPass.length)
      lowerUpdate += lowerPass[lowerRandom]
      document.getElementById('random-pass').innerText = lowerUpdate;
    }
  }

  let number = document.getElementById("number");
  let numberCheck = number.checked;
  if (numberCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let thirdPassLength = document.getElementById('input').value;
    let numberPass = "1234567890"
    let numberUpdate = ""
    for (var i = 0; i < thirdPassLength; i++) {
      let numberRandom = Math.floor(Math.random() * numberPass.length)
     numberUpdate += numberPass[numberRandom]
      document.getElementById('random-pass').innerText = numberUpdate;
    }
  }
  let symbol = document.getElementById("symbol");
  let symbolCheck = symbol.checked;
  if (symbolCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let fourthPassLength = document.getElementById('input').value;
    let symbolPass = "!@#$%^&*()"
    let symbolUpdate = ""
    for (var i = 0; i < fourthPassLength; i++) {
      let symbolRandom = Math.floor(Math.random() * symbolPass.length)
     symbolUpdate += symbolPass[symbolRandom]
      document.getElementById('random-pass').innerText = symbolUpdate;
    }
  }

  let para = document.getElementById('random-pass');
  let paraInner = para.innerText;
  if(paraInner === ""){
    para.innerText = "Which password do you want?"
    para.style.color = "red"
  }
}




let createAttribute = document.getElementById('copy');
createAttribute.setAttribute("title", "Copy")
function textCopy() {
  let text = document.getElementById('random-pass').innerText;
  navigator.clipboard.writeText(text)
  createAttribute.setAttribute("title", "Copied")
}
