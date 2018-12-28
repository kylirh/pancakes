const fs = require('fs');
const PancakeStack = require('./PancakeStack');
 
try {
    // The first two passed items in the argv array are "node" and the name of this program.
    // So attempt to use the third item as a path to a tests file.
    const path = process.argv[2]; 
    const file = fs.readFileSync(path, 'utf8');

    // Extract the test strings from the file.
    // We don't care how many there are, so ignore the first line.
    let tests = file.split(/[\r\n]+/);
    tests.shift();

    for (let i = 0; i < tests.length; i++) {
        let pancakeStack = new PancakeStack(tests[i]);
        pancakeStack.makeHappy();
        console.log(`Case #${ i + 1 }: ${ pancakeStack.flips }`);
    }
}
catch (error) {
    console.error(error);
}
