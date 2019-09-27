#!/usr/bin/env node
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const copy = require('recursive-copy')
// const initObject = require(path.join(__dirname, 'templates', 'package-base.js'))

const questions = [
  {
    name: 'name',
    message: 'Nom de ton projet ?'
  }
]

console.log(`
   _____       __               ______                           __
  / ___/____  / /___ ___  __   / ____/__  ____  ___  _________ _/ /_____  _____
  \\__ \\/ __ \\/ / __ \`/ / / /  / / __/ _ \\/ __ \\/ _ \\/ ___/ __ \`/ __/ __ \\/ ___/
 ___/ / /_/ / / /_/ / /_/ /  / /_/ /  __/ / / /  __/ /  / /_/ / /_/ /_/ / /
/____/ .___/_/\\__,_/\\__, /   \\____/\\___/_/ /_/\\___/_/   \\__,_/\\__/\\____/_/
    /_/            /____/
`)

inquirer.prompt(questions).then(answers => {
  // create folder
  var currentFolder = process.cwd()
  fs.mkdir(path.join(currentFolder, answers.name), err => {
    if (err) throw err
    // initObject.name = answers.name
    // initObject.description = answers.description
    // initObject.author = answers.author
    // create package.json
    // fs.writeFile(path.join(currentFolder, answers.name, 'package.json'), JSON.stringify(initObject, null, 4), err => {
    //   if (err) throw err
      // copy default tree
    copy(path.join(__dirname, './templates/default/'), path.join(currentFolder, answers.name), {dot: true})
      .then(results => console.info('Et voilà, c\'est prêt :-)'))
      .catch(e => console.error('Une erreur est survenue : ' + error))
    // })
  })
})
