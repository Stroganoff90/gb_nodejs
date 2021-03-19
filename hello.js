import strt from 'simple-spinner';
import chalk from 'chalk'

const { start, stop } = strt;

async function loading() {
  start()

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(chalk.blue('Hello world!')), 3000)
  })

  let result = await promise
  stop()
  console.log(result)
}

loading()