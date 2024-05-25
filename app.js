function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function randomRow() {
  const para1 = randomColor();
  const para2 = randomColor();
  const para3 = randomColor();

  return { para1, para2, para3 };
}

function displayValue() {
  let parent = document.getElementById("colorPicker");
  let colorLists = [];

  for (i = 0; i < 10; i++) {
    colorLists.push(randomRow());
  }
  colorLists.map((color) => {
    var val = Object.values(color);
    var randomAns = Math.floor(Math.random() * 3);
    let div = document.createElement("div");
    let ans = document.createElement("h5");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let para3 = document.createElement("p");

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

let count = 0;

$("p").click(function () {
  let checkAns = $(this).attr("id") === $(this).parent().find("h5").html();
  if (checkAns) {
    $(this)
      .parent()
      .fadeOut("slow", () => $(this).parent().remove());

    $("#valueCorrection")
      .html("This is a correct answer")
      .css("color", "green");

    count += 1;
  } else {
    $(this).parent().fadeOut("slow");
    $("#valueCorrection").html("This is a wrong answer").css("color", "red");
  }
});

setInterval(() => {
  $("#retry").removeClass("d-none");
}, 10000);

$("#retry").click(() => {
  setInterval(() => {
    $("#submitBtn").removeClass("d-none");
  }, 5000);

  $("#colorPicker").find("div").fadeIn("slow");
  $("#valueCorrection").html("");
  $("#retry").remove();
  $("p").click(function () {
    $(this)
      .parent()
      .fadeOut("slow", () => $(this).parent().remove());
  });
});

function checkValue() {
  $("#submitBtn").addClass("disabled");
  $("#valueCorrection")
    .html(`you have a point ${count * 10}%`)
    .css("color", "green");
  $("#percentage").append(count * 10, "%");
  if (count === 10) {
    $("span.display-3").html("Congrats..! you're win the game");
  }
}
