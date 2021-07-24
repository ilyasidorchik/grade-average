const Calc = () => {
  const fivePercent = 57.8 / 100;
  const fourPercent = 42.2 / 100;

  const del = fivePercent / fourPercent;

  const result = del;

  // const y = (fourPercent) * (x1 + y1)

//   var sol = nerdamer.solveEquations(["x=0.578*(x+y)", "y=0.422*(x+y)"]);

  return (
    <div>
      <div>{result}</div>
    </div>
  );
};

export default Calc;
