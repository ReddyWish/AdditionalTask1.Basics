let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
let cuttedStr = javaScriptDescription.slice(0, Math.floor(javaScriptDescription.length / 2))
cuttedStr = cuttedStr.replaceAll('а', 'А')
cuttedStr = cuttedStr.replaceAll('a', 'A')
cuttedStr = cuttedStr.replaceAll(' ', '').repeat(3)

console.log(cuttedStr[cuttedStr.length - 1])
console.log(cuttedStr)