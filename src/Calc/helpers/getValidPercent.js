export const getValidPercent = (value = "") => {
  const lastChar = value[value.length - 1];
  const isValueFinished = lastChar !== "." && lastChar !== ",";

  const safeValue = isValueFinished ? value : `${value}0`;

  return value ? safeValue : 0;
};
