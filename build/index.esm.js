import React from 'react';
import { Table } from 'react-email-components-table';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var build$2 = {exports: {}};

(function (module, exports) {
(function (global, factory) {
  factory(exports, React) ;
}(commonjsGlobal, (function (exports, React) {
  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var Content = function Content() {
    return /*#__PURE__*/React__default['default'].createElement("div", null, "content");
  };

  var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var defineProperty = createCommonjsModule(function (module) {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  module.exports = _defineProperty;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  var _defineProperty = unwrapExports(defineProperty);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var li = {
    msoLineHeightRule: 'exactly',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  };
  var p = _objectSpread(_objectSpread({
    lineHeight: '125%',
    margin: '10px 0',
    padding: '0'
  }, li), {}, {
    color: '#111111',
    fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '18px',
    textAlign: 'left'
  });
  var a = _objectSpread(_objectSpread({}, li), {}, {
    fontWeight: 'bold',
    textDecoration: 'underline'
  });
  var div = {
    textAlign: 'justify'
  };
  var strong = {
    fontWeight: 'bolder',
    fontSize: '18px'
  };

  var config = {
    link1: 'https://hackernoon.com/signup?ref=noonifications.tech',
    link2: 'https://app.hackernoon.com/subscriptions?ref=noonifications.tech',
    link3: 'https://app.hackernoon.com/new?ref=noonifications.tech',
    link4: 'https://sponsor.hackernoon.com/brand-as-author?ref=noonifications.tech',
    link5: 'https://hackernoon.com/?ref=noonifications.tech'
  };

  var CtaList = function CtaList() {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      dir: "ltr",
      style: div
    }, /*#__PURE__*/React__default['default'].createElement("strong", {
      style: strong
    }, "Ready to Claim Your Internet Name on Hacker Noon?"), /*#__PURE__*/React__default['default'].createElement("ol", null, /*#__PURE__*/React__default['default'].createElement("li", {
      dir: "ltr",
      style: li
    }, /*#__PURE__*/React__default['default'].createElement("p", {
      dir: "ltr",
      role: "presentation",
      style: p
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      href: config.link1,
      target: "_blank",
      style: a
    }, "Create a free account"), ".")), /*#__PURE__*/React__default['default'].createElement("li", {
      dir: "ltr",
      style: li
    }, /*#__PURE__*/React__default['default'].createElement("p", {
      dir: "ltr",
      role: "presentation",
      style: p
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      href: config.link2,
      target: "_blank",
      style: a
    }, "Tell us what you want to read about"), ".")), /*#__PURE__*/React__default['default'].createElement("li", {
      dir: "ltr",
      style: li
    }, /*#__PURE__*/React__default['default'].createElement("p", {
      dir: "ltr",
      role: "presentation",
      style: p
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      href: config.link3,
      target: "_blank",
      style: a
    }, "Submit your own tech stories"), ". ")), /*#__PURE__*/React__default['default'].createElement("li", {
      dir: "ltr",
      style: li
    }, /*#__PURE__*/React__default['default'].createElement("p", {
      dir: "ltr",
      role: "presentation",
      style: p
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      href: config.link4,
      target: "_blank",
      style: a
    }, "Gain Access to Brand-As-Author"), "\u2122 Program. ")), /*#__PURE__*/React__default['default'].createElement("li", {
      dir: "ltr",
      style: li
    }, /*#__PURE__*/React__default['default'].createElement("p", {
      dir: "ltr",
      role: "presentation",
      style: p
    }, "Get Your Tech Stories Featured on the ", /*#__PURE__*/React__default['default'].createElement("a", {
      href: config.link5,
      target: "_blank",
      style: a
    }, "Homepage of Hacker Noon"), "."))));
  };

  var Table = function Table(_ref) {
    var className = _ref.className,
        children = _ref.children,
        style = _ref.style,
        width = _ref.width,
        align = _ref.align;
    return /*#__PURE__*/React__default['default'].createElement("table", {
      align: align,
      className: className,
      border: 0,
      cellPadding: 0,
      cellSpacing: 0,
      style: style,
      width: width
    }, children);
  };

  var styles$3 = {
    dividerBlock: {
      minWidth: '100%',
      borderCollapse: 'collapse',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      tableLayout: 'fixed !important'
    },
    dividerBlockInner: {
      minWidth: '100%',
      padding: '12px 18px',
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%'
    },
    dividerContent: {
      minWidth: '100%',
      borderTop: '2px none #eaeaea',
      borderCollapse: 'collapse',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%'
    },
    td: {
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%'
    }
  };

  var Divider = function Divider(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement(Table, {
      className: "mcnDividerBlock",
      style: styles$3.dividerBlock
    }, /*#__PURE__*/React__default['default'].createElement("tbody", {
      className: "mcnDividerBlockOuter"
    }, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
      className: "mcnDividerBlockInner",
      style: styles$3.dividerBlockInner
    }, /*#__PURE__*/React__default['default'].createElement(Table, {
      className: "mcnDividerContent",
      width: "100%",
      style: styles$3.dividerContent
    }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
      style: styles$3.td,
      "data-testid": "dividerChildrenTest"
    }, children))))))));
  };

  var EmptySection = function EmptySection(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement("div", null, children);
  };

  var styles$2 = {
    div: {
      textAlign: 'justify'
    },
    span1: {
      fontSize: '16px'
    },
    span2: {
      fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
    },
    a: {
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#111111'
    }
  };

  var link1 = "https://hackernoon.com/signup";
  var link2 = "https://publish.hackernoon.com/";

  var GetPublished = function GetPublished() {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      dir: "ltr",
      style: styles$2.div
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$2.span1
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$2.span2
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      href: link1,
      style: styles$2.a,
      target: "_blank"
    }, "Got a tech story to share with our readers?"), " Everything you've ever wanted to know about how to get published on Hacker Noon - ", /*#__PURE__*/React__default['default'].createElement("a", {
      href: link2,
      style: styles$2.a,
      target: "_blank"
    }, "get it here"), ".")));
  };

  var HeadLine = function HeadLine(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement("div", null, children);
  };

  var styles$1 = {
    div: {
      textAlign: 'justify'
    },
    span1: {
      fontSize: '16px'
    },
    span2: {
      fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
    },
    a: {
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#111111'
    }
  };

  var link = "https://hackernoon.com/the-decentralized-internet-writing-contest-fq1i35t4";

  var JoinUs = function JoinUs() {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      dir: "ltr",
      style: styles$1.div
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$1.span1
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$1.span2
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      href: link,
      style: styles$1.a,
      target: "_blank"
    }, "\"Join our writing contest and get a chance to win cool prizes\"."))));
  };

  var styles = {
    textBlock: {
      minWidth: '100%',
      borderCollapse: 'collapse',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%'
    },
    textBlockInner: {
      paddingTop: '9px',
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%'
    },
    textContentContainer: {
      maxWidth: '100%',
      minWidth: '100%',
      borderCollapse: 'collapse',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%'
    },
    textContent: {
      padding: '0px 18px 9px',
      lineHeight: '150%',
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      wordBreak: 'break-word',
      color: '#111111',
      fontFamily: '"Source Sans Pro","Helvetica Neue", Helvetica, Arial,sans-serif',
      fontSize: '18px',
      textAlign: 'left'
    }
  };

  var Section = function Section(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement(Table, {
      className: "mcnTextBlock",
      style: styles.textBlock
    }, /*#__PURE__*/React__default['default'].createElement("tbody", {
      className: "mcnTextBlockOuter"
    }, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
      valign: "top",
      className: "mcnTextBlockInner",
      style: styles.textBlockInner
    }, /*#__PURE__*/React__default['default'].createElement(Table, {
      align: "left",
      style: styles.textContentContainer,
      className: "mcnTextContentContainer"
    }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
      valign: "top",
      className: "mcnTextContent",
      label: "sectionPropsChildren",
      "data-testid": "sectionPropsChildren",
      style: styles.textContent
    }, children))))))));
  };

  var build$1 = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    factory(exports, React__default['default']) ;
  })(commonjsGlobal$1, function (exports, React) {

    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
      };
    }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var Content = function Content() {
      return /*#__PURE__*/React__default['default'].createElement("div", null, "content");
    };

    var commonjsGlobal$1$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal$1 !== 'undefined' ? commonjsGlobal$1 : typeof self !== 'undefined' ? self : {};

    function unwrapExports(x) {
      return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, basedir, module) {
      return module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
          return commonjsRequire(path, base === undefined || base === null ? module.path : base);
        }
      }, fn(module, module.exports), module.exports;
    }

    function commonjsRequire() {
      throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var defineProperty = createCommonjsModule(function (module) {
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      module.exports = _defineProperty;
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    });

    var _defineProperty = unwrapExports(defineProperty);

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }

        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    var li = {
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%'
    };

    var p = _objectSpread(_objectSpread({
      lineHeight: '125%',
      margin: '10px 0',
      padding: '0'
    }, li), {}, {
      color: '#111111',
      fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '18px',
      textAlign: 'left'
    });

    var a = _objectSpread(_objectSpread({}, li), {}, {
      fontWeight: 'bold',
      textDecoration: 'underline'
    });

    var div = {
      textAlign: 'justify'
    };
    var strong = {
      fontWeight: 'bolder',
      fontSize: '18px'
    };
    var config = {
      link1: 'https://hackernoon.com/signup?ref=noonifications.tech',
      link2: 'https://app.hackernoon.com/subscriptions?ref=noonifications.tech',
      link3: 'https://app.hackernoon.com/new?ref=noonifications.tech',
      link4: 'https://sponsor.hackernoon.com/brand-as-author?ref=noonifications.tech',
      link5: 'https://hackernoon.com/?ref=noonifications.tech'
    };

    var CtaList = function CtaList() {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        dir: "ltr",
        style: div
      }, /*#__PURE__*/React__default['default'].createElement("strong", {
        style: strong
      }, "Ready to Claim Your Internet Name on Hacker Noon?"), /*#__PURE__*/React__default['default'].createElement("ol", null, /*#__PURE__*/React__default['default'].createElement("li", {
        dir: "ltr",
        style: li
      }, /*#__PURE__*/React__default['default'].createElement("p", {
        dir: "ltr",
        role: "presentation",
        style: p
      }, /*#__PURE__*/React__default['default'].createElement("a", {
        href: config.link1,
        target: "_blank",
        style: a
      }, "Create a free account"), ".")), /*#__PURE__*/React__default['default'].createElement("li", {
        dir: "ltr",
        style: li
      }, /*#__PURE__*/React__default['default'].createElement("p", {
        dir: "ltr",
        role: "presentation",
        style: p
      }, /*#__PURE__*/React__default['default'].createElement("a", {
        href: config.link2,
        target: "_blank",
        style: a
      }, "Tell us what you want to read about"), ".")), /*#__PURE__*/React__default['default'].createElement("li", {
        dir: "ltr",
        style: li
      }, /*#__PURE__*/React__default['default'].createElement("p", {
        dir: "ltr",
        role: "presentation",
        style: p
      }, /*#__PURE__*/React__default['default'].createElement("a", {
        href: config.link3,
        target: "_blank",
        style: a
      }, "Submit your own tech stories"), ". ")), /*#__PURE__*/React__default['default'].createElement("li", {
        dir: "ltr",
        style: li
      }, /*#__PURE__*/React__default['default'].createElement("p", {
        dir: "ltr",
        role: "presentation",
        style: p
      }, /*#__PURE__*/React__default['default'].createElement("a", {
        href: config.link4,
        target: "_blank",
        style: a
      }, "Gain Access to Brand-As-Author"), "\u2122 Program. ")), /*#__PURE__*/React__default['default'].createElement("li", {
        dir: "ltr",
        style: li
      }, /*#__PURE__*/React__default['default'].createElement("p", {
        dir: "ltr",
        role: "presentation",
        style: p
      }, "Get Your Tech Stories Featured on the ", /*#__PURE__*/React__default['default'].createElement("a", {
        href: config.link5,
        target: "_blank",
        style: a
      }, "Homepage of Hacker Noon"), "."))));
    };

    var Table = function Table(_ref) {
      var className = _ref.className,
          children = _ref.children,
          style = _ref.style,
          width = _ref.width,
          align = _ref.align;
      return /*#__PURE__*/React__default['default'].createElement("table", {
        align: align,
        className: className,
        border: 0,
        cellPadding: 0,
        cellSpacing: 0,
        style: style,
        width: width
      }, children);
    };

    var styles$3 = {
      dividerBlock: {
        minWidth: '100%',
        borderCollapse: 'collapse',
        msoTableLspace: '0pt',
        msoTableRspace: '0pt',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        tableLayout: 'fixed !important'
      },
      dividerBlockInner: {
        minWidth: '100%',
        padding: '12px 18px',
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%'
      },
      dividerContent: {
        minWidth: '100%',
        borderTop: '2px none #eaeaea',
        borderCollapse: 'collapse',
        msoTableLspace: '0pt',
        msoTableRspace: '0pt',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%'
      },
      td: {
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%'
      }
    };

    var Divider = function Divider(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement(Table, {
        className: "mcnDividerBlock",
        style: styles$3.dividerBlock
      }, /*#__PURE__*/React__default['default'].createElement("tbody", {
        className: "mcnDividerBlockOuter"
      }, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
        className: "mcnDividerBlockInner",
        style: styles$3.dividerBlockInner
      }, /*#__PURE__*/React__default['default'].createElement(Table, {
        className: "mcnDividerContent",
        width: "100%",
        style: styles$3.dividerContent
      }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
        style: styles$3.td,
        "data-testid": "dividerChildrenTest"
      }, children))))))));
    };

    var EmptySection = function EmptySection(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("div", null, children);
    };

    var styles$2 = {
      div: {
        textAlign: 'justify'
      },
      span1: {
        fontSize: '16px'
      },
      span2: {
        fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
      },
      a: {
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#111111'
      }
    };
    var link1 = "https://hackernoon.com/signup";
    var link2 = "https://publish.hackernoon.com/";

    var GetPublished = function GetPublished() {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        dir: "ltr",
        style: styles$2.div
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$2.span1
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$2.span2
      }, /*#__PURE__*/React__default['default'].createElement("a", {
        href: link1,
        style: styles$2.a,
        target: "_blank"
      }, "Got a tech story to share with our readers?"), " Everything you've ever wanted to know about how to get published on Hacker Noon - ", /*#__PURE__*/React__default['default'].createElement("a", {
        href: link2,
        style: styles$2.a,
        target: "_blank"
      }, "get it here"), ".")));
    };

    var HeadLine = function HeadLine(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("div", null, children);
    };

    var styles$1 = {
      div: {
        textAlign: 'justify'
      },
      span1: {
        fontSize: '16px'
      },
      span2: {
        fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
      },
      a: {
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#111111'
      }
    };
    var link = "https://hackernoon.com/the-decentralized-internet-writing-contest-fq1i35t4";

    var JoinUs = function JoinUs() {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        dir: "ltr",
        style: styles$1.div
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$1.span1
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$1.span2
      }, /*#__PURE__*/React__default['default'].createElement("a", {
        href: link,
        style: styles$1.a,
        target: "_blank"
      }, "\"Join our writing contest and get a chance to win cool prizes\"."))));
    };

    var styles = {
      textBlock: {
        minWidth: '100%',
        borderCollapse: 'collapse',
        msoTableLspace: '0pt',
        msoTableRspace: '0pt',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%'
      },
      textBlockInner: {
        paddingTop: '9px',
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%'
      },
      textContentContainer: {
        maxWidth: '100%',
        minWidth: '100%',
        borderCollapse: 'collapse',
        msoTableLspace: '0pt',
        msoTableRspace: '0pt',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%'
      },
      textContent: {
        padding: '0px 18px 9px',
        lineHeight: '150%',
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        wordBreak: 'break-word',
        color: '#111111',
        fontFamily: '"Source Sans Pro","Helvetica Neue", Helvetica, Arial,sans-serif',
        fontSize: '18px',
        textAlign: 'left'
      }
    };

    var Section = function Section(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement(Table, {
        className: "mcnTextBlock",
        style: styles.textBlock
      }, /*#__PURE__*/React__default['default'].createElement("tbody", {
        className: "mcnTextBlockOuter"
      }, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
        valign: "top",
        className: "mcnTextBlockInner",
        style: styles.textBlockInner
      }, /*#__PURE__*/React__default['default'].createElement(Table, {
        align: "left",
        style: styles.textContentContainer,
        className: "mcnTextContentContainer"
      }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
        valign: "top",
        className: "mcnTextContent",
        label: "sectionPropsChildren",
        "data-testid": "sectionPropsChildren",
        style: styles.textContent
      }, children))))))));
    };

    var build$1 = createCommonjsModule(function (module, exports) {
      (function (global, factory) {
        factory(exports, React__default['default']);
      })(commonjsGlobal$1$1, function (exports, React) {
        function _interopDefaultLegacy(e) {
          return e && typeof e === 'object' && 'default' in e ? e : {
            'default': e
          };
        }

        var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

        var Content = function Content() {
          return /*#__PURE__*/React__default['default'].createElement("div", null, "content");
        };

        function unwrapExports(x) {
          return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
        }

        function createCommonjsModule(fn, basedir, module) {
          return module = {
            path: basedir,
            exports: {},
            require: function (path, base) {
              return commonjsRequire(path, base === undefined || base === null ? module.path : base);
            }
          }, fn(module, module.exports), module.exports;
        }

        function commonjsRequire() {
          throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
        }

        var defineProperty = createCommonjsModule(function (module) {
          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }

            return obj;
          }

          module.exports = _defineProperty;
          module.exports["default"] = module.exports, module.exports.__esModule = true;
        });

        var _defineProperty = unwrapExports(defineProperty);

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);

            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }

            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        var li = {
          msoLineHeightRule: 'exactly',
          msTextSizeAdjust: '100%',
          WebkitTextSizeAdjust: '100%'
        };

        var p = _objectSpread(_objectSpread({
          lineHeight: '125%',
          margin: '10px 0',
          padding: '0'
        }, li), {}, {
          color: '#111111',
          fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: '18px',
          textAlign: 'left'
        });

        var a = _objectSpread(_objectSpread({}, li), {}, {
          fontWeight: 'bold',
          textDecoration: 'underline'
        });

        var div = {
          textAlign: 'justify'
        };
        var strong = {
          fontWeight: 'bolder',
          fontSize: '18px'
        };
        var config$1 = {
          link1: 'https://hackernoon.com/signup?ref=noonifications.tech',
          link2: 'https://app.hackernoon.com/subscriptions?ref=noonifications.tech',
          link3: 'https://app.hackernoon.com/new?ref=noonifications.tech',
          link4: 'https://sponsor.hackernoon.com/brand-as-author?ref=noonifications.tech',
          link5: 'https://hackernoon.com/?ref=noonifications.tech'
        };

        var CtaList = function CtaList() {
          return /*#__PURE__*/React__default['default'].createElement("div", {
            dir: "ltr",
            style: div
          }, /*#__PURE__*/React__default['default'].createElement("strong", {
            style: strong
          }, "Ready to Claim Your Internet Name on Hacker Noon?"), /*#__PURE__*/React__default['default'].createElement("ol", null, /*#__PURE__*/React__default['default'].createElement("li", {
            dir: "ltr",
            style: li
          }, /*#__PURE__*/React__default['default'].createElement("p", {
            dir: "ltr",
            role: "presentation",
            style: p
          }, /*#__PURE__*/React__default['default'].createElement("a", {
            href: config$1.link1,
            target: "_blank",
            style: a
          }, "Create a free account"), ".")), /*#__PURE__*/React__default['default'].createElement("li", {
            dir: "ltr",
            style: li
          }, /*#__PURE__*/React__default['default'].createElement("p", {
            dir: "ltr",
            role: "presentation",
            style: p
          }, /*#__PURE__*/React__default['default'].createElement("a", {
            href: config$1.link2,
            target: "_blank",
            style: a
          }, "Tell us what you want to read about"), ".")), /*#__PURE__*/React__default['default'].createElement("li", {
            dir: "ltr",
            style: li
          }, /*#__PURE__*/React__default['default'].createElement("p", {
            dir: "ltr",
            role: "presentation",
            style: p
          }, /*#__PURE__*/React__default['default'].createElement("a", {
            href: config$1.link3,
            target: "_blank",
            style: a
          }, "Submit your own tech stories"), ". ")), /*#__PURE__*/React__default['default'].createElement("li", {
            dir: "ltr",
            style: li
          }, /*#__PURE__*/React__default['default'].createElement("p", {
            dir: "ltr",
            role: "presentation",
            style: p
          }, /*#__PURE__*/React__default['default'].createElement("a", {
            href: config$1.link4,
            target: "_blank",
            style: a
          }, "Gain Access to Brand-As-Author"), "\u2122 Program. ")), /*#__PURE__*/React__default['default'].createElement("li", {
            dir: "ltr",
            style: li
          }, /*#__PURE__*/React__default['default'].createElement("p", {
            dir: "ltr",
            role: "presentation",
            style: p
          }, "Get Your Tech Stories Featured on the ", /*#__PURE__*/React__default['default'].createElement("a", {
            href: config$1.link5,
            target: "_blank",
            style: a
          }, "Homepage of Hacker Noon"), "."))));
        };

        var Table = function Table(_ref) {
          var className = _ref.className,
              children = _ref.children,
              style = _ref.style,
              width = _ref.width,
              align = _ref.align;
          return /*#__PURE__*/React__default['default'].createElement("table", {
            align: align,
            className: className,
            border: 0,
            cellPadding: 0,
            cellSpacing: 0,
            style: style,
            width: width
          }, children);
        };

        var styles$6 = {
          dividerBlock: {
            minWidth: '100%',
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            tableLayout: 'fixed !important'
          },
          dividerBlockInner: {
            minWidth: '100%',
            padding: '12px 18px',
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          dividerContent: {
            minWidth: '100%',
            borderTop: '2px none #eaeaea',
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          td: {
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          }
        };

        var Divider = function Divider(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement(Table, {
            className: "mcnDividerBlock",
            style: styles$6.dividerBlock
          }, /*#__PURE__*/React__default['default'].createElement("tbody", {
            className: "mcnDividerBlockOuter"
          }, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            className: "mcnDividerBlockInner",
            style: styles$6.dividerBlockInner
          }, /*#__PURE__*/React__default['default'].createElement(Table, {
            className: "mcnDividerContent",
            width: "100%",
            style: styles$6.dividerContent
          }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            style: styles$6.td,
            "data-testid": "dividerChildrenTest"
          }, children))))))));
        };

        var EmptySection = function EmptySection(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("div", null, children);
        };

        var styles$5 = {
          div: {
            textAlign: 'justify'
          },
          span1: {
            fontSize: '16px'
          },
          span2: {
            fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
          },
          a: {
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            fontWeight: 'bold',
            textDecoration: 'underline',
            color: '#111111'
          }
        };
        var link1 = "https://hackernoon.com/signup";
        var link2 = "https://publish.hackernoon.com/";

        var GetPublished = function GetPublished() {
          return /*#__PURE__*/React__default['default'].createElement("div", {
            dir: "ltr",
            style: styles$5.div
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$5.span1
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$5.span2
          }, /*#__PURE__*/React__default['default'].createElement("a", {
            href: link1,
            style: styles$5.a,
            target: "_blank"
          }, "Got a tech story to share with our readers?"), " Everything you've ever wanted to know about how to get published on Hacker Noon - ", /*#__PURE__*/React__default['default'].createElement("a", {
            href: link2,
            style: styles$5.a,
            target: "_blank"
          }, "get it here"), ".")));
        };

        var HeadLine = function HeadLine(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("div", null, children);
        };

        var styles$4 = {
          div: {
            textAlign: 'justify'
          },
          span1: {
            fontSize: '16px'
          },
          span2: {
            fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
          },
          a: {
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            fontWeight: 'bold',
            textDecoration: 'underline',
            color: '#111111'
          }
        };
        var link = "https://hackernoon.com/the-decentralized-internet-writing-contest-fq1i35t4";

        var JoinUs = function JoinUs() {
          return /*#__PURE__*/React__default['default'].createElement("div", {
            dir: "ltr",
            style: styles$4.div
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$4.span1
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$4.span2
          }, /*#__PURE__*/React__default['default'].createElement("a", {
            href: link,
            style: styles$4.a,
            target: "_blank"
          }, "\"Join our writing contest and get a chance to win cool prizes\"."))));
        };

        var styles$3 = {
          imageBlock: {
            minWidth: '100%',
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          imageBlockInner: {
            padding: '9px',
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          imageContentContainer: {
            minWidth: '100%',
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          imageContent: {
            paddingRight: '9px',
            paddingLeft: '9px',
            paddingTop: 0,
            paddingBottom: 0,
            textAlign: 'center',
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          title: {
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          img: {
            maxWidth: '15426px',
            paddingBottom: 0,
            display: 'inline !important',
            verticalAlign: 'bottom',
            border: 0,
            height: 'auto',
            outline: 'none',
            textDecoration: 'none',
            msInterpolationMode: 'bicubic'
          }
        };
        var config = {
          link: 'https://www.hackernoon.com',
          imgLink: 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/logos/brand/hackernoon.png'
        };

        var Logo = function Logo() {
          return /*#__PURE__*/React__default['default'].createElement(Table, {
            className: "mcnImageBlock",
            style: styles$3.imageBlock
          }, /*#__PURE__*/React__default['default'].createElement("tbody", {
            className: "mcnImageBlockOuter"
          }, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            valign: "top",
            style: styles$3.imageContentContainer,
            className: "mcnImageBlockInner"
          }, /*#__PURE__*/React__default['default'].createElement(Table, {
            align: "left",
            className: "mcnImageContentContainer",
            style: styles$3.imageContentContainer
          }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            className: "mcnImageContent",
            valign: "top",
            style: styles$3.imageContent
          }, /*#__PURE__*/React__default['default'].createElement("a", {
            href: config.link,
            title: "",
            className: "",
            target: "_blank",
            style: styles$3.title
          }, /*#__PURE__*/React__default['default'].createElement("img", {
            align: "center",
            alt: "",
            src: config.imgLink,
            width: 600,
            style: styles$3.img,
            className: "mcnImage"
          }))))))))));
        };

        var styles$2 = {
          previewText: {
            display: 'none',
            fontSize: '0px',
            lineHeight: '0px',
            maxHeight: '0px',
            maxWidth: '0px',
            opacity: 0,
            overflow: 'hidden',
            visibility: 'hidden',
            msoHide: 'all'
          }
        };

        var PreviewText = function PreviewText(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("span", {
            className: "mcnPreviewText",
            style: styles$2.previewText
          }, children);
        };

        var styles$1 = {
          textBlock: {
            minWidth: '100%',
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          textBlockInner: {
            paddingTop: '9px',
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          textContentContainer: {
            maxWidth: '100%',
            minWidth: '100%',
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          textContent: {
            padding: '0px 18px 9px',
            lineHeight: '150%',
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            wordBreak: 'break-word',
            color: '#111111',
            fontFamily: '"Source Sans Pro","Helvetica Neue", Helvetica, Arial,sans-serif',
            fontSize: '18px',
            textAlign: 'left'
          }
        };

        var Section = function Section(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement(Table, {
            className: "mcnTextBlock",
            style: styles$1.textBlock
          }, /*#__PURE__*/React__default['default'].createElement("tbody", {
            className: "mcnTextBlockOuter"
          }, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            valign: "top",
            className: "mcnTextBlockInner",
            style: styles$1.textBlockInner
          }, /*#__PURE__*/React__default['default'].createElement(Table, {
            align: "left",
            style: styles$1.textContentContainer,
            className: "mcnTextContentContainer"
          }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            valign: "top",
            className: "mcnTextContent",
            label: "sectionPropsChildren",
            "data-testid": "sectionPropsChildren",
            style: styles$1.textContent
          }, children))))))));
        };

        var styles = {
          imageCardRightContentOuter: {
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          imageCardRightContentInner: {
            padding: 0,
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          imageCardRightContentContainer: {
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          imageCardRightContent: {
            paddingTop: '18px',
            paddingRight: 0,
            paddingBottom: '18px',
            paddingLeft: '18px',
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          title: {
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          image: {
            maxWidth: '150px',
            borderRadius: '0%',
            border: 0,
            height: 'auto',
            outline: 'none',
            textDecoration: 'none',
            msInterpolationMode: 'bicubic',
            verticalAlign: 'bottom'
          },
          textContent: {
            paddingRight: '18px',
            paddingTop: '18px',
            paddingBottom: '18px',
            color: '#f2f2f2',
            fontFamily: 'Helvetica',
            fontSize: '14px',
            fontWeight: 'normal',
            textAlign: 'center',
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            wordBreak: 'break-word',
            lineHeight: '150%'
          },
          docTitle: {
            textAlign: 'center',
            display: 'block',
            margin: 0,
            padding: 0,
            color: '#111111',
            fontFamily: '"Merriweather Sans", "Helvetica Neue",Helvetica, Arial, sans-serif',
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            lineHeight: '125%',
            letterSpacing: 'normal'
          },
          link: {
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            color: '#111111',
            fontWeight: 'bold',
            textDecoration: 'underline'
          }
        };

        var Sponsor = function Sponsor(_ref) {
          var leftHref = _ref.leftHref,
              leftSrc = _ref.leftSrc,
              rightHref = _ref.rightHref,
              children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement(Table, {
            className: "mcnImageCardRightContentOuter",
            width: "100%",
            style: styles.imageCardRightContentOuter
          }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            align: "center",
            valign: "top",
            className: "mcnImageCardRightContentInner",
            style: styles.imageCardRightContentInner
          }, /*#__PURE__*/React__default['default'].createElement(Table, {
            align: "left",
            className: "mcnImageCardRightImageContentContainer",
            width: 200,
            style: styles.imageCardRightContentContainer
          }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            className: "mcnImageCardRightImageContent",
            align: "center",
            valign: "top",
            style: styles.imageCardRightContent
          }, /*#__PURE__*/React__default['default'].createElement("a", {
            href: leftHref,
            "data-testid": "sponsorHrefTest",
            title: "",
            className: "",
            target: "_blank",
            style: styles.title
          }, /*#__PURE__*/React__default['default'].createElement("img", {
            alt: "",
            src: leftSrc,
            width: 150,
            "data-testid": "sponsorSrcTest",
            style: styles.image,
            className: "mcnImage"
          })))))), /*#__PURE__*/React__default['default'].createElement(Table, {
            className: "mcnImageCardRightTextContentContainer",
            align: "right",
            width: 346,
            style: styles.imageCardRightContentContainer
          }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            valign: "top",
            className: "mcnTextContent",
            style: styles.textContent
          }, /*#__PURE__*/React__default['default'].createElement("h1", {
            className: "mc-toc-title",
            style: styles.docTitle
          }, /*#__PURE__*/React__default['default'].createElement("br", null), /*#__PURE__*/React__default['default'].createElement("a", {
            href: rightHref,
            style: styles.link
          }, /*#__PURE__*/React__default['default'].createElement("strong", {
            "data-testid": "sponsorChildrenTest"
          }, children)))))))))));
        };

        exports.Content = Content;
        exports.CtaList = CtaList;
        exports.Divider = Divider;
        exports.EmptySection = EmptySection;
        exports.GetPublished = GetPublished;
        exports.Headline = HeadLine;
        exports.JoinUs = JoinUs;
        exports.Logo = Logo;
        exports.PreviewText = PreviewText;
        exports.Section = Section;
        exports.Sponsor = Sponsor;
        exports.Table = Table;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      });
    });
    var Sponsor = unwrapExports(build$1);
    var build = createCommonjsModule(function (module, exports) {
      (function (global, factory) {
        factory(exports, React__default['default']);
      })(commonjsGlobal$1$1, function (exports, React) {
        function _interopDefaultLegacy(e) {
          return e && typeof e === 'object' && 'default' in e ? e : {
            'default': e
          };
        }

        var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

        var styles$8 = {
          dividerBlock: {
            minWidth: '100%',
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            tableLayout: 'fixed !important'
          },
          dividerBlockInner: {
            minWidth: '100%',
            padding: '12px 18px',
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          dividerContent: {
            minWidth: '100%',
            borderTop: '2px none #EAEAEA',
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          },
          td: {
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
          }
        };
        /**
         * Todo: I think this component repeat
         */

        var Divider = function Divider() {
          return /*#__PURE__*/React__default['default'].createElement("table", {
            border: 0,
            cellPadding: 0,
            cellSpacing: 0,
            className: "mcnDividerBlock",
            style: styles$8.dividerBlock
          }, /*#__PURE__*/React__default['default'].createElement("tbody", {
            className: "mcnDividerBlockOuter"
          }, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            className: "mcnDividerBlockInner",
            style: styles$8.dividerBlockInner
          }, /*#__PURE__*/React__default['default'].createElement("table", {
            className: "mcnDividerContent",
            border: 0,
            cellPadding: 0,
            cellSpacing: 0,
            style: styles$8.dividerContent
          }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
            style: styles$8.td
          }, /*#__PURE__*/React__default['default'].createElement("span", null)))))))));
        };

        var styles$7 = {
          title: {
            textAlign: 'center',
            display: 'block',
            margin: 0,
            padding: 0,
            color: '#111111',
            fontFamily: '"Merriweather Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            lineHeight: '125%',
            letterSpacing: 'normal'
          },
          spanFont: {
            fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
          },
          spanSize: {
            fontSize: '18px'
          }
        };

        var Heading = function Heading(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("h3", {
            className: "mc-toc-title",
            dir: "ltr",
            style: styles$7.title
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$7.spanFont
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$7.spanSize,
            "data-testid": "headingChildrenTest"
          }, children)));
        };

        var styles$6 = {
          ltr: {
            textAlign: 'center',
            lineHeight: '150%',
            margin: '10px 0',
            padding: 0,
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            color: '#111111',
            fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '18px'
          },
          spanFont: {
            fontFamily: 'georgia,times,times new roman,serif'
          },
          spanSize: {
            fontSize: '17px'
          },
          link: {
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            color: '#111111',
            fontWeight: 'bold',
            textDecoration: 'underline'
          },
          img: {
            border: '0px initial',
            width: '220px',
            height: '134px',
            margin: '0px',
            outline: 'none',
            textDecoration: 'none',
            msInterpolationMode: 'bicubic'
          }
        };

        var Image = function Image(_ref) {
          var href = _ref.href,
              src = _ref.src,
              alt = _ref.alt;
          return /*#__PURE__*/React__default['default'].createElement("p", {
            dir: "ltr",
            style: styles$6.ltr
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$6.spanFont
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$6.spanSize
          }, /*#__PURE__*/React__default['default'].createElement("a", {
            href: href,
            target: "_blank",
            style: styles$6.link
          }, /*#__PURE__*/React__default['default'].createElement("img", {
            src: src,
            style: styles$6.img,
            alt: alt,
            "data-testid": "imagePropsTest"
          })))));
        };

        var Italic = function Italic(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("i", null, children);
        };

        var styles$5 = {
          link: {
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            color: '#111111',
            fontWeight: 'bold',
            textDecoration: 'underline'
          }
        };

        var Link = function Link(_ref) {
          var href = _ref.href,
              children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("a", {
            href: href,
            target: "_blank",
            style: styles$5.link,
            "data-testid": "linkPropsTest"
          }, children);
        };

        var List = function List(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("ul", {
            dir: "ltr",
            "data-testid": "listProsChildrenTest"
          }, children);
        };

        var styles$4 = {
          title: {
            textAlign: 'center',
            display: 'block',
            margin: 0,
            padding: 0,
            color: '#111111',
            fontFamily: '"Merriweather Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            lineHeight: '125%',
            letterSpacing: 'normal'
          },
          spanFont: {
            fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
          },
          spanSize: {
            fontSize: '30px'
          }
        };

        var MainTitle = function MainTitle(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("h1", {
            className: "mc-toc-title",
            dir: "ltr",
            style: styles$4.title
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$4.spanFont
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$4.spanSize,
            "data-testid": "mainTitleChildrenTest"
          }, children)));
        };

        var styles$3 = {
          ltr: {
            textAlign: 'justify'
          },
          spanSize: {
            fontSize: '16px'
          },
          spanFont: {
            fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
          }
        };

        var Paragraph = function Paragraph(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("div", {
            dir: "ltr",
            style: styles$3.ltr
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$3.spanFont
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$3.spanSize,
            "data-testid": "paragraphChildrenTest"
          }, children)));
        };

        var styles$2 = {
          div: {
            textAlign: 'center'
          },
          span1: {
            fontSize: '16px'
          },
          span2: {
            fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
          }
        };

        var Separator = function Separator() {
          return /*#__PURE__*/React__default['default'].createElement("div", {
            dir: "ltr",
            style: styles$2.div
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$2.span1
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles$2.span2
          }, /*#__PURE__*/React__default['default'].createElement("em", null, "***"))));
        };

        var styles$1 = {
          strong: {
            fontWeight: 'bolder'
          }
        };

        var Strong = function Strong(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("strong", {
            style: styles$1.strong,
            "data-testid": "strongChildrenTest"
          }, children);
        };

        var styles = {
          ltr: {
            textAlign: 'left',
            lineHeight: '150%',
            margin: '10px 0',
            padding: 0,
            msoLineHeightRule: 'exactly',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            color: '#111111',
            fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '18px'
          },
          spanSize: {
            fontSize: '17px'
          },
          spanFont: {
            fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
          }
        };

        var SubTitle = function SubTitle(_ref) {
          var children = _ref.children;
          return /*#__PURE__*/React__default['default'].createElement("p", {
            dir: "ltr",
            style: styles.ltr
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles.spanFont
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            style: styles.spanSize
          }, /*#__PURE__*/React__default['default'].createElement(Strong, null, children))));
        };

        exports.Divider = Divider;
        exports.Heading = Heading;
        exports.Image = Image;
        exports.Italic = Italic;
        exports.Link = Link;
        exports.List = List;
        exports.MainTitle = MainTitle;
        exports.Paragraph = Paragraph;
        exports.Separator = Separator;
        exports.Strong = Strong;
        exports.Subtitle = SubTitle;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      });
    });
    var index = unwrapExports(build);

    var BodyPrototype = function BodyPrototype() {
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Sponsor, {
        leftHref: "https://bit.ly/30AWyC4",
        rightHref: "https://bit.ly/30AWyC4",
        leftSrc: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/thematic/2020/September/flatfile-logo-black-small-vertical.png"
      }, "Ship the data importer you always dreamed of"), /*#__PURE__*/React__default['default'].createElement(index.MainTitle, null, "Can We Make Data Tidy?"), /*#__PURE__*/React__default['default'].createElement(index.Paragraph, null, "Imagine: You are going to sit down with a newly-fetched data set, excited about the insights it will bring you and then you find out it is no use. If you\u2019ve been there, then you know for sure what an untidy dataset is."), /*#__PURE__*/React__default['default'].createElement(index.Image, {
        href: "#",
        src: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/6.jpg",
        alt: "GIF"
      }), ' ', "I", /*#__PURE__*/React__default['default'].createElement(index.Divider, null), /*#__PURE__*/React__default['default'].createElement(index.Paragraph, null, "A statistician from New Zealand once said: Tidy datasets are all alike, but every messy dataset is messy in its own way. Indeed, as data may come in various forms and shapes, sometimes we are inundated with it. As a result, our data science team becomes shortsighted and oops.. disillusioned by mountains of unworkable data. The only way data specialists can facilitate analysis is by keeping data clean and organized."), /*#__PURE__*/React__default['default'].createElement(index.Heading, null, /*#__PURE__*/React__default['default'].createElement(index.Strong, null, "What is tidy data?")), /*#__PURE__*/React__default['default'].createElement(index.Paragraph, null, "Essentially, tidy data is a term coined by Hadley Wickham in his Tidy Data paper (remember that statistician from NZ?). He defined tidy data as data that is neatly organized and all set for analysis. This way of organizing allows you to easily produce charts, diagrams, and summary statistics. As it often happens, not all data comes out of the database clean, therefore cleansing it is essential to efficiently analyze it."), /*#__PURE__*/React__default['default'].createElement(index.Image, {
        href: "#",
        src: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/1.png"
      }), /*#__PURE__*/React__default['default'].createElement(index.Divider, null), /*#__PURE__*/React__default['default'].createElement(index.Paragraph, null, "Without further ado, let us break down the principles that allow you keep your data nice and clean."), /*#__PURE__*/React__default['default'].createElement(index.Heading, null, /*#__PURE__*/React__default['default'].createElement(index.Strong, null, "Tidy Data Principles")), /*#__PURE__*/React__default['default'].createElement(index.Heading, null, /*#__PURE__*/React__default['default'].createElement(index.Strong, null, "1. Each row is an observational unit.")), /*#__PURE__*/React__default['default'].createElement(index.Image, {
        href: "#",
        src: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/image1.png"
      }), /*#__PURE__*/React__default['default'].createElement(index.Divider, null), /*#__PURE__*/React__default['default'].createElement(index.Paragraph, null, "We\u2019ll start with one of the basic principles. When you are giving your data the once-over, you should make sure each row contains an observation. By definition, observation is the individual unit under question. If we look at the table above, an observational unit could be called \u2018people\u2019. You can see that each person has an individual row on the table and all of the information for that person is in the same row. Observations are included in rows, variables are represented as columns and there is only one observational unit per table. Now THIS is tidy data."), /*#__PURE__*/React__default['default'].createElement(index.Divider, null), /*#__PURE__*/React__default['default'].createElement(Sponsor, {
        leftHref: "https://bit.ly/30AWyC4",
        rightHref: "https://bit.ly/30AWyC4",
        leftSrc: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/thematic/2020/September/flatfile-logo-black-small-vertical.png"
      }, "Ship the data importer you always dreamed of"));
    };

    exports.BodyPrototype = BodyPrototype;
    exports.Content = Content;
    exports.CtaList = CtaList;
    exports.Divider = Divider;
    exports.EmptySection = EmptySection;
    exports.GetPublished = GetPublished;
    exports.Headline = HeadLine;
    exports.JoinUs = JoinUs;
    exports.Section = Section;
    exports.Table = Table;
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
  });
  });

  var Sponsor = unwrapExports(build$1);

  var build = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    factory(exports, React__default['default']) ;
  })(commonjsGlobal$1, function (exports, React) {

    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
      };
    }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var styles$8 = {
      dividerBlock: {
        minWidth: '100%',
        borderCollapse: 'collapse',
        msoTableLspace: '0pt',
        msoTableRspace: '0pt',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        tableLayout: 'fixed !important'
      },
      dividerBlockInner: {
        minWidth: '100%',
        padding: '12px 18px',
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%'
      },
      dividerContent: {
        minWidth: '100%',
        borderTop: '2px none #EAEAEA',
        borderCollapse: 'collapse',
        msoTableLspace: '0pt',
        msoTableRspace: '0pt',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%'
      },
      td: {
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%'
      }
    };
    /**
     * Todo: I think this component repeat
     */

    var Divider = function Divider() {
      return /*#__PURE__*/React__default['default'].createElement("table", {
        border: 0,
        cellPadding: 0,
        cellSpacing: 0,
        className: "mcnDividerBlock",
        style: styles$8.dividerBlock
      }, /*#__PURE__*/React__default['default'].createElement("tbody", {
        className: "mcnDividerBlockOuter"
      }, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
        className: "mcnDividerBlockInner",
        style: styles$8.dividerBlockInner
      }, /*#__PURE__*/React__default['default'].createElement("table", {
        className: "mcnDividerContent",
        border: 0,
        cellPadding: 0,
        cellSpacing: 0,
        style: styles$8.dividerContent
      }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
        style: styles$8.td
      }, /*#__PURE__*/React__default['default'].createElement("span", null)))))))));
    };

    var styles$7 = {
      title: {
        textAlign: 'center',
        display: 'block',
        margin: 0,
        padding: 0,
        color: '#111111',
        fontFamily: '"Merriweather Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '125%',
        letterSpacing: 'normal'
      },
      spanFont: {
        fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
      },
      spanSize: {
        fontSize: '18px'
      }
    };

    var Heading = function Heading(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("h3", {
        className: "mc-toc-title",
        dir: "ltr",
        style: styles$7.title
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$7.spanFont
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$7.spanSize,
        "data-testid": "headingChildrenTest"
      }, children)));
    };

    var styles$6 = {
      ltr: {
        textAlign: 'center',
        lineHeight: '150%',
        margin: '10px 0',
        padding: 0,
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        color: '#111111',
        fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '18px'
      },
      spanFont: {
        fontFamily: 'georgia,times,times new roman,serif'
      },
      spanSize: {
        fontSize: '17px'
      },
      link: {
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        color: '#111111',
        fontWeight: 'bold',
        textDecoration: 'underline'
      },
      img: {
        border: '0px initial',
        width: '220px',
        height: '134px',
        margin: '0px',
        outline: 'none',
        textDecoration: 'none',
        msInterpolationMode: 'bicubic'
      }
    };

    var Image = function Image(_ref) {
      var href = _ref.href,
          src = _ref.src,
          alt = _ref.alt;
      return /*#__PURE__*/React__default['default'].createElement("p", {
        dir: "ltr",
        style: styles$6.ltr
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$6.spanFont
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$6.spanSize
      }, /*#__PURE__*/React__default['default'].createElement("a", {
        href: href,
        target: "_blank",
        style: styles$6.link
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: src,
        style: styles$6.img,
        alt: alt,
        "data-testid": "imagePropsTest"
      })))));
    };

    var Italic = function Italic(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("i", null, children);
    };

    var styles$5 = {
      link: {
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        color: '#111111',
        fontWeight: 'bold',
        textDecoration: 'underline'
      }
    };

    var Link = function Link(_ref) {
      var href = _ref.href,
          children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("a", {
        href: href,
        target: "_blank",
        style: styles$5.link,
        "data-testid": "linkPropsTest"
      }, children);
    };

    var List = function List(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("ul", {
        dir: "ltr",
        "data-testid": "listProsChildrenTest"
      }, children);
    };

    var styles$4 = {
      title: {
        textAlign: 'center',
        display: 'block',
        margin: 0,
        padding: 0,
        color: '#111111',
        fontFamily: '"Merriweather Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '26px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '125%',
        letterSpacing: 'normal'
      },
      spanFont: {
        fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
      },
      spanSize: {
        fontSize: '30px'
      }
    };

    var MainTitle = function MainTitle(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("h1", {
        className: "mc-toc-title",
        dir: "ltr",
        style: styles$4.title
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$4.spanFont
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$4.spanSize,
        "data-testid": "mainTitleChildrenTest"
      }, children)));
    };

    var styles$3 = {
      ltr: {
        textAlign: 'justify'
      },
      spanSize: {
        fontSize: '16px'
      },
      spanFont: {
        fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
      }
    };

    var Paragraph = function Paragraph(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        dir: "ltr",
        style: styles$3.ltr
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$3.spanFont
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$3.spanSize,
        "data-testid": "paragraphChildrenTest"
      }, children)));
    };

    var styles$2 = {
      div: {
        textAlign: 'center'
      },
      span1: {
        fontSize: '16px'
      },
      span2: {
        fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
      }
    };

    var Separator = function Separator() {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        dir: "ltr",
        style: styles$2.div
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$2.span1
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles$2.span2
      }, /*#__PURE__*/React__default['default'].createElement("em", null, "***"))));
    };

    var styles$1 = {
      strong: {
        fontWeight: 'bolder'
      }
    };

    var Strong = function Strong(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("strong", {
        style: styles$1.strong,
        "data-testid": "strongChildrenTest"
      }, children);
    };

    var styles = {
      ltr: {
        textAlign: 'left',
        lineHeight: '150%',
        margin: '10px 0',
        padding: 0,
        msoLineHeightRule: 'exactly',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        color: '#111111',
        fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '18px'
      },
      spanSize: {
        fontSize: '17px'
      },
      spanFont: {
        fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
      }
    };

    var SubTitle = function SubTitle(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("p", {
        dir: "ltr",
        style: styles.ltr
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles.spanFont
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        style: styles.spanSize
      }, /*#__PURE__*/React__default['default'].createElement(Strong, null, children))));
    };

    exports.Divider = Divider;
    exports.Heading = Heading;
    exports.Image = Image;
    exports.Italic = Italic;
    exports.Link = Link;
    exports.List = List;
    exports.MainTitle = MainTitle;
    exports.Paragraph = Paragraph;
    exports.Separator = Separator;
    exports.Strong = Strong;
    exports.Subtitle = SubTitle;
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
  });
  });

  var index = unwrapExports(build);

  var BodyPrototype = function BodyPrototype() {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Sponsor, {
      leftHref: "https://bit.ly/30AWyC4",
      rightHref: "https://bit.ly/30AWyC4",
      leftSrc: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/thematic/2020/September/flatfile-logo-black-small-vertical.png"
    }, "Ship the data importer you always dreamed of"), /*#__PURE__*/React__default['default'].createElement(index.MainTitle, null, "Can We Make Data Tidy?"), /*#__PURE__*/React__default['default'].createElement(index.Paragraph, null, "Imagine: You are going to sit down with a newly-fetched data set, excited about the insights it will bring you and then you find out it is no use. If you\u2019ve been there, then you know for sure what an untidy dataset is."), /*#__PURE__*/React__default['default'].createElement(index.Image, {
      href: "#",
      src: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/6.jpg",
      alt: "GIF"
    }), ' ', "I", /*#__PURE__*/React__default['default'].createElement(index.Divider, null), /*#__PURE__*/React__default['default'].createElement(index.Paragraph, null, "A statistician from New Zealand once said: Tidy datasets are all alike, but every messy dataset is messy in its own way. Indeed, as data may come in various forms and shapes, sometimes we are inundated with it. As a result, our data science team becomes shortsighted and oops.. disillusioned by mountains of unworkable data. The only way data specialists can facilitate analysis is by keeping data clean and organized."), /*#__PURE__*/React__default['default'].createElement(index.Heading, null, /*#__PURE__*/React__default['default'].createElement(index.Strong, null, "What is tidy data?")), /*#__PURE__*/React__default['default'].createElement(index.Paragraph, null, "Essentially, tidy data is a term coined by Hadley Wickham in his Tidy Data paper (remember that statistician from NZ?). He defined tidy data as data that is neatly organized and all set for analysis. This way of organizing allows you to easily produce charts, diagrams, and summary statistics. As it often happens, not all data comes out of the database clean, therefore cleansing it is essential to efficiently analyze it."), /*#__PURE__*/React__default['default'].createElement(index.Image, {
      href: "#",
      src: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/1.png"
    }), /*#__PURE__*/React__default['default'].createElement(index.Divider, null), /*#__PURE__*/React__default['default'].createElement(index.Paragraph, null, "Without further ado, let us break down the principles that allow you keep your data nice and clean."), /*#__PURE__*/React__default['default'].createElement(index.Heading, null, /*#__PURE__*/React__default['default'].createElement(index.Strong, null, "Tidy Data Principles")), /*#__PURE__*/React__default['default'].createElement(index.Heading, null, /*#__PURE__*/React__default['default'].createElement(index.Strong, null, "1. Each row is an observational unit.")), /*#__PURE__*/React__default['default'].createElement(index.Image, {
      href: "#",
      src: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/image1.png"
    }), /*#__PURE__*/React__default['default'].createElement(index.Divider, null), /*#__PURE__*/React__default['default'].createElement(index.Paragraph, null, "We\u2019ll start with one of the basic principles. When you are giving your data the once-over, you should make sure each row contains an observation. By definition, observation is the individual unit under question. If we look at the table above, an observational unit could be called \u2018people\u2019. You can see that each person has an individual row on the table and all of the information for that person is in the same row. Observations are included in rows, variables are represented as columns and there is only one observational unit per table. Now THIS is tidy data."), /*#__PURE__*/React__default['default'].createElement(index.Divider, null), /*#__PURE__*/React__default['default'].createElement(Sponsor, {
      leftHref: "https://bit.ly/30AWyC4",
      rightHref: "https://bit.ly/30AWyC4",
      leftSrc: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/thematic/2020/September/flatfile-logo-black-small-vertical.png"
    }, "Ship the data importer you always dreamed of"));
  };

  exports.BodyPrototype = BodyPrototype;
  exports.Content = Content;
  exports.CtaList = CtaList;
  exports.Divider = Divider;
  exports.EmptySection = EmptySection;
  exports.GetPublished = GetPublished;
  exports.Headline = HeadLine;
  exports.JoinUs = JoinUs;
  exports.Section = Section;
  exports.Table = Table;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
}(build$2, build$2.exports));

