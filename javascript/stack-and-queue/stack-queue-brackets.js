const stack = require("./stack");

function areBracketsBalanced(expr) {
  let nstack = new stack();

  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "(" || x == "[" || x == "{") {
      nstack.push(x);
      continue;
    }

    if (nstack.isEmpty()) return false;

    let check;
    switch (x) {
      case ")":
        check = nstack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = nstack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = nstack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  return nstack.isEmpty();
}

let expr = "";

console.log(areBracketsBalanced(expr));
