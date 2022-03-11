// calc circle area
function circleArea(rad) {
  return Math.PI * rad ** 2;
}

// calc circleCircumference
function circleCircumference(rad) {
  return 2 * Math.PI * rad;
}

module.exports = {
  circleArea,
  circleCircumference,
};
