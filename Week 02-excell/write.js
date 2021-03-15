/**
 * Merhabalar arkadaslar
 EXCEL dosyasindaki datalari okumak ve ekte verilen datalari EXCEL dosyasinin icinde yeni bir sayfa olusturup yazdirma olacaktir. 
 Ödevinizde örnek bir dosyanin okunup içeriğinin ekrana yazdirilmasi ve 
 data.js dosyasindaki datalari EXCEL dosyasina yazdirilmasi gerekmektedir.
 */

 const xlsx = require("xlsx"); //xlsx modülünü import etmek.
 const JsonSheetUsers = require("./read") //read modülünü import etmek
 let dataJs = require("./data"); //data.js yi import etmek
 
 
 let newBook = xlsx.utils.book_new()
 let newSheetUsers = xlsx.utils.json_to_sheet(JsonSheetUsers) //json yapılarını xlsx e çevirme
 let newSheetOktay = xlsx.utils.json_to_sheet(dataJs) //jsan yapılarını xlsx e çevirme
 xlsx.utils.book_append_sheet(newBook, newSheetOktay, "Oktay") //yeni sheet eklemek
 xlsx.utils.book_append_sheet(newBook, newSheetUsers, "Users") //yeni sheet eklemek
 
 xlsx.writeFile(newBook, "./OrnekDosya.xlsx"); //exceli dosyanısını yeniden yazıyor.