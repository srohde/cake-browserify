;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
(function() {
  var Bar, Main, bar, main;

  Bar = require("./Bar.coffee");

  Main = (function() {
    function Main() {
      console.log("new Main!");
    }

    return Main;

  })();

  main = new Main();

  bar = new Bar();

  bar.exec();

}).call(this);


},{"./Bar.coffee":2}],2:[function(require,module,exports){
(function() {
  var Bar;

  Bar = (function() {
    function Bar() {
      console.log("new Bar");
    }

    Bar.prototype.exec = function() {
      return console.log("bar exec");
    };

    return Bar;

  })();

  module.exports = Bar;

}).call(this);


},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc3JvaGRlL0RvY3VtZW50cy9icm93c2VyaWZ5X3Rlc3Qvc3JjL21haW4uY29mZmVlIiwiL1VzZXJzL3Nyb2hkZS9Eb2N1bWVudHMvYnJvd3NlcmlmeV90ZXN0L3NyYy9CYXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Q0FBQSxLQUFBLGNBQUE7O0NBQUEsQ0FBQSxDQUFBLElBQU0sT0FBQTs7Q0FBTixDQUVNO0NBRVMsRUFBQSxDQUFBLFVBQUE7Q0FDWCxFQUFBLEdBQUEsQ0FBTyxJQUFQO0NBREYsSUFBYTs7Q0FBYjs7Q0FKRjs7Q0FBQSxDQU9BLENBQVcsQ0FBWDs7Q0FQQSxDQVFBLENBQUEsQ0FBVTs7Q0FSVixDQVNBLENBQUcsQ0FBSDtDQVRBOzs7OztBQ0FBO0NBQUEsRUFBQSxHQUFBOztDQUFBLENBQU07Q0FFUyxFQUFBLENBQUEsU0FBQTtDQUNYLEVBQUEsR0FBQSxDQUFPLEVBQVA7Q0FERixJQUFhOztDQUFiLEVBR00sQ0FBTixLQUFNO0NBQVcsRUFBUixJQUFPLEdBQVAsR0FBQTtDQUhULElBR007O0NBSE47O0NBRkY7O0NBQUEsQ0FPQSxDQUFpQixHQUFYLENBQU47Q0FQQSIsInNvdXJjZXNDb250ZW50IjpbIkJhciA9IHJlcXVpcmUgXCIuL0Jhci5jb2ZmZWVcIlxuXG5jbGFzcyBNYWluXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgY29uc29sZS5sb2cgXCJuZXcgTWFpbiFcIlxuXG5tYWluID0gbmV3IE1haW4oKTtcbmJhciA9IG5ldyBCYXIoKTtcbmJhci5leGVjKCkiLCJjbGFzcyBCYXJcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBjb25zb2xlLmxvZyBcIm5ldyBCYXJcIlxuXG4gIGV4ZWM6IC0+IGNvbnNvbGUubG9nIFwiYmFyIGV4ZWNcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhciJdfQ==
;