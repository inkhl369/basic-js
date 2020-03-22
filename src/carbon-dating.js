const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  var number, activ = parseFloat(sampleActivity);
  
  if (typeof (activ > 0 && activ < 15 && sampleActivity) === "string" ) {
  number = Math.ceil(Math.log(MODERN_ACTIVITY / activ) / (0.693 / HALF_LIFE_PERIOD));
    return number;
  }
  return false;
};