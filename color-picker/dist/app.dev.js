"use strict";

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}

function randomRow() {
  var para1 = randomColor();
  var para2 = randomColor();
  var para3 = randomColor();
  return {
    para1: para1,
    para2: para2,
    para3: para3
  };
}

function displayValue() {
  var parent = document.getElementById("colorPicker");
  var colorLists = [];

  for (i = 0; i < 10; i++) {
    colorLists.push(randomRow());
  }

  colorLists.map(function (color) {
    var val = Object.values(color);
    var randomAns = Math.floor(Math.random() * 3);
    var div = document.createElement("div");
    var ans = document.createElement("h5");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var para3 = document.createElement("p");
    ans.innerHTML = val[randomAns];
    para1.style.backgroundColor = color.para1;
    para1.id = color.para1;
    para2.style.backgroundColor = color.para2;
    para2.id = color.para2;
    para3.style.backgroundColor = color.para3;
    para3.id = color.para3;
    div.appendChild(ans);
    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    parent.appendChild(div);
  });
}

displayValue();
var count = 0;
$("p").click(function () {
  var _this = this;

  var checkAns = $(this).attr("id") === $(this).parent().find("h5").html();

  if (checkAns) {
    $(this).parent().fadeOut("slow", function () {
      return $(_this).parent().remove();
    });
    $("#valueCorrection").html("This is a correct answer").css("color", "green");
    count += 1;
  } else {
    $(this).parent().fadeOut("slow");
    $("#valueCorrection").html("This is a wrong answer").css("color", "red");
  }
});
setInterval(function () {
  $("#retry").removeClass("d-none");
}, 10000);
$("#retry").click(function () {
  setInterval(function () {
    $("#submitBtn").removeClass("d-none");
  }, 5000);
  $("#colorPicker").find("div").fadeIn("slow");
  $("#valueCorrection").html("");
  $("#retry").remove();
  $("p").click(function () {
    var _this2 = this;

    $(this).parent().fadeOut("slow", function () {
      return $(_this2).parent().remove();
    });
  });
});

function checkValue() {
  $("#submitBtn").addClass("disabled");
  $("#valueCorrection").html("you have a point ".concat(count * 10, "%")).css("color", "green");
  $("#percentage").append(count * 10, "%");

  if (count === 10) {
    $("span.display-3").html("Congrats..! you're win the game");
  }
}