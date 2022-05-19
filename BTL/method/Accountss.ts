import { Accounts } from '../declaration/Accounts.js';
declare var $: any;
export class Accountss {
    public student: Array<Accounts>;
    constructor() {
        //gọi dữ liệu ra từ local
        var accountPutOut = localStorage.getItem('student');
        /*----------------------------------------------------------*/
        //chuyển string thành object để thực thi
        if (accountPutOut) {
            this.student = JSON.parse(accountPutOut);
        }
    }
    getAll() {
        let data: Array<Accounts> = this.student;
        this.disPlayData(data);
    }
    disPlayData(data: Array<Accounts>) {
        let html = '';
        for (let i = 0; i < data.length; i++) {
            html += '<tr>' + '<td>' + data[i].Id + '</td>';
            html += '<td>' + data[i].Name + '</td>';
            html += '<td>' + data[i].Email + '</td>';
            html += '<td>' + data[i].Phone + '</td>';
            html += '<td>' + data[i].Address + '</td>';
            html += '<td>' + data[i].Password + '</td>';
            html += '<td><button type = "button" data-id="' + data[i].Id + '" class="btn btn-danger btn-delete" > Delete </button>';
            html += '<button type="button" id="' + i + '" class="btn btn-warning btn-edit" data-toggle="modal" data-target="#exampleModal" data-whatever="Update">Update</button></td ></tr>';
        }
        $('#print').html(html);
    }
    create(data: Accounts) {
        let id = 1;
        if (this.student.length > 0) {
            let idx = this.student.length - 1;
            id = this.student[idx].Id + 1;
        }
        data.Id = id;
        this.student.push(data);
        //chuyển object thành string để lưu và local
        let accountString = JSON.stringify(this.student);
        //lưu vào local
        localStorage.setItem('student', accountString);
    }
    getByIdx(idx: number) {
        if (this.student[idx]) {
            return this.student[idx];
        }
        return false;
    }
    update(id: number, newData: Accounts) {
        this.student[id].Name = newData.Name;
        this.student[id].Email = newData.Email;
        this.student[id].Phone = newData.Phone;
        this.student[id].Address = newData.Address;
        this.student[id].Password = newData.Password;
        this.student[id].img = newData.img;
        var jsonString = JSON.stringify(this.student);
        localStorage.setItem('student', jsonString);
    }
    delete(Id: number) {
        let data: Array<Accounts> = this.student;
        for (let i = 0; i < data.length; i++) {
            var stud = data[i];
            if (stud.Id == Id) {
                data.splice(i, 1);
                let stustring = JSON.stringify(data);
                localStorage.setItem('student', stustring);
            }
        }
        this.disPlayData(data);
    }
    deleteAll() {
        localStorage.clear();
        this.getAll();
    }
    validate(data: Accounts) {
        if (data.Name == '') {
            $('#error_name').html('Tên không được để trống !');
            $('#error_Name').html('Tên không được để trống !');
            document.getElementById('error_name').style.display = "block";
            document.getElementById('error_Name').style.display = "block";
            return false;
        }
        if (data.Email == '') {
            $('#error_email').html('Email không được để trống !');
            $('#error_Email').html('Email không được để trống !');
            document.getElementById('error_email').style.display = "block";
            document.getElementById('error_Email').style.display = "block";
            return false;
        }
        var _rgex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!_rgex_email.test(data.Email)) {
            $('#error_email').html('Email sai định dạng !');
            $('#error_Email').html('Email sai định dạng !');
            document.getElementById('error_email').style.display = "block";
            document.getElementById('error_Email').style.display = "block";
            return false
        }
        if (data.Phone.length != 10) {
            $('#error_phone').html('Phone không đủ 10 số, và ko được có chữ !');
            $('#error_Phone').html('Phone không đủ 10 số,và ko được có chữ !');
            document.getElementById('error_phone').style.display = "block";
            document.getElementById('error_Phone').style.display = "block";
            return false;
        }
        var _rgex_phone = /^[0][3|5|7|8|9][0-9]{8}$/;
        if (!_rgex_phone.test(data.Phone)) {
            $('#error_phone').html('Phone bắt đầu bằng 03,05,08,07,09,và ko được có chữ!');
            $('#error_Phone').html('Phone bắt đầu bằng 03,05,08,07,09,và ko được có chữ !');
            document.getElementById('error_phone').style.display = "block";
            document.getElementById('error_Phone').style.display = "block";
            return false;
        }
        if (data.Address == '') {
            $('#error_addr').html('Địa chỉ không được để trống !');
            $('#error_Addr').html('Địa chỉ không được để trống !');
            document.getElementById('error_addr').style.display = "block";
            document.getElementById('error_Addr').style.display = "block";
            return false;
        }
        if (data.Password == '') {
            $('#error_pass').html('Password không được để trống !');
            $('#error_Pass').html('Password không được để trống !');
            document.getElementById('error_pass').style.display = "block";
            document.getElementById('error_Pass').style.display = "block";
            return false;
        }
        var _rgex_pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!_rgex_pass.test(data.Password)) {
            $('#error_pass').html('Password ít nhất 8 kí tự có ít nhất 1 số và 1 chữ !');
            $('#error_Pass').html('Password ít nhất 8 kí tự có ít nhất 1 số và 1 chữ !');
            document.getElementById('error_pass').style.display = "block";
            document.getElementById('error_Pass').style.display = "block";
            return false;
        }
        return true;
    }
}