var build$1 = {exports: {}};

(function (module, exports) {
(function (global, factory) {
  factory(exports, React) ;
}(commonjsGlobal, (function (exports, React) {
  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var styles$7 = {
    dividerBlock: {
      minWidth: '100%',
      borderCollapse: 'collapse',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      tableLayout: 'fixed !important'
    },
    dividerBlockInner: {
      minWidth: '100%',
      padding: '12px 18px',
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%'
    },
    dividerContent: {
      minWidth: '100%',
      borderTop: '2px none #EAEAEA',
      borderCollapse: 'collapse',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%'
    },
    td: {
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%'
    }
  };

  /**
   * Todo: I think this component repeat
   */

  var Divider = function Divider() {
    return /*#__PURE__*/React__default['default'].createElement("table", {
      border: 0,
      cellPadding: 0,
      cellSpacing: 0,
      className: "mcnDividerBlock",
      style: styles$7.dividerBlock
    }, /*#__PURE__*/React__default['default'].createElement("tbody", {
      className: "mcnDividerBlockOuter"
    }, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
      className: "mcnDividerBlockInner",
      style: styles$7.dividerBlockInner
    }, /*#__PURE__*/React__default['default'].createElement("table", {
      className: "mcnDividerContent",
      border: 0,
      cellPadding: 0,
      cellSpacing: 0,
      style: styles$7.dividerContent
    }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
      style: styles$7.td
    }, /*#__PURE__*/React__default['default'].createElement("span", null)))))))));
  };

  var styles$6 = {
    title: {
      textAlign: 'center',
      display: 'block',
      margin: 0,
      padding: 0,
      color: '#111111',
      fontFamily: '"Merriweather Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '125%',
      letterSpacing: 'normal'
    },
    spanFont: {
      fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
    },
    spanSize: {
      fontSize: '18px'
    }
  };

  var Heading = function Heading(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement("h3", {
      className: "mc-toc-title",
      dir: "ltr",
      style: styles$6.title
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$6.spanFont
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$6.spanSize,
      "data-testid": "headingChildrenTest"
    }, children)));
  };

  var Italic = function Italic(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement("i", null, children);
  };

  var styles$5 = {
    link: {
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      color: '#111111',
      fontWeight: 'bold',
      textDecoration: 'underline'
    }
  };

  var Link = function Link(_ref) {
    var href = _ref.href,
        children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement("a", {
      href: href,
      target: "_blank",
      style: styles$5.link,
      "data-testid": "linkPropsTest"
    }, children);
  };

  var List = function List(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement("ul", {
      dir: "ltr",
      "data-testid": "listProsChildrenTest"
    }, children);
  };

  var styles$4 = {
    title: {
      textAlign: 'center',
      display: 'block',
      margin: 0,
      padding: 0,
      color: '#111111',
      fontFamily: '"Merriweather Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '125%',
      letterSpacing: 'normal'
    },
    spanFont: {
      fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
    },
    spanSize: {
      fontSize: '30px'
    }
  };

  var MainTitle = function MainTitle(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement("h1", {
      className: "mc-toc-title",
      dir: "ltr",
      style: styles$4.title
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$4.spanFont
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$4.spanSize,
      "data-testid": "mainTitleChildrenTest"
    }, children)));
  };

  var styles$3 = {
    ltr: {
      textAlign: 'justify'
    },
    spanSize: {
      fontSize: '16px'
    },
    spanFont: {
      fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
    }
  };

  var Paragraph = function Paragraph(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      dir: "ltr",
      style: styles$3.ltr
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$3.spanFont
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$3.spanSize,
      "data-testid": "paragraphChildrenTest"
    }, children)));
  };

  var styles$2 = {
    div: {
      textAlign: 'center'
    },
    span1: {
      fontSize: '16px'
    },
    span2: {
      fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
    }
  };

  var Separator = function Separator() {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      dir: "ltr",
      style: styles$2.div
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$2.span1
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles$2.span2
    }, /*#__PURE__*/React__default['default'].createElement("em", null, "***"))));
  };

  var styles$1 = {
    strong: {
      fontWeight: 'bolder'
    }
  };

  var Strong = function Strong(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement("strong", {
      style: styles$1.strong,
      "data-testid": "strongChildrenTest"
    }, children);
  };

  var styles = {
    ltr: {
      textAlign: 'left',
      lineHeight: '150%',
      margin: '10px 0',
      padding: 0,
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      color: '#111111',
      fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '18px'
    },
    spanSize: {
      fontSize: '17px'
    },
    spanFont: {
      fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'
    }
  };

  var SubTitle = function SubTitle(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement("p", {
      dir: "ltr",
      style: styles.ltr
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles.spanFont
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: styles.spanSize
    }, /*#__PURE__*/React__default['default'].createElement(Strong, null, children))));
  };

  exports.Divider = Divider;
  exports.Heading = Heading;
  exports.Italic = Italic;
  exports.Link = Link;
  exports.List = List;
  exports.MainTitle = MainTitle;
  exports.Paragraph = Paragraph;
  exports.Separator = Separator;
  exports.Strong = Strong;
  exports.Subtitle = SubTitle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
}(build$1, build$1.exports));

