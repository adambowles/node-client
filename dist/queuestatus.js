'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _representation = require('./representation');

var _representation2 = _interopRequireDefault(_representation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Queuestatus = (function (_Representation) {
  _inherits(Queuestatus, _Representation);

  function Queuestatus(client, properties, parent) {
    _classCallCheck(this, Queuestatus);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Queuestatus).call(this, client, properties, parent));

    _this.type = 'queuestatus';

    return _this;
  }

  return Queuestatus;
})(_representation2.default);

exports.default = Queuestatus;