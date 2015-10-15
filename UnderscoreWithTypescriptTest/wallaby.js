module.exports = function (wallaby) {
    return {
        files: [
          'Scripts/jasmine-samples/*.js',
          '!Scripts/jasmine-samples/*Spec.js'
        ],

        tests: [
          'Scripts/jasmine-samples/*Spec.js'
        ]
    };
};