var Body = function Body() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(build$2.exports.Sponsor, {
    leftHref: "https://bit.ly/30AWyC4",
    rightHref: "https://bit.ly/30AWyC4",
    leftSrc: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/thematic/2020/September/flatfile-logo-black-small-vertical.png"
  }, "Ship the data importer you always dreamed of"), /*#__PURE__*/React.createElement(build$1.exports.MainTitle, null, "Can We Make Data Tidy?"), /*#__PURE__*/React.createElement(build$1.exports.Paragraph, null, "Imagine: You are going to sit down with a newly-fetched data set, excited about the insights it will bring you and then you find out it is no use. If you\u2019ve been there, then you know for sure what an untidy dataset is."), /*#__PURE__*/React.createElement(build$1.exports.Image, {
    href: "#",
    src: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/6.jpg",
    alt: "GIF"
  }), ' ', "I", /*#__PURE__*/React.createElement(build$1.exports.Divider, null), /*#__PURE__*/React.createElement(build$1.exports.Paragraph, null, "A statistician from New Zealand once said: Tidy datasets are all alike, but every messy dataset is messy in its own way. Indeed, as data may come in various forms and shapes, sometimes we are inundated with it. As a result, our data science team becomes shortsighted and oops.. disillusioned by mountains of unworkable data. The only way data specialists can facilitate analysis is by keeping data clean and organized."), /*#__PURE__*/React.createElement(build$1.exports.Heading, null, /*#__PURE__*/React.createElement(build$1.exports.Strong, null, "What is tidy data?")), /*#__PURE__*/React.createElement(build$1.exports.Paragraph, null, "Essentially, tidy data is a term coined by Hadley Wickham in his Tidy Data paper (remember that statistician from NZ?). He defined tidy data as data that is neatly organized and all set for analysis. This way of organizing allows you to easily produce charts, diagrams, and summary statistics. As it often happens, not all data comes out of the database clean, therefore cleansing it is essential to efficiently analyze it."), /*#__PURE__*/React.createElement(build$1.exports.Image, {
    href: "#",
    src: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/1.png"
  }), /*#__PURE__*/React.createElement(build$1.exports.Divider, null), /*#__PURE__*/React.createElement(build$1.exports.Paragraph, null, "Without further ado, let us break down the principles that allow you keep your data nice and clean."), /*#__PURE__*/React.createElement(build$1.exports.Heading, null, /*#__PURE__*/React.createElement(build$1.exports.Strong, null, "Tidy Data Principles")), /*#__PURE__*/React.createElement(build$1.exports.Heading, null, /*#__PURE__*/React.createElement(build$1.exports.Strong, null, "1. Each row is an observational unit.")), /*#__PURE__*/React.createElement(build$1.exports.Image, {
    href: "#",
    src: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/image1.png"
  }), /*#__PURE__*/React.createElement(build$1.exports.Divider, null), /*#__PURE__*/React.createElement(build$1.exports.Paragraph, null, "We\u2019ll start with one of the basic principles. When you are giving your data the once-over, you should make sure each row contains an observation. By definition, observation is the individual unit under question. If we look at the table above, an observational unit could be called \u2018people\u2019. You can see that each person has an individual row on the table and all of the information for that person is in the same row. Observations are included in rows, variables are represented as columns and there is only one observational unit per table. Now THIS is tidy data."), /*#__PURE__*/React.createElement(build$1.exports.Divider, null), /*#__PURE__*/React.createElement(build$2.exports.Sponsor, {
    leftHref: "https://bit.ly/30AWyC4",
    rightHref: "https://bit.ly/30AWyC4",
    leftSrc: "https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/thematic/2020/September/flatfile-logo-black-small-vertical.png"
  }, "Ship the data importer you always dreamed of"));
};

