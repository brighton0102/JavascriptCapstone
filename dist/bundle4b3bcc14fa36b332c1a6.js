/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700&family=Montserrat:wght@100;200;300;400;500;600&family=Permanent+Marker&family=Poppins:wght@100;200;300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=Titan+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  background-color: rgba(1, 0, 74, 0.8);
}

header {
  background-color: rgba(1, 21, 74, 0.8);
  padding: 3rem;
}

.logo-style {
  color: rgba(76, 6, 150, 0.88);
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav h3 {
  font-size: 50px;
  font-family: "Permanent Marker", cursive;
}

ul {
  display: flex;
  gap: 70px;
}

ul li {
  list-style-type: none;
}

ul li a {
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  font-family: "Gothic A1", sans-serif;
}

h2 {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
}

.movie-list {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1rem;
  padding: 1rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  gap: 1rem;
}

.buttons button {
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #393434;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #f5c518;
}

.buttons button:active {
  background-color: #0a0a0a;
}

.reservation-button,
.comment-button {
  font-family: "Courier New", Courier, monospace;
  font-weight: 400;
  color: #5799ef;
  font-size: 1rem;
}

footer {
  display: block;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 8px;
  height: 30px;
  color: #fff;
  border-color: black;
  background-color: rgba(1, 21, 74, 0.8);
  border: 1cm;
}

.overlay {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  color: black;
  justify-content: center; /* Center horizontally */
  align-items: center;
  flex-direction: column; /* Arrange items vertically */
  align-items: center;
}

/* Styles for the popup */
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1001;
  color: black;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column; /* Arrange items vertically */
  align-items: center;
}

.popup h2 {
  color: black;
}

/* Style for the reservation form */
.reservation-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

/* Style for input fields in the form */
.reservation-form input[type=text],
.reservation-form input[type=date] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc; /* Add a light gray border */
  border-radius: 4px;
  font-size: 16px;
}

