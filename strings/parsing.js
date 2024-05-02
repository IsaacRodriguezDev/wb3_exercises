"use strict";
function parseAndDisplayName(name) {
  let indexOfSpace = name.indexOf(" ");
  console.log(`The index of the space is: ${indexOfSpace}`);
  let firstName = name.substring(0, indexOfSpace);
  let lastName = name.substring(indexOfSpace);
  console.log(`
    Name: ${name}
    First name: ${firstName}
    Last name: ${lastName}
    `);
}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