var HOC = function HOC(_ref) {
  var children = _ref.children,
      styles = _ref.styles;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Table, {
    id: "bodyTable",
    style: styles.bodyTable
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center",
    valign: "top",
    id: "bodyCell",
    style: styles.bodyCell
  }, /*#__PURE__*/React.createElement(Table, {
    className: "templateContainer",
    style: styles.templateContainer
  }, children)))))));
};

var build = {exports: {}};

(function (module, exports) {
(function (global, factory) {
  factory(exports, React) ;
}(commonjsGlobal, (function (exports, React) {
  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var Address = function Address(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, children);
  };

  var headStyles = function headStyles() {
    return "\np{\n  margin:10px 0;\n  padding:0;\n}\n";
  };

  var Link = function Link(_ref) {
    var href = _ref.href,
        style = _ref.style,
        children = _ref.children,
        _ref$target = _ref.target,
        target = _ref$target === void 0 ? "_blank" : _ref$target;
    return /*#__PURE__*/React__default['default'].createElement("a", {
      href: href,
      style: style,
      target: target,
      "data-testid": "newsletterHrefTest"
    }, children);
  };

  var Unsubscribe = function Unsubscribe(_ref) {
    var hrefUnsub = _ref.hrefUnsub,
        label = _ref.label,
        styles = _ref.styles;
    return /*#__PURE__*/React__default['default'].createElement(Link, {
      href: hrefUnsub,
      style: styles,
      "data-testid": "unsubscribeTest"
    }, label);
  };

  // const myComponent = () => <Img src="https://www.example.com/foo.jpg" />
  // TODO replace our component with react-image component
  // let imageProps = {
  //     src: ,
  //     alt: ,
  //     style: ,
  //     height: ,
  //     width: ,
  //     className: ,
  //     data-testid: "tableLeftImgTest"
  // };

  var Image = function Image(_ref) {
    var src = _ref.src,
        styles = _ref.styles,
        className = _ref.className;
        _ref.height;
        _ref.width;
        var _ref$alt = _ref.alt,
        alt = _ref$alt === void 0 ? "" : _ref$alt;
    return /*#__PURE__*/React__default['default'].createElement("img", {
      align: "center",
      alt: alt,
      src: src,
      width: 600,
      style: styles,
      className: className
    });
  };
  // src={src}
  // alt={alt}
  // style={styles.followSocialImg}
  // height={24}
  // width={24}
  // className=''
  // data-testid="tableLeftImgTest"
  // /> */}
  // import React, { Suspense } from 'react'
  // import { useImage } from 'react-image'
  // function MyImageComponent() {
  //   const { src } = useImage({
  //     srcList: 'https://www.example.com/foo.jpg',
  //   })
  //   return <img src={src} />
  // }
  // export default function MyComponent() {
  //   return (
  //     <Suspense>
  //       <MyImageComponent />
  //     </Suspense>
  //   )
  // }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var imgProps = function imgProps(props) {
    var src = props.src,
        alt = props.alt,
        style = props.style,
        height = props.height,
        width = props.width,
        className = props.className;
    return {
      src: src,
      alt: alt,
      style: style,
      height: height,
      width: width,
      className: className
    };
  };

  var getLinkProps = function getLinkProps(props) {
    var href = props.href,
        target = props.target,
        style = props.style;
    return {
      href: href,
      style: style,
      target: target
    };
  }; // TODO stuff, related to styles is highly debated


  var ImageLink = function ImageLink(props) {
    var link = getLinkProps(props);
    var image = imgProps(props);
    return /*#__PURE__*/React__default['default'].createElement(Link, link, /*#__PURE__*/React__default['default'].createElement(Image, image));
  }; // const ImageLink = ({href, styles, src, alt }) => (

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var Logo = function Logo(_ref) {
    _ref.href;
        _ref.imageLink;
        _ref.styles;
    var imageProps = imgProps();
    var linkProps = getLinkProps();

    var imageLinkProps = _objectSpread(_objectSpread({}, imageProps), linkProps); //   <ImageLink href={href} style={styles.title} src={src} width={600} style={styles.img} className="mcnImage" />


    return /*#__PURE__*/React__default['default'].createElement(ImageLink, imageLinkProps);
  };

  var SocialMedia = function SocialMedia(_ref) {
    _ref.socialMediaLinks;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, " ");
  };

  var Copyright = function Copyright(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, children);
  };

  var NBSP = (function () {
    return "\xA0";
  });

  exports.Address = Address;
  exports.Copyright = Copyright;
  exports.HeadStyles = headStyles;
  exports.Image = Image;
  exports.ImageLink = ImageLink;
  exports.Link = Link;
  exports.Logo = Logo;
  exports.NBSP = NBSP;
  exports.SocialMedia = SocialMedia;
  exports.Unsubscribe = Unsubscribe;
  exports.getLinkProps = getLinkProps;
  exports.imgProps = imgProps;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
}(build, build.exports));

