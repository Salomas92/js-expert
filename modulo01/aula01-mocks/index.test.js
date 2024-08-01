const error = require("./src/constants")
const File = require("./src/file")
const assert = require('assert')

//IFEE é uma função que se auto executa
;(async () => {
  {
    const filePath = "./mocks/empytFile-invalid.csv"
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }
})()