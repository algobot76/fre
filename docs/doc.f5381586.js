parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BMbp":[function(require,module,exports) {
module.exports = "<h3 id=\"feature\">Feature</h3>\n<ul>\n<li>really functionalComponent, hooks API, render props</li>\n<li>Fiber Reconciler and hash keyed diff algorithm</li>\n<li>minimal but wonderful , just 1 KB , no dependences</li>\n</ul>\n<h3 id=\"introduction\">Introduction</h3>\n<p>Fre (pronounced <code>/fri:/</code>, like free) is a tiny and perfect js library, It means freedom ~</p>\n<p>其实，free 是一部动漫名，也是我最喜欢的番没有之一，haru 是我儿子！ <a href=\"https://www.clicli.top/search/free\">参见 c 站</a></p>\n<h3 id=\"compare\">Compare</h3>\n<table>\n<thead>\n<tr>\n<th align=\"center\"></th>\n<th align=\"center\">尺寸</th>\n<th align=\"center\">组件化</th>\n<th align=\"center\">特性</th>\n<th align=\"center\">路由</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align=\"center\">fre</td>\n<td align=\"center\">1kb</td>\n<td align=\"center\">hooks</td>\n<td align=\"center\">Fiber</td>\n<td align=\"center\"><a href=\"https://github.com/132yse/use-routes\">use-routes</a></td>\n</tr>\n<tr>\n<td align=\"center\">preact</td>\n<td align=\"center\">3kb</td>\n<td align=\"center\">class</td>\n<td align=\"center\">diff</td>\n<td align=\"center\">...</td>\n</tr>\n<tr>\n<td align=\"center\">vue</td>\n<td align=\"center\">10kb</td>\n<td align=\"center\">SFC</td>\n<td align=\"center\">Proxy + diff</td>\n<td align=\"center\">vue-router</td>\n</tr>\n<tr>\n<td align=\"center\">react</td>\n<td align=\"center\">33kb</td>\n<td align=\"center\">class + hooks</td>\n<td align=\"center\">Fiber</td>\n<td align=\"center\">react-router</td>\n</tr>\n</tbody></table>\n<h3 id=\"use\">Use</h3>\n<pre><code class=\"language-shell\">yarn add fre</code></pre>\n<pre><code class=\"language-js\">import { h, render, useState } from &#39;fre&#39;\n\nfunction Counter() {\n  const [count, setCount] = useState(0)\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;{count}&lt;/h1&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;+&lt;/button&gt;\n    &lt;/div&gt;\n  )\n}\n\nrender(&lt;Counter /&gt;, document.getElementById(&#39;root&#39;))\n</code></pre>\n<h3 id=\"hooks-api\">Hooks API</h3>\n<p>react hooks API 在实现上是个奇迹，这也是我写 fre 的原因（对骚 ♂ API 的痴迷）</p>\n<p>hooks API 创造了新的组件化方案，react 由于兼容 class ，所以很多实现上并不纯粹</p>\n<p>fre 的世界里，hooks 是主角~</p>\n<h4 id=\"usestate\">useState</h4>\n<p>useState 是最基本的 API，它传入一个初始值，每次函数执行都能拿到新值</p>\n<p>可 use 多次，use 的内容可以是对象或数组</p>\n<pre><code class=\"language-js\">function Counter() {\n  const [up, setUp] = useState(0)\n  const [down, setDown] = useState(0)\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;{up}&lt;/h1&gt;\n      &lt;button onClick={() =&gt; setUp(up + 1)}&gt;+&lt;/button&gt;\n      &lt;h1&gt;{down}&lt;/h1&gt;\n      &lt;button onClick={() =&gt; setDown(down -1)}&gt;-&lt;/button&gt;\n    &lt;/div&gt;\n  )\n}\n\nrender(&lt;Counter /&gt;, document.getElementById(&#39;root&#39;))</code></pre>\n<h4 id=\"usereducer\">useReducer</h4>\n<p>useReducer 和 useState 几乎是一样的，需要外置外置 reducer (全局)</p>\n<pre><code class=\"language-js\">function reducer(state, action) {\n  switch (action.type) {\n    case &#39;up&#39;:\n      return { count: state.count + 1 }\n    case &#39;down&#39;:\n      return { count: state.count - 1 }\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, { count: 1 })\n  return (\n    &lt;div&gt;\n      {state.count}\n      &lt;button onClick={() =&gt; dispatch({ type: &#39;up&#39; })}&gt;+&lt;/button&gt;\n      &lt;button onClick={() =&gt; dispatch({ type: &#39;down&#39; })}&gt;+&lt;/button&gt;\n    &lt;/div&gt;\n  )\n}\n\nrender(&lt;Counter /&gt;, document.getElementById(&#39;root&#39;))</code></pre>\n<h4 id=\"useeffect\">useEffect</h4>\n<p>useEffect 接受两个参数，第一个参数是一个副作用函数，第二个参数是个数组，通常为 props</p>\n<p>当第二个参数的某一项发生变化时，执行副作用函数，执行时机为一轮 commit 结束</p>\n<pre><code class=\"language-js\">function Counter({ flag }) {\n  const [count, setCount] = useState(0)\n  useEffect(() =&gt; {\n    document.title = &#39;count is &#39; + count\n  }, [flag])\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;{count}&lt;/h1&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;+&lt;/button&gt;\n    &lt;/div&gt;\n  )\n}\n\nrender(&lt;Counter /&gt;, document.getElementById(&#39;root&#39;))</code></pre>\n<h4 id=\"usememo\">useMemo</h4>\n<p>useMemo 和 useEffect 参数一致，不同的是，第一个参数通常是组件函数，马上同步执行</p>\n<pre><code class=\"language-js\">function Counter() {\n  const [count, setCount] = useState(0)\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;{count}&lt;/h1&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;+&lt;/button&gt;\n      {(useMemo(&lt;Sex /&gt;), [])}\n    &lt;/div&gt;\n  )\n}\n\nrender(&lt;Counter /&gt;, document.getElementById(&#39;root&#39;))</code></pre>\n<h4 id=\"usecontext\">useContext</h4>\n<p>context 是在外部 create ，内部 use 的 state，它和全局变量的区别在于，如果多个组件同时 useContext，那么这些组件都会 rerender</p>\n<p>而，如果多个组件同时 useState 同一个全局变量，则只有触发 setState 的当前组件 rerender</p>\n<pre><code class=\"language-js\">const ctx = createContext(0)\n\nfunction App() {\n  const [count, setCount] = useContext(ctx)\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;{count}&lt;/h1&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;+&lt;/button&gt;\n      &lt;Other /&gt;\n    &lt;/div&gt;\n  )\n}\n\nfunction Other() {\n  const count = useContext(context)[0]\n  return &lt;h1&gt;{count}&lt;/h1&gt;\n}</code></pre>\n<h3 id=\"functionalcomponent\">FunctionalComponent</h3>\n<p>新的组件化方案，完全的 functional，组件通讯和 react 几乎一致</p>\n<pre><code class=\"language-js\">function App() {\n  const [count, setCount] = useState(0)\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;{count}&lt;/h1&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;+&lt;/button&gt;\n      &lt;Sex count={count}/&gt;\n    &lt;/div&gt;\n  )\n}\n\nfunction Sex(props){\n  const [sex, setSex] = useState(&#39;boy&#39;)\n  return (\n    &lt;div&gt;\n      &lt;h2&gt;{props.count}&lt;/h2&gt;\n      &lt;h1&gt;{sex}&lt;/h1&gt;\n      &lt;button onClick={() =&gt; {sex===&#39;boy&#39;?setSex(&#39;girl&#39;):setSex(&#39;boy&#39;)}}&gt;x&lt;/button&gt;\n    &lt;/div&gt;\n  )\n}\n\nrender(&lt;App /&gt;, document.getElementById(&#39;root&#39;))</code></pre>\n<h3 id=\"props\">props</h3>\n<p>props 用于组件间通信，和 react 行为一致</p>\n<pre><code class=\"language-js\">function App() {\n  const [sex, setSex] = useState(&#39;boy&#39;)\n  return (\n    &lt;div&gt;\n      &lt;Sex sex={sex} /&gt;\n      &lt;button\n        onClick={() =&gt; (sex === &#39;boy&#39; ? setSex(&#39;girl&#39;) : setSex(&#39;boy&#39;))}\n      /&gt;\n    &lt;/div&gt;\n  )\n}\nfunction Sex(props) {\n  return &lt;div&gt;{props.sex}&lt;/div&gt;\n}</code></pre>\n<p>和 react 一样，props 默认包含了 children，用于渲染组件的所有子元素</p>\n<pre><code class=\"language-js\">const HelloBox = () =&gt; (\n  &lt;Box&gt;\n    &lt;h1&gt;Hello world !&lt;/h1&gt;\n  &lt;/Box&gt;\n)\n\nconst Box = props =&gt; &lt;div&gt;{props.children}&lt;/div&gt;</code></pre>\n<p>值得一提，hooks 的世界里，不存在 HOC 和 extends，但是天生支持 render props/children</p>\n<pre><code class=\"language-js\">const HelloBox = () =&gt; (\n  &lt;Box&gt;\n    {value =&gt; {\n      return &lt;h1&gt;{value}&lt;/h1&gt;\n    }}\n  &lt;/Box&gt;\n)\n\nconst Box = props =&gt; &lt;div&gt;{props.children(&#39;hello world!&#39;)}&lt;/div&gt;</code></pre>\n<h4 id=\"fiber\">Fiber</h4>\n<p>fre 的 Fiber 架构是 Fiber reconciler 的最小实现，fre Fiber 仅仅是采用了链表的遍历形式，并没能实现对等的调度方案</p>\n<p>内部仍然是通过 micro task 控制更新的</p>\n<h4 id=\"hashkeyed-diff\">hash.keyed diff</h4>\n<p>fre 实现了一个非常精彩的 hash keyed diff 算法，和 react 的排位算法对等，但实现不同</p>\n<p>这也是 fre 最精彩的机制之一</p>\n<h4 id=\"jsx\">JSX</h4>\n<p>默认也对外暴露了 h 函数，可以选用 JSX</p>\n<pre><code class=\"language-js\">import { h } from &#39;fre&#39;</code></pre>\n<p>webpack 需配置：</p>\n<pre><code class=\"language-js\">{\n  &quot;plugins&quot;: [\n    [&quot;transform-react-jsx&quot;, { &quot;pragma&quot;:&quot;h&quot; }]\n  ]\n}</code></pre>\n<p>当然，如果是想要用于浏览器环境，可以使用 <a href=\"https://github.com/developit/htm\">htm</a></p>\n<h4 id=\"license\">License</h4>\n<p><em>MIT</em> ©132yse inspired by <a href=\"https://github.com/RubyLouvre/anu\">anu</a></p>\n"
},{}],"H0wV":[function(require,module,exports) {

},{}],"6oLy":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof e&&e.amd?e(["exports"],n):n((t=t||self).fre={})}(this,function(e){"use strict";const t="function"==typeof Promise?e=>Promise.resolve().then(e):setTimeout,n=(e,t)=>n=>e[n]!==t[n],r=(e,t)=>e.type==t.type&&e.key==t.key,o=e=>{let t={},n=0;return(e=>e?Array.isArray(e)?e:[e]:[])(e).forEach(e=>{let r=((e||{}).props||{}).key;r?t["."+r]=e:(t["."+n]=e)&&n++}),t},s=(e,t)=>{for(var n in t)e[n]=t[n]},i=(e,t)=>{let n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n};function l(e,t,r){Object.keys(r).filter(n(t,r)).forEach(n=>{"value"===n||"nodeValue"===n?e[n]=r[n]:function(e,t,n,r){"children"===t||"key"===t||("style"===t?Object.keys(r).forEach(n=>{let o=r&&r[n]?r[n]:"";e[t][n]=o}):"o"===t[0]&&"n"===t[1]?(t=t.slice(2).toLowerCase(),n&&e.removeEventListener(t,n),e.addEventListener(t,r)):e.setAttribute(t,r))}(e,n,t[n],r[n])})}let c=0,a=[];function u(e,n,r){const o=this?this:O();var s;r=n?n(o.state[e],r):r,o.state[e]=r,s=o,x.push(s),t(C)}function f(e){return p(null,e)}function p(e,t){let n=O(),r="$"+c,o=u.bind(n,r,e);if(n){c++;let e=n.state||{};return"object"==typeof e&&r in e?[e[r],o]:(n.state[r]=t,[t,o])}return[t,o]}function h(e,t){let n=O();if(n){let r="$"+c;n.effects[r]=b(e,t),c++}}function b(e,t){return function(){if(O()){(!t||a.some((e,n)=>t[n]!==e))&&e(),a=t}}}const[d,y,g,m,T,k,v]=[0,1,2,3,4,5,6];let x=[],E=null,P=null,j=null;function C(){if(!E&&x.length){const e=x.shift();if(!e)return;E=e}for(;E;)E=S(E);P&&function(e){e.patches.forEach(e=>(function(e){if(e.tag==g)return;let t=e.parent;for(;t.tag==y;)t=t.parent;const n=t.base;let r=e.base;if(e.tag==y);else if(e.patchTag==k)l(e.base,e.alternate.props,e.props);else if(e.patchTag==v)!function(e,t){let n=e;for(;;)if(n.tag!=y){for(t.removeChild(n.base),n.patches=[];n!=e&&!n.sibling;)n=n.parent;if(n==e)return;n=n.sibling}else n=n.child}(e,n);else{let t=L?null:e.insertPoint?e.patchTag==m?e.insertPoint.base.nextSibling:e.insertPoint.base.nextSibling||n.firstChild:null;if(t==r)return;n.insertBefore(r,t)}r!=n.lastChild&&(L=!1);t.patches=e.patches=[]})(e));for(let t in j.effects){let e=j.effects[t];e()}E=P=null}(P)}function S(e){if(e.tag==y?function(e){let t=e.base;null==t&&(t=e.base=function(e){const t=new e.type(e.props);return t.fiber=e,t}(e));e.props=e.props||{},e.state=e.state||{},e.effects=e.effects||{},j=e,c=0;const n=e.type(e.props);w(e,n),j.patches=e.patches}(e):function(e){e.base||(e.base=function(e){const t="text"===e.type?document.createTextNode(""):document.createElement(e.type);return l(t,[],e.props),t}(e));let t=e.parent||{};e.insertPoint=t.oldPoint,t.oldPoint=e;const n=e.props.children;w(e,n)}(e),e.child)return e.child;for(;e;){if(A(e),e.sibling)return e.sibling;e=e.parent}}function w(e,t){const n=e.children,s=function(e,t){return t.children=o(e)}(t,e);let l={};for(let r in n){let t=s[r],o=n[r];t&&o.type===t.type?(l[r]=o,t.key&&(o.key=t.key)):(o.patchTag=v,e.patches.push(o))}let c=null,a=null;for(let o in s){let t=s[o],n=l[o];n?r(n,t)&&(a=new V(n,{patchTag:k}),t.patchTag=k,(t=i(a,t)).alternate=a,n.key&&(t.patchTag=T)):t=new V(t,{patchTag:m}),s[o]=t,t.parent=e,c?c.sibling=t:e.child=t,c=t}c&&(c.sibling=null)}function V(e,t){this.patchTag=t.patchTag,this.tag=t.tag||"function"==typeof e.type?y:d,e.props=e.props||{nodeValue:e.nodeValue},s(this,e)}function A(e){e.parent?e.parent.patches=(e.parent.patches||[]).concat(e.patches||[],e.patchTag?[e]:[]):P=e}let L=!0;function O(){return j||null}e.createContext=function(e={}){let t=[];return{context:e,update:e=>t.forEach(t=>t(e)),subscribe:e=>t.push(e),unSubscribe:e=>t=t.filter(t=>t!==e)}},e.h=function(e,t){let n=[],r=[],o=arguments.length;for(;o-- >2;)n.push(arguments[o]);for(;n.length;){let e=n.pop();if(e&&e.pop)for(o=e.length;o--;)n.push(e[o]);else null===e||!0===e||!1===e||r.push("object"!=typeof e?{type:"text",props:{nodeValue:e}}:e)}return{type:e,props:i(t,{children:r}),key:(t||{}).key||null}},e.render=function(e,n){let r={tag:g,base:n,props:{children:e}};x.push(r),t(C)},e.useContext=function(e){const[t,n]=f(e.context);return e.subscribe(n),h(()=>e.unSubscribe(n)),[t,e.update]},e.useEffect=h,e.useMemo=b,e.useReducer=p,e.useState=f,Object.defineProperty(e,"__esModule",{value:!0})});
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./README.md"));require("./md.css"),require("./style.css");var r=require("fre");function t(e){return e&&e.__esModule?e:{default:e}}function n(){return(0,r.useEffect)(function(){document.querySelector(".wrap").innerHTML=e.default}),(0,r.h)("div",{class:"container"},(0,r.h)("div",{class:"logo"},(0,r.h)("p",{align:"center"},(0,r.h)("img",{src:"http://wx2.sinaimg.cn/mw690/0060lm7Tly1ftpm5b3ihfj3096097aaj.jpg",alt:"fre logo",width:"180"})),(0,r.h)("h1",{align:"center"},"Fre"),(0,r.h)("h3",{align:"center"},"Fast 1kb React-like hooks API js library")),(0,r.h)("div",{class:"wrap"}))}(0,r.render)((0,r.h)(n,null),document.body);
},{"./README.md":"BMbp","./md.css":"H0wV","./style.css":"H0wV","fre":"6oLy"}]},{},["Focm"], null)
//# sourceMappingURL=/doc.f5381586.js.map