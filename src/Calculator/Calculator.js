import { useForm } from "react-hook-form";
import { cn } from "@bem-react/classname";

import { calcGradePointAverage } from "./helpers";
import "./Calculator.scss";

const Calculator = () => {
  const { register, watch } = useForm();
  const cnCalculator = cn("Calculator");

  const fivePercent = watch("fivePercent");
  const fourPercent = watch("fourPercent");
  const gradePointAverage = calcGradePointAverage(fivePercent, fourPercent);

  const inputList = [
    {
      name: "fivePercent",
      label: `% пятёрок`,
    },
    {
      name: "fourPercent",
      label: `% четвёрок`,
    },
  ];

  return (
    <div className={cnCalculator()}>
      <h1>Посчитать средний балл аттестата по процентам</h1>

      <form className={cnCalculator("Form")}>
        {inputList.map(({ label, name }, i) => (
          <div className={cnCalculator("FormRow")} key={name}>
            <label className={cnCalculator("Label")} htmlFor={name}>
              {label}
            </label>
            <input
              className={cnCalculator("Text", ["Input"])}
              id={name}
              {...register(name)}
              type="number"
              placeholder="50"
              autoComplete="off"
              autoFocus={i === 0}
            />
          </div>
        ))}

        <div className={cnCalculator("Result")}>
          <span className={cnCalculator("Text")}>{gradePointAverage}</span>
          <div className={cnCalculator("ResultCaption")}>ваш средний балл</div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
