var run = function() {
  var one = document.getElementById("one").value;
  var two = document.getElementById("two").value;
  var three = document.getElementById("three").value;
  var four = document.getElementById("four").value;
  var solution = document.getElementById("solution");
  var multiplier;
  if (one.length === 0 || two.length === 0 || three.length === 0 || four.length === 0) {
    solution.innerHTML = "Fill out every box"
  } else {
  if (one === "x") {
    var multiplier = four;
  }
  if (two === "x") {
    var multiplier = three;
  }
  if (three === "x") {
    var multiplier = two;
  }
  if (four === "x") {
    var multiplier = one;
  }
  var means = +three * +two;
  var extremes = +one * +four;
  var meansanswer = (+means / +multiplier).toFixed(2);
  var extremesanswer = (+extremes / +multiplier).toFixed(2);
  var answer;
  if (one === "x") {
    var answer = meansanswer;
  }
  if (two === "x") {
    var answer = extremesanswer;
  }
  if (three === "x") {
    var answer = extremesanswer;
  }
  if (four === "x") {
    var answer = meansanswer;
  }
    if (answer != undefined) {
  solution.innerHTML = "x = " + answer;
    } else {
      solution.innerHTML = "Invalid entry. Be sure to include the variable 'x' and avoid using letters";
    }
}
}
