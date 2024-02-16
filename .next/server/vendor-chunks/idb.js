"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/idb";
exports.ids = ["vendor-chunks/idb"];
exports.modules = {

/***/ "(ssr)/./node_modules/idb/build/index.js":
/*!*****************************************!*\
  !*** ./node_modules/idb/build/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteDB: () => (/* binding */ deleteDB),\n/* harmony export */   openDB: () => (/* binding */ openDB),\n/* harmony export */   unwrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),\n/* harmony export */   wrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)\n/* harmony export */ });\n/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ \"(ssr)/./node_modules/idb/build/wrap-idb-value.js\");\n\n\n/**\n * Open a database.\n *\n * @param name Name of the database.\n * @param version Schema version.\n * @param callbacks Additional callbacks.\n */ function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {\n    const request = indexedDB.open(name, version);\n    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);\n    if (upgrade) {\n        request.addEventListener(\"upgradeneeded\", (event)=>{\n            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);\n        });\n    }\n    if (blocked) {\n        request.addEventListener(\"blocked\", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405\n            event.oldVersion, event.newVersion, event));\n    }\n    openPromise.then((db)=>{\n        if (terminated) db.addEventListener(\"close\", ()=>terminated());\n        if (blocking) {\n            db.addEventListener(\"versionchange\", (event)=>blocking(event.oldVersion, event.newVersion, event));\n        }\n    }).catch(()=>{});\n    return openPromise;\n}\n/**\n * Delete a database.\n *\n * @param name Name of the database.\n */ function deleteDB(name, { blocked } = {}) {\n    const request = indexedDB.deleteDatabase(name);\n    if (blocked) {\n        request.addEventListener(\"blocked\", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405\n            event.oldVersion, event));\n    }\n    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(()=>undefined);\n}\nconst readMethods = [\n    \"get\",\n    \"getKey\",\n    \"getAll\",\n    \"getAllKeys\",\n    \"count\"\n];\nconst writeMethods = [\n    \"put\",\n    \"add\",\n    \"delete\",\n    \"clear\"\n];\nconst cachedMethods = new Map();\nfunction getMethod(target, prop) {\n    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === \"string\")) {\n        return;\n    }\n    if (cachedMethods.get(prop)) return cachedMethods.get(prop);\n    const targetFuncName = prop.replace(/FromIndex$/, \"\");\n    const useIndex = prop !== targetFuncName;\n    const isWrite = writeMethods.includes(targetFuncName);\n    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.\n    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {\n        return;\n    }\n    const method = async function(storeName, ...args) {\n        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(\n        const tx = this.transaction(storeName, isWrite ? \"readwrite\" : \"readonly\");\n        let target = tx.store;\n        if (useIndex) target = target.index(args.shift());\n        // Must reject if op rejects.\n        // If it's a write operation, must reject if tx.done rejects.\n        // Must reject with op rejection first.\n        // Must resolve with op value.\n        // Must handle both promises (no unhandled rejections)\n        return (await Promise.all([\n            target[targetFuncName](...args),\n            isWrite && tx.done\n        ]))[0];\n    };\n    cachedMethods.set(prop, method);\n    return method;\n}\n(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps)=>({\n        ...oldTraps,\n        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),\n        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)\n    }));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1FO0FBQ047QUFFN0Q7Ozs7OztDQU1DLEdBQ0QsU0FBU00sT0FBT0MsSUFBSSxFQUFFQyxPQUFPLEVBQUUsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFFLE1BQU1DLFVBQVVDLFVBQVVDLElBQUksQ0FBQ1IsTUFBTUM7SUFDckMsTUFBTVEsY0FBY2YscURBQUlBLENBQUNZO0lBQ3pCLElBQUlILFNBQVM7UUFDVEcsUUFBUUksZ0JBQWdCLENBQUMsaUJBQWlCLENBQUNDO1lBQ3ZDUixRQUFRVCxxREFBSUEsQ0FBQ1ksUUFBUU0sTUFBTSxHQUFHRCxNQUFNRSxVQUFVLEVBQUVGLE1BQU1HLFVBQVUsRUFBRXBCLHFEQUFJQSxDQUFDWSxRQUFRUyxXQUFXLEdBQUdKO1FBQ2pHO0lBQ0o7SUFDQSxJQUFJVCxTQUFTO1FBQ1RJLFFBQVFJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQ0MsUUFBVVQsUUFDL0MscUZBQXFGO1lBQ3JGUyxNQUFNRSxVQUFVLEVBQUVGLE1BQU1HLFVBQVUsRUFBRUg7SUFDeEM7SUFDQUYsWUFDS08sSUFBSSxDQUFDLENBQUNDO1FBQ1AsSUFBSVosWUFDQVksR0FBR1AsZ0JBQWdCLENBQUMsU0FBUyxJQUFNTDtRQUN2QyxJQUFJRCxVQUFVO1lBQ1ZhLEdBQUdQLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDQyxRQUFVUCxTQUFTTyxNQUFNRSxVQUFVLEVBQUVGLE1BQU1HLFVBQVUsRUFBRUg7UUFDakc7SUFDSixHQUNLTyxLQUFLLENBQUMsS0FBUTtJQUNuQixPQUFPVDtBQUNYO0FBQ0E7Ozs7Q0FJQyxHQUNELFNBQVNVLFNBQVNuQixJQUFJLEVBQUUsRUFBRUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLE1BQU1JLFVBQVVDLFVBQVVhLGNBQWMsQ0FBQ3BCO0lBQ3pDLElBQUlFLFNBQVM7UUFDVEksUUFBUUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDQyxRQUFVVCxRQUMvQyxxRkFBcUY7WUFDckZTLE1BQU1FLFVBQVUsRUFBRUY7SUFDdEI7SUFDQSxPQUFPakIscURBQUlBLENBQUNZLFNBQVNVLElBQUksQ0FBQyxJQUFNSztBQUNwQztBQUVBLE1BQU1DLGNBQWM7SUFBQztJQUFPO0lBQVU7SUFBVTtJQUFjO0NBQVE7QUFDdEUsTUFBTUMsZUFBZTtJQUFDO0lBQU87SUFBTztJQUFVO0NBQVE7QUFDdEQsTUFBTUMsZ0JBQWdCLElBQUlDO0FBQzFCLFNBQVNDLFVBQVVDLE1BQU0sRUFBRUMsSUFBSTtJQUMzQixJQUFJLENBQUVELENBQUFBLGtCQUFrQkUsZUFDcEIsQ0FBRUQsQ0FBQUEsUUFBUUQsTUFBSyxLQUNmLE9BQU9DLFNBQVMsUUFBTyxHQUFJO1FBQzNCO0lBQ0o7SUFDQSxJQUFJSixjQUFjTSxHQUFHLENBQUNGLE9BQ2xCLE9BQU9KLGNBQWNNLEdBQUcsQ0FBQ0Y7SUFDN0IsTUFBTUcsaUJBQWlCSCxLQUFLSSxPQUFPLENBQUMsY0FBYztJQUNsRCxNQUFNQyxXQUFXTCxTQUFTRztJQUMxQixNQUFNRyxVQUFVWCxhQUFhWSxRQUFRLENBQUNKO0lBQ3RDLElBQ0EsNEVBQTRFO0lBQzVFLENBQUVBLENBQUFBLGtCQUFrQixDQUFDRSxXQUFXRyxXQUFXQyxjQUFhLEVBQUdDLFNBQVMsS0FDaEUsQ0FBRUosQ0FBQUEsV0FBV1osWUFBWWEsUUFBUSxDQUFDSixlQUFjLEdBQUk7UUFDcEQ7SUFDSjtJQUNBLE1BQU1RLFNBQVMsZUFBZ0JDLFNBQVMsRUFBRSxHQUFHQyxJQUFJO1FBQzdDLHdFQUF3RTtRQUN4RSxNQUFNQyxLQUFLLElBQUksQ0FBQzNCLFdBQVcsQ0FBQ3lCLFdBQVdOLFVBQVUsY0FBYztRQUMvRCxJQUFJUCxTQUFTZSxHQUFHQyxLQUFLO1FBQ3JCLElBQUlWLFVBQ0FOLFNBQVNBLE9BQU9pQixLQUFLLENBQUNILEtBQUtJLEtBQUs7UUFDcEMsNkJBQTZCO1FBQzdCLDZEQUE2RDtRQUM3RCx1Q0FBdUM7UUFDdkMsOEJBQThCO1FBQzlCLHNEQUFzRDtRQUN0RCxPQUFPLENBQUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDO1lBQ3RCcEIsTUFBTSxDQUFDSSxlQUFlLElBQUlVO1lBQzFCUCxXQUFXUSxHQUFHTSxJQUFJO1NBQ3JCLEVBQUUsQ0FBQyxFQUFFO0lBQ1Y7SUFDQXhCLGNBQWN5QixHQUFHLENBQUNyQixNQUFNVztJQUN4QixPQUFPQTtBQUNYO0FBQ0EzQyxxREFBWUEsQ0FBQyxDQUFDc0QsV0FBYztRQUN4QixHQUFHQSxRQUFRO1FBQ1hwQixLQUFLLENBQUNILFFBQVFDLE1BQU11QixXQUFhekIsVUFBVUMsUUFBUUMsU0FBU3NCLFNBQVNwQixHQUFHLENBQUNILFFBQVFDLE1BQU11QjtRQUN2RkMsS0FBSyxDQUFDekIsUUFBUUMsT0FBUyxDQUFDLENBQUNGLFVBQVVDLFFBQVFDLFNBQVNzQixTQUFTRSxHQUFHLENBQUN6QixRQUFRQztJQUM3RTtBQUU0QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtY291bnRlci1waWNrLy4vbm9kZV9tb2R1bGVzL2lkYi9idWlsZC9pbmRleC5qcz85MTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHcgYXMgd3JhcCwgciBhcyByZXBsYWNlVHJhcHMgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmV4cG9ydCB7IHUgYXMgdW53cmFwLCB3IGFzIHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmZ1bmN0aW9uIG9wZW5EQihuYW1lLCB2ZXJzaW9uLCB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCk7XG4gICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGdyYWRlKHdyYXAocmVxdWVzdC5yZXN1bHQpLCBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24pLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgb3BlblByb21pc2VcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgICBpZiAoYmxvY2tpbmcpIHtcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ3ZlcnNpb25jaGFuZ2UnLCAoZXZlbnQpID0+IGJsb2NraW5nKGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICByZXR1cm4gb3BlblByb21pc2U7XG59XG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5mdW5jdGlvbiBkZWxldGVEQihuYW1lLCB7IGJsb2NrZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKVxuICAgICAgICByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG4gICAgY29uc3QgdGFyZ2V0RnVuY05hbWUgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gICAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHguc3RvcmU7XG4gICAgICAgIGlmICh1c2VJbmRleClcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgICAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgICAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgICAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAgICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgICAgXSkpWzBdO1xuICAgIH07XG4gICAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgICByZXR1cm4gbWV0aG9kO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gICAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PiAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApLFxufSkpO1xuXG5leHBvcnQgeyBkZWxldGVEQiwgb3BlbkRCIH07XG4iXSwibmFtZXMiOlsidyIsIndyYXAiLCJyIiwicmVwbGFjZVRyYXBzIiwidSIsInVud3JhcCIsIm9wZW5EQiIsIm5hbWUiLCJ2ZXJzaW9uIiwiYmxvY2tlZCIsInVwZ3JhZGUiLCJibG9ja2luZyIsInRlcm1pbmF0ZWQiLCJyZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9wZW5Qcm9taXNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicmVzdWx0Iiwib2xkVmVyc2lvbiIsIm5ld1ZlcnNpb24iLCJ0cmFuc2FjdGlvbiIsInRoZW4iLCJkYiIsImNhdGNoIiwiZGVsZXRlREIiLCJkZWxldGVEYXRhYmFzZSIsInVuZGVmaW5lZCIsInJlYWRNZXRob2RzIiwid3JpdGVNZXRob2RzIiwiY2FjaGVkTWV0aG9kcyIsIk1hcCIsImdldE1ldGhvZCIsInRhcmdldCIsInByb3AiLCJJREJEYXRhYmFzZSIsImdldCIsInRhcmdldEZ1bmNOYW1lIiwicmVwbGFjZSIsInVzZUluZGV4IiwiaXNXcml0ZSIsImluY2x1ZGVzIiwiSURCSW5kZXgiLCJJREJPYmplY3RTdG9yZSIsInByb3RvdHlwZSIsIm1ldGhvZCIsInN0b3JlTmFtZSIsImFyZ3MiLCJ0eCIsInN0b3JlIiwiaW5kZXgiLCJzaGlmdCIsIlByb21pc2UiLCJhbGwiLCJkb25lIiwic2V0Iiwib2xkVHJhcHMiLCJyZWNlaXZlciIsImhhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/idb/build/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/idb/build/wrap-idb-value.js":
