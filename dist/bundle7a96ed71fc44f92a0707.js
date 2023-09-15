/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/* modal */
#myModal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 70%;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-content h1 {
  text-align: center;
  margin-bottom: 20px;
  font-family: "Gothic A1", sans-serif;
}

.details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  font-family: "Gothic A1", sans-serif;
  font-size: 20px;
  padding-bottom: 20px;
}

.details p {
  padding-bottom: 15px;
}

#movieImg {
  width: 20%;
  display: block;
  margin: 0 auto;
  padding-bottom: 20px;
}

.comments {
  text-align: center;
  font-family: "Gothic A1", sans-serif;
  font-size: 20px;
}

.comments p {
  padding-bottom: 15px;
}

.form-center {
  width: 400px;
  margin: 0 auto;
}

input {
  border-radius: 0;
  border-radius: 8px;
  padding: 15px 38px 15px 16px;
  border: 1px solid #cfd8dc;
  margin-top: 20px;
  font-family: Poppins, serif, sans serif;
  font-weight: 400;
  color: #172b4d;
  font-size: 17px;
}

textarea {
  background: #fff;
  height: 100px;
  border: 1px solid #cfd8dc;
  border-radius: 8px;
  margin-top: 18px;
  padding: 15px 38px 15px 16px;
  font-family: Poppins, serif, sans serif;
  font-weight: 400;
  color: #172b4d;
  font-size: 17px;
}

form input,
form textarea {
  display: block;
}

