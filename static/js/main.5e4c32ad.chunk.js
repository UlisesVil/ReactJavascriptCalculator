(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(e,_,t){},15:function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),l=t(7),o=t.n(l),s=(t(14),t(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),isOperator=/[x/+-]/,endsWithOperator=/[x+-/]$/,endsWithNegativeSign=/\d[x/+-]{1}-$/,clearStyle={background:"rgba(255,150,0,.6)"},operatorStyle={background:"rgba(196, 4, 4, 0.459)"},equalsStyle={background:"#004466",position:"absolute",height:129,bottom:5},Calculator=function(_React$Component){Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_React$Component);var _super=Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(e){var _;return Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(_=_super.call(this,e)).state={currentVal:"0",prevVal:"0",formula:"",currentSign:"pos",lastClicked:""},_.maxDigitWarning=_.maxDigitWarning.bind(Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleOperators=_.handleOperators.bind(Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleEvaluate=_.handleEvaluate.bind(Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.initialize=_.initialize.bind(Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleDecimal=_.handleDecimal.bind(Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleNumbers=_.handleNumbers.bind(Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"maxDigitWarning",value:function(){var e=this;this.setState({currentVal:"You can't write more",prevVal:this.state.currentVal}),setTimeout((function(){return e.setState({currentVal:e.state.prevVal})}),1e3)}},{key:"handleEvaluate",value:function handleEvaluate(){if(!this.state.currentVal.includes("Limit")){for(var expression=this.state.formula;endsWithOperator.test(expression);)expression=expression.slice(0,-1);expression=expression.replace(/x/g,"*").replace(/-/g,"-").replace("--","+0+0+0+0+0+0+");var answer=Math.round(1e12*eval(expression))/1e12;this.setState({currentVal:answer.toString(),formula:expression.replace(/\*/g,"x").replace(/-/g,"-").replace("+0+0+0+0+0+0+","--").replace(/(x|\/|\+)-/,"$1-").replace(/^-/,"-"),prevVal:answer,evaluated:!0})}}},{key:"handleOperators",value:function(e){if(!this.state.currentVal.includes("Limit")){var _=e.target.value,t=this.state,a=t.formula,r=t.prevVal,l=t.evaluated;this.setState({currentVal:_,evaluated:!1}),l?this.setState({formula:r+_}):endsWithOperator.test(a)?endsWithNegativeSign.test(a)?"-"!==_&&this.setState({formula:r+_}):this.setState({formula:(endsWithNegativeSign.test(a+_)?a:r)+_}):this.setState({prevVal:a,formula:a+_})}}},{key:"handleNumbers",value:function(e){if(!this.state.currentVal.includes("Limit")){var _=this.state,t=_.currentVal,a=_.formula,r=_.evaluated,l=e.target.value;this.setState({evaluated:!1}),t.length>21?this.maxDigitWarning():r?this.setState({currentVal:l,formula:"0"!==l?l:""}):this.setState({currentVal:"0"===t||isOperator.test(t)?l:t+l,formula:"0"===t&&"0"===l?""===a?l:a:/([^.0-9]0|^0)$/.test(a)?a.slice(0,-1)+l:a+l})}}},{key:"handleDecimal",value:function(){!0===this.state.evaluated?this.setState({currentVal:"0.",formula:"0.",evaluated:!1}):this.state.currentVal.includes(".")||this.state.currentVal.includes("Limit")||(this.setState({evaluated:!1}),this.state.currentVal.length>21?this.maxDigitWarning():endsWithOperator.test(this.state.formula)||"0"===this.state.currentVal&&""===this.state.formula?this.setState({currentVal:"0.",formula:this.state.formula+"0."}):this.setState({currentVal:this.state.formula.match(/(-?\d+\.?\d*)$/)[0]+".",formula:this.state.formula+"."}))}},{key:"initialize",value:function(){this.setState({currentVal:"0",prevVal:"0",formula:"",currentSign:"pos",lastClicked:"",evaluated:!1})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Formula,{formula:this.state.formula.replace(/x/g,"x")}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Output,{currentValue:this.state.currentVal}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttons,{decimal:this.handleDecimal,evaluate:this.handleEvaluate,initialize:this.initialize,numbers:this.handleNumbers,operators:this.handleOperators})))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),Buttons=function(e){Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(t,e);var _=Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(t);function t(){return Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,t),_.apply(this,arguments)}return Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(t,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"jumbo",id:"clear",onClick:this.props.initialize,style:clearStyle,value:"AC"},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"divide",onClick:this.props.operators,style:operatorStyle,value:"/"},"/"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"multiply",onClick:this.props.operators,style:operatorStyle,value:"x"},"x"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"seven",onClick:this.props.numbers,value:"7"},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"eight",onClick:this.props.numbers,value:"8"},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"nine",onClick:this.props.numbers,value:"9"},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"subtract",onClick:this.props.operators,style:operatorStyle,value:"-"},"-"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"four",onClick:this.props.numbers,value:"4"},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"five",onClick:this.props.numbers,value:"5"},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"six",onClick:this.props.numbers,value:"6"},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"add",onClick:this.props.operators,style:operatorStyle,value:"+"},"+"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"one",onClick:this.props.numbers,value:"1"},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"two",onClick:this.props.numbers,value:"2"},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"three",onClick:this.props.numbers,value:"3"},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"jumbo",id:"zero",onClick:this.props.numbers,value:"0"},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"decimal",onClick:this.props.decimal,value:"."},"."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"equals",onClick:this.props.evaluate,style:equalsStyle,value:"="},"="))}}]),t}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),Output=function(e){Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(t,e);var _=Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(t);function t(){return Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,t),_.apply(this,arguments)}return Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(t,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"outputScreen",id:"display"},this.props.currentValue)}}]),t}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),Formula=function(e){Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(t,e);var _=Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(t);function t(){return Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,t),_.apply(this,arguments)}return Object(D_Docs_Coding_Proyectos_del_Curriculum_FreeCodeCamp_06Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(t,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"formulaScreen"},this.props.formula)}}]),t}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calculator},9:function(e,_,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.5e4c32ad.chunk.js.map