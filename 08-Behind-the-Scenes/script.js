'use strict';

const calcAge = birthYear => {
  const age = 2021 - birthYear;

  const printAge = () => {
    const output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const string = `Oh, and you're a millenial ${firstName}`;
      console.log(string);
    }
    ///string variable isn't available outside of its block scope
    //console.log(string);
    ///millenial varable is available because var variables are function scoped so are accessible outside of the block it's defined in - not advisable to be used
    console.log(millenial);
  };
  printAge();

  return age;
};

const firstName = 'Leah';
calcAge(1992);
///these variables aren't available in the global scope
//console.log(age);
//printAge();