/* Style for the "Reserve" button */
.reservation-form button {
  background-color: #e53935; /* Red color for the button */
  color: #fff; /* Text color */
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

/* Style for the reservations container */
.reservations-container {
  border: 1px solid #000; /* Black border for the container */
  padding: 10px;
  margin-top: 20px;
  border-radius: 4px;
}

/* Style for individual reservation details */
.reservation-details {
  margin-bottom: 10px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e53935; /* Red color for the button */
  color: #fff; /* Text color */
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 2; /* Ensure the button is above other content */
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAAF;;AAGA;EACE,qCAAA;AAAF;;AAGA;EACE,sCAAA;EACA,aAAA;AAAF;;AAGA;EACE,6BAAA;AAAF;;AAGA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;AAAF;;AAGA;EACE,eAAA;EACA,wCAAA;AAAF;;AAGA;EACE,aAAA;EACA,SAAA;AAAF;;AAGA;EACE,qBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,eAAA;EACA,WAAA;EACA,oCAAA;AAAF;;AAGA;EACE,WAAA;EACA,iCAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,qCAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;AAAF;;AAGA;EACE,eAAA;EACA,YAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;AAAF;;AAGA;EACE,yBAAA;AAAF;;AAGA;EACE,yBAAA;AAAF;;AAGA;;EAEE,8CAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;AAAF;;AAGA;EACE,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sCAAA;EACA,WAAA;AAAF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA,EAAA,wBAAA;EACA,mBAAA;EACA,sBAAA,EAAA,6BAAA;EACA,mBAAA;AACF;;AAEA,yBAAA;AACA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,sBAAA;EACA,aAAA;EACA,2CAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,sBAAA,EAAA,6BAAA;EACA,mBAAA;AACF;;AACA;EACE,YAAA;AAEF;;AACA,mCAAA;AACA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;AAEA;;AACA,uCAAA;AACA;;EAEA,aAAA;EACA,mBAAA;EACA,sBAAA,EAAA,4BAAA;EACA,kBAAA;EACA,eAAA;AAEA;;AACA,mCAAA;AACA;EACA,yBAAA,EAAA,6BAAA;EACA,WAAA,EAAA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AAEA;;AACA,yCAAA;AACA;EACA,sBAAA,EAAA,mCAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;AAEA;;AACA,6CAAA;AACA;EACA,mBAAA;AAEA;;AACA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,yBAAA,EAAA,6BAAA;EACA,WAAA,EAAA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA,EAAA,6CAAA;AAEF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700&family=Montserrat:wght@100;200;300;400;500;600&family=Permanent+Marker&family=Poppins:wght@100;200;300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=Titan+One&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nmain {\r\n  background-color: rgba(1, 0, 74, 0.8);\r\n}\r\n\r\nheader {\r\n  background-color: rgba(1, 21, 74, 0.8);\r\n  padding: 3rem;\r\n}\r\n\r\n.logo-style {\r\n  color: rgba(76, 6, 150, 0.88);\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\nnav h3 {\r\n  font-size: 50px;\r\n  font-family: 'Permanent Marker', cursive;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  gap: 70px;\r\n}\r\n\r\nul li {\r\n  list-style-type: none;\r\n}\r\n\r\nul li a {\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #fff;\r\n  font-family: 'Gothic A1', sans-serif;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.movie-list {\r\n  display: grid;\r\n  justify-items: center;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 1rem;\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n}\r\n\r\n.buttons button {\r\n  padding: 0.5rem;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  background-color: #393434;\r\n  cursor: pointer;\r\n}\r\n\r\n.buttons button:hover {\r\n  background-color: #f5c518;\r\n}\r\n\r\n.buttons button:active {\r\n  background-color: #0a0a0a;\r\n}\r\n\r\n.reservation-button,\r\n.comment-button {\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-weight: 400;\r\n  color: #5799ef;\r\n  font-size: 1rem;\r\n}\r\n\r\nfooter {\r\n  display: block;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 100%;\r\n  padding: 8px;\r\n  height: 30px;\r\n  color: #fff;\r\n  border-color: black;\r\n  background-color: rgba(1, 21, 74, 0.8);\r\n  border: 1cm;\r\n}\r\n.overlay {\r\n  display: flex;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 1000;\r\n  color: black;\r\n  justify-content: center; /* Center horizontally */\r\n  align-items: center; \r\n  flex-direction: column; /* Arrange items vertically */\r\n  align-items: center/* Center vertically */\r\n}\r\n\r\n/* Styles for the popup */\r\n.popup {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\r\n  z-index: 1001;\r\n  color: black;\r\n  align-items:center ;\r\n  justify-content: center;\r\n  text-align: center;\r\n  flex-direction: column; /* Arrange items vertically */\r\n  align-items: center\r\n}\r\n.popup h2 {\r\n  color: black;\r\n}\r\n\r\n/* Style for the reservation form */\r\n.reservation-form {\r\nmargin-top: 20px;\r\ndisplay: flex;\r\nflex-direction: column;\r\n}\r\n\r\n/* Style for input fields in the form */\r\n.reservation-form input[type=\"text\"],\r\n.reservation-form input[type=\"date\"] {\r\npadding: 10px;\r\nmargin-bottom: 10px;\r\nborder: 1px solid #ccc; /* Add a light gray border */\r\nborder-radius: 4px;\r\nfont-size: 16px;\r\n}\r\n\r\n/* Style for the \"Reserve\" button */\r\n.reservation-form button {\r\nbackground-color: #e53935; /* Red color for the button */\r\ncolor: #fff; /* Text color */\r\nborder: none;\r\npadding: 10px 20px;\r\nfont-size: 16px;\r\nborder-radius: 4px;\r\ncursor: pointer;\r\nmargin-top: 20px;\r\n}\r\n\r\n/* Style for the reservations container */\r\n.reservations-container {\r\nborder: 1px solid #000; /* Black border for the container */\r\npadding: 10px;\r\nmargin-top: 20px;\r\nborder-radius: 4px;\r\n}\r\n\r\n/* Style for individual reservation details */\r\n.reservation-details {\r\nmargin-bottom: 10px;\r\n}\r\n\r\n.close-button {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  background-color: #e53935; /* Red color for the button */\r\n  color: #fff; /* Text color */\r\n  border: none;\r\n  padding: 5px 10px;\r\n  font-size: 16px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  z-index: 2; /* Ensure the button is above other content */\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Api.js":
/*!****************************!*\
  !*** ./src/modules/Api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAndRenderData: () => (/* binding */ fetchAndRenderData)
/* harmony export */ });
/* harmony import */ var _likeInteractions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeInteractions.js */ "./src/modules/likeInteractions.js");
/* harmony import */ var _reservation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.js */ "./src/modules/reservation.js");



