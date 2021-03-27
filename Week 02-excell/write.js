

 const xlsx = require("xlsx"); //xlsx modülünü import etmek.
 const JsonSheetUsers = require("./read") //read modülünü import etmek
 let dataJs = require("./data"); //data.js yi import etmek
 
 
 let newBook = xlsx.utils.book_new()
 let newSheetUsers = xlsx.utils.json_to_sheet(JsonSheetUsers) //json yapılarını xlsx e çevirme
 let newSheetOktay = xlsx.utils.json_to_sheet(dataJs) //jsan yapılarını xlsx e çevirme
 xlsx.utils.book_append_sheet(newBook, newSheetOktay, "husniye") //yeni sheet eklemek
 xlsx.utils.book_append_sheet(newBook, newSheetUsers, "Users") //yeni sheet eklemek
 
 xlsx.writeFile(newBook, "./OrnekDosya.xlsx"); //exceli dosyanısını yeniden yazıyor.