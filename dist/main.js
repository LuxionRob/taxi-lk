/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/controllers/introductionController.js":
/*!*******************************************************!*\
  !*** ./src/app/controllers/introductionController.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar IntroductionController = /*#__PURE__*/function () {\n  function IntroductionController() {\n    _classCallCheck(this, IntroductionController);\n  }\n\n  _createClass(IntroductionController, [{\n    key: \"index\",\n    value: function index(req, res) {\n      res.render('gioi-thieu');\n    }\n  }]);\n\n  return IntroductionController;\n}();\n\nmodule.exports = new IntroductionController();\n\n//# sourceURL=webpack://taxilongkhanhgiare/./src/app/controllers/introductionController.js?");

/***/ }),

/***/ "./src/app/controllers/newsController.js":
/*!***********************************************!*\
  !*** ./src/app/controllers/newsController.js ***!
  \***********************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar news = [{\n  title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  date: '05/03/2022',\n  view: '72',\n  description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'\n}, {\n  title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  date: '05/03/2022',\n  view: '72',\n  description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'\n}, {\n  title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  date: '05/03/2022',\n  view: '72',\n  description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'\n}, {\n  title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  date: '05/03/2022',\n  view: '72',\n  description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'\n}, {\n  title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  date: '05/03/2022',\n  view: '72',\n  description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'\n}, {\n  title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  date: '05/03/2022',\n  view: '72',\n  description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',\n  imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'\n}];\n\nvar NewsController = /*#__PURE__*/function () {\n  function NewsController() {\n    _classCallCheck(this, NewsController);\n  }\n\n  _createClass(NewsController, [{\n    key: \"index\",\n    value: function index(req, res) {\n      res.render('tin-tuc', {\n        news: news\n      });\n    }\n  }]);\n\n  return NewsController;\n}();\n\nmodule.exports = new NewsController();\n\n//# sourceURL=webpack://taxilongkhanhgiare/./src/app/controllers/newsController.js?");

/***/ }),

/***/ "./src/app/controllers/serviceController.js":
/*!**************************************************!*\
  !*** ./src/app/controllers/serviceController.js ***!
  \**************************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar services = [{\n  title: 'DỊCH VỤ TAXI LONG KHÁNH',\n  description: 'Taxi Long Khánh, Taxi Long Khánh Đường Dài, Taxi Đưa Đón Sân Bay Giá Rẻ Uy Tín – Dịch Vụ Grab Taxi Chuyên Nghiệp Chất Lượng Cao Gọi Ngay Số 0924.677.776 Có Xe Ngay 5 Phút',\n  image: 'img/service/dich-vu-long-khanh.jpeg'\n}, {\n  title: 'Dịch vụ Taxi Xuân Lộc',\n  description: 'Taxi Xuân Lộc uy tín, chuyên nghiệp, giá rẻ được hàng nghìn người sử dụng và đánh giá cao. Gọi ngay 0924677776 để đặt xe ngay sau 5 phút.',\n  image: 'img/service/dich-vu-xuan-loc.jpeg'\n}, {\n  title: 'DỊCH VỤ THUÊ XE DU LỊCH',\n  description: 'Grab taxi Long Khánh - Đồng Nai đơn vị cho thuê xe du lịch tại LONG KHÁNH - ĐỒNG NAI cung cấp đa dạng các loại xe từ 4 đến 45 chỗ. Các xe đều là xe đời mới, sạch sẽ và đầy đủ tiện nghi, êm ái trên mọi hành trình. Chúng tôi tự tin là mình...',\n  image: 'img/service/dich-vu-thue-xe-du-lich.png'\n}, {\n  title: 'DỊCH VỤ THUÊ XE CƯỚI',\n  description: 'Chúng tôi là một công ty cho thuê xe uy tín lâu năm tại TP LONG KHÁNH - Đồng Nai, vì vậy khi sử dụng dịch vụ thuê xe cưới của chúng tôi Quý Khách có thể hoàn toàn an tâm vì ngoài công việc phục vụ ân cần chu đáo, chúng tôi luôn có những món...',\n  image: 'img/service/dich-vu-thue-xe-dam-cuoi.png'\n}, {\n  title: 'DỊCH VỤ THUÊ XE PHỤC VỤ LỄ HỘI',\n  description: 'Grab Taxi Long Khánh - Đồng Nai là một đơn vị cho thuê xe tháng chuyên nghiệp tại TP Long Khánh và các huyện lân cân ở Đồng Nai. Với kinh nghiệm và sự tận tâm phục vụ của đội ngũ nhân viên điều hành, lái xe của chúng tôi, chúng tôi tin chắc...',\n  image: 'img/service/dich-vu-thue-xe-phuc-vu-le-hoi.png'\n}, {\n  title: 'GRAB-TAXI ĐI BỆNH VIỆN, SÂN BAY',\n  description: 'Grab-taxi đi bệnh viện, sân bay',\n  image: 'img/service/dich-vu-xe-san-bay-benh-vien.png'\n}];\n\nvar ServiceController = /*#__PURE__*/function () {\n  function ServiceController() {\n    _classCallCheck(this, ServiceController);\n  }\n\n  _createClass(ServiceController, [{\n    key: \"index\",\n    value: function index(req, res) {\n      res.render('dich-vu', {\n        services: services\n      });\n    }\n  }]);\n\n  return ServiceController;\n}();\n\nmodule.exports = new ServiceController();\n\n//# sourceURL=webpack://taxilongkhanhgiare/./src/app/controllers/serviceController.js?");

/***/ }),

/***/ "./src/app/controllers/siteController.js":
/*!***********************************************!*\
  !*** ./src/app/controllers/siteController.js ***!
  \***********************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar SiteController = /*#__PURE__*/function () {\n  function SiteController() {\n    _classCallCheck(this, SiteController);\n  }\n\n  _createClass(SiteController, [{\n    key: \"index\",\n    value: function index(req, res) {\n      res.render('home');\n    }\n  }]);\n\n  return SiteController;\n}();\n\nmodule.exports = new SiteController();\n\n//# sourceURL=webpack://taxilongkhanhgiare/./src/app/controllers/siteController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _require = __webpack_require__(/*! express-handlebars */ \"express-handlebars\"),\n    create = _require.create;\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar app = express();\n\nvar route = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\nvar port = 3000;\nvar hostname = '127.0.0.1';\napp.use(express[\"static\"](path.join(__dirname, 'public')));\napp.use(morgan('combined'));\nvar hbs = create({\n  extname: '.hbs',\n  layoutsDir: path.join(__dirname, 'resources/views/layouts'),\n  partialsDir: [path.join(__dirname, 'resources/views/partials')]\n});\napp.engine('hbs', hbs.engine);\napp.set('view engine', 'hbs');\napp.set('views', path.join(__dirname, 'resources/views')); // Route init\n\nroute(app);\napp.listen(3000, hostname, function () {\n  console.log(\"Server is listening at http://\".concat(hostname, \":\").concat(port));\n});\n\n//# sourceURL=webpack://taxilongkhanhgiare/./src/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var newsRouter = __webpack_require__(/*! ./news */ \"./src/routes/news.js\");\n\nvar siteRouter = __webpack_require__(/*! ./site */ \"./src/routes/site.js\");\n\nvar introductionRouter = __webpack_require__(/*! ./introduction */ \"./src/routes/introduction.js\");\n\nvar serviceRouter = __webpack_require__(/*! ./service */ \"./src/routes/service.js\");\n\nfunction route(app) {\n  app.get('/gioi-thieu', introductionRouter);\n  app.get('/dich-vu', serviceRouter);\n  app.get('/tin-tuc', newsRouter);\n  app.get('/', siteRouter);\n}\n\nmodule.exports = route;\n\n//# sourceURL=webpack://taxilongkhanhgiare/./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/introduction.js":
/*!************************************!*\
  !*** ./src/routes/introduction.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar introductionController = __webpack_require__(/*! ../app/controllers/introductionController */ \"./src/app/controllers/introductionController.js\");\n\nrouter.use('/', introductionController.index);\nmodule.exports = router;\n\n//# sourceURL=webpack://taxilongkhanhgiare/./src/routes/introduction.js?");

/***/ }),

/***/ "./src/routes/news.js":
/*!****************************!*\
  !*** ./src/routes/news.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar newsController = __webpack_require__(/*! ../app/controllers/newsController */ \"./src/app/controllers/newsController.js\");\n\nrouter.use('/', newsController.index);\nmodule.exports = router;\n\n//# sourceURL=webpack://taxilongkhanhgiare/./src/routes/news.js?");

/***/ }),

/***/ "./src/routes/service.js":
/*!*******************************!*\
  !*** ./src/routes/service.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar serviceController = __webpack_require__(/*! ../app/controllers/serviceController */ \"./src/app/controllers/serviceController.js\");\n\nrouter.use('/', serviceController.index);\nmodule.exports = router;\n\n//# sourceURL=webpack://taxilongkhanhgiare/./src/routes/service.js?");

/***/ }),

/***/ "./src/routes/site.js":
/*!****************************!*\
  !*** ./src/routes/site.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar siteController = __webpack_require__(/*! ../app/controllers/siteController */ \"./src/app/controllers/siteController.js\");\n\nrouter.use('/', siteController.index);\nmodule.exports = router;\n\n//# sourceURL=webpack://taxilongkhanhgiare/./src/routes/site.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-handlebars");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;