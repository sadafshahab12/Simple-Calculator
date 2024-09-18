function sum() {
  let firstNum = +document.getElementById("first-num").value;
  let secNum = +document.getElementById("sec-num").value;
  let answer = document.getElementById("answer");

  if (firstNum != "" && secNum != "") {
    let add = firstNum + secNum;
    answer.innerText = `Addition Answer : ${add}`;
  } else if (firstNum == "" && secNum != "") {
    alert("Enter the first value to perform the operation");
  } else if (firstNum != "" && secNum == "") {
    alert("Enter the second value to perform the operation");
  } else {
    alert("Enter Both value to perform the operation");
  }
}
function sub() {
  let firstNum = +document.getElementById("first-num").value;
  let secNum = +document.getElementById("sec-num").value;
  let answer = document.getElementById("answer");

  if (firstNum != "" && secNum != "") {
    let sub = firstNum - secNum;
    answer.innerText = `Subtraction Answer : ${sub}`;
  } else if (firstNum == "" && secNum != "") {
    alert("Enter the first value to perform the operation");
  } else if (firstNum != "" && secNum == "") {
    alert("Enter the second value to perform the operation");
  } else {
    alert("Enter Both value to perform the operation");
  }
}
function multiply() {
  let firstNum = +document.getElementById("first-num").value;
  let secNum = +document.getElementById("sec-num").value;
  let answer = document.getElementById("answer");

  if (firstNum != "" && secNum != "") {
    let multiply = firstNum * secNum;
    answer.innerText = `Multiplication Answer : ${multiply}`;
  } else if (firstNum == "" && secNum != "") {
    alert("Enter the first value to perform the operation");
  } else if (firstNum != "" && secNum == "") {
    alert("Enter the second value to perform the operation");
  } else {
    alert("Enter Both value to perform the operation");
  }
}
function divide() {
  let firstNum = +document.getElementById("first-num").value;
  let secNum = +document.getElementById("sec-num").value;
  let answer = document.getElementById("answer");

  if (firstNum != "" && secNum != "") {
    let division = firstNum / secNum;
    answer.innerText = `Division Answer : ${division}`;
  } else if (firstNum == "" && secNum != "") {
    alert("Enter the first value to perform the operation");
  } else if (firstNum != "" && secNum == "") {
    alert("Enter the second value to perform the operation");
  } else {
    alert("Enter Both value to perform the operation");
  }
}
function reset() {
  document.getElementById("first-num").value = "";
  document.getElementById("sec-num").value = "";
  document.getElementById("answer").innerText = "";
}
