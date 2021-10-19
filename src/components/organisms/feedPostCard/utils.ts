export const abbreviateNumber = (value: number) => {
    let suffixes = ["", "k", "m", "b", "t"];
    let suffixNum = Math.floor(("" + value).length / 3);
    let shortValueToString: string;
    let shortValue = parseFloat(
      (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
    );
  
    if (shortValue % 1 !== 0) {
      shortValueToString = shortValue.toFixed(1);
    } else {
      shortValueToString = `${shortValue}`;
    }
    return shortValueToString + suffixes[suffixNum];
}