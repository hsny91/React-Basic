const xlsx = require("xlsx"); //xlsx modülünü import etmek


let excelData = xlsx.readFile("./OrnekDosya.xlsx"); //excel i okumak.
let sheetUsers = excelData.Sheets["Users"] //excel içindeki sheet i okumak.
let JsonSheetUsers = xlsx.utils.sheet_to_json(sheetUsers) //excel içindeki veriyi json a çevirmek

console.log(JsonSheetUsers)

module.exports = JsonSheetUsers