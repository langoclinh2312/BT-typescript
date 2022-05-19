"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Accounts_js_1 = require("../declaration/Accounts.js");
var school = /** @class */ (function (_super) {
    __extends(school, _super);
    function school() {
        var _this = _super.call(this) || this;
        _this.student = new Array();
        var student_string = localStorage.getItem("student");
        if (student_string) {
            _this.student = JSON.parse(student_string);
        }
        return _this;
    }
    school.prototype.getAll = function () {
        var _html = '';
        for (var i = 0; i < this.student.length; i++) {
            _html += '<div class="col-4 col-md-4 col-xl-4 col-lg-4 col-sm-6">';
            _html += '<div class="card">';
            _html += '<img src="' + this.student[i].img + '" class="card-img-top" alt="...">';
            _html += '<div class="card-body">';
            _html += '<h5 class="card-title">' + this.student[i].Name + '</h5>';
            _html += '<p class="card-text">' + this.student[i].Email + '</p>';
            _html += '<a href="admin.html" class="btn btn-primary">View more</a>';
            _html += '</div> </div></div></div>';
        }
        $('#_list_manage').html(_html);
    };
    return school;
}(Accounts_js_1.Accounts));
var newstu = new school;
newstu.getAll();
