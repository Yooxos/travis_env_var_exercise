import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
require('dotenv').config() ;
// Définir une variable locale alimentée par la variable d'environnement $NAME
const FV = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FV} rocks!`);
    await sleep(5000);
  }
}

main();