/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./blog.config.js":
/*!************************!*\
  !*** ./blog.config.js ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\nvar BLOG = {\n  title: 'Fan Jingbo\\'s Blog',\n  author: 'Fan Jingbo',\n  email: 'fanjingbo1@gmail.com',\n  link: 'https://fanjingbo.com',\n  description: 'There is no spoon.',\n  lang: 'zh-CN',\n  // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP']\n  appearance: 'auto',\n  // ['light', 'dark', 'auto'],\n  font: 'sans-serif',\n  // ['sans-serif', 'serif']\n  lightBackground: '#ffffff',\n  // use hex value, don't forget '#' e.g #fffefc\n  darkBackground: '#18181B',\n  // use hex value, don't forget '#'\n  path: '',\n  // leave this empty unless you want to deploy Nobelium in a folder\n  since: 2019,\n  // if leave this empty, current year will be used.\n  postsPerPage: 7,\n  sortByDate: false,\n  showAbout: true,\n  // WIP\n  showArchive: true,\n  // WIP\n  autoCollapsedNavBar: false,\n  // the automatically collapsed navigation bar\n  //socialLink: 'https://twitter.com/craigaryhart',\n  seo: {\n    keywords: ['Blog', 'Website', 'Notion'],\n    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code\n\n  },\n  //notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！\n  notionPageId: '436c5f4068c44b9e8b890e58d25dce09',\n  // DO NOT CHANGE THIS！！！\n  notionAccessToken: process.env.NOTION_ACCESS_TOKEN,\n  // Useful if you prefer not to make your database public\n  analytics: {\n    provider: '',\n    // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.\n    ackeeConfig: {\n      tracker: '',\n      // e.g 'https://ackee.craigary.net/tracker.js'\n      dataAckeeServer: '',\n      // e.g https://ackee.craigary.net , don't end with a slash\n      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'\n\n    },\n    gaConfig: {\n      measurementId: '' // e.g: G-XXXXXXXXXX\n\n    }\n  },\n  comment: {\n    // support provider: gitalk, utterances, cusdis\n    provider: 'utterances',\n    // leave it empty if you don't need any comment plugin\n    gitalkConfig: {\n      repo: '',\n      // The repository of store comments\n      owner: '',\n      admin: [],\n      clientID: '',\n      clientSecret: '',\n      distractionFreeMode: false\n    },\n    utterancesConfig: {\n      repo: 'https://github.com/flyingpot/blog-comment'\n    },\n    cusdisConfig: {\n      appId: '',\n      // data-app-id\n      host: 'https://cusdis.com',\n      // data-host, change this if you're using self-hosted version\n      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version\n\n    }\n  },\n  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)\n\n}; // export default BLOG\n\nmodule.exports = BLOG;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYmxvZy5jb25maWcuanM/OTM0ZSJdLCJuYW1lcyI6WyJCTE9HIiwidGl0bGUiLCJhdXRob3IiLCJlbWFpbCIsImxpbmsiLCJkZXNjcmlwdGlvbiIsImxhbmciLCJhcHBlYXJhbmNlIiwiZm9udCIsImxpZ2h0QmFja2dyb3VuZCIsImRhcmtCYWNrZ3JvdW5kIiwicGF0aCIsInNpbmNlIiwicG9zdHNQZXJQYWdlIiwic29ydEJ5RGF0ZSIsInNob3dBYm91dCIsInNob3dBcmNoaXZlIiwiYXV0b0NvbGxhcHNlZE5hdkJhciIsInNlbyIsImtleXdvcmRzIiwiZ29vZ2xlU2l0ZVZlcmlmaWNhdGlvbiIsIm5vdGlvblBhZ2VJZCIsIm5vdGlvbkFjY2Vzc1Rva2VuIiwicHJvY2VzcyIsImVudiIsIk5PVElPTl9BQ0NFU1NfVE9LRU4iLCJhbmFseXRpY3MiLCJwcm92aWRlciIsImFja2VlQ29uZmlnIiwidHJhY2tlciIsImRhdGFBY2tlZVNlcnZlciIsImRvbWFpbklkIiwiZ2FDb25maWciLCJtZWFzdXJlbWVudElkIiwiY29tbWVudCIsImdpdGFsa0NvbmZpZyIsInJlcG8iLCJvd25lciIsImFkbWluIiwiY2xpZW50SUQiLCJjbGllbnRTZWNyZXQiLCJkaXN0cmFjdGlvbkZyZWVNb2RlIiwidXR0ZXJhbmNlc0NvbmZpZyIsImN1c2Rpc0NvbmZpZyIsImFwcElkIiwiaG9zdCIsInNjcmlwdFNyYyIsImlzUHJvZCIsIlZFUkNFTF9FTlYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLElBQUksR0FBRztBQUNYQyxPQUFLLEVBQUUsb0JBREk7QUFFWEMsUUFBTSxFQUFFLFlBRkc7QUFHWEMsT0FBSyxFQUFFLHNCQUhJO0FBSVhDLE1BQUksRUFBRSx1QkFKSztBQUtYQyxhQUFXLEVBQUUsb0JBTEY7QUFNWEMsTUFBSSxFQUFFLE9BTks7QUFNSTtBQUNmQyxZQUFVLEVBQUUsTUFQRDtBQU9TO0FBQ3BCQyxNQUFJLEVBQUUsWUFSSztBQVFTO0FBQ3BCQyxpQkFBZSxFQUFFLFNBVE47QUFTaUI7QUFDNUJDLGdCQUFjLEVBQUUsU0FWTDtBQVVnQjtBQUMzQkMsTUFBSSxFQUFFLEVBWEs7QUFXRDtBQUNWQyxPQUFLLEVBQUUsSUFaSTtBQVlFO0FBQ2JDLGNBQVksRUFBRSxDQWJIO0FBY1hDLFlBQVUsRUFBRSxLQWREO0FBZVhDLFdBQVMsRUFBRSxJQWZBO0FBZU07QUFDakJDLGFBQVcsRUFBRSxJQWhCRjtBQWdCUTtBQUNuQkMscUJBQW1CLEVBQUUsS0FqQlY7QUFpQmlCO0FBQzVCO0FBQ0FDLEtBQUcsRUFBRTtBQUNIQyxZQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixRQUFwQixDQURQO0FBRUhDLDBCQUFzQixFQUFFLEVBRnJCLENBRXdCOztBQUZ4QixHQW5CTTtBQXVCWDtBQUNBQyxjQUFZLEVBQUUsa0NBeEJIO0FBd0J1QztBQUNsREMsbUJBQWlCLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkF6QnBCO0FBeUJ5QztBQUNwREMsV0FBUyxFQUFFO0FBQ1RDLFlBQVEsRUFBRSxFQUREO0FBQ0s7QUFDZEMsZUFBVyxFQUFFO0FBQ1hDLGFBQU8sRUFBRSxFQURFO0FBQ0U7QUFDYkMscUJBQWUsRUFBRSxFQUZOO0FBRVU7QUFDckJDLGNBQVEsRUFBRSxFQUhDLENBR0U7O0FBSEYsS0FGSjtBQU9UQyxZQUFRLEVBQUU7QUFDUkMsbUJBQWEsRUFBRSxFQURQLENBQ1U7O0FBRFY7QUFQRCxHQTFCQTtBQXFDWEMsU0FBTyxFQUFFO0FBQ1A7QUFDQVAsWUFBUSxFQUFFLFlBRkg7QUFFaUI7QUFDeEJRLGdCQUFZLEVBQUU7QUFDWkMsVUFBSSxFQUFFLEVBRE07QUFDRjtBQUNWQyxXQUFLLEVBQUUsRUFGSztBQUdaQyxXQUFLLEVBQUUsRUFISztBQUlaQyxjQUFRLEVBQUUsRUFKRTtBQUtaQyxrQkFBWSxFQUFFLEVBTEY7QUFNWkMseUJBQW1CLEVBQUU7QUFOVCxLQUhQO0FBV1BDLG9CQUFnQixFQUFFO0FBQ2hCTixVQUFJLEVBQUU7QUFEVSxLQVhYO0FBY1BPLGdCQUFZLEVBQUU7QUFDWkMsV0FBSyxFQUFFLEVBREs7QUFDRDtBQUNYQyxVQUFJLEVBQUUsb0JBRk07QUFFZ0I7QUFDNUJDLGVBQVMsRUFBRSxvQ0FIQyxDQUdvQzs7QUFIcEM7QUFkUCxHQXJDRTtBQXlEWEMsUUFBTSxFQUFFeEIsT0FBTyxDQUFDQyxHQUFSLENBQVl3QixVQUFaLEtBQTJCLFlBekR4QixDQXlEcUM7O0FBekRyQyxDQUFiLEMsQ0EyREE7O0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxELElBQWpCIiwiZmlsZSI6Ii4vYmxvZy5jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCTE9HID0ge1xuICB0aXRsZTogJ0ZhbiBKaW5nYm9cXCdzIEJsb2cnLFxuICBhdXRob3I6ICdGYW4gSmluZ2JvJyxcbiAgZW1haWw6ICdmYW5qaW5nYm8xQGdtYWlsLmNvbScsXG4gIGxpbms6ICdodHRwczovL2Zhbmppbmdiby5jb20nLFxuICBkZXNjcmlwdGlvbjogJ1RoZXJlIGlzIG5vIHNwb29uLicsXG4gIGxhbmc6ICd6aC1DTicsIC8vIFsnZW4tVVMnLCAnemgtQ04nLCAnemgtSEsnLCAnemgtVFcnLCAnamEtSlAnXVxuICBhcHBlYXJhbmNlOiAnYXV0bycsIC8vIFsnbGlnaHQnLCAnZGFyaycsICdhdXRvJ10sXG4gIGZvbnQ6ICdzYW5zLXNlcmlmJywgLy8gWydzYW5zLXNlcmlmJywgJ3NlcmlmJ11cbiAgbGlnaHRCYWNrZ3JvdW5kOiAnI2ZmZmZmZicsIC8vIHVzZSBoZXggdmFsdWUsIGRvbid0IGZvcmdldCAnIycgZS5nICNmZmZlZmNcbiAgZGFya0JhY2tncm91bmQ6ICcjMTgxODFCJywgLy8gdXNlIGhleCB2YWx1ZSwgZG9uJ3QgZm9yZ2V0ICcjJ1xuICBwYXRoOiAnJywgLy8gbGVhdmUgdGhpcyBlbXB0eSB1bmxlc3MgeW91IHdhbnQgdG8gZGVwbG95IE5vYmVsaXVtIGluIGEgZm9sZGVyXG4gIHNpbmNlOiAyMDE5LCAvLyBpZiBsZWF2ZSB0aGlzIGVtcHR5LCBjdXJyZW50IHllYXIgd2lsbCBiZSB1c2VkLlxuICBwb3N0c1BlclBhZ2U6IDcsXG4gIHNvcnRCeURhdGU6IGZhbHNlLFxuICBzaG93QWJvdXQ6IHRydWUsIC8vIFdJUFxuICBzaG93QXJjaGl2ZTogdHJ1ZSwgLy8gV0lQXG4gIGF1dG9Db2xsYXBzZWROYXZCYXI6IGZhbHNlLCAvLyB0aGUgYXV0b21hdGljYWxseSBjb2xsYXBzZWQgbmF2aWdhdGlvbiBiYXJcbiAgLy9zb2NpYWxMaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9jcmFpZ2FyeWhhcnQnLFxuICBzZW86IHtcbiAgICBrZXl3b3JkczogWydCbG9nJywgJ1dlYnNpdGUnLCAnTm90aW9uJ10sXG4gICAgZ29vZ2xlU2l0ZVZlcmlmaWNhdGlvbjogJycgLy8gUmVtb3ZlIHRoZSB2YWx1ZSBvciByZXBsYWNlIGl0IHdpdGggeW91ciBvd24gZ29vZ2xlIHNpdGUgdmVyaWZpY2F0aW9uIGNvZGVcbiAgfSxcbiAgLy9ub3Rpb25QYWdlSWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9QQUdFX0lELCAvLyBETyBOT1QgQ0hBTkdFIFRISVPvvIHvvIHvvIFcbiAgbm90aW9uUGFnZUlkOiAnNDM2YzVmNDA2OGM0NGI5ZThiODkwZTU4ZDI1ZGNlMDknLCAvLyBETyBOT1QgQ0hBTkdFIFRISVPvvIHvvIHvvIFcbiAgbm90aW9uQWNjZXNzVG9rZW46IHByb2Nlc3MuZW52Lk5PVElPTl9BQ0NFU1NfVE9LRU4sIC8vIFVzZWZ1bCBpZiB5b3UgcHJlZmVyIG5vdCB0byBtYWtlIHlvdXIgZGF0YWJhc2UgcHVibGljXG4gIGFuYWx5dGljczoge1xuICAgIHByb3ZpZGVyOiAnJywgLy8gQ3VycmVudGx5IHdlIHN1cHBvcnQgR29vZ2xlIEFuYWx5dGljcyBhbmQgQWNrZWUsIHBsZWFzZSBmaWxsIHdpdGggJ2dhJyBvciAnYWNrZWUnLCBsZWF2ZSBpdCBlbXB0eSB0byBkaXNhYmxlIGl0LlxuICAgIGFja2VlQ29uZmlnOiB7XG4gICAgICB0cmFja2VyOiAnJywgLy8gZS5nICdodHRwczovL2Fja2VlLmNyYWlnYXJ5Lm5ldC90cmFja2VyLmpzJ1xuICAgICAgZGF0YUFja2VlU2VydmVyOiAnJywgLy8gZS5nIGh0dHBzOi8vYWNrZWUuY3JhaWdhcnkubmV0ICwgZG9uJ3QgZW5kIHdpdGggYSBzbGFzaFxuICAgICAgZG9tYWluSWQ6ICcnIC8vIGUuZyAnMGUyMjU3YTgtNTRkNC00ODQ3LTkxYTEtMDMxMWVhNDhjYzdiJ1xuICAgIH0sXG4gICAgZ2FDb25maWc6IHtcbiAgICAgIG1lYXN1cmVtZW50SWQ6ICcnIC8vIGUuZzogRy1YWFhYWFhYWFhYXG4gICAgfVxuICB9LFxuICBjb21tZW50OiB7XG4gICAgLy8gc3VwcG9ydCBwcm92aWRlcjogZ2l0YWxrLCB1dHRlcmFuY2VzLCBjdXNkaXNcbiAgICBwcm92aWRlcjogJ3V0dGVyYW5jZXMnLCAvLyBsZWF2ZSBpdCBlbXB0eSBpZiB5b3UgZG9uJ3QgbmVlZCBhbnkgY29tbWVudCBwbHVnaW5cbiAgICBnaXRhbGtDb25maWc6IHtcbiAgICAgIHJlcG86ICcnLCAvLyBUaGUgcmVwb3NpdG9yeSBvZiBzdG9yZSBjb21tZW50c1xuICAgICAgb3duZXI6ICcnLFxuICAgICAgYWRtaW46IFtdLFxuICAgICAgY2xpZW50SUQ6ICcnLFxuICAgICAgY2xpZW50U2VjcmV0OiAnJyxcbiAgICAgIGRpc3RyYWN0aW9uRnJlZU1vZGU6IGZhbHNlXG4gICAgfSxcbiAgICB1dHRlcmFuY2VzQ29uZmlnOiB7XG4gICAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2ZseWluZ3BvdC9ibG9nLWNvbW1lbnQnXG4gICAgfSxcbiAgICBjdXNkaXNDb25maWc6IHtcbiAgICAgIGFwcElkOiAnJywgLy8gZGF0YS1hcHAtaWRcbiAgICAgIGhvc3Q6ICdodHRwczovL2N1c2Rpcy5jb20nLCAvLyBkYXRhLWhvc3QsIGNoYW5nZSB0aGlzIGlmIHlvdSdyZSB1c2luZyBzZWxmLWhvc3RlZCB2ZXJzaW9uXG4gICAgICBzY3JpcHRTcmM6ICdodHRwczovL2N1c2Rpcy5jb20vanMvY3VzZGlzLmVzLmpzJyAvLyBjaGFuZ2UgdGhpcyBpZiB5b3UncmUgdXNpbmcgc2VsZi1ob3N0ZWQgdmVyc2lvblxuICAgIH1cbiAgfSxcbiAgaXNQcm9kOiBwcm9jZXNzLmVudi5WRVJDRUxfRU5WID09PSAncHJvZHVjdGlvbicgLy8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBkZXZlbG9wbWVudCBhbmQgcHJvZHVjdGlvbiBlbnZpcm9ubWVudCAocmVmOiBodHRwczovL3ZlcmNlbC5jb20vZG9jcy9lbnZpcm9ubWVudC12YXJpYWJsZXMjc3lzdGVtLWVudmlyb25tZW50LXZhcmlhYmxlcylcbn1cbi8vIGV4cG9ydCBkZWZhdWx0IEJMT0dcbm1vZHVsZS5leHBvcnRzID0gQkxPR1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./blog.config.js\n");

/***/ })

});