var styles$2 = {
  imageBlock: {
    minWidth: '100%',
    borderCollapse: 'collapse',
    msoTableLspace: '0pt',
    msoTableRspace: '0pt',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  },
  imageBlockInner: {
    padding: '9px',
    msoLineHeightRule: 'exactly',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  },
  imageContentContainer: {
    minWidth: '100%',
    borderCollapse: 'collapse',
    msoTableLspace: '0pt',
    msoTableRspace: '0pt',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  },
  imageContent: {
    paddingRight: '9px',
    paddingLeft: '9px',
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: 'center',
    msoLineHeightRule: 'exactly',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  },
  title: {
    msoLineHeightRule: 'exactly',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  },
  img: {
    maxWidth: '15426px',
    paddingBottom: 0,
    display: 'inline !important',
    verticalAlign: 'bottom',
    border: 0,
    height: 'auto',
    outline: 'none',
    textDecoration: 'none',
    msInterpolationMode: 'bicubic'
  }
};

var config = {
  link: 'https://www.hackernoon.com',
  imgLink: 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/logos/brand/hackernoon.png'
};

var LogoLayout = function LogoLayout() {
  return /*#__PURE__*/React.createElement(Table, {
    className: "mcnImageBlock",
    style: styles$2.imageBlock
  }, /*#__PURE__*/React.createElement("tbody", {
    className: "mcnImageBlockOuter"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    valign: "top",
    style: styles$2.imageContentContainer,
    className: "mcnImageBlockInner"
  }, /*#__PURE__*/React.createElement(Table, {
    align: "left",
    className: "mcnImageContentContainer",
    style: styles$2.imageContentContainer
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "mcnImageContent",
    valign: "top",
    style: styles$2.imageContent
  }, /*#__PURE__*/React.createElement("a", {
    href: config.link,
    title: "",
    className: "",
    target: "_blank",
    style: styles$2.title
  }, /*#__PURE__*/React.createElement("img", {
    align: "center",
    alt: "",
    src: config.imgLink,
    width: 600,
    style: styles$2.img,
    className: "mcnImage"
  }))))))))));
};

