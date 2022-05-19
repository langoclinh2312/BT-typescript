"use strict";
exports.__esModule = true;
var Accountss_js_1 = require("./method/Accountss.js");
var Accounts_js_1 = require("./declaration/Accounts.js");
var student = new Accountss_js_1.Accountss();
student.getAll();
//thêm mới
$(document).on('click', '.btn-add', function (ev) {
    ev.preventDefault();
    document.getElementById('error_name').style.display = "none";
    document.getElementById('error_email').style.display = "none";
    document.getElementById('error_phone').style.display = "none";
    document.getElementById('error_addr').style.display = "none";
    document.getElementById('error_pass').style.display = "none";
    var acc = new Accounts_js_1.Accounts();
    acc.Name = $('#Name').val();
    acc.Email = $('#Email').val();
    acc.Phone = $('#Phone').val();
    acc.Address = $('#Address').val();
    acc.Password = $('#Password').val();
    acc.img = $('#img').val();
    if (student.validate(acc)) {
        student.create(acc);
        student.getAll();
        document.getElementById('creatform').reset();
    }
});
$(document).on('click', '.btn-edit', function (ev) {
    ev.preventDefault();
    var idx = $(this).attr('id');
    var ac;
    ac = student.getByIdx(idx);
    $('#id').val(idx);
    $('#update-Name').val(ac.Name);
    $('#update-Gmail').val(ac.Email);
    $('#update-Phone').val(ac.Phone);
    $('#update-Address').val(ac.Address);
    $('#update-Password').val(ac.Password);
    $('#update-img').val(ac.img);
    student.getAll(); // load lại dữ liệu
});
$(document).on('click', '.btn-update', function (ev) {
    ev.preventDefault();
    document.getElementById('error_Name').style.display = "none";
    document.getElementById('error_Email').style.display = "none";
    document.getElementById('error_Phone').style.display = "none";
    document.getElementById('error_Addr').style.display = "none";
    document.getElementById('error_Pass').style.display = "none";
    var id = $('#id').val();
    var newData = new Accounts_js_1.Accounts();
    newData.Name = $('#update-Name').val();
    newData.Email = $('#update-Gmail').val();
    newData.Phone = $('#update-Phone').val();
    newData.Address = $('#update-Address').val();
    newData.Password = $('#update-Password').val();
    newData.img = $('#update-img').val();
    if (student.validate(newData)) {
        student.update(id, newData);
        student.getAll();
    }
});
$(document).on('click', '.btn-delete', function (ev) {
    ev.preventDefault();
    var id = $(this).data('id');
    if (confirm('Bạn có chắc muốn xóa sinh viên này?')) {
        student["delete"](id);
    }
});
