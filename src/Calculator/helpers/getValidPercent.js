export const getValidPercent = (value = "") => {
  const isValueValid = value
  if (!isValueValid) return 0;

  let safeValue = value.replace(/,/g, ".");;
  const lastChar = safeValue[safeValue.length - 1];
  const isValueUnfinished = lastChar === ".";

  if (isValueUnfinished) {
    safeValue = `${safeValue}0`;
  }

  return value ? safeValue : 0;
};
