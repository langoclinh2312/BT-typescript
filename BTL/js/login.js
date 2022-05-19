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
var Accountss_js_1 = require("../method/Accountss.js");
var accounts = /** @class */ (function () {
    function accounts() {
    }
    return accounts;
}());
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super.call(this) || this;
    }
    Login.prototype.checkEmail = function (email) {
        var data = JSON.parse(localStorage.getItem('student'));
        var a;
        for (var i = 0; i < data.length; i++) {
            a = 0;
            if (data[i].Email == email) {
                a = 1;
                return true;
            }
        }
        if (a == 0) {
            return false;
        }
    };
    Login.prototype.checkPass = function (pass) {
        var data = JSON.parse(localStorage.getItem('student'));
        var b;
        for (var i = 0; i < data.length; i++) {
            b = 0;
            if (data[i].Password == pass) {
                b = 1;
                return true;
            }
        }
        if (b == 0) {
            return false;
        }
    };
    Login.prototype.validate_form = function (datas) {
        if (datas.email == '') {
            $('#emailHelp').html('Email không được để trống !');
            document.getElementById('emailHelp').style.display = "block";
            return false;
        }
        if (!_student.checkEmail(datas.email)) {
            $('#emailHelp').html('sai Email hoặc Không tồn tại !');
            document.getElementById('emailHelp').style.display = "block";
            return false;
        }
        if (datas.pass == '') {
            $('#passwordlHelp').html('Password không được để trống !');
            document.getElementById('passwordlHelp').style.display = "block";
            return false;
        }
        if (!_student.checkPass(datas.pass)) {
            $('#passwordlHelp').html('Sai Password !');
            document.getElementById('passwordlHelp').style.display = "block";
            return false;
        }
        return true;
    };
    return Login;
}(Accountss_js_1.Accountss));
var _student = new Login;
$('.btn-login').click(function (ev) {
    document.getElementById('emailHelp').style.display = "none";
    document.getElementById('passwordlHelp').style.display = "none";
    ev.preventDefault();
    var account = new accounts;
    account.email = $('input#Gmail').val();
    account.pass = $('input#Password').val();
    if (_student.validate_form(account)) {
        alert('Bạn đã đăng nhập thành công !');
        location.assign('../admin.html');
    }
});
