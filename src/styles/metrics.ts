export const pxToRem = (px: any, onlyNumber = false) =>
  onlyNumber ? Number(px || 0) / 16 : `${Number(px || 0) / 16}rem`