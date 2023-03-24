function ParenthesisChecker(expr) {
  const stack = [];
  for (let i = 0; i < expr.length; i++) {
    const parenthesis = expr[i];
    if (parenthesis === "(" || parenthesis === "{" || parenthesis === "[") {
      stack.push(parenthesis);
    } else if (
      parenthesis === ")" ||
      parenthesis === "}" ||
      parenthesis === "]"
    ) {
      if (!stack.length) {
        return false;
      }
      const top = stack.pop();
      if (
        (parenthesis === ")" && top !== "(") ||
        (parenthesis === "}" && top !== "{") ||
        (parenthesis === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log("[()]{[()()]} -> ", ParenthesisChecker("[()]{[()()]}"));
console.log("[(]) -> ", ParenthesisChecker("[(])"));
