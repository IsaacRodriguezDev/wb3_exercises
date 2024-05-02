"use strict";
function parseAndDisplayName(name) {
  let indexOfSpace = name.indexOf(" ");
  let lastIndexOfSpace = name.lastIndexOf(" ");

  if (indexOfSpace === -1) {
    console.log(`The index of the space is: ${indexOfSpace}`);
    let firstName = name.substring(0);
    console.log(`
    Name: ${name}
    Only name: ${firstName}
    `);
  } else if (name.substring(indexOfSpace, lastIndexOfSpace)) {
    console.log(`The index of the space is: ${indexOfSpace}`);
    let firstName = name.substring(0, indexOfSpace);
    let middleName = name.substring(indexOfSpace, lastIndexOfSpace);
    let lastName = name.substring(lastIndexOfSpace);
    console.log(`
          Name: ${name}
          First name: ${firstName}
          Middle name: ${middleName}
          Last name: ${lastName}
          `);
  } else {
    console.log(`The index of the space is: ${indexOfSpace}`);
    let firstName = name.substring(0, indexOfSpace);
    let lastName = name.substring(indexOfSpace);
    console.log(`
      Name: ${name}
      First name: ${firstName}
      Last name: ${lastName}
      `);
  }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
