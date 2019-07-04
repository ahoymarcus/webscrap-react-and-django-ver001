"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var listValid = ['Combo Livros Crônicas de Gelo e Fogo – George R.R. Martin', 'Chaveiro GOT Lannister', 'Chaveiro GOT Stark', 'Chaveiro GOT Targaryen', 'Copo Viagem Metal 450ML GOT', 'Caneca Alça Quadrada 500ML Lannister', 'Caneca Alça Quadrada 500ML Targaryen', 'Caneca Alça Quadrada 500ML Stark', 'Caneca 3D GOT Stark Escudo', 'Livro A Guerra dos Tronos – As Crônicas de Gelo e Fogo – Volume 1 – George R.R. Martin', 'Livro Fogo e Sangue – George R.R. Martin', 'Kit Almofadas Game Of Thrones', 'Kit Almofada Porta Pipoca Game of Thrones', 'Kit Shot Game of Thrones', 'Almofada Game of Thrones Stark', 'Almofada Game of Thrones Lannister', 'Livro – A Tormenta de Espadas: As Crônicas de Gelo e Fogo – Livro 3', 'Livro – A Guerra Dos Tronos – Volume 2 (HQ)', 'Livro – O Festim dos Corvos: As Crônicas de Gelo e Fogo – Livro 4', 'Copo Viagem Emborrachado Game of Thrones', 'Caneca Game of Thrones Escudo Targaryen 3D'];

var InputValidation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputValidation, _React$Component);

  function InputValidation() {
    _classCallCheck(this, InputValidation);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputValidation).apply(this, arguments));
  }

  _createClass(InputValidation, [{
    key: "render",
    value: function render() {
      var optList = listValid.map(function (opt, index) {
        return _react["default"].createElement("option", {
          key: index
        }, opt);
      });
      return _react["default"].createElement("datalist", {
        id: "input-valid"
      }, optList);
    }
  }]);

  return InputValidation;
}(_react["default"].Component);

var _default = InputValidation;
exports["default"] = _default;