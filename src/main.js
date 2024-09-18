

function myAdd(){

}

function myPow() {

  let first = document.getElementById("first").value;
  first = Number(first);

  let second = document.getElementById("second").value;
  second = Number(second);

  let result = 1;

  for (let i = 0; i < second; i++){
    result = first * result;
  }

  document.getElementById("output").innerHTML=`<h3>${result}</h3>`;

}