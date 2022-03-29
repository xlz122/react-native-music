/**
 * 大数字转换，将大额数字转换为万、千万、亿等
 * @param value 数字值
 */
 export function bigNumberTransform(value) {
  const newValue = Number(value);
  if (isNaN(newValue)) {
    return value;
  }
  // 小于1万
  if (newValue < 10000) {
    return value.toString();
  }
  // 小于1亿
  if (newValue < 100000000) {
    return (newValue / 10000).toFixed(1) + '万';
  }
  // 小于10亿
  if (newValue < 1000000000) {
    return (newValue / 10000).toFixed(0) + '万';
  }
  // 大于10亿
  if (newValue > 1000000000) {
    return (newValue / 10000).toFixed(0) + '万';
  }
  return newValue;
}
