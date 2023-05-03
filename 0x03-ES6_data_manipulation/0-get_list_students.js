
// const students = [
//     { id: 1, firstName: "Guillaume", location: "San Francisco" },
//     { id: 2, firstName: "James", location: "Columbia" },
//     { id: 5, firstName: "Serena", location: "San Francisco" },
//     ],
    // res = students.map(getListStudents => getListStudents.id); 
    // console.log(res); 

function getListStudents(id, firstName, location) {
    
    var obj = {
        id: id,
        firstName: firstName,
        location: location
    };

    return obj;
}

var p1 = getListStudents(1, "Guillaume", "San Franscisco")
console.log(p1);

