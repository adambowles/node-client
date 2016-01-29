'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Representation = require('./representation');
var SipregistrationList = require('./sipregistrationList');

var Sipidentity = (function (_Representation) {
  _inherits(Sipidentity, _Representation);

  function Sipidentity(client, properties, parent) {
    _classCallCheck(this, Sipidentity);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sipidentity).call(this, client, properties, parent));

    _this.type = 'sipidentity';

    _this.registrations = new SipregistrationList(_this.client, _this);

    return _this;
  }

  return Sipidentity;
})(Representation);

module.exports = Sipidentity;