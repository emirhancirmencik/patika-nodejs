const argvs = process.argv.slice(2);

function circleArea(rad) {
  return Math.PI * rad ** 2;
}

console.log(
  `Yarıçapı ${argvs[0]} olan çemberin alanı: ${circleArea(argvs[0] * 1)}`
);
