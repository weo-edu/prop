module.exports = function(path) {
  var parts = path.split('.');

  return function(obj) {
    return parts.reduce(function(memo, part) {
      return memo && memo[part];
    }, obj);
  };
};