.comment-btn {
  font-family: Poppins, serif, sans serif;
  background-color: #fff;
  border: 1px solid #cfd8dc;
  border-radius: 8px;
  color: #8f9394;
  padding: 12px;
  text-align: left !important;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  margin-top: 15px;
  letter-spacing: 0.03em;
  transition: background-color 0.15s, color 0.15s;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAAF;;AAGA;EACE,qCAAA;AAAF;;AAGA;EACE,sCAAA;EACA,aAAA;AAAF;;AAGA;EACE,6BAAA;AAAF;;AAGA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;AAAF;;AAGA;EACE,eAAA;EACA,wCAAA;AAAF;;AAGA;EACE,aAAA;EACA,SAAA;AAAF;;AAGA;EACE,qBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,eAAA;EACA,WAAA;EACA,oCAAA;AAAF;;AAGA;EACE,WAAA;EACA,iCAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,qCAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;AAAF;;AAGA;EACE,eAAA;EACA,YAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;AAAF;;AAGA;EACE,yBAAA;AAAF;;AAGA;EACE,yBAAA;AAAF;;AAGA;;EAEE,8CAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;AAAF;;AAGA,UAAA;AACA;EACE,aAAA,EAAA,sBAAA;EACA,eAAA,EAAA,kBAAA;EACA,UAAA,EAAA,eAAA;EACA,kBAAA,EAAA,wBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA,EAAA,eAAA;EACA,YAAA,EAAA,gBAAA;EACA,cAAA,EAAA,4BAAA;EACA,2BAAA;EACA,mCAAA;EACA,8BAAA,EAAA,mBAAA;EACA,oCAAA,EAAA,qBAAA;AAAF;;AAGA,kBAAA;AACA;EACE,yBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;AAAF;;AAGA,qBAAA;AACA;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;AAAF;;AAGA;;EAEE,WAAA;EACA,qBAAA;EACA,eAAA;AAAF;;AAGA;EACE,kBAAA;EACA,mBAAA;EACA,oCAAA;AAAF;;AAGA;EACE,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,oCAAA;EACA,eAAA;EACA,oBAAA;AAAF;;AAGA;EACE,oBAAA;AAAF;;AAGA;EACE,UAAA;EACA,cAAA;EACA,cAAA;EACA,oBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,oCAAA;EACA,eAAA;AAAF;;AAGA;EACE,oBAAA;AAAF;;AAGA;EACE,YAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;EACA,kBAAA;EACA,4BAAA;EACA,yBAAA;EACA,gBAAA;EACA,uCAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;AAAF;;AAGA;EACE,gBAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4BAAA;EACA,uCAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;AAAF;;AAGA;;EAEE,cAAA;AAAF;;AAGA;EACE,uCAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,aAAA;EACA,2BAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,sBAAA;EACA,+CAAA;AAAF;;AAGA;EACE,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sCAAA;EACA,WAAA;AAAF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700&family=Montserrat:wght@100;200;300;400;500;600&family=Permanent+Marker&family=Poppins:wght@100;200;300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=Titan+One&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nmain {\n  background-color: rgba(1, 0, 74, 0.8);\n}\n\nheader {\n  background-color: rgba(1, 21, 74, 0.8);\n  padding: 3rem;\n}\n\n.logo-style {\n  color: rgba(76, 6, 150, 0.88);\n}\n\nnav {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\nnav h3 {\n  font-size: 50px;\n  font-family: 'Permanent Marker', cursive;\n}\n\nul {\n  display: flex;\n  gap: 70px;\n}\n\nul li {\n  list-style-type: none;\n}\n\nul li a {\n  text-decoration: none;\n  font-size: 25px;\n  color: #fff;\n  font-family: 'Gothic A1', sans-serif;\n}\n\nh2 {\n  color: #fff;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.movie-list {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n  margin: 1rem;\n  padding: 1rem;\n}\n\n.buttons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 1rem;\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.buttons button {\n  padding: 0.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  background-color: #393434;\n  cursor: pointer;\n}\n\n.buttons button:hover {\n  background-color: #f5c518;\n}\n\n.buttons button:active {\n  background-color: #0a0a0a;\n}\n\n.reservation-button,\n.comment-button {\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 400;\n  color: #5799ef;\n  font-size: 1rem;\n}\n\n/* modal */\n#myModal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 70%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-content h1 {\n  text-align: center;\n  margin-bottom: 20px;\n  font-family: 'Gothic A1', sans-serif;\n}\n\n.details {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  text-align: center;\n  font-family: 'Gothic A1', sans-serif;\n  font-size: 20px;\n  padding-bottom: 20px;\n}\n\n.details p {\n  padding-bottom: 15px;\n}\n\n#movieImg {\n  width: 20%;\n  display: block;\n  margin: 0 auto;\n  padding-bottom: 20px;\n}\n\n.comments {\n  text-align: center;\n  font-family: 'Gothic A1', sans-serif;\n  font-size: 20px;\n}\n\n.comments p {\n  padding-bottom: 15px;\n}\n\n.form-center {\n  width: 400px;\n  margin: 0 auto;\n}\n\ninput {\n  border-radius: 0;\n  border-radius: 8px;\n  padding: 15px 38px 15px 16px;\n  border: 1px solid #cfd8dc;\n  margin-top: 20px;\n  font-family: Poppins, serif, sans serif;\n  font-weight: 400;\n  color: #172b4d;\n  font-size: 17px;\n}\n\ntextarea {\n  background: #fff;\n  height: 100px;\n  border: 1px solid #cfd8dc;\n  border-radius: 8px;\n  margin-top: 18px;\n  padding: 15px 38px 15px 16px;\n  font-family: Poppins, serif, sans serif;\n  font-weight: 400;\n  color: #172b4d;\n  font-size: 17px;\n}\n\nform input,\nform textarea {\n  display: block;\n}\n\n.comment-btn {\n  font-family: Poppins, serif, sans serif;\n  background-color: #fff;\n  border: 1px solid #cfd8dc;\n  border-radius: 8px;\n  color: #8f9394;\n  padding: 12px;\n  text-align: left !important;\n  text-decoration: none;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 24px;\n  margin-top: 15px;\n  letter-spacing: 0.03em;\n  transition: background-color 0.15s, color 0.15s;\n}\n\nfooter {\n  display: block;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  padding: 8px;\n  height: 30px;\n  color: #fff;\n  border-color: black;\n  background-color: rgba(1, 21, 74, 0.8);\n  border: 1cm;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAndRenderData: () => (/* binding */ fetchAndRenderData)
/* harmony export */ });
/* harmony import */ var _commentInteraction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentInteraction.js */ "./src/modules/commentInteraction.js");


async function fetchAndRenderData() {
  document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the TVmaze API
    fetch('https://api.tvmaze.com/schedule?country=US&date=2014-12-01')
      .then((response) => response.json())
      .then((data) => {
        const movieList = document.querySelector('.movie-list');

        data.forEach((show) => {
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
          reservationButton.className = 'reservation-button show-modal';
          reservationButton.textContent = 'Reservation';

          const commentButton = document.createElement('button');
          commentButton.className = 'comment-button';
          commentButton.textContent = 'Comment';

          buttonsDiv.appendChild(commentButton);
          buttonsDiv.appendChild(reservationButton);
          movieDiv.appendChild(img);
          movieDiv.appendChild(h2);
          movieDiv.appendChild(buttonsDiv);
          movieList.appendChild(movieDiv);
          localStorage.setItem('movies', JSON.stringify(data));
        });
        (0,_commentInteraction_js__WEBPACK_IMPORTED_MODULE_0__.commentModal)();
      });
  });
}


