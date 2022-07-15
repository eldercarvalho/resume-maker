const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')
const _ = require('lodash')
const ObjectsToCsv = require('objects-to-csv')

const langFolder = path.resolve(__dirname, '../src/support/lang')

const ptBRJson = require(`${langFolder}/pt-BR.json`)
const enJson = require(`${langFolder}/en.json`)

const args = process.argv.slice(2)

if (args[0] === 'extract') {
  const enKeys = Object.keys(enJson)
  let diffKeys = _.omit(ptBRJson, enKeys)
  diffKeys = Object.entries(diffKeys).map(a => ({ key: a[0], ptBR: a[1], en: '' }))

  const csv = new ObjectsToCsv(diffKeys)
  csv.toDisk('./translations-en.csv')
}

const missingTranslations = {}

if (args[0] === 'import') {
  if (args[1] === undefined) {
    console.log('Error: file url must be provided. Exemple: node cli/translation.js import ./translations-en.csv')
    return
  }

  fs.createReadStream(args[1])
    .pipe(csv())
    .on('data', function (row) {
      missingTranslations[row.key] = row.en
    })
    .on('end', function () {
      enTranslations = Object.assign(enJson, missingTranslations)
      const json = JSON.stringify(enTranslations, null, 2)
      fs.writeFile(`${langFolder}/en.json`, json, 'utf8', function (err) {
        if (err) {
          console.log(err)
          return
        }
        console.log('The translations were imported successfully!')
      })
    })
}