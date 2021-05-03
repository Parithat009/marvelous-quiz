
export const sliceString = (textStr, length) => {
  if (!textStr) return
  return `${textStr.slice(0, length)} ...`
}
