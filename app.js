let todoLists = [];

function onSubmit() {
  let inputVal = document.getElementById("myInput");
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
  let tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  todoLists.map((val) => {
    td.innerHTML = val;
    tr.id = val;
    td.setAttribute("onclick", `deleteVal(${val})`);
  });

  tr.appendChild(td);
  tbody.appendChild(tr);
}

function deleteVal(val) {
  if (confirm("Are You Sure Conform Delete Todo")) {
    const getIndex = todoLists.indexOf(val.id);
    todoLists.splice(getIndex, 1);
    document.getElementById(val.id).remove();
  }
}

function findInputValue(value) {
  if (todoLists.find((val) => val === value)) {
    return true;
  } else {
    return false;
  }
}
