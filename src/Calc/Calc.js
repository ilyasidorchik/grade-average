import algebra, { Equation, Fraction } from "algebra.js";

const Calc = () => {
  const fivePercent = 57.8;
  const fourPercent = 42.2;

  var expr1 = algebra.parse(`${fivePercent}/100*(x+y)-x`);
  var expr2 = algebra.parse(`${fourPercent}/100*(x+y)-y`);
  var quation = new Equation(expr1, expr2);
  var x = quation.solveFor("x");

  const AVERAGE_EQUATION_PART_UP = "5x+4y";
  const AVERAGE_EQUATION_PART_DOWN = "x+y";

  const averageEquationPartUp = algebra.parse(AVERAGE_EQUATION_PART_UP);
  const res1 = averageEquationPartUp.eval({ x });

  const averageEquationPartDown = algebra.parse(AVERAGE_EQUATION_PART_DOWN);
  const res2 = averageEquationPartDown.eval({ x });

  const res1res = Number(res1.eval({ y: 1 }).multiply(211));
  const res2res = Number(res2.eval({ y: 1 }).multiply(211));
  const result = Number(new Fraction(res1res, res2res));

  //   console.log(res1res.toString());
  //   console.log(res2res.toString());
  console.log("————");
  console.log(result.toString());
  //   console.log(downPart.toString());

  return (
    <div>
      <div>{result}</div>
    </div>
  );
};

export default Calc;