/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   counter: () => (/* binding */ counter)
/* harmony export */ });
function counter(data) {
  return data?.error?.status !== 400 ? data.length : 0;
}

/***/ }),

/***/ "./src/modules/commentInteraction.js":
/*!*******************************************!*\
  !*** ./src/modules/commentInteraction.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commentModal: () => (/* binding */ commentModal)
/* harmony export */ });
/* harmony import */ var _processComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processComments.js */ "./src/modules/processComments.js");
/* harmony import */ var _processComments_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_processComments_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");



async function commentModal() {
  let modalActiveContent;
  const commentBtns = document.querySelectorAll('.comment-button');
  const element = document.querySelector('.modal');
  const data = JSON.parse(localStorage.getItem('movies'));
  // end event listerner for opening modal
  window.closeModal = () => {
    document.getElementById('myModal').innerHTML = '';
    document.getElementById('myModal').style.display = 'none';
    modalActiveContent = null;
  };

  for (let i = 0; i < commentBtns.length; i++) {
    // eslint-disable-next-line no-loop-func
    commentBtns[i].addEventListener('click', async () => {
      document.getElementById('myModal').style.display = 'block';
      modalActiveContent = data[i];

      const template = `
                <div class="modal-content">
                <span onclick="closeModal()" id="close-icon" class="close">&times;</span>
                  <img src="${modalActiveContent.show.image.medium}" id="movieImg" alt="">
                  <h1>${modalActiveContent.show.name}</h1>
                  <div class="details">
                    <p>Season: ${modalActiveContent.season}</p>
                    <p>Type: ${modalActiveContent.show.type}</p>
                    <p>Language: ${modalActiveContent.show.language}</p>
                    <p>Time: ${modalActiveContent.airtime}</p>
                  </div>
                  <h1>Comments <span id="counter"></span></h1>
                  <div id="comments" class="comments"></div>
                  <h1>Add a comment</h1>
                  <div class="form-center">
                  <form id="form">
                  <input
                  type="text"
                  name="user"
                  id="user"
                  placeholder="Full Name"
                  required
                  maxlength="30"
                  />
                  <textarea
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="10"
                  required
                  placeholder="Your insight"
                  maxlength="500"
                  ></textarea>
                  <div class="comment-btn-center">
                  <button class="comment-btn" type="submit">Comment</button>
                </div>
                  </form>
                  </div>
                </div>
                `;
      element.innerHTML += template;

      function runLiveComments(results) {
        console.log((0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__.counter)(results));
        document.getElementById('counter').innerHTML = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__.counter)(results);
        results?.error?.status !== 400 && results.forEach((element) => {
          const para = document.createElement('p');
          const node = document.createTextNode(`${element.creation_date} ${element.username}: ${element.comment}`);
          para.appendChild(node);
          const htmlElement = document.getElementById('comments');
          htmlElement.appendChild(para);
        });
      }

      await (0,_processComments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(modalActiveContent.id).then((results) => {
        runLiveComments(results);
      });

      const form = document.getElementById('form');
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('user').value;
        const comment = document.getElementById('comment').value;
        const itemId = modalActiveContent.id;

        const data = {
          username,
          comment,
          itemId,
        };

        await (0,_processComments_js__WEBPACK_IMPORTED_MODULE_0__.submitComment)(data).then(() => {
          document.getElementById('comments').innerHTML = '';
          (0,_processComments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(modalActiveContent.id).then((results) => {
            results?.error?.status !== 400 ? results.push({
              comment: data.comment,
              creation_date: new Date().toISOString().split('T')[0],
              username: data.username,
            }) : results = [{
              comment: data.comment,
              creation_date: new Date().toISOString().split('T')[0],
              username: data.username,
            }];
            runLiveComments(results);
          });
        });
        form.reset();
      });
    });
  }
}


/***/ }),

/***/ "./src/modules/processComments.js":
/*!****************************************!*\
  !*** ./src/modules/processComments.js ***!
  \****************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (27:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|     })\n|   .then((res)\n>   => {\n| \n|     }).catch((error) => console.error('Error:', error));");

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app.js */ "./src/modules/app.js");



// Call the function to fetch and render data
(0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.fetchAndRenderData)();

})();

/******/ })()
;
//# sourceMappingURL=bundle7a96ed71fc44f92a0707.js.map