var styles$1 = {
  previewText: {
    display: 'none',
    fontSize: '0px',
    lineHeight: '0px',
    maxHeight: '0px',
    maxWidth: '0px',
    opacity: 0,
    overflow: 'hidden',
    visibility: 'hidden',
    msoHide: 'all'
  }
};

var PreviewText = function PreviewText(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("span", {
    className: "mcnPreviewText",
    style: styles$1.previewText
  }, children);
};

var styles = {
  imageCardRightContentOuter: {
    borderCollapse: 'collapse',
    msoTableLspace: '0pt',
    msoTableRspace: '0pt',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  },
  imageCardRightContentInner: {
    padding: 0,
    msoLineHeightRule: 'exactly',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  },
  imageCardRightContentContainer: {
    borderCollapse: 'collapse',
    msoTableLspace: '0pt',
    msoTableRspace: '0pt',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  },
  imageCardRightContent: {
    paddingTop: '18px',
    paddingRight: 0,
    paddingBottom: '18px',
    paddingLeft: '18px',
    msoLineHeightRule: 'exactly',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  },
  title: {
    msoLineHeightRule: 'exactly',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%'
  },
  image: {
    maxWidth: '150px',
    borderRadius: '0%',
    border: 0,
    height: 'auto',
    outline: 'none',
    textDecoration: 'none',
    msInterpolationMode: 'bicubic',
    verticalAlign: 'bottom'
  },
  textContent: {
    paddingRight: '18px',
    paddingTop: '18px',
    paddingBottom: '18px',
    color: '#f2f2f2',
    fontFamily: 'Helvetica',
    fontSize: '14px',
    fontWeight: 'normal',
    textAlign: 'center',
    msoLineHeightRule: 'exactly',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%',
    wordBreak: 'break-word',
    lineHeight: '150%'
  },
  docTitle: {
    textAlign: 'center',
    display: 'block',
    margin: 0,
    padding: 0,
    color: '#111111',
    fontFamily: '"Merriweather Sans", "Helvetica Neue",Helvetica, Arial, sans-serif',
    fontSize: '26px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '125%',
    letterSpacing: 'normal'
  },
  link: {
    msoLineHeightRule: 'exactly',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%',
    color: '#111111',
    fontWeight: 'bold',
    textDecoration: 'underline'
  }
};

