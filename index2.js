function firstNameLog() {
  let firstNameId = "first-name";
  let firstNameEl = document.getElementById(firstNameId);
  console.log(firstNameEl.value);
}

function lastNameLog() {
  let lastNameId = "last-name";
  let lastNameEl = document.getElementById(lastNameId);
  console.log(lastNameEl.value);

  //   let yo = "I am local";
}
// let yo = "I am global";

// -------->

function firstNameLog() {
  let id = "first-name";
  let el = document.getElementById(id);
  console.log(el.value);
}

function lastNameLog() {
  let id = "last-name";
  let el = document.getElementById(id);
  console.log(el.value);
}

// -------->

function firstNameLog(id) {
  let el = document.getElementById(id);
  console.log(el.value);
}

function lastNameLog(id) {
  let el = document.getElementById(id);
  console.log(el.value);
}

// -------->

function logValue(id) {
  let el = document.getElementById(id);
  console.log(el.value);
}

var firstNameId = "first-name";
var lastNameId = "last-name";

function getValue(id) {
  let el = document.getElementById(id);
  return el.value;
}

var value = getValue(lastNameId);

window.alert(value);
