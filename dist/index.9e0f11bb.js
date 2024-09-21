// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1K26Y":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f3d7a12a9e0f11bb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"iLTxj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _viewQuestion = require("./Views/viewQuestion");
var _viewQuestionDefault = parcelHelpers.interopDefault(_viewQuestion);
var _timerView = require("./Views/timerView");
var _timerViewDefault = parcelHelpers.interopDefault(_timerView);
const controllerQuestions = async function() {
    try {
        await _model.getQuizQuestions();
        (0, _viewQuestionDefault.default).render(_model.state.questions);
        (0, _timerViewDefault.default).countDown();
    } catch (error) {
        (0, _viewQuestionDefault.default).renderError(error);
    }
};
const controlerAnswer = function(answerChoosed, isChecked, QuestionID) {
    isChecked ? _model.setAnswerChoosed(answerChoosed, QuestionID) : _model.removeAnswerChoosed(answerChoosed, QuestionID);
// console.log(model.state.answers);
};
const controllerEvaluation = function() {
    _model.state.answers.forEach((answer, questionId)=>{
        (0, _viewQuestionDefault.default).renderEvaluation(answer, questionId, _model.state.questions[questionId]);
    });
};
const init = function() {
    // load event :
    (0, _viewQuestionDefault.default).addHandlerLoadQuestions(controllerQuestions);
    // --------------------
    (0, _viewQuestionDefault.default).addHandlerChooseQuestion(controlerAnswer);
    (0, _viewQuestionDefault.default).addHandlerValidQuestion();
    (0, _viewQuestionDefault.default).addHandlerEndQuiz(controllerEvaluation);
    (0, _viewQuestionDefault.default).addHandlerShowResults();
    (0, _viewQuestionDefault.default).addHandlerMoveBetweenQuestions();
};
init();

},{"./model":"itPMq","./Views/viewQuestion":"lGGtH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Views/timerView":"iFTY7"}],"itPMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getQuizQuestions", ()=>getQuizQuestions);
parcelHelpers.export(exports, "setAnswerChoosed", ()=>setAnswerChoosed);
parcelHelpers.export(exports, "removeAnswerChoosed", ()=>removeAnswerChoosed);
parcelHelpers.export(exports, "evaluation", ()=>evaluation);
var _config = require("./config");
const state = {
    questions: [],
    answers: new Map()
};
// get quize question
const parsAnswer = function(...answers) {
    const parser = new DOMParser();
    const answersAfterparsing = answers.map((answer)=>{
        const doc = parser.parseFromString(answer, "text/html");
        return doc.documentElement.textContent.trim();
    });
    return answersAfterparsing.length === 1 ? answersAfterparsing[0] : answersAfterparsing;
};
const getQuizQuestions = async function() {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${(0, _config.NUMBER_OF_QUESTION)}`);
        console.log(response);
        if (!response.ok) throw new Error("There is a problem Try Again");
        const data = await response.json();
        state.questions = data.results.map((result)=>{
            const correct_answer = Array.isArray(result.correct_answer) ? parsAnswer(...result.correct_answer) : parsAnswer(result.correct_answer);
            const incorrect_answers = parsAnswer(...result.incorrect_answers);
            return {
                category: result.category,
                correctAnswer: correct_answer,
                difficulty: result.difficulty,
                incorrectAnswers: Array.isArray(incorrect_answers) ? incorrect_answers : [
                    incorrect_answers
                ],
                question: result.question,
                type: result.type
            };
        });
        console.log(state.questions);
    } catch (error) {
        throw error;
    }
};
const setAnswerChoosed = function(answerChoosed, questionId) {
    if (!state.answers.has(questionId)) state.answers.set(questionId, state.answers.get(questionId) || new Map());
    state.answers.get(questionId).set(answerChoosed.id, answerChoosed.answer.trim());
};
const removeAnswerChoosed = function(answerChoosed, questionId) {
    state.answers.get(questionId).delete(answerChoosed.id);
};
const evaluation = function() {
    state.questions.forEach((question, i)=>{});
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config":"6pDRM"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6pDRM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QUESTION_DURATION", ()=>QUESTION_DURATION);
parcelHelpers.export(exports, "NUMBER_OF_QUESTION", ()=>NUMBER_OF_QUESTION);
const QUESTION_DURATION = 120;
const NUMBER_OF_QUESTION = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGGtH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../../src/images/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _timerView = require("./timerView");
var _timerViewDefault = parcelHelpers.interopDefault(_timerView);
var _config = require("../config");
class QuestionView {
    #parentElement = document.querySelector(".quiz");
    #questionsContainer;
    #data;
    static currentActiveQuestionContainer = 0;
    finalScore = 0;
    #errorMassage = "There is a problem Try Again";
    render(data) {
        this.#data = data;
        const markup = this.generateMarkup();
        this.#parentElement.insertAdjacentHTML("afterbegin", markup);
        this.#questionsContainer = this.#parentElement.querySelectorAll(".question-container");
    }
    generateMarkup() {
        return this.#data.map((question, i)=>{
            const answers = this.#generateRandomArray([
                question.correctAnswer,
                ...question.incorrectAnswers
            ]);
            return `
      <div class="question-container ${i === 0 ? "active" : ""}" data-id="${i}">
        <div class="question-box">
          <h1 class="question ${this.#checkNumberCharcterInQuestion(question.question) ? "small-ft" : ""}" id="question" >
            ${question.question}
          </h1>
        </div>

        <ul class="answers">
          ${this.#generateAnswres(answers)}
        </ul>
      </div>         
      `;
        }).join("");
    }
    #generateAnswres(answers) {
        return answers.map((answer, i)=>{
            return `
          <li class="answer" data-id="answer${i + 1}">
            <svg class="icon-unchecked">
              <use href="${0, _iconsSvgDefault.default}#icon-radio-unchecked"></use>
            </svg>
            <span answer
              >${answer}</
            span>
          </li>
      `;
        }).join("");
    }
    #generateRandomArray(arr) {
        for(let i = arr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [
                arr[j],
                arr[i]
            ];
        }
        return arr;
    }
    #checkNumberCharcterInQuestion(question) {
        if (question.length > 70) return true;
        return false;
    }
    renderError(errorMessage = this.#errorMassage) {
        const markup = this.#generateErrorMarkup(errorMessage);
        this.#parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    #generateErrorMarkup() {
        return `
    <div class="error-Message">
        <p>
          There is a problem Try Again
        </p>
          <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
    `;
    }
    #moveToNext() {
        this.#questionsContainer[QuestionView.currentActiveQuestionContainer].classList.remove("active");
        QuestionView.currentActiveQuestionContainer++;
        this.#questionsContainer[QuestionView.currentActiveQuestionContainer].classList.add("active");
    }
    #moveToPrevious() {
        this.#questionsContainer[QuestionView.currentActiveQuestionContainer].classList.remove("active");
        QuestionView.currentActiveQuestionContainer--;
        this.#questionsContainer[QuestionView.currentActiveQuestionContainer].classList.add("active");
    }
    #endoFQuiz(handler) {
        this.#hidden();
        handler();
        this.#renderFinalScore();
    }
    moveToNextQuestion() {
        if (QuestionView.currentActiveQuestionContainer === this.#questionsContainer.length - 1) {
            // console.log("timer", timerView.timer);
            clearInterval((0, _timerViewDefault.default).timer);
            // console.log("timer was cleared", timerView.timer);
            this.#parentElement.querySelector(".btn-quiz").querySelectorAll(".btn").forEach((btn)=>btn.classList.toggle("active"));
            return;
        }
        this.#moveToNext();
        (0, _timerViewDefault.default).countDown();
        // update question number
        const questionNumber = this.#parentElement.querySelector(".questions").querySelector(".current-question");
        const currentNumber = +questionNumber.textContent;
        questionNumber.textContent = currentNumber + 1;
    // console.log(QuestionView.currentActiveQuestionContainer);
    }
    addHandlerChooseQuestion(handler) {
        this.#parentElement.addEventListener("click", (e)=>{
            // select the answer element
            const answer = e.target.closest(".answer");
            if (!answer) return;
            const answerOfAQuestion = answer.querySelector("[answer]").textContent;
            const questionId = +answer.closest(".question-container").dataset.id;
            answer.querySelector("svg").classList.toggle("icon-unchecked");
            answer.querySelector("svg").classList.toggle("icon-checked");
            const use = answer.querySelector("svg").querySelector("use");
            if (answer.querySelector("svg").classList.contains("icon-unchecked")) {
                use.setAttribute("href", `${(0, _iconsSvgDefault.default)}#icon-radio-unchecked`);
                handler({
                    answer: answerOfAQuestion,
                    id: answer.dataset.id
                }, false, questionId);
            }
            if (answer.querySelector("svg").classList.contains("icon-checked")) {
                use.setAttribute("href", `${(0, _iconsSvgDefault.default)}#icon-radio-checked`);
                handler({
                    answer: answerOfAQuestion,
                    id: answer.dataset.id
                }, true, questionId);
            }
        });
    }
    addHandlerLoadQuestions(handler) {
        window.addEventListener("load", handler);
    }
    addHandlerValidQuestion() {
        this.#parentElement.addEventListener("click", (e)=>{
            const btn = e.target.closest(".explore");
            if (!btn) return;
            // console.log("btn is :", btn);
            clearInterval((0, _timerViewDefault.default).timer);
            this.moveToNextQuestion();
        });
    }
    #hidden() {
        const btnQuiz = this.#parentElement.querySelector(".btn-quiz");
        const timer = this.#parentElement.querySelector(".timer");
        const questionGaid = this.#parentElement.querySelector(".questions");
        const btnShowResults = this.#parentElement.querySelector(".show-results-btn");
        [
            btnQuiz,
            timer,
            questionGaid
        ].forEach((btn)=>btn.classList.add("hidden"));
        btnShowResults.classList.remove("hidden");
        this.#questionsContainer[QuestionView.currentActiveQuestionContainer].classList.remove("active");
    }
    #display() {
        QuestionView.currentActiveQuestionContainer = 0;
        const questionGaid = this.#parentElement.querySelector(".questions");
        const moveBtn = this.#parentElement.querySelector(".move-btn");
        const btnShowResults = this.#parentElement.querySelector(".show-results-btn");
        const finalResult = this.#parentElement.querySelector(".final-result");
        [
            questionGaid,
            moveBtn
        ].forEach((btn)=>btn.classList.remove("hidden"));
        [
            btnShowResults,
            finalResult
        ].forEach((ele)=>ele.classList.add("hidden"));
        moveBtn.querySelector(".left").classList.add("hidden");
        this.#questionsContainer[QuestionView.currentActiveQuestionContainer].classList.add("active");
        questionGaid.querySelector(".current-question").textContent = QuestionView.currentActiveQuestionContainer + 1;
        this.#parentElement.querySelectorAll(".answer").forEach((item)=>item.style.pointerEvents = "none");
    }
    #renderFinalScore() {
        this.finalScore = this.finalScore * 100 / (0, _config.NUMBER_OF_QUESTION);
        const finalResult = this.#parentElement.querySelector(".final-result");
        finalResult.querySelector(".final-score .percentage").textContent = this.finalScore;
        console.log(this.finalScore);
        this.#parentElement.querySelector(".final-score").style.background = `conic-gradient(var(--primary-color) 0% ${this.finalScore}%, #f5f5f5 ${this.finalScore}% 100%)`;
        finalResult.classList.remove("hidden");
    }
    renderEvaluation(answers, questionId, question) {
        // select quetion container by using questionId
        const questionContent = this.#parentElement.querySelector(`[data-id="${questionId}"]`);
        questionContent.querySelectorAll(".answer").forEach((answer)=>{
            const answerText = answer.querySelector("[answer]").textContent;
            // console.log(answerText, question.correctAnswer);
            if (answerText.trim() === question.correctAnswer) {
                answer.classList.add("true");
                answer.querySelector("svg").classList.remove("icon-unchecked");
                answer.querySelector("svg").classList.add("icon-checked");
                answer.querySelector("svg").querySelector("use").setAttribute("href", `${(0, _iconsSvgDefault.default)}#icon-radio-checked`);
            }
        });
        answers.forEach((answer, answerId)=>{
            if (answer !== question.correctAnswer) questionContent.querySelector(`[data-id="${answerId}"]`).classList.add("false");
            if (answer === question.correctAnswer) this.finalScore += 1;
        });
    }
    addHandlerEndQuiz(handler) {
        this.#parentElement.querySelector(".end-of-quiz").addEventListener("click", ()=>{
            this.#endoFQuiz(handler);
        });
    }
    addHandlerShowResults() {
        this.#parentElement.querySelector(".show-results-btn").addEventListener("click", ()=>{
            this.#display();
        });
    }
    addHandlerMoveBetweenQuestions() {
        this.#parentElement.addEventListener("click", (e)=>{
            const btn = e.target.closest(".btn");
            if (!btn) return;
            const currentQuestion = this.#parentElement.querySelector(".questions").querySelector(".current-question");
            if (btn.classList.contains("left")) {
                this.#moveToPrevious();
                currentQuestion.textContent = QuestionView.currentActiveQuestionContainer + 1;
                if (QuestionView.currentActiveQuestionContainer === 0) {
                    btn.classList.add("hidden");
                    return;
                }
            }
            if (btn.classList.contains("right")) {
                this.#moveToNext();
                currentQuestion.textContent = QuestionView.currentActiveQuestionContainer + 1;
                if (QuestionView.currentActiveQuestionContainer === this.#questionsContainer.length - 1) {
                    btn.classList.add("hidden");
                    return;
                }
            }
            if (QuestionView.currentActiveQuestionContainer > 0 && QuestionView.currentActiveQuestionContainer < this.#questionsContainer.length - 1) this.#parentElement.querySelector(".move-btn").querySelectorAll(".btn").forEach((btn)=>btn.classList.remove("hidden"));
        });
    }
}
exports.default = new QuestionView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../../src/images/icons.svg":"6IKLu","./timerView":"iFTY7","../config":"6pDRM"}],"6IKLu":[function(require,module,exports) {
module.exports = require("c76968e410d59332").getBundleURL("kVXWB") + "icons.548cde10.svg" + "?" + Date.now();

},{"c76968e410d59332":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"iFTY7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
var _viewQuestion = require("./viewQuestion");
var _viewQuestionDefault = parcelHelpers.interopDefault(_viewQuestion);
class TimerView {
    #parentElement = document.querySelector(".timer");
    duration;
    timer;
    #conversion(seconds) {
        const SECONDS_OF_A_MINUTE = 60;
        const minutes = Math.floor(seconds / SECONDS_OF_A_MINUTE);
        seconds %= SECONDS_OF_A_MINUTE;
        return {
            minutes,
            seconds
        };
    }
    #updateTimerUI(seconds, minutes) {
        this.#parentElement.querySelector("#minutes").textContent = `${minutes}`.padStart(2, 0);
        this.#parentElement.querySelector("#seconds").textContent = `${seconds}`.padStart(2, 0);
    }
    #timeDown() {
        this.duration--;
        const { minutes, seconds } = this.#conversion(this.duration);
        this.#updateTimerUI(seconds, minutes);
        if (this.duration === 0) {
            clearInterval(this.timer);
            (0, _viewQuestionDefault.default).moveToNextQuestion();
        }
    }
    countDown() {
        this.duration = (0, _config.QUESTION_DURATION);
        this.timer = setInterval(this.#timeDown.bind(this), 1000);
    }
}
exports.default = new TimerView();

},{"../config":"6pDRM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./viewQuestion":"lGGtH"}]},["1K26Y","iLTxj"], "iLTxj", "parcelRequiree238")

//# sourceMappingURL=index.9e0f11bb.js.map