var Sponsor = function Sponsor(_ref) {
  var leftHref = _ref.leftHref,
      leftSrc = _ref.leftSrc,
      rightHref = _ref.rightHref,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Table, {
    className: "mcnImageCardRightContentOuter",
    width: "100%",
    style: styles.imageCardRightContentOuter
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    align: "center",
    valign: "top",
    className: "mcnImageCardRightContentInner",
    style: styles.imageCardRightContentInner
  }, /*#__PURE__*/React.createElement(Table, {
    align: "left",
    className: "mcnImageCardRightImageContentContainer",
    width: 200,
    style: styles.imageCardRightContentContainer
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "mcnImageCardRightImageContent",
    align: "center",
    valign: "top",
    style: styles.imageCardRightContent
  }, /*#__PURE__*/React.createElement("a", {
    href: leftHref,
    "data-testid": "sponsorHrefTest",
    title: "",
    className: "",
    target: "_blank",
    style: styles.title
  }, /*#__PURE__*/React.createElement("img", {
    alt: "",
    src: leftSrc,
    width: 150,
    "data-testid": "sponsorSrcTest",
    style: styles.image,
    className: "mcnImage"
  })))))), /*#__PURE__*/React.createElement(Table, {
    className: "mcnImageCardRightTextContentContainer",
    align: "right",
    width: 346,
    style: styles.imageCardRightContentContainer
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    valign: "top",
    className: "mcnTextContent",
    style: styles.textContent
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mc-toc-title",
    style: styles.docTitle
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: rightHref,
    style: styles.link
  }, /*#__PURE__*/React.createElement("strong", {
    "data-testid": "sponsorChildrenTest"
  }, children)))))))))));
};

export { Body, HOC, LogoLayout, PreviewText, Sponsor };
