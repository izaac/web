var program = require('commander');

function sayName(){
  console.log("  - 	NAME!!! haha");
}

program
  .version('0.0.1')
  .description('An application for pizzas ordering')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .option('-t, --tell', 'Tell Something')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbq) console.log('  - bbq');
if (program.tell) sayName();

var cheese = true === program.cheese ? 'marble'  : program.cheese || 'no';

console.log('  - %s cheese', cheese);
// console.log(program);
