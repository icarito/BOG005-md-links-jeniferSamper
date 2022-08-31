

// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const myPath = require('path');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { saveLinks } = require('./saveLinks.js');


const mdLinks = (path) => {
  let array = []
  let arrayPrint = []
  let pathAbsolute;
  if (myPath.isAbsolute(path)) {
    pathAbsolute = path
  } else {
    pathAbsolute = myPath.resolve(path) //convierto la ruta en absoluta
  }
  // console.log("absolutaa", pathAbsolute);
  if (!fs.existsSync(pathAbsolute)) {
    console.log("la ruta no existe");
  } else {
    saveLinks(pathAbsolute)

      .then(res => {
        Promise.all(res).then(x => {
          arrayPrint = x;
          console.log("print",arrayPrint);

        })
      })
      // console.log("longitud", array.length);
      // console.log(" respuesta positiva" ,array);
      .catch(error => {
        console.error(error)
      })

  }
}



module.exports = mdLinks