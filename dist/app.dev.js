"use strict";

var todoLists = [];

function onSubmit() {
  var inputVal = document.getElementById("myInput");

  if (inputVal.value != "") {
    if (!findInputValue(inputVal.value)) {
      todoLists.push(inputVal.value);
      inputVal.value = "";
      renderValue();
    } else {
      alert("Your Name is Already Registered");
    }
  } else {
    alert("Please Enter Value");
  }
}

function renderValue() {
  var tbody = document.getElementById("tbody");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  todoLists.map(function (val) {
    td.innerHTML = val;
    tr.id = val;
    td.setAttribute("onclick", "deleteVal(".concat(val, ")"));
  });
  tr.appendChild(td);
  tbody.appendChild(tr);
}

function deleteVal(val) {
  if (confirm("Are You Sure Conform Delete Todo")) {
    var getIndex = todoLists.indexOf(val.id);
    todoLists.splice(getIndex, 1);
    document.getElementById(val.id).remove();
  }
}

function findInputValue(value) {
  if (todoLists.find(function (val) {
    return val === value;
  })) {
    return true;
  } else {
    return false;
  }
}