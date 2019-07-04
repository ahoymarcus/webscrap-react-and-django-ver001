"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputValidation = _interopRequireDefault(require("./InputValidation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pattern = "[Aa]lmofada.*[kr]$|" + "[Cc]aneca.*[Dknr]$|" + "[Cc]haveiro.*[knr]$|" + "[Cc]ombo.*n$|" + "[Cc]opo.*[sT]$|" + "[Kk]it.*s$|" + "[Ll]ivro.*[\)34n]$|";

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));
    _this.state = {
      value: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.resetForm = _this.resetForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Form, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        value: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      //placeholder="Escolha o seu produto..."
      return _react["default"].createElement("div", {
        className: "Form"
      }, _react["default"].createElement("form", {
        action: "http://127.0.0.1:8000/scrapapp",
        method: "GET"
      }, _react["default"].createElement("button", {
        onClick: this.resetForm
      }, "Reset"), _react["default"].createElement("br", null), "Produto: ", _react["default"].createElement("input", {
        type: "text",
        name: "produto",
        value: this.state.value,
        onChange: this.handleChange,
        list: "input-valid",
        required: true,
        pattern: pattern
      }), _react["default"].createElement(_InputValidation["default"], null), _react["default"].createElement("input", {
        type: "submit",
        value: "Escolha seu produto"
      }), _react["default"].createElement("span", null, this.state.value)));
    }
  }]);

  return Form;
}(_react["default"].Component);

var _default = Form;
exports["default"] = _default;