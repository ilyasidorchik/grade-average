import { useForm } from "react-hook-form";

import { calcGradePointAverage } from "./helpers";

const Calc = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  // const fivePercent = 57.8;
  // const fourPercent = 42.2;

  const fivePercent = watch("fivePercent");
  const fourPercent = watch("fourPercent");

  const gradePointAverage = calcGradePointAverage(fivePercent, fourPercent);

  const inputList = ["fivePercent", "fourPercent"];

  return (
    <div>
      <h1>Посчитать средний балл аттестата по процентам</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {inputList.map((name, i) => (
          <div key={name}>
            <input
              {...register(name)}
              placeholder="50"
              autoComplete="off"
              autoFocus={i === 0}
            />
          </div>
        ))}
        <div>{gradePointAverage}</div>
      </form>
    </div>
  );
};

export default Calc;
