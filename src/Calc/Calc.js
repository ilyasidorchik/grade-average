import { calcGradePointAverage } from "./helpers";

const Calc = () => {
  const fivePercent = 57.8;
  const fourPercent = 42.2;

  const gradePointAverage = calcGradePointAverage(fivePercent, fourPercent);

  console.log(gradePointAverage);

  return (
    <div>
      <div>{gradePointAverage}</div>
    </div>
  );
};

export default Calc;
