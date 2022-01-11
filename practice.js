//Convert women's shoe size to men's

const shoeSizeConversion = size => {
  let mens = size - 2;
  console.log(`Your women's size ${size} shoe is a men's size ${mens} shoe`);
} 

shoeSizeConversion(8)

//Convert kg to lb

const kgConversion = weight => {
  let lbs = Math.trunc(weight * 2.20);
  console.log(`${weight}kg converts to ${lbs}lbs`);
} 

kgConversion(100)
kgConversion(30.5)
kgConversion(67)
kgConversion(75)



