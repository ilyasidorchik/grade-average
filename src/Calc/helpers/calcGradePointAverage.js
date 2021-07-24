import algebra, { Equation } from "algebra.js";

import { getValidPercent } from ".";

const AVERAGE_EQUATION_PART_UP = "5x+4y";
const AVERAGE_EQUATION_PART_DOWN = "x+y";

export const calcGradePointAverage = (a, b) => {
  const fivePercent = getValidPercent(a);
  const fourPercent = getValidPercent(b);

  const expr1 = algebra.parse(`${fivePercent}/100*(x+y)-x`);
  const expr2 = algebra.parse(`${fourPercent}/100*(x+y)-y`);
  const quation = new Equation(expr1, expr2);
  const x = quation.solveFor("x");

  const averageEquationPartUp = algebra.parse(AVERAGE_EQUATION_PART_UP);
  const partUp = averageEquationPartUp.eval({ x });
  const averageEquationPartDown = algebra.parse(AVERAGE_EQUATION_PART_DOWN);
  const partDown = averageEquationPartDown.eval({ x });

  // eslint-disable-next-line no-eval
  const partUpAnswer = eval(partUp.eval({ y: 1 }).toString());
  // eslint-disable-next-line no-eval
  const partDownAnswer = eval(partDown.eval({ y: 1 }).toString());
  const result = (partUpAnswer / partDownAnswer).toFixed(2);

  return result;
};
