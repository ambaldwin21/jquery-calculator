$(document).ready(function() {

  var screen = document.querySelector("#screen");
  var container = document.querySelector("#buttons-container");
  var buttons = document.querySelector(".buttons");

//all the variables
  var clear = $("#clear");
  var seven = $("span.seven");
  var eight = $(".eight");
  var nine = $(".nine");
  var four = $(".four");
  var five = $(".five");
  var six = $(".six");
  var one = $(".one");
  var two = $(".two");
  var three = $(".three");
  var zero = $("#zero");

  var divide = $("div span:nth-child(2)");
  var multiply = $("div span:nth-child(3)");
  var subtract = $("div span:nth-child(7)");
  var add = $("div span:nth-child(11)");
  var equals = $("#equals");

  //numbers and operators append to screen
  $(divide).click(function() {
    $(screen).append($(this).text());
  });

  $(multiply).click(function() {
    $(screen).append($(this).text());
  });

  $(subtract).click(function() {
    $(screen).append($(this).text());
  });

  $(add).click(function() {
    $(screen).append($(this).text());
  });

  $(clear).click(function() {
    location.reload();
  });

  $(seven).click(function() {
    $(screen).append($(this).text());
  });

  $(eight).click(function() {
    $(screen).append($(this).text());
  });

  $(nine).click(function() {
    $(screen).append($(this).text());
  });

  $(four).click(function() {
    $(screen).append($(this).text());
  });

  $(five).click(function() {
    $(screen).append($(this).text());
  });

  $(six).click(function() {
    $(screen).append($(this).text());
  });

  $(one).click(function() {
    $(screen).append($(this).text());
  });

  $(two).click(function() {
    $(screen).append($(this).text());
  });

  $(three).click(function() {
    $(screen).append($(this).text());
  });

  $(zero).click(function() {
    $(screen).append($(this).text());
  });

  //arithmetic
  var equation;

  $(equals).click(function() {
    equation = $(screen).text();

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
