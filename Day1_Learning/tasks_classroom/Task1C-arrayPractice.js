//Task - Class 1C

let browser=["chrome","safari","Firefox"]
console.log("Browser length = "+browser.length)

console.log(`My preferred browser is ${browser[0]}`)
console.log(`My preferred browser is ${browser[1]}`)
console.log(`My preferred browser is ${browser[2]}`)

browser[2]="Opera"

//console.log(`My preferred browser is ${browser[-1]}`)
console.log(browser.lastIndexOf("Opera"))
console.log("Before pushing - Browser length = "+browser.length)
browser.push("Firefox")
console.log("After pushing - Browser length = "+browser.length)