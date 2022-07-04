const stack = require("./stack");

function CheckBrackets(expr) {
  let nstack = new stack();

  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "(" || x == "[" || x == "{") {
      nstack.push(x);
    }

    if (nstack.isEmpty()) return false;

    let check;

    if (x == ")") {
      check = nstack.pop();
      if (check == "{" || check == "[") return false;
    } else if (x == "}") {
      check = nstack.pop();
      if (check == "(" || check == "[") return false;
    } else if (x == "]") {
      check = nstack.pop();
      if (check == "(" || check == "{") return false;
    }
  }

  return nstack.isEmpty();
}

//let expr = "{}{Code}[Fellows](())";

//console.log(CheckBrackets(expr));

module.exports=CheckBrackets
