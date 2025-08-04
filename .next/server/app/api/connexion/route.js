"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/connexion/route";
exports.ids = ["app/api/connexion/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconnexion%2Froute&page=%2Fapi%2Fconnexion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconnexion%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5CAirDiopMobile-main03%5CAirDiopMobile-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5CAirDiopMobile-main03%5CAirDiopMobile-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconnexion%2Froute&page=%2Fapi%2Fconnexion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconnexion%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5CAirDiopMobile-main03%5CAirDiopMobile-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5CAirDiopMobile-main03%5CAirDiopMobile-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_emyna_Documents_Ecole_React_ProjetINT_AirDiopMobile_main03_AirDiopMobile_main_src_app_api_connexion_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/connexion/route.ts */ \"(rsc)/./src/app/api/connexion/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/connexion/route\",\n        pathname: \"/api/connexion\",\n        filename: \"route\",\n        bundlePath: \"app/api/connexion/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\emyna\\\\Documents\\\\Ecole\\\\React\\\\ProjetINT\\\\AirDiopMobile-main03\\\\AirDiopMobile-main\\\\src\\\\app\\\\api\\\\connexion\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_emyna_Documents_Ecole_React_ProjetINT_AirDiopMobile_main03_AirDiopMobile_main_src_app_api_connexion_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/connexion/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb25uZXhpb24lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNvbm5leGlvbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNvbm5leGlvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNlbXluYSU1Q0RvY3VtZW50cyU1Q0Vjb2xlJTVDUmVhY3QlNUNQcm9qZXRJTlQlNUNBaXJEaW9wTW9iaWxlLW1haW4wMyU1Q0FpckRpb3BNb2JpbGUtbWFpbiU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZW15bmElNUNEb2N1bWVudHMlNUNFY29sZSU1Q1JlYWN0JTVDUHJvamV0SU5UJTVDQWlyRGlvcE1vYmlsZS1tYWluMDMlNUNBaXJEaW9wTW9iaWxlLW1haW4maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tGO0FBQy9KO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxpZ2h0LWJvb2tpbmctbmV4dGpzLz8wZmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGVteW5hXFxcXERvY3VtZW50c1xcXFxFY29sZVxcXFxSZWFjdFxcXFxQcm9qZXRJTlRcXFxcQWlyRGlvcE1vYmlsZS1tYWluMDNcXFxcQWlyRGlvcE1vYmlsZS1tYWluXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNvbm5leGlvblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29ubmV4aW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY29ubmV4aW9uXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb25uZXhpb24vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxlbXluYVxcXFxEb2N1bWVudHNcXFxcRWNvbGVcXFxcUmVhY3RcXFxcUHJvamV0SU5UXFxcXEFpckRpb3BNb2JpbGUtbWFpbjAzXFxcXEFpckRpb3BNb2JpbGUtbWFpblxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjb25uZXhpb25cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2Nvbm5leGlvbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconnexion%2Froute&page=%2Fapi%2Fconnexion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconnexion%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5CAirDiopMobile-main03%5CAirDiopMobile-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5CAirDiopMobile-main03%5CAirDiopMobile-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/connexion/route.ts":
/*!****************************************!*\
  !*** ./src/app/api/connexion/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n // ⚠️ utilise bien 'bcryptjs' et pas juste 'bcrypt'\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst JWT_SECRET = process.env.JWT_SECRET || \"supersecret!\";\nasync function POST(req) {\n    const { email, password } = await req.json();\n    const user = await prisma.user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (!user) {\n        return new Response(JSON.stringify({\n            error: \"Utilisateur non trouv\\xe9\"\n        }), {\n            status: 404\n        });\n    }\n    const isMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(password, user.password);\n    if (!isMatch) {\n        return new Response(JSON.stringify({\n            error: \"Mot de passe incorrect\"\n        }), {\n            status: 401\n        });\n    }\n    // Générer le JWT\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n        id: user.id,\n        email: user.email,\n        isAdmin: user.isAdmin\n    }, JWT_SECRET, {\n        expiresIn: \"7d\"\n    });\n    // Créer la réponse et ajouter le cookie\n    const res = new Response(JSON.stringify({\n        success: true,\n        message: \"Connexion r\\xe9ussie\",\n        user: {\n            id: user.id,\n            email: user.email\n        }\n    }), {\n        status: 200\n    });\n    // Ajouter le cookie JWT (HTTP-only, 7j, sécurisé en prod)\n    res.headers.append(\"Set-Cookie\", `auth=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict;${ false ? 0 : \"\"}`);\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb25uZXhpb24vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThDO0FBQ2hCLENBQUMsbURBQW1EO0FBQ25EO0FBRS9CLE1BQU1HLFNBQVMsSUFBSUgsd0RBQVlBO0FBQy9CLE1BQU1JLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0YsVUFBVSxJQUFJO0FBRXRDLGVBQWVHLEtBQUtDLEdBQVk7SUFDckMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7SUFFMUMsTUFBTUMsT0FBTyxNQUFNVCxPQUFPUyxJQUFJLENBQUNDLFVBQVUsQ0FBQztRQUFFQyxPQUFPO1lBQUVMO1FBQU07SUFBRTtJQUU3RCxJQUFJLENBQUNHLE1BQU07UUFDVCxPQUFPLElBQUlHLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQXlCLElBQUk7WUFBRUMsUUFBUTtRQUFJO0lBQ3pGO0lBRUEsTUFBTUMsVUFBVSxNQUFNbkIsd0RBQWMsQ0FBQ1MsVUFBVUUsS0FBS0YsUUFBUTtJQUM1RCxJQUFJLENBQUNVLFNBQVM7UUFDWixPQUFPLElBQUlMLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQXlCLElBQUk7WUFBRUMsUUFBUTtRQUFJO0lBQ3pGO0lBRUEsaUJBQWlCO0lBQ2pCLE1BQU1HLFFBQVFwQix3REFBUSxDQUFDO1FBQUVzQixJQUFJWixLQUFLWSxFQUFFO1FBQUVmLE9BQU9HLEtBQUtILEtBQUs7UUFBRWdCLFNBQVNiLEtBQUthLE9BQU87SUFBQyxHQUFHckIsWUFBWTtRQUFFc0IsV0FBVztJQUFLO0lBRWhILHdDQUF3QztJQUN4QyxNQUFNQyxNQUFNLElBQUlaLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztRQUN0Q1csU0FBUztRQUNUQyxTQUFTO1FBQ1RqQixNQUFNO1lBQUVZLElBQUlaLEtBQUtZLEVBQUU7WUFBRWYsT0FBT0csS0FBS0gsS0FBSztRQUFDO0lBQ3pDLElBQUk7UUFBRVUsUUFBUTtJQUFJO0lBRWxCLDBEQUEwRDtJQUMxRFEsSUFBSUcsT0FBTyxDQUFDQyxNQUFNLENBQ2hCLGNBQ0EsQ0FBQyxLQUFLLEVBQUVULE1BQU0sb0RBQW9ELEVBQUVqQixNQUF5QixHQUFlLElBQWEsR0FBRyxDQUFDO0lBRy9ILE9BQU9zQjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxpZ2h0LWJvb2tpbmctbmV4dGpzLy4vc3JjL2FwcC9hcGkvY29ubmV4aW9uL3JvdXRlLnRzPzczN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7IC8vIOKaoO+4jyB1dGlsaXNlIGJpZW4gJ2JjcnlwdGpzJyBldCBwYXMganVzdGUgJ2JjcnlwdCdcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgJ3N1cGVyc2VjcmV0ISc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIlV0aWxpc2F0ZXVyIG5vbiB0cm91dsOpXCIgfSksIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cblxuICBjb25zdCBpc01hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuICBpZiAoIWlzTWF0Y2gpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiTW90IGRlIHBhc3NlIGluY29ycmVjdFwiIH0pLCB7IHN0YXR1czogNDAxIH0pO1xuICB9XG5cbiAgLy8gR8OpbsOpcmVyIGxlIEpXVFxuICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgaWQ6IHVzZXIuaWQsIGVtYWlsOiB1c2VyLmVtYWlsLCBpc0FkbWluOiB1c2VyLmlzQWRtaW4gfSwgSldUX1NFQ1JFVCwgeyBleHBpcmVzSW46ICc3ZCcgfSk7XG5cbiAgLy8gQ3LDqWVyIGxhIHLDqXBvbnNlIGV0IGFqb3V0ZXIgbGUgY29va2llXG4gIGNvbnN0IHJlcyA9IG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBtZXNzYWdlOiAnQ29ubmV4aW9uIHLDqXVzc2llJyxcbiAgICB1c2VyOiB7IGlkOiB1c2VyLmlkLCBlbWFpbDogdXNlci5lbWFpbCB9XG4gIH0pLCB7IHN0YXR1czogMjAwIH0pO1xuXG4gIC8vIEFqb3V0ZXIgbGUgY29va2llIEpXVCAoSFRUUC1vbmx5LCA3aiwgc8OpY3VyaXPDqSBlbiBwcm9kKVxuICByZXMuaGVhZGVycy5hcHBlbmQoXG4gICAgJ1NldC1Db29raWUnLFxuICAgIGBhdXRoPSR7dG9rZW59OyBIdHRwT25seTsgUGF0aD0vOyBNYXgtQWdlPTYwNDgwMDsgU2FtZVNpdGU9U3RyaWN0OyR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcgU2VjdXJlOycgOiAnJ31gXG4gICk7XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImJjcnlwdCIsImp3dCIsInByaXNtYSIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiUE9TVCIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJqc29uIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic3RhdHVzIiwiaXNNYXRjaCIsImNvbXBhcmUiLCJ0b2tlbiIsInNpZ24iLCJpZCIsImlzQWRtaW4iLCJleHBpcmVzSW4iLCJyZXMiLCJzdWNjZXNzIiwibWVzc2FnZSIsImhlYWRlcnMiLCJhcHBlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/connexion/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconnexion%2Froute&page=%2Fapi%2Fconnexion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconnexion%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5CAirDiopMobile-main03%5CAirDiopMobile-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5CAirDiopMobile-main03%5CAirDiopMobile-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();