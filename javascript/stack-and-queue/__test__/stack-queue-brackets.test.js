const CheckBrackets = require('../stack-queue-brackets')

describe("CheckBrackets", () => {
    test("check for correct balanced", () => {
        let expr = "{}{Code}[Fellows](())";
        let expr2 = "(){}[[]]";
      expect(CheckBrackets(expr)).toBe(true);
      expect(CheckBrackets(expr2)).toBe(true);
    });
  
    test("check for correct not balanced", () => {
        let expr = "{}([";
      
      expect(CheckBrackets(expr)).toBe(false);
    });
  
   
  });
  