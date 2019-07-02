'use strict';

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Header = _interopRequireDefault(require("./components/Header"));

var _Footer = _interopRequireDefault(require("./components/Footer"));

var _Form = _interopRequireDefault(require("./components/Form"));

var _ProdList = _interopRequireDefault(require("./components/ProdList"));

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var txtFieldState = {
  value: "",
  valid: true,
  typeMismatch: false,
  errMsg: ""
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      produto: _objectSpread({}, txtFieldState, {
        fieldName: "Produto",
        required: true,
        requiredTxt: "Não esqueça de escolher o seu produto!"
      }),
      itens: [{
        produto: "Combo Livros Crônicas",
        link: "imagens/Livros_Cronicas.png",
        preco: 69.90
      }, {
        produto: "Copo Viagem Metal",
        link: "imagens/Livros_Cronicas.png",
        preco: 49.90
      }, {
        produto: "Caneca Alça Quadrada 500ML",
        link: "imagens/Livros_Cronicas.png",
        preco: 59.90
      }, {
        produto: "Chaveiro GOT Lannister",
        link: "imagens/Livros_Cronicas.png",
        preco: 29.90
      }, {
        produto: "Caneca 3D GOT Strark",
        link: "imagens/Livros_Cronicas.png",
        preco: 59.90
      }, {
        produto: "Livro A Guerra dos Tronos",
        link: "imagens/Livros_Cronicas.png",
        preco: 44.90
      }],
      selecionado: {
        produto: 'Combo Livros Crônicas',
        link: 'imagens/Livros_Cronicas.png',
        preco: 69.90
      }
    };
    return _this;
  }
  /*
  componentDidMount(){
    request('/index/', function(error, response, body){
      console.log('error', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      this.setState( {itens: body.itens });
      this.setSelecionado( {selecionado: body.selecao } );
    });
  }
  */


  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "App"
      }, _react["default"].createElement(_Header["default"], null), _react["default"].createElement("div", {
        className: "Main"
      }, _react["default"].createElement("div", {
        className: "background"
      }), _react["default"].createElement(_Form["default"], null), _react["default"].createElement("div", {
        className: "Selecionado"
      }, _react["default"].createElement("span", {
        className: "Sel-1"
      }, this.state.selecionado.produto), _react["default"].createElement("span", {
        className: "Sel-2"
      }, _react["default"].createElement("img", {
        src: this.state.selecionado.link,
        alt: this.state.selecionado.produto
      })), _react["default"].createElement("span", {
        className: "Sel-3"
      }, "R$ ", this.state.selecionado.preco)), _react["default"].createElement("h2", null, "Veja abaixo o cat\xE1logo de produtos:"), _react["default"].createElement(_ProdList["default"], {
        className: "Lista",
        produtos: this.state.itens
      })), _react["default"].createElement(_Footer["default"], null));
    }
  }]);

  return App;
}(_react["default"].Component);

_reactDom["default"].render(_react["default"].createElement(App, null), document.getElementById("app"));