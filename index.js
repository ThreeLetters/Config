"use strict"
const parser = require('./parser.js')
const stringify = require ('./stringify.js')

module.exports = class ConfigLoader {
constructor(configs,defaulta) {
this.configs = configs
this.default = defaulta;
}
parse(string) {
  return parser(string,this.configs)
  
}
stringify(config) {
  
  return stringify(config,this.configs)
}
stringifyNonoverride(masterText,add,cdefault) {
  if (cdefault && this.default) var defaulta = this.default; else var defaulta = false;
 var list = masterText.split("\n")
 list.forEach((item,ind)=>{

   if (item.charAt(0) == "#") return;
   var Sitem = item.split(" ") 
   var ad = add[ind]

     if (ad && ind == Sitem[0]) {
       if (defaulta && defaulta[ind] == ad) return
       
var results = "";
      var type = this.configs[ind]
results += ind;
if (type == "Ostring" || type == "Oint") {
  
  ad.forEach((c)=>{
      results += " " + c
    
  })
  
  
} else if (type == "string" || type == "Jstring" || type == "int") {
  
  results += " " + ad;
}
list[ind] = results
     } 
     
   
   
 })
  return list.slice(0,list.length).join("\n")
}




}