function fetchAndRenderData() {
  document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the TVmaze API
    fetch('https://api.tvmaze.com/schedule?country=US&date=2014-12-01')
      .then((response) => response.json())
      .then((data) => {
        const movieList = document.querySelector('.movie-list');

        data.forEach(async (show) => {
          const movieDiv = document.createElement('div');
          movieDiv.className = 'movie';

          const img = document.createElement('img');
          img.src = show.show.image ? show.show.image.medium : 'placeholder.jpg';
          img.alt = show.show.name;

          const h2 = document.createElement('h2');
          const maxLength = 30; // Set a maximum length for the movie name (adjust as needed)

          if (show.show.name.length > maxLength) {
            h2.textContent = `${show.show.name.substring(0, maxLength)}...`;
          } else {
            h2.textContent = show.show.name;
          }

          const buttonsDiv = document.createElement('div');
          buttonsDiv.className = 'buttons';

          const reservationButton = document.createElement('button');
          reservationButton.className = 'reservation-button';
          reservationButton.textContent = 'Reservation';

          const commentButton = document.createElement('button');
          commentButton.className = 'comment-button';
          commentButton.textContent = 'Comment';

          const likeButton = document.createElement('img');
          likeButton.className = 'like-button';
          likeButton.src = 'src/styles/like.png';
          likeButton.alt = 'Like';

          const likeCounter = document.createElement('span');
          likeCounter.className = 'like-counter';

          const initialLikeCount = await (0,_likeInteractions_js__WEBPACK_IMPORTED_MODULE_0__.getLikeCount)(show.show.id);
          likeCounter.textContent = `Likes: ${initialLikeCount}`;

          likeButton.addEventListener('click', async () => {
            const created = await (0,_likeInteractions_js__WEBPACK_IMPORTED_MODULE_0__.createLike)(show.show.id);
            if (created) {
              const count = await (0,_likeInteractions_js__WEBPACK_IMPORTED_MODULE_0__.getLikeCount)(show.show.id);
              likeCounter.textContent = `Likes: ${count}`;
            }
          });
          reservationButton.addEventListener('click',async()=>{
           (0,_reservation_js__WEBPACK_IMPORTED_MODULE_1__.popupReservation)(show);
          });

          buttonsDiv.appendChild(likeButton);
          buttonsDiv.appendChild(likeCounter);
          buttonsDiv.appendChild(commentButton);
          buttonsDiv.appendChild(reservationButton);
          movieDiv.appendChild(img);
          movieDiv.appendChild(h2);
          movieDiv.appendChild(buttonsDiv);
          movieList.appendChild(movieDiv);
        });
      });
  });
}


/***/ }),

/***/ "./src/modules/likeInteractions.js":
/*!*****************************************!*\
  !*** ./src/modules/likeInteractions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLike: () => (/* binding */ createLike),
/* harmony export */   getLikeCount: () => (/* binding */ getLikeCount)
/* harmony export */ });
const apiKey = 'xDXAhv6Wn64RmKots7ec';

// Function for like button
function createLike(itemId) {
  return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  })
    .then((response) => {
      if (response.status === 201) {
        return true;
      }
      console.error('Failed to create a like.');
      return false;
    })
    .catch((error) => {
      console.error('Error creating a like:', error);
      return false;
    });
}

