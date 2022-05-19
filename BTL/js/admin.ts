var user = sessionStorage.getItem('student');
if (user == null) {
    location.assign('../login.html');
    sessionStorage.setItem('student', localStorage.getItem('student'));
}