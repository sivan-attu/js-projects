"use strict";

var tbody = document.getElementById("tbody");

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var randomColor = document.getElementById("randomColor");
  randomColor.style.backgroundColor = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
  $("button#addBtn").removeClass("disabled");
} // Top To Bottom


function onAddTopToBottom() {
  displayValue("prepend");
  $("button#addBtn").addClass("disabled");
  $("button#removeBtn").removeClass("disabled");
}

function onRemoveTopToBottom() {
  tbody.removeChild(tbody.firstElementChild);
} // Bottom To Top


function onAddBottomToTop() {
  displayValue("append");
  $("button#addBtn").addClass("disabled");
  $("button#removeBtn").removeClass("disabled");
}

function onRemoveBottomToTop() {
  tbody.removeChild(tbody.lastElementChild);
}

function displayValue(position) {
  var tr = document.createElement("tr");
  var rgb = document.getElementById("randomColor").style.backgroundColor;
  rgb = rgb.match(/\d+/g);
  rgb.map(function (val) {
    var td = document.createElement("td");
    td.innerHTML = val;
    tr.appendChild(td);
  });

  if (position === "prepend") {
    tbody.prepend(tr);
  } else {
    tbody.append(tr);
  }
} // Table Sort


$("th").click(function () {
  var table = $(this).parents("table").eq(0);
  var rows = table.find("tr:gt(0)").toArray().sort(comparer($(this).index()));
  this.asc = !this.asc;

  if (!this.asc) {
    rows = rows.reverse();
  }

  for (var i = 0; i < rows.length; i++) {
    table.append(rows[i]);
  }
});

function comparer(index) {
  return function (a, b) {
    var valA = getCellValue(a, index),
        valB = getCellValue(b, index);
    return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
  };
}

function getCellValue(row, index) {
  return $(row).children("td").eq(index).text();
}