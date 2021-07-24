export const getValidPercent = (value = "") => {
  if (!value) return "0";

  const withManySeparators = (value.match(/[.,]/g) || []).length > 1;
  let safeValue = withManySeparators ? value.replace(/[.,]/g, "") : value;

  safeValue = safeValue.replace(/[^.,\d]+/g, "").replace(/,/g, ".");
  const lastChar = safeValue[safeValue.length - 1];
  const isValueUnfinished = lastChar === ".";

  if (isValueUnfinished) {
    safeValue = `${safeValue}0`;
  }

  return value ? safeValue : "0";
};
