(window["webpackJsonp__demo"] = window["webpackJsonp__demo"] || []).push([[0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _actions_namespaceObject = {};
__webpack_require__.r(_actions_namespaceObject);
__webpack_require__.d(_actions_namespaceObject, "addTodo", function() { return _actions_addTodo; });
__webpack_require__.d(_actions_namespaceObject, "editTodo", function() { return _actions_editTodo; });
__webpack_require__.d(_actions_namespaceObject, "toggleTodo", function() { return _actions_toggleTodo; });
__webpack_require__.d(_actions_namespaceObject, "deleteTodo", function() { return _actions_deleteTodo; });
__webpack_require__.d(_actions_namespaceObject, "toggleStarred", function() { return _actions_toggleStarred; });
__webpack_require__.d(_actions_namespaceObject, "filterTodos", function() { return _actions_filterTodos; });
__webpack_require__.d(_actions_namespaceObject, "toggleAll", function() { return _actions_toggleAll; });
__webpack_require__.d(_actions_namespaceObject, "clearCompleted", function() { return _actions_clearCompleted; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(30);

// CONCATENATED MODULE: ./src/pages/todos/_constants.ts
// Used to filter by "all", "completed" or "active" todos:
var SHOW_ALL = 'SHOW_ALL';
var SHOW_COMPLETED = 'SHOW_COMPLETED';
var SHOW_ACTIVE = 'SHOW_ACTIVE';
// CONCATENATED MODULE: ./src/pages/todos/_actionTypes.ts
var ADD_TODO = 'ADD_TODO';
var EDIT_TODO = 'EDIT_TODO';
var DELETE_TODO = 'DELETE_TODO';
var FILTER_TODOS = 'FILTER_TODOS';
var TOGGLE_TODO = 'TOGGLE_TODO';
var TOGGLE_STARRED_TODO = 'TOGGLE_STARRED_TODO';
var TOGGLE_ALL = 'TOGGLE_ALL';
var CLEAR_COMPLETED = 'CLEAR_COMPLETED';
// CONCATENATED MODULE: ./src/pages/todos/utils.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sortTodos = function sortTodos(todos) {
  return todos.sort(function (t1, t2) {
    if (t1.completed === t2.completed) {
      // Similar items (both completed or both uncompleted) sorted by creation's date.
      return t1.createdAt < t2.createdAt ? -1 : 1;
    } else {
      // uncompleted listed first.
      return !t1.completed && t2.completed ? -1 : 1;
    }
  });
};
var getCompletedAmount = function getCompletedAmount(todos) {
  return todos.reduce(function (accum, todo) {
    return !todo.completed ? accum : accum + 1;
  }, 0);
};
var getUncompletedAmount = function getUncompletedAmount(todos) {
  return todos.reduce(function (accum, todo) {
    return todo.completed ? accum : accum + 1;
  }, 0);
};
var utils_toggleAll = function toggleAll(todos, completed) {
  return todos.map(function (todo) {
    return _objectSpread({}, todo, {
      completed: completed
    });
  });
};
// CONCATENATED MODULE: ./src/pages/todos/todos.example.ts
// List of todos for example and development purpose.
var TODOS = [{
  completed: false,
  id: 1,
  starred: false,
  text: 'Item 1',
  createdAt: new Date('01/01/2020')
}, {
  completed: false,
  id: 2,
  starred: false,
  text: 'Item 2',
  createdAt: new Date('02/01/2020')
}, {
  completed: false,
  id: 3,
  starred: false,
  text: 'Item 3',
  createdAt: new Date('03/01/2020')
}, {
  completed: false,
  id: 4,
  starred: false,
  text: 'Item 4',
  createdAt: new Date('04/01/2020')
}];
// CONCATENATED MODULE: ./src/pages/todos/_reducer.ts
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _reducer_ownKeys(Object(source), true).forEach(function (key) { _reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var initialState = {
  activeFilter: SHOW_ALL,
  todos: TODOS
};
/* harmony default export */ var _reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_TODO:
      {
        var newTodo = _reducer_objectSpread({}, action.todo, {
          id: Math.random() * 16
        });

        return _reducer_objectSpread({}, state, {
          todos: sortTodos([].concat(_toConsumableArray(state.todos), [newTodo]))
        });
      }

    case EDIT_TODO:
      {
        var editedTodo = action.todo;
        return _reducer_objectSpread({}, state, {
          todos: state.todos.map(function (todo) {
            return todo.id === editedTodo.id ? editedTodo : todo;
          })
        });
      }

    case DELETE_TODO:
      {
        var todos = state.todos.filter(function (todo) {
          return todo.id !== action.id;
        });
        return _reducer_objectSpread({}, state, {
          todos: todos
        });
      }

    case TOGGLE_TODO:
      {
        var _todos = state.todos.map(function (todo) {
          return todo.id === action.id ? _reducer_objectSpread({}, todo, {
            completed: !todo.completed
          }) : todo;
        });

        return _reducer_objectSpread({}, state, {
          todos: sortTodos(_todos)
        });
      }

    case TOGGLE_STARRED_TODO:
      {
        var _todos2 = state.todos.map(function (todo) {
          return todo.id === action.id ? _reducer_objectSpread({}, todo, {
            starred: !todo.starred
          }) : todo;
        });

        return _reducer_objectSpread({}, state, {
          todos: _todos2
        });
      }

    case FILTER_TODOS:
      return _reducer_objectSpread({}, state, {
        activeFilter: action.filter
      });

    case TOGGLE_ALL:
      return _reducer_objectSpread({}, state, {
        todos: utils_toggleAll(state.todos, action.completed)
      });

    case CLEAR_COMPLETED:
      return _reducer_objectSpread({}, state, {
        todos: state.todos.filter(function (todo) {
          return !todo.completed;
        })
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/index.ts


/* harmony default export */ var reducers = (Object(redux["b" /* combineReducers */])({
  todos: _reducer
}));
// CONCATENATED MODULE: ./src/pages/todos/_actions.ts

var _actions_addTodo = function addTodo(text) {
  return {
    type: ADD_TODO,
    todo: {
      text: text,
      completed: false,
      starred: false,
      createdAt: new Date()
    }
  };
};
var _actions_editTodo = function editTodo(todo) {
  return {
    type: EDIT_TODO,
    todo: todo
  };
};
var _actions_toggleTodo = function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id
  };
};
var _actions_deleteTodo = function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id: id
  };
};
var _actions_toggleStarred = function toggleStarred(id) {
  return {
    type: TOGGLE_STARRED_TODO,
    id: id
  };
};
var _actions_filterTodos = function filterTodos(filter) {
  return {
    type: FILTER_TODOS,
    filter: filter
  };
};
var _actions_toggleAll = function toggleAll(completed) {
  return {
    type: TOGGLE_ALL,
    completed: completed
  };
};
var _actions_clearCompleted = function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  };
};
// CONCATENATED MODULE: ./src/store.ts




var store_bindActions = function bindActions(store) {
  return {
    todos: Object(redux["a" /* bindActionCreators */])(_actions_namespaceObject, store.dispatch)
  };
};

function create() {
  var store = Object(redux["c" /* createStore */])(reducers);
  var actions = store_bindActions(store);
  return {
    actions: actions,
    store: store
  };
}
// EXTERNAL MODULE: ./node_modules/format-message/index.js
var format_message = __webpack_require__(8);
var format_message_default = /*#__PURE__*/__webpack_require__.n(format_message);

// CONCATENATED MODULE: ./src/format.ts

var formatConfig = {
  missingTranslation: 'ignore',
  formats: {
    date: {
      dd: {
        day: '2-digit'
      },
      MMM: {
        month: 'short'
      },
      MMMM: {
        month: 'long'
      },
      'MMM d': {
        month: 'short',
        day: 'numeric'
      },
      'MMM d yyyy': {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      },
      'MMMM d': {
        month: 'long',
        day: 'numeric'
      },
      'MMMM yy': {
        month: 'long',
        year: '2-digit'
      },
      'MMM yyyy': {
        month: 'short',
        year: 'numeric'
      },
      'MMMM yyyy': {
        month: 'long',
        year: 'numeric'
      },
      'M/d/yyyy': {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      },
      'MM/dd/yyyy': {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      },
      'dd MMM yyyy': {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      },
      'd MMMM yyyy': {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      },
      yyyy: {
        year: 'numeric'
      },
      EEEE: {
        weekday: 'long'
      },
      'EEEE, MMM d': {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      },
      'E M/d': {
        weekday: 'short',
        month: 'numeric',
        day: 'numeric'
      },
      'EEEE MMMM d, yyyy': {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric'
      }
    },
    time: {
      H: {
        hour: 'numeric'
      },
      'H:mm': {
        hour: 'numeric',
        minute: '2-digit'
      }
    }
  }
};
var format_initFormatMessage = function initFormatMessage() {
  return format_message_default.a.setup(formatConfig);
};
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Fab/Fab.js
var Fab = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js + 19 modules
var TextField = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Zoom/Zoom.js
var Zoom = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(76);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add);

// EXTERNAL MODULE: ./src/pages/todos/add-todo/index.css
var add_todo = __webpack_require__(59);
var add_todo_default = /*#__PURE__*/__webpack_require__.n(add_todo);

// CONCATENATED MODULE: ./src/pages/todos/add-todo/index.tsx
var _jsxFileName = "/Users/maurobuselli/my-projects/todos-app-react-redux-fe/src/pages/todos/add-todo/index.tsx";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function add_todo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var add_todo_AddTodo =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AddTodo, _PureComponent);

  function AddTodo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddTodo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddTodo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    add_todo_defineProperty(_assertThisInitialized(_this), "state", {
      name: ''
    });

    add_todo_defineProperty(_assertThisInitialized(_this), "input", Object(react["createRef"])());

    add_todo_defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      var onAdd = _this.props.onAdd;
      var name = _this.state.name;
      event.preventDefault();
      if (!name.trim()) return;
      onAdd(name);

      _this.setState({
        name: ''
      }, function () {
        var current = _this.input.current;

        if (current) {
          current.focus();
          current.value = ''; // eslint-disable-line immutable/no-mutation
        }
      });
    });

    add_todo_defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        name: event.target.value
      });
    });

    return _this;
  }

  _createClass(AddTodo, [{
    key: "render",
    value: function render() {
      var name = this.props.name;
      return react_default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react_default.a.createElement("form", {
        className: add_todo_default.a.form,
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react_default.a.createElement(TextField["a" /* default */], {
        fullWidth: true,
        id: "add-todo-input",
        inputRef: this.input,
        label: format_message_default()({
          id: "create_item_cbb0c798",
          default: "Create item"
        }),
        margin: "normal",
        onChange: this.handleChange,
        placeholder: format_message_default()({
          id: "what_needs_to_be_done_28d06f44",
          default: "What needs to be done?"
        }),
        value: name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react_default.a.createElement(Tooltip["a" /* default */], {
        "aria-label": format_message_default()({
          id: "create_item_cbb0c798",
          default: "Create item"
        }),
        arrow: true,
        placement: "top",
        title: format_message_default()({
          id: "add_8523c19b",
          default: "Add"
        }),
        TransitionComponent: Zoom["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react_default.a.createElement(Fab["a" /* default */], {
        size: "small",
        "aria-label": format_message_default()({
          id: "add_8523c19b",
          default: "Add"
        }),
        color: "primary",
        onClick: this.handleSubmit,
        classes: {
          root: add_todo_default.a.addButton
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react_default.a.createElement(Add_default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })))));
    }
  }]);

  return AddTodo;
}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Backspace.js
var Backspace = __webpack_require__(82);
var Backspace_default = /*#__PURE__*/__webpack_require__.n(Backspace);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircle.js
var CheckCircle = __webpack_require__(78);
var CheckCircle_default = /*#__PURE__*/__webpack_require__.n(CheckCircle);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircleOutline.js
var CheckCircleOutline = __webpack_require__(79);
var CheckCircleOutline_default = /*#__PURE__*/__webpack_require__.n(CheckCircleOutline);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Create.js
var Create = __webpack_require__(81);
var Create_default = /*#__PURE__*/__webpack_require__.n(Create);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Star.js
var Star = __webpack_require__(80);
var Star_default = /*#__PURE__*/__webpack_require__.n(Star);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Input/Input.js
var Input = __webpack_require__(142);

// EXTERNAL MODULE: ./src/pages/todos/todo-list/title-edit.css
var title_edit = __webpack_require__(77);
var title_edit_default = /*#__PURE__*/__webpack_require__.n(title_edit);

// CONCATENATED MODULE: ./src/pages/todos/todo-list/title-edit.tsx
var title_edit_jsxFileName = "/Users/maurobuselli/my-projects/todos-app-react-redux-fe/src/pages/todos/todo-list/title-edit.tsx";

function title_edit_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { title_edit_typeof = function _typeof(obj) { return typeof obj; }; } else { title_edit_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return title_edit_typeof(obj); }

function title_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function title_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { title_edit_ownKeys(Object(source), true).forEach(function (key) { title_edit_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { title_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function title_edit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function title_edit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function title_edit_createClass(Constructor, protoProps, staticProps) { if (protoProps) title_edit_defineProperties(Constructor.prototype, protoProps); if (staticProps) title_edit_defineProperties(Constructor, staticProps); return Constructor; }

function title_edit_possibleConstructorReturn(self, call) { if (call && (title_edit_typeof(call) === "object" || typeof call === "function")) { return call; } return title_edit_assertThisInitialized(self); }

function title_edit_getPrototypeOf(o) { title_edit_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return title_edit_getPrototypeOf(o); }

function title_edit_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function title_edit_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) title_edit_setPrototypeOf(subClass, superClass); }

function title_edit_setPrototypeOf(o, p) { title_edit_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return title_edit_setPrototypeOf(o, p); }

function title_edit_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var title_edit_TitleEdit =
/*#__PURE__*/
function (_PureComponent) {
  title_edit_inherits(TitleEdit, _PureComponent);

  function TitleEdit() {
    var _getPrototypeOf2;

    var _this;

    title_edit_classCallCheck(this, TitleEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = title_edit_possibleConstructorReturn(this, (_getPrototypeOf2 = title_edit_getPrototypeOf(TitleEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    title_edit_defineProperty(title_edit_assertThisInitialized(_this), "state", {
      newText: _this.props.todo.text
    });

    title_edit_defineProperty(title_edit_assertThisInitialized(_this), "handleEdit", function (event) {
      _this.setState({
        newText: event.target.value
      });
    });

    title_edit_defineProperty(title_edit_assertThisInitialized(_this), "handleSave", function () {
      var _this$props = _this.props,
          onEdit = _this$props.onEdit,
          todo = _this$props.todo;
      var newText = _this.state.newText;
      onEdit(title_edit_objectSpread({}, todo, {
        text: newText.trim()
      }));
    });

    title_edit_defineProperty(title_edit_assertThisInitialized(_this), "handlePreventDefault", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    return _this;
  }

  title_edit_createClass(TitleEdit, [{
    key: "render",
    value: function render() {
      var newText = this.state.newText;
      return react_default.a.createElement(Input["a" /* default */], {
        autoFocus: true,
        classes: {
          root: title_edit_default.a.input
        },
        inputProps: {
          'aria-label': format_message_default()({
            id: "edit_text_d2462fb3",
            default: "Edit text"
          })
        },
        onBlur: this.handleSave,
        onChange: this.handleEdit,
        onClick: this.handlePreventDefault,
        value: newText,
        __source: {
          fileName: title_edit_jsxFileName,
          lineNumber: 38
        },
        __self: this
      });
    }
  }]);

  return TitleEdit;
}(react["PureComponent"]);
// EXTERNAL MODULE: ./src/pages/todos/todo-list/todo.css
var todo_list_todo = __webpack_require__(28);
var todo_default = /*#__PURE__*/__webpack_require__.n(todo_list_todo);

// CONCATENATED MODULE: ./src/pages/todos/todo-list/todo.tsx
var todo_jsxFileName = "/Users/maurobuselli/my-projects/todos-app-react-redux-fe/src/pages/todos/todo-list/todo.tsx";

function todo_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { todo_typeof = function _typeof(obj) { return typeof obj; }; } else { todo_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return todo_typeof(obj); }

function todo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function todo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function todo_createClass(Constructor, protoProps, staticProps) { if (protoProps) todo_defineProperties(Constructor.prototype, protoProps); if (staticProps) todo_defineProperties(Constructor, staticProps); return Constructor; }

function todo_possibleConstructorReturn(self, call) { if (call && (todo_typeof(call) === "object" || typeof call === "function")) { return call; } return todo_assertThisInitialized(self); }

function todo_getPrototypeOf(o) { todo_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return todo_getPrototypeOf(o); }

function todo_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function todo_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) todo_setPrototypeOf(subClass, superClass); }

function todo_setPrototypeOf(o, p) { todo_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return todo_setPrototypeOf(o, p); }

function todo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var todo_Todo =
/*#__PURE__*/
function (_PureComponent) {
  todo_inherits(Todo, _PureComponent);

  function Todo() {
    var _getPrototypeOf2;

    var _this;

    todo_classCallCheck(this, Todo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = todo_possibleConstructorReturn(this, (_getPrototypeOf2 = todo_getPrototypeOf(Todo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    todo_defineProperty(todo_assertThisInitialized(_this), "state", {
      isEditing: false
    });

    todo_defineProperty(todo_assertThisInitialized(_this), "handleToggle", function () {
      var _this$props = _this.props,
          onToggle = _this$props.onToggle,
          id = _this$props.id;
      onToggle(id);
    });

    todo_defineProperty(todo_assertThisInitialized(_this), "handleStarred", function (event) {
      var _this$props2 = _this.props,
          onStarred = _this$props2.onStarred,
          id = _this$props2.id;
      event.preventDefault();
      event.stopPropagation();
      onStarred(id);
    });

    todo_defineProperty(todo_assertThisInitialized(_this), "handleDelete", function (event) {
      var _this$props3 = _this.props,
          onDelete = _this$props3.onDelete,
          id = _this$props3.id;
      event.preventDefault();
      event.stopPropagation();
      onDelete(id);
    });

    todo_defineProperty(todo_assertThisInitialized(_this), "handleEditModeOn", function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.setState({
        isEditing: true
      });
    });

    todo_defineProperty(todo_assertThisInitialized(_this), "handleEdit", function (todo) {
      _this.props.onEdit(todo);

      _this.setState({
        isEditing: false
      });
    });

    return _this;
  }

  todo_createClass(Todo, [{
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props4 = this.props,
          id = _this$props4.id,
          completed = _this$props4.completed,
          text = _this$props4.text,
          starred = _this$props4.starred,
          createdAt = _this$props4.createdAt;
      var isEditing = this.state.isEditing;
      var todo = {
        text: text,
        id: id,
        completed: completed,
        starred: starred,
        createdAt: createdAt
      };
      return isEditing ? react_default.a.createElement(title_edit_TitleEdit, {
        todo: todo,
        onEdit: this.handleEdit,
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 75
        },
        __self: this
      }) : react_default.a.createElement(ListItemText["a" /* default */], {
        inset: true,
        primary: text,
        classes: {
          primary: completed ? todo_default.a.textCompleted : starred ? todo_default.a.textStarred : todo_default.a.text
        },
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 77
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          completed = _this$props5.completed,
          text = _this$props5.text,
          starred = _this$props5.starred;
      return react_default.a.createElement("li", {
        className: todo_default.a.todo,
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react_default.a.createElement(ListItem["a" /* default */], {
        button: true,
        onClick: this.handleToggle,
        selected: starred,
        divider: true,
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react_default.a.createElement(Checkbox["a" /* default */], {
        checked: completed,
        checkedIcon: react_default.a.createElement(CheckCircle_default.a, {
          color: "primary",
          __source: {
            fileName: todo_jsxFileName,
            lineNumber: 99
          },
          __self: this
        }),
        disableRipple: true,
        icon: react_default.a.createElement(CheckCircleOutline_default.a, {
          __source: {
            fileName: todo_jsxFileName,
            lineNumber: 101
          },
          __self: this
        }),
        inputProps: {
          'aria-label': format_message_default()({
            id: "complete_item_bda4f9a3",
            default: "Complete item"
          })
        },
        tabIndex: -1,
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react_default.a.createElement(Tooltip["a" /* default */], {
        arrow: true,
        title: format_message_default()({
          id: "highlight_ea1198bd",
          default: "Highlight"
        }),
        TransitionComponent: Zoom["a" /* default */],
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react_default.a.createElement(IconButton["a" /* default */], {
        "aria-label": format_message_default()({
          id: "highlight_itemname_4def67d5",
          default: "Highlight {itemName}"
        }, {
          itemName: text
        }),
        size: "small",
        color: starred ? 'primary' : 'default',
        onClick: this.handleStarred,
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react_default.a.createElement(Star_default.a, {
        fontSize: "small",
        className: starred ? todo_default.a.starred : undefined,
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 113
        },
        __self: this
      }))), this.renderTitle(), react_default.a.createElement(Tooltip["a" /* default */], {
        arrow: true,
        title: format_message_default()({
          id: "edit_c5fbea07",
          default: "Edit"
        }),
        TransitionComponent: Zoom["a" /* default */],
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react_default.a.createElement(IconButton["a" /* default */], {
        "aria-label": format_message_default()({
          id: "edit_itemname_328a7f2b",
          default: "Edit {itemName}"
        }, {
          itemName: text
        }),
        classes: {
          root: todo_default.a.actionButton
        },
        color: "primary",
        onClick: this.handleEditModeOn,
        size: "small",
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react_default.a.createElement(Create_default.a, {
        fontSize: "small",
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 130
        },
        __self: this
      }))), react_default.a.createElement(Tooltip["a" /* default */], {
        arrow: true,
        title: format_message_default()({
          id: "delete_a6efa79d",
          default: "Delete"
        }),
        TransitionComponent: Zoom["a" /* default */],
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react_default.a.createElement(IconButton["a" /* default */], {
        classes: {
          root: todo_default.a.actionButton
        },
        "aria-label": format_message_default()({
          id: "delete_itemname_ec2577c0",
          default: "Delete {itemName}"
        }, {
          itemName: text
        }),
        size: "small",
        color: "secondary",
        onClick: this.handleDelete,
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react_default.a.createElement(Backspace_default.a, {
        fontSize: "small",
        __source: {
          fileName: todo_jsxFileName,
          lineNumber: 142
        },
        __self: this
      })))));
    }
  }]);

  return Todo;
}(react["PureComponent"]);
// EXTERNAL MODULE: ./src/pages/todos/todo-list/index.css
var todo_list = __webpack_require__(60);
var todo_list_default = /*#__PURE__*/__webpack_require__.n(todo_list);

// CONCATENATED MODULE: ./src/pages/todos/todo-list/index.tsx
var todo_list_jsxFileName = "/Users/maurobuselli/my-projects/todos-app-react-redux-fe/src/pages/todos/todo-list/index.tsx";

function todo_list_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { todo_list_typeof = function _typeof(obj) { return typeof obj; }; } else { todo_list_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return todo_list_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function todo_list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function todo_list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function todo_list_createClass(Constructor, protoProps, staticProps) { if (protoProps) todo_list_defineProperties(Constructor.prototype, protoProps); if (staticProps) todo_list_defineProperties(Constructor, staticProps); return Constructor; }

function todo_list_possibleConstructorReturn(self, call) { if (call && (todo_list_typeof(call) === "object" || typeof call === "function")) { return call; } return todo_list_assertThisInitialized(self); }

function todo_list_getPrototypeOf(o) { todo_list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return todo_list_getPrototypeOf(o); }

function todo_list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function todo_list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) todo_list_setPrototypeOf(subClass, superClass); }

function todo_list_setPrototypeOf(o, p) { todo_list_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return todo_list_setPrototypeOf(o, p); }

function todo_list_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var todo_list_TodoList =
/*#__PURE__*/
function (_PureComponent) {
  todo_list_inherits(TodoList, _PureComponent);

  function TodoList() {
    var _getPrototypeOf2;

    var _this;

    todo_list_classCallCheck(this, TodoList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = todo_list_possibleConstructorReturn(this, (_getPrototypeOf2 = todo_list_getPrototypeOf(TodoList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    todo_list_defineProperty(todo_list_assertThisInitialized(_this), "list", Object(react["createRef"])());

    todo_list_defineProperty(todo_list_assertThisInitialized(_this), "layout", function () {
      var list = _this.list.current;
      if (!list) return;
      var y = 0;
      var child = list.firstElementChild;

      while (child instanceof HTMLElement) {
        // eslint-disable-next-line immutable/no-mutation
        child.style.transform = "translateY(".concat(y, "px)");
        y += child.offsetHeight;
        child = child.nextElementSibling;
      } // eslint-disable-next-line immutable/no-mutation


      list.style.height = "".concat(y, "px");
    });

    todo_list_defineProperty(todo_list_assertThisInitialized(_this), "handleShowAll", function () {
      return _this.props.filterTodos(SHOW_ALL);
    });

    return _this;
  }

  todo_list_createClass(TodoList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.layout();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.layout();
    } // Animates the list items.

  }, {
    key: "renderList",
    value: function renderList() {
      var _this$props = this.props,
          todos = _this$props.todos,
          onToggle = _this$props.onToggle,
          onEdit = _this$props.onEdit,
          onStarred = _this$props.onStarred,
          onDelete = _this$props.onDelete;
      return react_default.a.createElement(List["a" /* default */], {
        component: "ul",
        ref: this.list,
        __source: {
          fileName: todo_list_jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, todos.map(function (todo) {
        return react_default.a.createElement(todo_Todo, _extends({
          key: todo.id
        }, todo, {
          onToggle: onToggle,
          onStarred: onStarred,
          onDelete: onDelete,
          onEdit: onEdit,
          __source: {
            fileName: todo_list_jsxFileName,
            lineNumber: 61
          },
          __self: this
        }));
      }));
    }
  }, {
    key: "renderEmptyCard",
    value: function renderEmptyCard() {
      var activeFilter = this.props.activeFilter;
      return react_default.a.createElement(Card["a" /* default */], {
        className: todo_list_default.a.emptyCard,
        variant: "outlined",
        component: "h3",
        __source: {
          fileName: todo_list_jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react_default.a.createElement(CardContent["a" /* default */], {
        __source: {
          fileName: todo_list_jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react_default.a.createElement(Typography["a" /* default */], {
        color: "textSecondary",
        gutterBottom: true,
        __source: {
          fileName: todo_list_jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, format_message_default()({
        id: "there_are_no_items_for_the_selected_criteria_5dc5a0b2",
        default: "There are no items for the selected criteria."
      }))), react_default.a.createElement(CardActions["a" /* default */], {
        classes: {
          root: todo_list_default.a.emptyCardActions
        },
        __source: {
          fileName: todo_list_jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, activeFilter !== SHOW_ALL && react_default.a.createElement(Button["a" /* default */], {
        size: "small",
        onClick: this.handleShowAll,
        __source: {
          fileName: todo_list_jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, format_message_default()({
        id: "show_all_967a90f0",
        default: "Show all"
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement(Paper["a" /* default */], {
        elevation: 3,
        __source: {
          fileName: todo_list_jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, this.props.todos.length ? this.renderList() : this.renderEmptyCard());
    }
  }]);

  return TodoList;
}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Radio/Radio.js + 4 modules
var Radio = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js + 1 modules
var RadioGroup = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(147);

// EXTERNAL MODULE: ./src/pages/todos/footer/filters.css
var filters = __webpack_require__(61);
var filters_default = /*#__PURE__*/__webpack_require__.n(filters);

// CONCATENATED MODULE: ./src/pages/todos/footer/filters.tsx
var filters_jsxFileName = "/Users/maurobuselli/my-projects/todos-app-react-redux-fe/src/pages/todos/footer/filters.tsx";









var inputName = 'todos-footer-filter';
var filters_Filters = function Filters(_ref) {
  var activeFilter = _ref.activeFilter,
      onFilter = _ref.onFilter;

  var handleChange = function handleChange(event) {
    return onFilter(event.target.value);
  };

  var radioAll = react_default.a.createElement(Radio["a" /* default */], {
    inputProps: {
      'aria-label': 'Show all items'
    },
    __source: {
      fileName: filters_jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
  var radioActive = react_default.a.createElement(Radio["a" /* default */], {
    inputProps: {
      'aria-label': 'Show active items'
    },
    __source: {
      fileName: filters_jsxFileName,
      lineNumber: 24
    },
    __self: this
  });
  var radioCompleted = react_default.a.createElement(Radio["a" /* default */], {
    inputProps: {
      'aria-label': 'Show completed items'
    },
    __source: {
      fileName: filters_jsxFileName,
      lineNumber: 27
    },
    __self: this
  });
  return react_default.a.createElement(FormControl["a" /* default */], {
    component: "fieldset",
    classes: {
      root: filters_default.a.filters
    },
    __source: {
      fileName: filters_jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react_default.a.createElement(FormLabel["a" /* default */], {
    component: "legend",
    __source: {
      fileName: filters_jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, format_message_default()({
    id: "filter_by_c78696bb",
    default: "Filter By:"
  })), react_default.a.createElement(RadioGroup["a" /* default */], {
    "aria-label": format_message_default()({
      id: "filter_todos_a8b241e7",
      default: "Filter todos"
    }),
    classes: {
      root: filters_default.a.radioGroup
    },
    name: inputName,
    onChange: handleChange,
    row: true,
    value: activeFilter,
    __source: {
      fileName: filters_jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react_default.a.createElement(FormControlLabel["a" /* default */], {
    value: SHOW_ALL,
    control: radioAll,
    label: format_message_default()({
      id: "all_4321c3a1",
      default: "All"
    }),
    labelPlacement: "start",
    __source: {
      fileName: filters_jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react_default.a.createElement(FormControlLabel["a" /* default */], {
    value: SHOW_ACTIVE,
    control: radioActive,
    label: format_message_default()({
      id: "active_d7e32718",
      default: "Active"
    }),
    labelPlacement: "start",
    __source: {
      fileName: filters_jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react_default.a.createElement(FormControlLabel["a" /* default */], {
    value: SHOW_COMPLETED,
    control: radioCompleted,
    label: format_message_default()({
      id: "completed_19711ce7",
      default: "Completed"
    }),
    labelPlacement: "start",
    __source: {
      fileName: filters_jsxFileName,
      lineNumber: 53
    },
    __self: this
  })));
};
// EXTERNAL MODULE: ./src/pages/todos/footer/index.css
var footer = __webpack_require__(54);
var footer_default = /*#__PURE__*/__webpack_require__.n(footer);

// CONCATENATED MODULE: ./src/pages/todos/footer/index.tsx
var footer_jsxFileName = "/Users/maurobuselli/my-projects/todos-app-react-redux-fe/src/pages/todos/footer/index.tsx";






var footer_Footer = function Footer(_ref) {
  var todos = _ref.todos,
      activeFilter = _ref.activeFilter,
      filterTodos = _ref.filterTodos,
      clearCompleted = _ref.clearCompleted,
      toggleAll = _ref.toggleAll;
  var amountLeft = getUncompletedAmount(todos);
  var amountCompleted = getCompletedAmount(todos);

  var handleToggleAll = function handleToggleAll() {
    return toggleAll(amountLeft > 0);
  };

  return react_default.a.createElement("footer", {
    className: footer_default.a.footer,
    __source: {
      fileName: footer_jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react_default.a.createElement("label", {
    className: footer_default.a.itemsLeft,
    __source: {
      fileName: footer_jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, format_message_default()({
    id: "amountleft_plural_0_all_completed_one_item_left_ot_a5f0de5e",
    default: "{amountLeft, plural, =0 {All completed!} one {#\xA0item left} other {#\xA0items left}}"
  }, {
    amountLeft: amountLeft
  })), react_default.a.createElement(filters_Filters, {
    activeFilter: activeFilter,
    onFilter: filterTodos,
    __source: {
      fileName: footer_jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), todos.length > 0 && react_default.a.createElement("div", {
    className: footer_default.a.actions,
    __source: {
      fileName: footer_jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react_default.a.createElement(Button["a" /* default */], {
    color: "primary",
    onClick: handleToggleAll,
    __source: {
      fileName: footer_jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, amountLeft > 0 ? format_message_default()({
    id: "complete_all_7eba5f88",
    default: "Complete all"
  }) : format_message_default()({
    id: "uncomplete_all_1d1dc17a",
    default: "Uncomplete all"
  })), amountCompleted > 0 && react_default.a.createElement(Button["a" /* default */], {
    color: "secondary",
    onClick: clearCompleted,
    __source: {
      fileName: footer_jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, format_message_default()({
    id: "clear_completed_db3cc348",
    default: "Clear completed"
  }))));
};
// EXTERNAL MODULE: ./node_modules/reselect/es/index.js
var reselect_es = __webpack_require__(83);

// CONCATENATED MODULE: ./src/pages/todos/selectors.ts



var getVisibilityFilter = function getVisibilityFilter(state) {
  return state.activeFilter;
};

var getTodos = function getTodos(state) {
  return state.todos;
};

var getVisibleTodos = Object(reselect_es["a" /* createSelector */])([getVisibilityFilter, getTodos], function (activeFilter, todos) {
  switch (activeFilter) {
    case SHOW_ALL:
      return todos;

    case SHOW_COMPLETED:
      return todos.filter(function (t) {
        return t.completed;
      });

    case SHOW_ACTIVE:
      return todos.filter(function (t) {
        return !t.completed;
      });

    default:
      throw new Error('Unknown filter: ' + activeFilter);
  }
});
// CONCATENATED MODULE: ./src/pages/todos/index.tsx
var todos_jsxFileName = "/Users/maurobuselli/my-projects/todos-app-react-redux-fe/src/pages/todos/index.tsx";








var todos_mapStateToProps = function mapStateToProps(state) {
  return {
    activeFilter: state.todos.activeFilter,
    todos: state.todos.todos,
    visibleTodos: getVisibleTodos(state.todos)
  };
};

var mapDispatchToProps = {
  addTodo: _actions_addTodo,
  clearCompleted: _actions_clearCompleted,
  deleteTodo: _actions_deleteTodo,
  editTodo: _actions_editTodo,
  filterTodos: _actions_filterTodos,
  toggleAll: _actions_toggleAll,
  toggleStarred: _actions_toggleStarred,
  toggleTodo: _actions_toggleTodo
};

var todos_Todos = function Todos(_ref) {
  var activeFilter = _ref.activeFilter,
      addTodo = _ref.addTodo,
      clearCompleted = _ref.clearCompleted,
      toggleAll = _ref.toggleAll,
      deleteTodo = _ref.deleteTodo,
      editTodo = _ref.editTodo,
      filterTodos = _ref.filterTodos,
      todos = _ref.todos,
      toggleStarred = _ref.toggleStarred,
      toggleTodo = _ref.toggleTodo,
      visibleTodos = _ref.visibleTodos;
  return react_default.a.createElement("section", {
    __source: {
      fileName: todos_jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react_default.a.createElement(add_todo_AddTodo, {
    onAdd: addTodo,
    __source: {
      fileName: todos_jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react_default.a.createElement(todo_list_TodoList, {
    activeFilter: activeFilter,
    filterTodos: filterTodos,
    onDelete: deleteTodo,
    onEdit: editTodo,
    onStarred: toggleStarred,
    onToggle: toggleTodo,
    todos: visibleTodos,
    __source: {
      fileName: todos_jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react_default.a.createElement(footer_Footer, {
    activeFilter: activeFilter,
    clearCompleted: clearCompleted,
    toggleAll: toggleAll,
    filterTodos: filterTodos,
    todos: todos,
    __source: {
      fileName: todos_jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
};

var TodosPage = Object(es["b" /* connect */])(todos_mapStateToProps, mapDispatchToProps)(todos_Todos);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(160);

// EXTERNAL MODULE: ./src/app.css
var app = __webpack_require__(62);
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// CONCATENATED MODULE: ./src/app.tsx

var app_jsxFileName = "/Users/maurobuselli/my-projects/todos-app-react-redux-fe/src/app.tsx";




function App() {
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(CssBaseline["a" /* default */], {
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react_default.a.createElement("section", {
    className: app_default.a.app,
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react_default.a.createElement("header", {
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react_default.a.createElement("h1", {
    className: app_default.a.title,
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, format_message_default.a.rich({
    id: "todos_app_0_react_redux_typescript_846ff4d9",
    default: "Todos App<0/>React - Redux - TypeScript"
  }, {
    0: react_default.a.createElement("br", {
      key: "0",
      __source: {
        fileName: app_jsxFileName,
        lineNumber: 15
      },
      __self: this
    })
  }))), react_default.a.createElement(TodosPage, {
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
}
// CONCATENATED MODULE: ./src/index.tsx
var src_jsxFileName = "/Users/maurobuselli/my-projects/todos-app-react-redux-fe/src/index.tsx";







var _createStore = create(),
    src_store = _createStore.store;

var root = document.getElementById('root');
format_initFormatMessage();
Object(react_dom["render"])(react_default.a.createElement(es["a" /* Provider */], {
  store: src_store,
  __source: {
    fileName: src_jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, react_default.a.createElement(App, {
  __source: {
    fileName: src_jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), root);

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"todo":"_1qOPf","actionButton":"_16DIR","text":"_17mv_","textCompleted":"_1vGvw","textStarred":"_1bS8V","starred":"_33l8B"};

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"footer":"_10spJ","itemsLeft":"_8yYOR","actions":"_2ZPuW"};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"form":"_3Cy9f","addButton":"_1_0Sg"};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"emptyCard":"_2whzj","emptyCardActions":"_3HU6N"};

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"filters":"_3oJhT","radioGroup":"_1MMyd"};

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"_2x3cr","title":"_1kFDE"};

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"input":"D5Pkr"};

/***/ })

},[[107,1,2]]]);