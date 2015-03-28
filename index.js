module.exports = function prop(path) {
  var parts = path ? path.split('.') : [];

  var get = function(obj) {
    return parts.reduce(function(memo, part) {
      return memo && memo[part];
    }, obj);
  };

  get.set = function(obj, value) {
    var base = prop(parts.slice(0, -1).join('.'))(obj);
    var final = parts[parts.length - 1];
    base[final] = value;
  };

  return get;
};