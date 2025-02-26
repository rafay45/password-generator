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

  let upperLowerCase = document.getElementById('uppercase');
  let upperLowerCaseCheck = upperLowerCase.checked;
  let lowerUpperCase = document.getElementById('lowercase');
  let lowerUpperCaseCheck = lowerUpperCase.checked;
  if (upperLowerCaseCheck === true && lowerUpperCaseCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let fifthPassLength = document.getElementById('input').value;
    let upperLowerPass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let upperLowerUpdate = "";
    for (var i = 0; i < fifthPassLength; i++) {
      let upperLowerRandom = Math.floor(Math.random() * upperLowerPass.length)
      upperLowerUpdate += upperLowerPass[upperLowerRandom]
      document.getElementById('random-pass').innerText = upperLowerUpdate;
    }
  }

  let upperNumber = document.getElementById('uppercase');
  let upperNumberCheck = upperNumber.checked;
  let numberUpper = document.getElementById('number');
  let numberUpperCheck = numberUpper.checked;
  if (upperNumberCheck === true && numberUpperCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let sixthPassLength = document.getElementById('input').value;
    let upperNumberPass = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let upperNumberUpdate = "";
    for (var i = 0; i < sixthPassLength; i++) {
      let upperNumberRandom = Math.floor(Math.random() * upperNumberPass.length)
      upperNumberUpdate += upperNumberPass[upperNumberRandom]
      document.getElementById('random-pass').innerText = upperNumberUpdate;
    }
  }
  
  let upperSymbol = document.getElementById('uppercase');
  let upperSymbolCheck = upperSymbol.checked;
  let symbolUpper = document.getElementById('symbol');
  let symbolUpperCheck = symbolUpper.checked;
  if (upperSymbolCheck === true && symbolUpperCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let eightPassLength = document.getElementById('input').value;
    let upperSymbolPass = "!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let upperSymbolUpdate = "";
    for (var i = 0; i < eightPassLength; i++) {
      let upperSymbolRandom = Math.floor(Math.random() * upperSymbolPass.length)
      upperSymbolUpdate += upperSymbolPass[upperSymbolRandom]
      document.getElementById('random-pass').innerText = upperSymbolUpdate;
    }
  }

  let lowerNumber = document.getElementById('lowercase');
  let lowerNumberCheck = lowerNumber.checked;
  let numberLower = document.getElementById('number');
  let numberLowerCheck = numberLower.checked;
  if (lowerNumberCheck === true && numberLowerCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let elevenPassLength = document.getElementById('input').value;
    let lowerNumberPass = "1234567890abcdefghijklmnopqrstuvwxyz"
    let lowerNumberUpdate = ""
    for (var i = 0; i < elevenPassLength; i++) {
      let lowerNumberRandom = Math.floor(Math.random() * lowerNumberPass.length)
      lowerNumberUpdate += lowerNumberPass[lowerNumberRandom]
      document.getElementById('random-pass').innerText = lowerNumberUpdate;
    }
  }

  let lowerSymbol = document.getElementById('lowercase');
  let lowerSymbolCheck = lowerSymbol.checked;
  let symbolLower = document.getElementById('symbol');
  let symbolLowerCheck = symbolLower.checked;
  if (lowerSymbolCheck === true && symbolLowerCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let elevenPassLength = document.getElementById('input').value;
    let lowerSymbolPass = "!@#$%^&*()abcdefghijklmnopqrstuvwxyz"
    let lowerSymbolUpdate = ""
    for (var i = 0; i < elevenPassLength; i++) {
      let lowerSymbolRandom = Math.floor(Math.random() * lowerSymbolPass.length)
      lowerSymbolUpdate += lowerSymbolPass[lowerSymbolRandom]
      document.getElementById('random-pass').innerText = lowerSymbolUpdate;
    }
  }

  let numberSymbol = document.getElementById('number');
  let numberSymbolCheck = numberSymbol.checked;
  let symbolNumber = document.getElementById('symbol');
  let symbolNumberCheck = symbolNumber.checked;
  if (numberSymbolCheck === true && symbolNumberCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let eightPassLength = document.getElementById('input').value;
    let numberSymbolPass = "!@#$%^&*()1234567890"
    let numberSymbolUpdate = "";
    for (var i = 0; i < eightPassLength; i++) {
      let numberSymbolRandom = Math.floor(Math.random() * numberSymbolPass.length)
      numberSymbolUpdate += numberSymbolPass[numberSymbolRandom]
      document.getElementById('random-pass').innerText = numberSymbolUpdate;
    }
  }
  
  let uppLowNum = document.getElementById('uppercase');
  let uppLowNumCheck = uppLowNum.checked;
  let lowUppNum = document.getElementById('lowercase');
  let lowUppNumCheck = lowUppNum.checked;
  let numUppLow = document.getElementById('number');
  let numUppLowCheck = numUppLow.checked;
  if (uppLowNumCheck === true && lowUppNumCheck === true && numUppLowCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let seventhPassLength = document.getElementById('input').value;
    let uppLowNumPass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678910"
    let uppLowNumUpdate = ""
    for (var i = 0; i < seventhPassLength; i++) {
      let uppLowNumRandom = Math.floor(Math.random() * uppLowNumPass.length)
      uppLowNumUpdate += uppLowNumPass[uppLowNumRandom]
      document.getElementById('random-pass').innerText = uppLowNumUpdate;
    }
  }

  let uppLowsym = document.getElementById('uppercase');
  let uppLowsymCheck = uppLowsym.checked;
  let lowUppsym = document.getElementById('lowercase');
  let lowUppsymCheck = lowUppsym.checked;
  let symUppLow = document.getElementById('symbol');
  let symUppLowCheck = symUppLow.checked;
  if (uppLowsymCheck === true && lowUppsymCheck === true && symUppLowCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let ninthPassLength = document.getElementById('input').value;
    let uppLowsymPass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
    let uppLowsymUpdate = ""
    for (var i = 0; i < ninthPassLength; i++) {
      let uppLowsymRandom = Math.floor(Math.random() * uppLowsymPass.length)
      uppLowsymUpdate += uppLowsymPass[uppLowsymRandom]
      document.getElementById('random-pass').innerText = uppLowsymUpdate;
    }
  }

  let uppNumsym = document.getElementById('uppercase');
  let uppNumsymCheck = uppNumsym.checked;
  let numUppsym = document.getElementById('number');
  let numUppsymCheck = numUppsym.checked;
  let symUppNum = document.getElementById('symbol');
  let symUppNumCheck = symUppNum.checked;
  if (numUppsymCheck === true && symUppNumCheck === true && uppNumsymCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let tenPassLength = document.getElementById('input').value;
    let uppNumsymPass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()1234567890"
    let uppNumsymUpdate = ""
    for (var i = 0; i < tenPassLength; i++) {
      let uppNumsymRandom = Math.floor(Math.random() * uppNumsymPass.length)
      uppNumsymUpdate += uppNumsymPass[uppNumsymRandom]
      document.getElementById('random-pass').innerText = uppNumsymUpdate;
    }
  }

  let lownumsym = document.getElementById('lowercase');
  let lownumsymCheck = lownumsym.checked;
  let numLowsym = document.getElementById('number');
  let numLowsymCheck = numLowsym.checked;
  let symlownum = document.getElementById('symbol');
  let symlownumCheck = symlownum.checked;
  if (lownumsymCheck === true && numLowsymCheck === true && symlownumCheck === true) {
    document.getElementById('random-pass').style.color = "black"
    let tenPassLength = document.getElementById('input').value;
    let lownumsymPass = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
    let lownumsymUpdate = ""
    for (var i = 0; i < tenPassLength; i++) {
      let lownumsymRandom = Math.floor(Math.random() * lownumsymPass.length)
      lownumsymUpdate += lownumsymPass[lownumsymRandom]
      document.getElementById('random-pass').innerText = lownumsymUpdate;
    }
  }

  if(upperCheck === true && lowerCheck === true && numberCheck === true && symbolCheck === true){
    let paraAll = document.getElementById('random-pass');
    paraAll.innerText = "Why not just go with 'All'?"
    paraAll.style.color = "red"
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
  setTimeout(() => {
  createAttribute.setAttribute("title", "Copy")
}, 5000);
}
