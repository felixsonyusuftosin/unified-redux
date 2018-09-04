"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Log = void 0;

/**
 * @file defines logger for application
 */
// tslint:disable:no-console
var Log = {
  dir: function dir(obj) {
    console.clear();
    console.dir(obj);
  },
  error: function error(message) {
    console.error(message);
  },
  info: function info(message) {
    console.clear();
    console.info(message);
  },
  log: function log(message) {
    // tslint:disable-next-line:no-console
    console.log(message);
  }
};
exports.Log = Log;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJMb2ciLCJkaXIiLCJvYmoiLCJjb25zb2xlIiwiY2xlYXIiLCJlcnJvciIsIm1lc3NhZ2UiLCJpbmZvIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUlBO0FBQ08sSUFBTUEsR0FBRyxHQUFHO0FBQ2ZDLEVBQUFBLEdBQUcsRUFBRSxhQUFDQyxHQUFELEVBQWM7QUFDZkMsSUFBQUEsT0FBTyxDQUFDQyxLQUFSO0FBQ0FELElBQUFBLE9BQU8sQ0FBQ0YsR0FBUixDQUFZQyxHQUFaO0FBQ0gsR0FKYztBQUtmRyxFQUFBQSxLQUFLLEVBQUUsZUFBQ0MsT0FBRCxFQUFxQjtBQUN4QkgsSUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWNDLE9BQWQ7QUFDSCxHQVBjO0FBUWZDLEVBQUFBLElBQUksRUFBRSxjQUFDRCxPQUFELEVBQXFCO0FBQ3ZCSCxJQUFBQSxPQUFPLENBQUNDLEtBQVI7QUFDQUQsSUFBQUEsT0FBTyxDQUFDSSxJQUFSLENBQWFELE9BQWI7QUFFSCxHQVpjO0FBYWZFLEVBQUFBLEdBQUcsRUFBRSxhQUFDRixPQUFELEVBQXFCO0FBQ3RCO0FBQ0FILElBQUFBLE9BQU8sQ0FBQ0ssR0FBUixDQUFZRixPQUFaO0FBRUg7QUFqQmMsQ0FBWiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgZGVmaW5lcyBsb2dnZXIgZm9yIGFwcGxpY2F0aW9uXG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuZXhwb3J0IGNvbnN0IExvZyA9IHtcbiAgICBkaXI6IChvYmo6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIGNvbnNvbGUuZGlyKG9iaik7XG4gICAgfSxcbiAgICBlcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH0sXG4gICAgaW5mbzogKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlKTtcblxuICAgIH0sXG4gICAgbG9nOiAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXG4gICAgfSxcbn07XG4iXX0=