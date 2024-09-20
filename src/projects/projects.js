
//most of these functions follow the same logic and just use integer operations to
//make a simple JS calculator web app



  function displayResult(result) {
    let output = document.getElementById("output");

    if (result < 0) {
      output.innerHTML = `<h3 style="color:red;">${result}</h3>`;
    } else {
      output.innerHTML = `<h3>${result}</h3>`;
    }
  }

  function myAdd(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let result = first + second;
    displayResult(result);
  }

  function mySub(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let result = first - second;
    displayResult(result);  }

  function myMultiply(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let result = first * second;
    displayResult(result);  }

  function myDivide(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let result = first / second;
    displayResult(result);  }

  function myPow() {
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let result = 1;

    for (let i = 0; i < second; i++){
      result = first * result;
    }
    displayResult(result);
  }

  //make a clear function by just setting an empty string to the output on click
  function myClear() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").innerHTML=`<h3>${" "}</h3>`;


  }