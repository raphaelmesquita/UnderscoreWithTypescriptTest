/// <reference path="../typings/underscore/underscore.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
// Teste!
var Test;
(function (Test) {
    var array = _.uniq([
        { name: "oi1", id: 1 },
        { name: "oi3", id: 2 },
        { name: "oi2", id: 2 },
        { name: "oi2", id: 1 },
        { name: "oi2", id: 1 }
    ], function (value) { return value.id; });
    console.log(array);
    var objectWithDate = {
        Data: ko.observable(new Date(2015, 8, 10))
    };
    console.log(ko.mapping.toJSON(objectWithDate));
})(Test || (Test = {}));
//# sourceMappingURL=test.js.map