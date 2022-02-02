// function formatDate(dateString) {
//    let date = new Date(dateString);
// //    console.log(date);
//    let year = date.getFullYear()
//    let month =date.getMonth() + 1
//    let days = date.getDate()

//    console.log( days +"/" + month + "/" + year );
// }

// formatDate("2005-11-21");

function calculateAge(dateString) {
    var today = new Date();
    var birth = new Date(dateString);
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) { age--; }
    console.log(age);
    return
}
calculateAge("1991-03-22");