// Function for like counts
function getLikeCount(itemId) {
  return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes`)
    .then((response) => response.json())
    .then((likesData) => {
      const like = likesData.find((like) => like.item_id === itemId);
      return like ? like.likes : 0;
    })
    .catch((error) => {
      console.error('Error getting like count:', error);
      return 0;
    });
}


/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popupReservation: () => (/* binding */ popupReservation)
/* harmony export */ });
// Function to fetch all reservations for a specific item from the API
async function fetchAllReservations(itemId) {
    try {
        const apiKey = 'fDqwhSI3IFsJVLYNBHB6';
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/reservations?item_id=${itemId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch reservations');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching reservations:', error);
        return [];
    }
}

// Function to display reservations in the popup
async function displayReservations(itemId, container) {
    try {
        const reservations = await fetchAllReservations(itemId);

        // Clear any existing reservations
        container.innerHTML = '';

        // Loop through reservations and display them
        reservations.forEach((reservation) => {
            // Create a text element to display the reservation
            const reservationText = document.createElement('p');
            reservationText.className = 'reservation-text';
            reservationText.textContent = `@${reservation.username} reserved this from ${reservation.date_start} to ${reservation.date_end}`;

            // Append the reservation text to the container
            container.appendChild(reservationText);
        });
    } catch (error) {
        console.error('Error displaying reservations:', error);
    }
}

// Function to display the reservation popup
function popupReservation(show) {
    if (show && show.show) {
        // Create the overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        // Create the popup element
        const popup = document.createElement('div');
        popup.className = 'popup';

        // Create a container for the close button
        const closeButtonContainer = document.createElement('div');
        closeButtonContainer.className = 'close-button-container';

        // Create the close button for the popup
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.className = 'close-button';
        closeButton.onclick = () => {
            document.body.removeChild(overlay); // Remove the overlay and popup when the close button is clicked
        };

        // Create the content for the popup
        const content = document.createElement('div');

        // Create an image element for the show's image
        const img = document.createElement('img');
        img.src = show.show.image ? show.show.image.medium : 'placeholder.jpg';
        img.alt = show.show.name;

        // Create an h2 element for the show's name
        const h2 = document.createElement('h2');
        h2.textContent = show.show.name;

        // Create a paragraph element for the show's summary
        const summary = document.createElement('p');
        summary.innerHTML = show.show.summary;

        // Create a reservation form
        const reservationForm = document.createElement('form');
        reservationForm.className = 'reservation-form';

        // Create input fields for name, start date, and end date
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Name';

        const startDateInput = document.createElement('input');
        startDateInput.type = 'date';
        startDateInput.placeholder = 'Start Date';

        const endDateInput = document.createElement('input');
        endDateInput.type = 'date';
        endDateInput.placeholder = 'End Date';

        // Create a "Reserve" button
        const reserveButton = document.createElement('button');
        reserveButton.textContent = 'Reserve';

        // Create a container for displaying reservations
        const reservationsContainer = document.createElement('div');
        reservationsContainer.className = 'reservations-container';

        // Add event listener to the form for submission
        reservationForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent the default form submission behavior

            const reservationData = {
                item_id: show.show.id,
                username: nameInput.value,
                date_start: startDateInput.value,
                date_end: endDateInput.value,
            };

            // Send reservation data to the API using a POST request
            const apiKey = 'fDqwhSI3IFsJVLYNBHB6';
            const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/reservations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            if (response.ok) {
                // Reservation was successful
                nameInput.value = '';
                startDateInput.value = '';
                endDateInput.value = '';
                // Optionally, you can close the popup or perform other actions
                // Reload the reservations after a new reservation is added
                displayReservations(show.show.id, reservationsContainer);
            } else {
                // Reservation failed
                alert('Reservation failed. Please try again.');
            }
        });

        // Append the close button to its container
        closeButtonContainer.appendChild(closeButton);

        // Append the image, h2, summary, and close button container to the content
        content.appendChild(closeButtonContainer);
        content.appendChild(img);
        content.appendChild(h2);
        content.appendChild(summary);

        // Append the content to the popup
        popup.appendChild(content);

        // Append the popup to the overlay
        overlay.appendChild(popup);

        // Append the overlay to the body
        document.body.appendChild(overlay);

        // Append input fields and "Reserve" button to the reservation form
        reservationForm.appendChild(nameInput);
        reservationForm.appendChild(startDateInput);
        reservationForm.appendChild(endDateInput);
        reservationForm.appendChild(reserveButton);
        content.appendChild(reservationsContainer);

        // Append the reservation form to the content
        content.appendChild(reservationForm);

        // Append the reservations container to the content
    

        // Show the popup by changing its display property
        popup.style.display = 'flex'; // You can also use "flex" or other display values

        // Display reservations when the popup is opened
        displayReservations(show.show.id, reservationsContainer);
    } else {
        console.error('Invalid show data:', show);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Api.js */ "./src/modules/Api.js");



// Call the function to fetch and render data
(0,_modules_Api_js__WEBPACK_IMPORTED_MODULE_1__.fetchAndRenderData)();
})();

/******/ })()
;
//# sourceMappingURL=bundle4b3bcc14fa36b332c1a6.js.map