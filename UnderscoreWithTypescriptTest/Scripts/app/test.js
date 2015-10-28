/// <reference path="../typings/underscore/underscore.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
$(function () {
    var myUrl = "http://spatialkeydocs.s3.amazonaws.com/FL_insurance_sample.csv.zip";
    var $iframe = $('<iframe />').attr({
        src: myUrl,
        style: "visibility:hidden;display:none;"
    }).appendTo($("body"));
});
