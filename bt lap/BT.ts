class student {
    name: string
    gmail: string
    phone: string
}

var students: Array<student> = [
    { name: 'trịnh công như', gmail: 'congvien@gmail.com', phone: '038928981' },
    { name: 'nguyễn van hoàn', gmail: 'conghoan@gmail.com', phone: '094632722' },
    { name: 'la ngọc linh', gmail: 'linhbadboy@gmail.com', phone: '0378746632' },
    { name: 'nguyễn ánh dương', gmail: 'duongdanhda@gmail.com', phone: '030863726' }
]

var _html = ''
for (let i = 0; i < students.length; i++) {
    _html += '<tr>' + '<td>' + (i + 1)
    _html += '<td>' + students[i].name
    _html += '<td>' + students[i].gmail
    _html += '<td>' + students[i].phone + + '<tr>'
}

var demo = document.getElementById('demo')
demo.innerHTML = _html

var data = (): Array<any> => {

    var student: Array<any> = [
        'nguyen', 'anh', 'thuong', 23, 'tran', 'duy', 'hung'
    ];
    return student;
}

var show = (nameId: string) => {
    let ID = document.getElementById(nameId);
    let myData = data();
    let _li = '';
    for (let i = 0; i < myData.length; i++) {
        _li += myData[i] + ' ';
    }
    ID.innerHTML = _li;
}
show('demo1');

class BienSinhVien {
    name: string;
    phone: string;
    avatar: string;
}

var Sinhvien: Array<BienSinhVien> = [
    { name: 'Hoàng Văn Bạch', phone: '0986421128', avatar: '<img class="d-block mx-auto" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png">' },
    { name: 'Hoàng Văn Bạch', phone: '0986421128', avatar: '<img class="d-block mx-auto" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png">' }
]

var DisPlaySinhVien = (MyID: string) => {
    let ID = document.getElementById(MyID);
    let _li = '';
    for (let i = 0; i < Sinhvien.length; i++) {
        _li += '<tr>' + '<td>' + (i + 1) + '</td>' + '<td>' + Sinhvien[i].name + '</td>';
        _li += '<td>' + Sinhvien[i].phone + '</td>';
        _li += '<td>' + Sinhvien[i].avatar + '</td>' + '</tr>';

    }
    ID.innerHTML = _li;
}
DisPlaySinhVien('BT');