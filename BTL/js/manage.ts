import { Accounts } from '../declaration/Accounts.js';
declare var $: any;
class school extends Accounts {
    public student: Array<Accounts> = new Array<Accounts>();
    constructor() {
        super();
        var student_string = localStorage.getItem("student");
        if (student_string) {
            this.student = JSON.parse(student_string)
        }
    }
    getAll() {
        let _html = '';
        for (let i = 0; i < this.student.length; i++) {
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
    }
}
var newstu = new school;
newstu.getAll();

