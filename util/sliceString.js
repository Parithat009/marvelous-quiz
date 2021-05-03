
export const sliceString = (textStr, length) => {
  if (!textStr) return
  return textStr.length > 50 && `${textStr.slice(0, length)} ...`
}
