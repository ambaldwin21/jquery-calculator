$(document).ready(function() {

  var screen = document.querySelector("#screen");
  var container = document.querySelector("#buttons-container");


  //numbers and operators append to screen
  $(".digit").click(function() {
    $(screen).append($(this).text());
    // console.log("a click happened from a number");
  });

  $(".operator").click(function () {
    $(screen).append($(this).text());
  });

  $(clear).click(function() {
    location.reload();
  });


  //arithmetic

  $(equals).click(function() {
    var equation = $(screen).text();

    var operatorMultiply = equation.indexOf('x');
    var operatorSubtract = equation.indexOf('-');
    var operatorDivide = equation.indexOf('÷');
    var operatorAdd = equation.indexOf("+");

    var numberOne = "";
    var numberTwo = "";
    var total = 0;

    if (operatorMultiply !== -1) {
      numberOne = parseInt(equation.substring(0, operatorMultiply));
      numberTwo = parseInt(equation.substring(operatorMultiply+1));
      total = numberOne * numberTwo;
    }

    if (operatorSubtract !== -1) {
      numberOne = parseInt(equation.substring(0, operatorSubtract));
      numberTwo = parseInt(equation.substring(operatorSubtract+1));
      total = numberOne - numberTwo;
    }

    if (operatorDivide !== -1) {
      numberOne = parseInt(equation.substring(0, operatorDivide));
      numberTwo = parseInt(equation.substring(operatorDivide+1));
      total = numberOne / numberTwo;
    }

    if (operatorAdd !== -1) {
      numberOne = parseInt(equation.substring(0, operatorAdd));
      numberTwo = parseInt(equation.substring(operatorAdd+1));
      total = numberOne + numberTwo;
    }

    if (isNaN(total) || total === Infinity) {
      $(screen).text("ERROR!");
    } else {
      $(screen).text(total);
    }


  });


});