/*!**************************************************!*\
  !*** ./node_modules/idb/build/wrap-idb-value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   a: () => (/* binding */ reverseTransformCache),\n/* harmony export */   i: () => (/* binding */ instanceOfAny),\n/* harmony export */   r: () => (/* binding */ replaceTraps),\n/* harmony export */   u: () => (/* binding */ unwrap),\n/* harmony export */   w: () => (/* binding */ wrap)\n/* harmony export */ });\nconst instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);\nlet idbProxyableTypes;\nlet cursorAdvanceMethods;\n// This is a function to prevent it throwing up in node environments.\nfunction getIdbProxyableTypes() {\n    return idbProxyableTypes || (idbProxyableTypes = [\n        IDBDatabase,\n        IDBObjectStore,\n        IDBIndex,\n        IDBCursor,\n        IDBTransaction\n    ]);\n}\n// This is a function to prevent it throwing up in node environments.\nfunction getCursorAdvanceMethods() {\n    return cursorAdvanceMethods || (cursorAdvanceMethods = [\n        IDBCursor.prototype.advance,\n        IDBCursor.prototype.continue,\n        IDBCursor.prototype.continuePrimaryKey\n    ]);\n}\nconst cursorRequestMap = new WeakMap();\nconst transactionDoneMap = new WeakMap();\nconst transactionStoreNamesMap = new WeakMap();\nconst transformCache = new WeakMap();\nconst reverseTransformCache = new WeakMap();\nfunction promisifyRequest(request) {\n    const promise = new Promise((resolve, reject)=>{\n        const unlisten = ()=>{\n            request.removeEventListener(\"success\", success);\n            request.removeEventListener(\"error\", error);\n        };\n        const success = ()=>{\n            resolve(wrap(request.result));\n            unlisten();\n        };\n        const error = ()=>{\n            reject(request.error);\n            unlisten();\n        };\n        request.addEventListener(\"success\", success);\n        request.addEventListener(\"error\", error);\n    });\n    promise.then((value)=>{\n        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval\n        // (see wrapFunction).\n        if (value instanceof IDBCursor) {\n            cursorRequestMap.set(value, request);\n        }\n    // Catching to avoid \"Uncaught Promise exceptions\"\n    }).catch(()=>{});\n    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This\n    // is because we create many promises from a single IDBRequest.\n    reverseTransformCache.set(promise, request);\n    return promise;\n}\nfunction cacheDonePromiseForTransaction(tx) {\n    // Early bail if we've already created a done promise for this transaction.\n    if (transactionDoneMap.has(tx)) return;\n    const done = new Promise((resolve, reject)=>{\n        const unlisten = ()=>{\n            tx.removeEventListener(\"complete\", complete);\n            tx.removeEventListener(\"error\", error);\n            tx.removeEventListener(\"abort\", error);\n        };\n        const complete = ()=>{\n            resolve();\n            unlisten();\n        };\n        const error = ()=>{\n            reject(tx.error || new DOMException(\"AbortError\", \"AbortError\"));\n            unlisten();\n        };\n        tx.addEventListener(\"complete\", complete);\n        tx.addEventListener(\"error\", error);\n        tx.addEventListener(\"abort\", error);\n    });\n    // Cache it for later retrieval.\n    transactionDoneMap.set(tx, done);\n}\nlet idbProxyTraps = {\n    get (target, prop, receiver) {\n        if (target instanceof IDBTransaction) {\n            // Special handling for transaction.done.\n            if (prop === \"done\") return transactionDoneMap.get(target);\n            // Polyfill for objectStoreNames because of Edge.\n            if (prop === \"objectStoreNames\") {\n                return target.objectStoreNames || transactionStoreNamesMap.get(target);\n            }\n            // Make tx.store return the only store in the transaction, or undefined if there are many.\n            if (prop === \"store\") {\n                return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);\n            }\n        }\n        // Else transform whatever we get back.\n        return wrap(target[prop]);\n    },\n    set (target, prop, value) {\n        target[prop] = value;\n        return true;\n    },\n    has (target, prop) {\n        if (target instanceof IDBTransaction && (prop === \"done\" || prop === \"store\")) {\n            return true;\n        }\n        return prop in target;\n    }\n};\nfunction replaceTraps(callback) {\n    idbProxyTraps = callback(idbProxyTraps);\n}\nfunction wrapFunction(func) {\n    // Due to expected object equality (which is enforced by the caching in `wrap`), we\n    // only create one new func per func.\n    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.\n    if (func === IDBDatabase.prototype.transaction && !(\"objectStoreNames\" in IDBTransaction.prototype)) {\n        return function(storeNames, ...args) {\n            const tx = func.call(unwrap(this), storeNames, ...args);\n            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [\n                storeNames\n            ]);\n            return wrap(tx);\n        };\n    }\n    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In\n    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the\n    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense\n    // with real promises, so each advance methods returns a new promise for the cursor object, or\n    // undefined if the end of the cursor has been reached.\n    if (getCursorAdvanceMethods().includes(func)) {\n        return function(...args) {\n            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n            // the original object.\n            func.apply(unwrap(this), args);\n            return wrap(cursorRequestMap.get(this));\n        };\n    }\n    return function(...args) {\n        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n        // the original object.\n        return wrap(func.apply(unwrap(this), args));\n    };\n}\nfunction transformCachableValue(value) {\n    if (typeof value === \"function\") return wrapFunction(value);\n    // This doesn't return, it just creates a 'done' promise for the transaction,\n    // which is later returned for transaction.done (see idbObjectHandler).\n    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);\n    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);\n    // Return the same value back if we're not going to transform it.\n    return value;\n}\nfunction wrap(value) {\n    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because\n    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.\n    if (value instanceof IDBRequest) return promisifyRequest(value);\n    // If we've already transformed this value before, reuse the transformed value.\n    // This is faster, but it also provides object equality.\n    if (transformCache.has(value)) return transformCache.get(value);\n    const newValue = transformCachableValue(value);\n    // Not all types are transformed.\n    // These may be primitive types, so they can't be WeakMap keys.\n    if (newValue !== value) {\n        transformCache.set(value, newValue);\n        reverseTransformCache.set(newValue, value);\n    }\n    return newValue;\n}\nconst unwrap = (value)=>reverseTransformCache.get(value);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL3dyYXAtaWRiLXZhbHVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTUEsZ0JBQWdCLENBQUNDLFFBQVFDLGVBQWlCQSxhQUFhQyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUgsa0JBQWtCRztBQUUzRixJQUFJQztBQUNKLElBQUlDO0FBQ0oscUVBQXFFO0FBQ3JFLFNBQVNDO0lBQ0wsT0FBUUYscUJBQ0hBLENBQUFBLG9CQUFvQjtRQUNqQkc7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7S0FDSDtBQUNUO0FBQ0EscUVBQXFFO0FBQ3JFLFNBQVNDO0lBQ0wsT0FBUVAsd0JBQ0hBLENBQUFBLHVCQUF1QjtRQUNwQkssVUFBVUcsU0FBUyxDQUFDQyxPQUFPO1FBQzNCSixVQUFVRyxTQUFTLENBQUNFLFFBQVE7UUFDNUJMLFVBQVVHLFNBQVMsQ0FBQ0csa0JBQWtCO0tBQ3pDO0FBQ1Q7QUFDQSxNQUFNQyxtQkFBbUIsSUFBSUM7QUFDN0IsTUFBTUMscUJBQXFCLElBQUlEO0FBQy9CLE1BQU1FLDJCQUEyQixJQUFJRjtBQUNyQyxNQUFNRyxpQkFBaUIsSUFBSUg7QUFDM0IsTUFBTUksd0JBQXdCLElBQUlKO0FBQ2xDLFNBQVNLLGlCQUFpQkMsT0FBTztJQUM3QixNQUFNQyxVQUFVLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDbEMsTUFBTUMsV0FBVztZQUNiTCxRQUFRTSxtQkFBbUIsQ0FBQyxXQUFXQztZQUN2Q1AsUUFBUU0sbUJBQW1CLENBQUMsU0FBU0U7UUFDekM7UUFDQSxNQUFNRCxVQUFVO1lBQ1pKLFFBQVFNLEtBQUtULFFBQVFVLE1BQU07WUFDM0JMO1FBQ0o7UUFDQSxNQUFNRyxRQUFRO1lBQ1ZKLE9BQU9KLFFBQVFRLEtBQUs7WUFDcEJIO1FBQ0o7UUFDQUwsUUFBUVcsZ0JBQWdCLENBQUMsV0FBV0o7UUFDcENQLFFBQVFXLGdCQUFnQixDQUFDLFNBQVNIO0lBQ3RDO0lBQ0FQLFFBQ0tXLElB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LENBQUN6QixRQUFVZixzQkFBc0J5QixHQUFHLENBQUNWO0FBRWlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1jb3VudGVyLXBpY2svLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL3dyYXAtaWRiLXZhbHVlLmpzPzg2OWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5zdGFuY2VPZkFueSA9IChvYmplY3QsIGNvbnN0cnVjdG9ycykgPT4gY29uc3RydWN0b3JzLnNvbWUoKGMpID0+IG9iamVjdCBpbnN0YW5jZW9mIGMpO1xuXG5sZXQgaWRiUHJveHlhYmxlVHlwZXM7XG5sZXQgY3Vyc29yQWR2YW5jZU1ldGhvZHM7XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldElkYlByb3h5YWJsZVR5cGVzKCkge1xuICAgIHJldHVybiAoaWRiUHJveHlhYmxlVHlwZXMgfHxcbiAgICAgICAgKGlkYlByb3h5YWJsZVR5cGVzID0gW1xuICAgICAgICAgICAgSURCRGF0YWJhc2UsXG4gICAgICAgICAgICBJREJPYmplY3RTdG9yZSxcbiAgICAgICAgICAgIElEQkluZGV4LFxuICAgICAgICAgICAgSURCQ3Vyc29yLFxuICAgICAgICAgICAgSURCVHJhbnNhY3Rpb24sXG4gICAgICAgIF0pKTtcbn1cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKSB7XG4gICAgcmV0dXJuIChjdXJzb3JBZHZhbmNlTWV0aG9kcyB8fFxuICAgICAgICAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgPSBbXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmFkdmFuY2UsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZVByaW1hcnlLZXksXG4gICAgICAgIF0pKTtcbn1cbmNvbnN0IGN1cnNvclJlcXVlc3RNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHdyYXAocmVxdWVzdC5yZXN1bHQpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgfSk7XG4gICAgcHJvbWlzZVxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgLy8gU2luY2UgY3Vyc29yaW5nIHJldXNlcyB0aGUgSURCUmVxdWVzdCAoKnNpZ2gqKSwgd2UgY2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbFxuICAgICAgICAvLyAoc2VlIHdyYXBGdW5jdGlvbikuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQkN1cnNvcikge1xuICAgICAgICAgICAgY3Vyc29yUmVxdWVzdE1hcC5zZXQodmFsdWUsIHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoaW5nIHRvIGF2b2lkIFwiVW5jYXVnaHQgUHJvbWlzZSBleGNlcHRpb25zXCJcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBkb2Vzbid0IGV4aXN0IGluIHRyYW5zZm9ybUNhY2hlLiBUaGlzXG4gICAgLy8gaXMgYmVjYXVzZSB3ZSBjcmVhdGUgbWFueSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm9taXNlLCByZXF1ZXN0KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih0eCkge1xuICAgIC8vIEVhcmx5IGJhaWwgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIGEgZG9uZSBwcm9taXNlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICAgIGlmICh0cmFuc2FjdGlvbkRvbmVNYXAuaGFzKHR4KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHR4LmVycm9yIHx8IG5ldyBET01FeGNlcHRpb24oJ0Fib3J0RXJyb3InLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgfSk7XG4gICAgLy8gQ2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbC5cbiAgICB0cmFuc2FjdGlvbkRvbmVNYXAuc2V0KHR4LCBkb25lKTtcbn1cbmxldCBpZGJQcm94eVRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdHJhbnNhY3Rpb24uZG9uZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnZG9uZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRG9uZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFBvbHlmaWxsIGZvciBvYmplY3RTdG9yZU5hbWVzIGJlY2F1c2Ugb2YgRWRnZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnb2JqZWN0U3RvcmVOYW1lcycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0Lm9iamVjdFN0b3JlTmFtZXMgfHwgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0eC5zdG9yZSByZXR1cm4gdGhlIG9ubHkgc3RvcmUgaW4gdGhlIHRyYW5zYWN0aW9uLCBvciB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG1hbnkuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3N0b3JlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzFdXG4gICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIDogcmVjZWl2ZXIub2JqZWN0U3RvcmUocmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWxzZSB0cmFuc2Zvcm0gd2hhdGV2ZXIgd2UgZ2V0IGJhY2suXG4gICAgICAgIHJldHVybiB3cmFwKHRhcmdldFtwcm9wXSk7XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbiAmJlxuICAgICAgICAgICAgKHByb3AgPT09ICdkb25lJyB8fCBwcm9wID09PSAnc3RvcmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0O1xuICAgIH0sXG59O1xuZnVuY3Rpb24gcmVwbGFjZVRyYXBzKGNhbGxiYWNrKSB7XG4gICAgaWRiUHJveHlUcmFwcyA9IGNhbGxiYWNrKGlkYlByb3h5VHJhcHMpO1xufVxuZnVuY3Rpb24gd3JhcEZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAvLyBEdWUgdG8gZXhwZWN0ZWQgb2JqZWN0IGVxdWFsaXR5ICh3aGljaCBpcyBlbmZvcmNlZCBieSB0aGUgY2FjaGluZyBpbiBgd3JhcGApLCB3ZVxuICAgIC8vIG9ubHkgY3JlYXRlIG9uZSBuZXcgZnVuYyBwZXIgZnVuYy5cbiAgICAvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBvYmplY3RTdG9yZU5hbWVzIChib29vKSwgc28gd2UgcG9seWZpbGwgaXQgaGVyZS5cbiAgICBpZiAoZnVuYyA9PT0gSURCRGF0YWJhc2UucHJvdG90eXBlLnRyYW5zYWN0aW9uICYmXG4gICAgICAgICEoJ29iamVjdFN0b3JlTmFtZXMnIGluIElEQlRyYW5zYWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yZU5hbWVzLCAuLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCB0eCA9IGZ1bmMuY2FsbCh1bndyYXAodGhpcyksIHN0b3JlTmFtZXMsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLnNldCh0eCwgc3RvcmVOYW1lcy5zb3J0ID8gc3RvcmVOYW1lcy5zb3J0KCkgOiBbc3RvcmVOYW1lc10pO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAodHgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBDdXJzb3IgbWV0aG9kcyBhcmUgc3BlY2lhbCwgYXMgdGhlIGJlaGF2aW91ciBpcyBhIGxpdHRsZSBtb3JlIGRpZmZlcmVudCB0byBzdGFuZGFyZCBJREIuIEluXG4gICAgLy8gSURCLCB5b3UgYWR2YW5jZSB0aGUgY3Vyc29yIGFuZCB3YWl0IGZvciBhIG5ldyAnc3VjY2Vzcycgb24gdGhlIElEQlJlcXVlc3QgdGhhdCBnYXZlIHlvdSB0aGVcbiAgICAvLyBjdXJzb3IuIEl0J3Mga2luZGEgbGlrZSBhIHByb21pc2UgdGhhdCBjYW4gcmVzb2x2ZSB3aXRoIG1hbnkgdmFsdWVzLiBUaGF0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgIC8vIHdpdGggcmVhbCBwcm9taXNlcywgc28gZWFjaCBhZHZhbmNlIG1ldGhvZHMgcmV0dXJucyBhIG5ldyBwcm9taXNlIGZvciB0aGUgY3Vyc29yIG9iamVjdCwgb3JcbiAgICAvLyB1bmRlZmluZWQgaWYgdGhlIGVuZCBvZiB0aGUgY3Vyc29yIGhhcyBiZWVuIHJlYWNoZWQuXG4gICAgaWYgKGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkuaW5jbHVkZXMoZnVuYykpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICAgICAgZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAoY3Vyc29yUmVxdWVzdE1hcC5nZXQodGhpcykpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKVxuICAgICAgICBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuICAgIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG4gICAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gICAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gICAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmNvbnN0IHVud3JhcCA9ICh2YWx1ZSkgPT4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG5cbmV4cG9ydCB7IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBhcyBhLCBpbnN0YW5jZU9mQW55IGFzIGksIHJlcGxhY2VUcmFwcyBhcyByLCB1bndyYXAgYXMgdSwgd3JhcCBhcyB3IH07XG4iXSwibmFtZXMiOlsiaW5zdGFuY2VPZkFueSIsIm9iamVjdCIsImNvbnN0cnVjdG9ycyIsInNvbWUiLCJjIiwiaWRiUHJveHlhYmxlVHlwZXMiLCJjdXJzb3JBZHZhbmNlTWV0aG9kcyIsImdldElkYlByb3h5YWJsZVR5cGVzIiwiSURCRGF0YWJhc2UiLCJJREJPYmplY3RTdG9yZSIsIklEQkluZGV4IiwiSURCQ3Vyc29yIiwiSURCVHJhbnNhY3Rpb24iLCJnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcyIsInByb3RvdHlwZSIsImFkdmFuY2UiLCJjb250aW51ZSIsImNvbnRpbnVlUHJpbWFyeUtleSIsImN1cnNvclJlcXVlc3RNYXAiLCJXZWFrTWFwIiwidHJhbnNhY3Rpb25Eb25lTWFwIiwidHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwIiwidHJhbnNmb3JtQ2FjaGUiLCJyZXZlcnNlVHJhbnNmb3JtQ2FjaGUiLCJwcm9taXNpZnlSZXF1ZXN0IiwicmVxdWVzdCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVubGlzdGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN1Y2Nlc3MiLCJlcnJvciIsIndyYXAiLCJyZXN1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwidGhlbiIsInZhbHVlIiwic2V0IiwiY2F0Y2giLCJjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24iLCJ0eCIsImhhcyIsImRvbmUiLCJjb21wbGV0ZSIsIkRPTUV4Y2VwdGlvbiIsImlkYlByb3h5VHJhcHMiLCJnZXQiLCJ0YXJnZXQiLCJwcm9wIiwicmVjZWl2ZXIiLCJvYmplY3RTdG9yZU5hbWVzIiwidW5kZWZpbmVkIiwib2JqZWN0U3RvcmUiLCJyZXBsYWNlVHJhcHMiLCJjYWxsYmFjayIsIndyYXBGdW5jdGlvbiIsImZ1bmMiLCJ0cmFuc2FjdGlvbiIsInN0b3JlTmFtZXMiLCJhcmdzIiwiY2FsbCIsInVud3JhcCIsInNvcnQiLCJpbmNsdWRlcyIsImFwcGx5IiwidHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSIsIlByb3h5IiwiSURCUmVxdWVzdCIsIm5ld1ZhbHVlIiwiYSIsImkiLCJyIiwidSIsInciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/idb/build/wrap-idb-value.js\n");

/***/ })

};
;