(function() { "use strict";

  const PI = Math.PI;
  const pow = Math.pow;
  const sqrt = Math.sqrt;
  const ln = Math.log;
  const log = Math.log10;
  const rnd = Math.random;
  const cos = Math.cos;
  const sin = Math.sin;
  const tan = Math.tan;
  const acos = Math.acos;
  const asin = Math.asin;
  const atan = Math.atan;

  var controller, resize, ui, update;

  controller = {

    active:false, state:false, value:"",

    click:function(event) {

      controller.active = true;
      controller.value = this.innerHTML;

      update();

    },

    keyPress:function(event) {

      if (!event.repeat) {

        controller.active = true;
        controller.value = String(event.key);

      }

      update();

    }

  };

  ui = {

    calculator:document.getElementById("calculator"),
    screen:document.getElementById("calculator-screen"),

    buttons: {

      "?":document.getElementById("calculator-q"),
      "clr":document.getElementById("calculator-clr"),
      "f1":document.getElementById("calculator-f1"),
      "f2":document.getElementById("calculator-f2"),
      "f3":document.getElementById("calculator-f3"),

      "0":document.getElementById("calculator-0"),
      "1":document.getElementById("calculator-1"),
      "2":document.getElementById("calculator-2"),
      "3":document.getElementById("calculator-3"),
      "4":document.getElementById("calculator-4"),
      "5":document.getElementById("calculator-5"),
      "6":document.getElementById("calculator-6"),
      "7":document.getElementById("calculator-7"),
      "8":document.getElementById("calculator-8"),
      "9":document.getElementById("calculator-9"),

      "+":document.getElementById("calculator-plus"),
      "-":document.getElementById("calculator-minus"),
      "/":document.getElementById("calculator-divide"),
      "*":document.getElementById("calculator-multiply"),
      "(":document.getElementById("calculator-open-parenthesis"),
      ")":document.getElementById("calculator-close-parenthesis"),
      "PI":document.getElementById("calculator-pi"),
      "pow(":document.getElementById("calculator-pow"),
      "sqrt(":document.getElementById("calculator-sqrt"),
      "cos(":document.getElementById("calculator-cos"),
      "sin(":document.getElementById("calculator-sin"),
      "tan(":document.getElementById("calculator-tan"),
      "acos(":document.getElementById("calculator-acos"),
      "asin(":document.getElementById("calculator-asin"),
      "atan(":document.getElementById("calculator-atan"),
      "ln(":document.getElementById("calculator-ln"),
      "log(":document.getElementById("calculator-log"),
         "rnd()":document.getElementById("calculator-rnd"),
      ",":document.getElementById("calculator-cma"),
      ".":document.getElementById("calculator-prd"),
      "del":document.getElementById("calculator-del"),
      "ans":document.getElementById("calculator-ans"),
    },
}
});