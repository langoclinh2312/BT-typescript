import { Accounts } from '../declaration/Accounts.js';
class accounts {
    email: string;
    pass: string;
}
class Login extends Accounts {
    constructor() {
        super();
    }
    checkEmail(email: string): boolean {
        let data: Array<Accounts> = JSON.parse(localStorage.getItem('student'));
        let a: number;
        for (let i = 0; i < data.length; i++) {
            a = 0;
            if (data[i].Email == email) {
                a = 1;
                return true;
            }
        }
        if (a == 0) {
            return false;
        }
    }
    checkPass(pass: string): boolean {
        let data: Array<Accounts> = JSON.parse(localStorage.getItem('student'));
        let b: number;
        for (let i = 0; i < data.length; i++) {
            b = 0;
            if (data[i].Password == pass) {
                b = 1;
                return true
            }
        }
        if (b == 0) {
            return false;
        }
    }
    validate_form(datas: accounts) {
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
    }
}
var _student = new Login;
declare var $: any;
$('.btn-login').click(function (ev: any) {
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