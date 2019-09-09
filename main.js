//constructors
function Assignment(id, title, description, subdatetime, oralmark, totalmark) {
    this.Id = id;
    this.Title = title;
    this.Description = description;
    this.SubDateTime = subdatetime;
    this.OralMark = oralmark;
    this.TotalMark = totalmark;
}

function Student(id, firstname, lastname, dateofbirth, tuitionfees) {
    this.Id = id;
    this.Firstname = firstname;
    this.Lastname = lastname;
    this.Dateofbirth = dateofbirth;
    this.Tuitionfees = tuitionfees;
}

function Trainer(id, firstname, lastname, subject) {
    this.Id = id;
    this.Firstname = firstname;
    this.Lastname = lastname;
    this.Subject = subject;
}

function Course(id, title, type, stream, startdate, enddate) {
    this.Id = id;
    this.Title = title;
    this.Type = type;
    this.Stream = stream;
    this.Startdate = startdate;
    this.Enddate = enddate;
    this.Assignments = [];
    this.Students = [];
    this.Trainers = [];

}

//Objects
//assignments
var a1 = new Assignment(1, "Individual I", "description 1", "22/05/2019", "55", "90");
var a2 = new Assignment(2, "Individual II", "description 2", "20/06/2019", "60", "70");
var a3 = new Assignment(3, "Individual III", "description 3", "25/07/2017", "95", "80");
var a4 = new Assignment(4, "Individual IV", "description 4", "17/09/2019", "73", "88");

//students
var s1 = new Student(1, "Mairi", "Ioannou", "30 / 11 / 1993", 1000);
var s2 = new Student(2, "Vlassis", "Mpakas", "05/05/1993", 0);
var s3 = new Student(3, "Giannis", "Paraskeyopoulos", "01/04/1989", 1200);
var s4 = new Student(4, "Alexandros", "Psixogios", "05/08/1995", 900);

//trainers
var t1 = new Trainer(1, "Argiris", "Pagidas", "Python");
var t2 = new Trainer(2, "Ektoras", "Gatsos", "C#");
var t3 = new Trainer(3, "Kwstantinos", "Mpoustioulis", "DB");
var t4 = new Trainer(4, "Sakis", "Siklarlis", "C#");

//courses
var c1 = new Course(1, "Coding bootcamp I", "Java", "Part time", "03/05/2018", "03/11/2018");
c1.Assignments.push(a1);
c1.Assignments.push(a2);
c1.Students.push(s1);
c1.Students.push(s2);
c1.Trainers.push(t1);
c1.Trainers.push(t2);
var c2 = new Course(2, "Coding bootcamp II", "C#", "Full time", "05/11/2019", "25/02/2019");
c2.Assignments.push(a2);
c2.Assignments.push(a4);
c2.Students.push(s2);
c2.Students.push(s4);
c2.Trainers.push(t2);
c2.Trainers.push(t4);
var c3 = new Course(3, "Coding bootcamp III", "Java", "Full time", "01/04/2019", "01/07/2019");
c3.Assignments.push(a3);
c3.Assignments.push(a4);
c3.Students.push(s3);
c3.Students.push(s4);
c3.Trainers.push(t3);
c3.Trainers.push(t4);

//create lists
var assignments = [a1, a2, a3, a4];
var students = [s1, s2, s3, s4];
var trainers = [t1, t2, t3, t4];
var courses = [c1, c2, c3];


//assignment
$("#button_assignment").click(function (e) {
    $("#button_table_assignment").hide("fast");
    $("#form_assignment").fadeIn("slow");
});

//student
$("#button_student").click(function (e) {
    $("#button_table_student").hide("fast");
    $("#form_student").fadeIn("slow");
});

//trainer
$("#button_trainer").click(function (e) {
    $("#button_table_trainer").hide("fast");
    $("#form_trainer").fadeIn("slow");
});

//course
$("#button_course").click(function (e) {
    $("#button_table_course").hide("fast");
    $("#form_course").fadeIn("slow");
});

//tpc
$("#button_tpc").click(function (e) {
    $("#button_table_tpc").hide("fast");
    $("#form_tpc").fadeIn("slow");
    fillFormTitleTpc();
    fillFormTrainerTpc();
});

//spc
$("#button_spc").click(function (e) {
    $("#button_table_spc").hide("fast");
    $("#form_spc").fadeIn("slow");
    fillFormTitleSpc();
    fillFormStudentSpc();
});

//apc
$("#button_apc").click(function (e) {
    $("#button_table_apc").hide("fast");
    $("#form_apc").fadeIn("slow");
    fillFormTitleApc();
    fillFormAssignmentApc();
});

//apspc
$("#button_apspc").click(function (e) {
    $("#button_table_apspc").hide("fast");
    $("#form_apspc").fadeIn("slow");
    fillFormTitleApspc();
    fillFormAssignmentApspc();
    fillFormStudentApspc();
});


//Assignments
function refreshTableAssignments() {
    var data = "";
    for (var i = 0; i < assignments.length; i++) {
        data += "<tr >";
        data += "<td>" + assignments[i].Title + "</td>";
        data += "<td>" + assignments[i].Description + "</td>";
        data += "<td>" + assignments[i].SubDateTime + "</td>";
        data += "<td>" + assignments[i].OralMark + "</td>";
        data += "<td>" + assignments[i].TotalMark + "</td>";
        data += `<td><button onclick="editAssignment(${assignments[i].Id})"><img src="img/edit.png" alt="edit_button" height="30" width="30" id="edit_button" class="buttons" /></button></td>`;
        data += "</tr>";
    }

    document.getElementById("tbody_assignment").innerHTML = data;
}


function editAssignment(id) {
    $("#button_table_assignment").hide("fast");

    assignments.forEach(function (assignment) {
        if (id == assignment.Id) {
            var listDate = assignment.SubDateTime.split("/");
            var date = listDate[2] + "-" + listDate[1] + "-" + listDate[0];
            $("#div_editform_assignment").empty();
            var formassignmentedit =
                `<form action="" id="form_editassignment" onsubmit="updateAssignment(${assignment.Id}); return false;">
                    <h2>Edit Assignment ${assignment.Title}</h2>
                    <div class="form-group">
                        <label for="EditTitleAssignment">Title:</label>
                        <input type="text" class="form-control" id="EditTitleAssignment" value="${assignment.Title}" placeholder="Enter Title (5-20 caracters, letters and digits)" name="TitleAssignment" required  pattern="[A-Za-z0-9 ]{5,20}" maxlength="20" title="Enter 5-20 caracters and numbers">
                    </div>
                    <div class="form-group">
                        <label for="EditDescription">Description:</label>
                        <input type="text" class="form-control" id="EditDescription" value="${assignment.Description}" placeholder="Enter Description (5-80 caracters, only letters)" name="Description" required pattern="[A-Za-z ]{5,80}" maxlength="80"  title="Enter 5-80 caracters">
                    </div>
                    <div class="form-group">
                        <label for="EditSubDateTime">Sub Date Time:</label>
                        <input type="date" class="form-control" id="EditSubDateTime" value="${date}"  name="SubDateTime" required min='2010-01-01' max='2030-01-01'>
                    </div>
                    <div class="form-group">
                        <label for="EditOralMark">Oral Mark (optional) :</label>
                        <input type="number" class="form-control" id="EditOralMark" value="${assignment.OralMark}" placeholder="Enter Oral Mark (0-100)" name="OralMark" min="0" max="100">
                    </div>
                    <div class="form-group">
                        <label for="EditTotalMark">Total Mark (optional) :</label>
                        <input type="number" class="form-control" id="EditTotalMark" value="${assignment.TotalMark}" placeholder="Enter Total Mark (0-100)" name="TotalMark" min="0" max="100">
                    </div>
                    <input type="submit" name="submit" value="Update Assignment" class="btn btn-primary mb-3"/>
                </form>`;
            $("#div_editform_assignment").append(formassignmentedit);
        }
    });
}


function updateAssignment(id) {
    var listDate = $("#EditSubDateTime").val().split("-");
    listDate.reverse();
    assignments.forEach(function (assignment) {
        if (id == assignment.Id) {
            assignment.Title = $("#EditTitleAssignment").val();
            assignment.Description = $("#EditDescription").val();
            assignment.SubDateTime = listDate.join("/");
            assignment.OralMark = $("#EditOralMark").val();
            assignment.TotalMark = $("#EditTotalMark").val();
        }
    })

    refreshTableAssignments();
    $("#button_table_assignment").fadeIn("slow");
    $("#form_editassignment").hide("slow");

}


// Students
function refreshTableStudents() {
    var data = "";
    for (var i = 0; i < students.length; i++) {
        data += "<tr >";
        data += "<td>" + students[i].Firstname + "</td>";
        data += "<td>" + students[i].Lastname + "</td>";
        data += "<td>" + students[i].Dateofbirth + "</td>";
        data += "<td>" + students[i].Tuitionfees + "</td>";
        data += `<td><button onclick="editStudent(${students[i].Id})"><img src="img/edit.png" alt="edit_button" height="30" width="30" id="edit_button" class="buttons" /></button></td>`;
        data += "</tr>";
    }

    document.getElementById("tbody_student").innerHTML = data;
}


function editStudent(id) {
    $("#button_table_student").hide("fast");

    students.forEach(function (student) {
        if (id == student.Id) {
            var listDate = student.Dateofbirth.split("/");
            var date = listDate[2] + "-" + listDate[1] + "-" + listDate[0];
            $("#div_editform_student").empty();
            var formstudentedit =
                `<form action="" id="form_editstudent" onsubmit="updateStudent(${student.Id}); return false;">
                    <h2>Edit Student ${student.Lastname}  ${student.Firstname}</h2>
                    <div class="form-group">
                        <label for="EditFirstnameStudent">Firstname:</label>
                        <input type="text" class="form-control" id="EditFirstnameStudent" value="${student.Firstname}" placeholder="Enter Firstname (5-15 caracters, only letters)" name="FirstnameStudent" required  pattern="[A-Za-z]{5,15}" maxlength="15" title="Enter 5-15 and only caracters">
                    </div>
                    <div class="form-group">
                        <label for="EditLastnameStudent">Lastname:</label>
                        <input type="text" class="form-control" id="EditLastnameStudent" value="${student.Lastname}" placeholder="Enter Lastname (5-15 caracters, only letters)" name="LastnameStudent" required  pattern="[A-Za-z]{5,15}" maxlength="15" title="Enter 5-15 and only caracters">
                    </div>
                    <div class="form-group">
                        <label for="EditDateofbirth">Date of birth (optional) :</label>
                        <input type="date" class="form-control" id="EditDateofbirth" value="${date}"  name="Dateofbirth">
                    </div>
                    <div class="form-group">
                        <label for="EditTuitionfees">Tuition fees:</label>
                        <input type="number" class="form-control" id="EditTuitionfees" value="${student.Tuitionfees}" name="Tuitionfees" required min="0" max="3000">
                    </div>
                    <input type="submit" name="submit" value="Update Student" class="btn btn-primary mb-3"/>
                </form>`;
            $("#div_editform_student").append(formstudentedit);
        }
    });
}


function updateStudent(id) {
    var listDate = $("#EditDateofbirth").val().split("-");
    listDate.reverse();
    students.forEach(function (student) {
        if (id == student.Id) {
            student.Firstname = $("#EditFirstnameStudent").val();
            student.Lastname = $("#EditLastnameStudent").val();
            student.Dateofbirth = listDate.join("/");
            student.Tuitionfees = $("#EditTuitionfees").val();
        }
    })

    refreshTableStudents();
    $("#button_table_student").fadeIn("slow");
    $("#form_editstudent").hide("slow");

}


//Trainers
function refreshTableTrainers() {
    var data = "";
    for (var i = 0; i < trainers.length; i++) {
        data += "<tr >";
        data += "<td>" + trainers[i].Firstname + "</td>";
        data += "<td>" + trainers[i].Lastname + "</td>";
        data += "<td>" + trainers[i].Subject + "</td>";
        data += `<td><button onclick="editTrainer(${trainers[i].Id})"><img src="img/edit.png" alt="edit_button" height="30" width="30" id="edit_button" class="buttons" /></button></td>`;
        data += "</tr>";
    }

    document.getElementById("tbody_trainer").innerHTML = data;
}


function editTrainer(id) {
    $("#button_table_trainer").hide("fast");

    trainers.forEach(function (trainer) {
        if (id == trainer.Id) {
            $("#div_editform_trainer").empty();
            var formtraineredit =
                `<form action="" id="form_edittrainer" onsubmit="updateTrainer(${trainer.Id}); return false;">
                    <h2>Edit Trainer ${trainer.Lastname}  ${trainer.Firstname}</h2>
                    <div class="form-group">
                        <label for="EditFirstnameTrainer">Firstname:</label>
                        <input type="text" class="form-control" id="EditFirstnameTrainer" value="${trainer.Firstname}" placeholder="Enter Firstname (5-15 caracters, only letters)" name="FirstnameTrainer" required  pattern="[A-Za-z]{5,15}" maxlength="15" title="Enter 5-15 and only caracters">
                    </div>
                    <div class="form-group">
                        <label for="EditLastnameTrainer">Lastname:</label>
                        <input type="text" class="form-control" id="EditLastnameTrainer" value="${trainer.Lastname}" placeholder="Enter Lastname (5-15 caracters, only letters)" name="LastnameTrainer" required  pattern="[A-Za-z]{5,15}" maxlength="15" title="Enter 5-15 and only caracters">
                    </div>
                    <div class="form-group">
                        <label for="EditSubject">Subject:</label>
                        <input type="text" class="form-control" id="EditSubject" value="${trainer.Subject}" name="Subject" required  pattern="[A-Za-z ]{2,15}" maxlength="15" title="Enter 2-15 and only caracters">
                    </div>
                    <input type="submit" name="submit" value="Update Trainer" class="btn btn-primary mb-3"/>
                </form>`;
            $("#div_editform_trainer").append(formtraineredit);
        }
    });
}


function updateTrainer(id) {
    trainers.forEach(function (trainer) {
        if (id == trainer.Id) {
            trainer.Firstname = $("#EditFirstnameTrainer").val();
            trainer.Lastname = $("#EditLastnameTrainer").val();
            trainer.Subject = $("#EditSubject").val();
        }
    })

    refreshTableTrainers();
    $("#button_table_trainer").fadeIn("slow");
    $("#form_edittrainer").hide("slow");

}


//Courses
function refreshTableCourses() {
    var data = "";
    for (var i = 0; i < courses.length; i++) {
        data += "<tr >";
        data += "<td>" + courses[i].Title + "</td>";
        data += "<td>" + courses[i].Type + "</td>";
        data += "<td>" + courses[i].Stream + "</td>";
        data += "<td>" + courses[i].Startdate + "</td>";
        data += "<td>" + courses[i].Enddate + "</td>";
        data += `<td><button onclick="editCourse(${courses[i].Id})"><img src="img/edit.png" alt="edit_button" height="30" width="30" id="edit_button" class="buttons" /></button></td>`;
        data += "</tr>";
    }

    document.getElementById("tbody_course").innerHTML = data;
}



function editCourse(id) {
    $("#button_table_course").hide("fast");

    courses.forEach(function (course) {
        if (id == course.Id) {
            var listDate1 = course.Startdate.split("/");
            var listDate2 = course.Enddate.split("/");
            var date1 = listDate1[2] + "-" + listDate1[1] + "-" + listDate1[0];
            var date2 = listDate2[2] + "-" + listDate2[1] + "-" + listDate2[0];
            $("#div_editform_course").empty();
            var formcourseedit =
                `<form action="" id="form_editcourse" onsubmit="updateCourse(${course.Id}); return false;">
                    <h2>Edit Course ${course.Title}</h2>
                    <div class="form-group">
                        <label for="EditTitleCourse">Title:</label>
                        <input type="text" class="form-control" id="EditTitleCourse" value="${course.Title}" placeholder="Enter Title (5-20 caracters, letters and digits)" name="TitleCourse" required  pattern="[A-Za-z0-9 ]{5,20}" maxlength="20" title="Enter 5-20 caracters and numbers">
                    </div>
                    <div class="form-group">
                        <label for="EditType">Type:</label>
                        <input type="text" class="form-control" id="EditType" value="${course.Type}" placeholder="Enter Type (2-4 caracters and only (#) symbol)" name="Type" required  pattern="[A-Za-z#]{2,4}" maxlength="4" title="Enter 2-4 caracters and (#) symbol">
                    </div>
                    <div class="form-group">
                        <label for="EditStream">Stream:</label>
                        <input type="text" class="form-control" id="EditStream" value="${course.Stream}" placeholder="Enter Stream (4-10 caracters, only letters)" name="Stream" required  pattern="[A-Za-z ]{4,10}" maxlength="10" title="Enter 4-10 caracters">
                    </div>
                    <div class="form-group">
                        <label for="EditStartDate">Start Date (optional) :</label>
                        <input type="date" class="form-control" id="EditStartDate" value="${date1}"  name="StartDate" min='2013-01-01' max='2030-01-01'>
                    </div>
                    <div class="form-group">
                        <label for="EditEndDate">End Date (optional) :</label>
                        <input type="date" class="form-control" id="EditEndDate" value="${date2}"  name="EndDate" min='2013-01-01' max='2030-01-01'>
                    </div>                    
                    <input type="submit" name="submit" value="Update Course" class="btn btn-primary mb-3"/>
                </form>`;
            $("#div_editform_course").append(formcourseedit);
        }
    });
}



function updateCourse(id) {
    var listDate1 = $("#EditStartDate").val().split("-");
    var listDate2 = $("#EditEndDate").val().split("-");
    listDate1.reverse();
    listDate2.reverse();
    courses.forEach(function (course) {
        if (id == course.Id) {
            course.Title = $("#EditTitleCourse").val();
            course.Type = $("#EditType").val();
            course.Stream = $("#EditStream").val();
            course.Startdate = listDate1.join("/");
            course.Enddate = listDate2.join("/");
        }
    })

    refreshTableCourses();
    $("#button_table_course").fadeIn("slow");
    $("#form_editcourse").hide("slow");

}




//table tpc
// Create - Refresh Table tpc
function getTrainersforCourse(id) {
    var list = "<ul>";
    for (var i = 0; i < courses.length; i++) {
        if (id == courses[i].Id) {
            for (var j = 0; j < courses[i].Trainers.length; j++) {
                list += "<li>" + courses[i].Trainers[j].Firstname + " " + courses[i].Trainers[j].Lastname + "</li>";
            }
        }
    }
    list += "</ul>";
    return list;
}

function refreshTableTpc() {
    var data = "";
    for (var i = 0; i < courses.length; i++) {
        data += "<tr >";
        data += "<td>" + courses[i].Title + "</td>";
        data += "<td>" + getTrainersforCourse(courses[i].Id) + "</td>";
        data += `<td><button onclick="editTpc(${courses[i].Id})"><img src="img/edit.png" alt="edit_button" height="30" width="30" id="edit_button" class="buttons" /></button></td>`;
        data += "</tr>";
    }

    document.getElementById("tbody_tpc").innerHTML = data;
}
//end tpc Refresh

//Fill tpc form
function fillFormTitleTpc() {
    var data = "";
    courses.forEach(function (course) {
        data += `<option class="tpc" value="${course.Id}">${course.Title}</option>`;

    })
    document.getElementById("select_tpc").innerHTML = data;
}

function fillFormTrainerTpc() {
    var data = "";
    trainers.forEach(function (trainer) {
        data += `<div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input tpccheckbox" value="${trainer.Id}">
                        ${trainer.Firstname} ${trainer.Lastname}
                        </label>
                 </div>`;
    })

    document.getElementById("inputs_tpc").innerHTML = data;

}

function editTpc(id) {
    $("#button_table_tpc").hide("fast");
    $("#div_editform_tpc").empty();
    var formtpcedit = "";
    courses.forEach(function (course) {
        if (course.Id == id) {
            formtpcedit =
                `<form action="" id="editform_tpc" onsubmit="updateTpc(${course.Id}); return false;" >
                <h2>Edit Trainers for ${course.Title} Course</h2>                
                    <div class="form-group">
                        <label for="Trainer">Trainer:</label><br>
                            <div id="editinputs_tpc">
                            ${getSelectedTrainersforCourse(course.Id)}
                            </div>                        
                    </div>
                        <input type="submit" name="submit" value="submit" class="btn btn-primary mb-3" id="editsubmit_tpc" />
                </form>`

        }
    })
    $("#div_editform_tpc").append(formtpcedit);
}

function getSelectedTrainersforCourse(id) {
    var data = "";
    courses.forEach(function (course) {
        if (course.Id == id) {
            trainers.forEach(function (trainer) {
                if (course.Trainers.includes(trainer)) {
                    data += `<div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input edittpccheckbox" value="${trainer.Id}" checked>
                                ${trainer.Firstname} ${trainer.Lastname}
                                </label>
                             </div>`;
                }
                else {
                    data += `<div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input edittpccheckbox" value="${trainer.Id}" >
                                ${trainer.Firstname} ${trainer.Lastname}
                                </label>
                             </div>`;
                }
            })
        }
    })
    return data;
}

function updateTpc(id) {
    courses.forEach(function (course) {
        if (course.Id == id) {
            course.Trainers = [];
            $.each($('input[class="form-check-input edittpccheckbox"]:checked'), function () {
                var trainerid = this.value;
                var trainer = trainers.find(x => x.Id == trainerid);
                if (!course.Trainers.includes(trainer)) {
                    course.Trainers.push(trainer);
                }

            });
        }
    })

    $("#editform_tpc").hide("fast");
    $("#button_table_tpc").show("slow");
    refreshTableTpc();

}




//table spc
// Create - Refresh Table spc
function getStudentsforCourse(id) {
    var list = "<ul>";
    for (var i = 0; i < courses.length; i++) {
        if (id == courses[i].Id) {
            for (var j = 0; j < courses[i].Students.length; j++) {
                list += "<li>" + courses[i].Students[j].Firstname + " " + courses[i].Students[j].Lastname + "</li>";
            }
        }
    }
    list += "</ul>";
    return list;
}
function refreshTableSpc() {
    var data = "";
    for (var i = 0; i < courses.length; i++) {
        data += "<tr >";
        data += "<td>" + courses[i].Title + "</td>";
        data += "<td>" + getStudentsforCourse(courses[i].Id) + "</td>";
        data += `<td><button onclick="editSpc(${courses[i].Id})"><img src="img/edit.png" alt="edit_button" height="30" width="30" id="edit_button" class="buttons" /></button></td>`;
        data += "</tr>";
    }

    document.getElementById("tbody_spc").innerHTML = data;
}
//end spc Refresh

//Fill spc form
function fillFormTitleSpc() {
    var data = "";
    courses.forEach(function (course) {
        data += `<option class="spc" value="${course.Id}">${course.Title}</option>`;
    })
    document.getElementById("select_spc").innerHTML = data;
}

function fillFormStudentSpc() {
    var data = "";
    students.forEach(function (student) {
        data += `<div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input spccheckbox" value="${student.Id}">
                        ${student.Firstname} ${student.Lastname}
                        </label>
                 </div>`;
    })

    document.getElementById("inputs_spc").innerHTML = data;

}

function editSpc(id) {
    $("#button_table_spc").hide("fast");
    $("#div_editform_spc").empty();
    var formspcedit = "";
    courses.forEach(function (course) {
        if (course.Id == id) {
            formspcedit =
                `<form action="" id="editform_spc" onsubmit="updateSpc(${course.Id}); return false;" >
                <h2>Edit Students for ${course.Title} Course</h2>                
                    <div class="form-group">
                        <label for="Student">Student:</label><br>
                            <div id="editinputs_spc">
                            ${getSelectedStudentsforCourse(course.Id)}
                            </div>                        
                    </div>
                        <input type="submit" name="submit" value="submit" class="btn btn-primary mb-3" id="editsubmit_spc" />
                </form>`

        }
    })
    $("#div_editform_spc").append(formspcedit);
}

function getSelectedStudentsforCourse(id) {
    var data = "";
    courses.forEach(function (course) {
        if (course.Id == id) {
            students.forEach(function (student) {
                if (course.Students.includes(student)) {
                    data += `<div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input editspccheckbox" value="${student.Id}" checked>
                                ${student.Firstname} ${student.Lastname}
                                </label>
                             </div>`;
                }
                else {
                    data += `<div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input editspccheckbox" value="${student.Id}" >
                                ${student.Firstname} ${student.Lastname}
                                </label>
                             </div>`;
                }
            })
        }
    })
    return data;
}

function updateSpc(id) {
    courses.forEach(function (course) {
        if (course.Id == id) {
            course.Students = [];
            $.each($('input[class="form-check-input editspccheckbox"]:checked'), function () {
                var studentid = this.value;
                var student = students.find(x => x.Id == studentid);
                if (!course.Students.includes(student)) {
                    course.Students.push(student);
                }
            });
        }
    })

    $("#editform_spc").hide("fast");
    $("#button_table_spc").show("slow");
    refreshTableSpc();

}



//table apc
// Create - Refresh Table apc
function getAssignmentsforCourse(id) {
    var list = "<ul>";
    for (var i = 0; i < courses.length; i++) {
        if (id == courses[i].Id) {
            for (var j = 0; j < courses[i].Assignments.length; j++) {
                list += "<li>" + courses[i].Assignments[j].Title + "</li>";
            }
        }
    }
    list += "</ul>";
    return list;
}
function refreshTableApc() {
    var data = "";
    for (var i = 0; i < courses.length; i++) {
        data += "<tr >";
        data += "<td>" + courses[i].Title + "</td>";
        data += "<td>" + getAssignmentsforCourse(courses[i].Id) + "</td>";
        data += `<td><button onclick="editApc(${courses[i].Id})"><img src="img/edit.png" alt="edit_button" height="30" width="30" id="edit_button" class="buttons" /></button></td>`;
        data += "</tr>";
    }

    document.getElementById("tbody_apc").innerHTML = data;
}
//end apc Refresh

//Fill Apc form
function fillFormTitleApc() {
    var data = "";
    courses.forEach(function (course) {
        data += `<option class="apc" value="${course.Id}">${course.Title}</option>`;
    })
    document.getElementById("select_apc").innerHTML = data;
}

function fillFormAssignmentApc() {
    var data = "";
    assignments.forEach(function (assignment) {
        data += `<div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input apccheckbox" value="${assignment.Id}">
                        ${assignment.Title}
                        </label>
                 </div>`;
    })

    document.getElementById("inputs_apc").innerHTML = data;

}

function editApc(id) {
    $("#button_table_apc").hide("fast");
    $("#div_editform_apc").empty();
    var formapcedit = "";
    courses.forEach(function (course) {
        if (course.Id == id) {
            formapcedit =
                `<form action="" id="editform_apc" onsubmit="updateApc(${course.Id}); return false;" >
                <h2>Edit Assignments for ${course.Title} Course</h2>                
                    <div class="form-group">
                        <label for="Assignment">Assignment:</label><br>
                            <div id="editinputs_apc">
                            ${getSelectedAssignmentsforCourse(course.Id)}
                            </div>                        
                    </div>
                        <input type="submit" name="submit" value="submit" class="btn btn-primary mb-3" id="editsubmit_apc" />
                </form>`

        }
    })
    $("#div_editform_apc").append(formapcedit);
}

function getSelectedAssignmentsforCourse(id) {
    var data = "";
    courses.forEach(function (course) {
        if (course.Id == id) {
            assignments.forEach(function (assignment) {
                if (course.Assignments.includes(assignment)) {
                    data += `<div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input editapccheckbox" value="${assignment.Id}" checked>
                                ${assignment.Title}
                                </label>
                             </div>`;
                }
                else {
                    data += `<div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input editapccheckbox" value="${assignment.Id}" >
                                ${assignment.Title}
                                </label>
                             </div>`;
                }
            })
        }
    })
    return data;
}

function updateApc(id) {
    courses.forEach(function (course) {
        if (course.Id == id) {
            course.Assignments = [];
            $.each($('input[class="form-check-input editapccheckbox"]:checked'), function () {
                var assignmentid = this.value;
                var assignment = assignments.find(x => x.Id == assignmentid);
                if (!course.Assignments.includes(assignment)) {
                    course.Assignments.push(assignment);
                }
            });
        }
    })

    $("#editform_apc").hide("fast");
    $("#button_table_apc").show("slow");
    refreshTableApc();

}



//table apspc
// Create - Refresh Table apspc
function getAssignmentsforCourseapspc(id) {
    var list = "<ul>";
    for (var i = 0; i < courses.length; i++) {
        if (id == courses[i].Id) {
            for (var j = 0; j < courses[i].Assignments.length; j++) {
                list += "<li>" + courses[i].Assignments[j].Title + "</li>";
            }
        }
    }
    list += "</ul>";
    return list;
}

function getStudentsforCourseapspc(id) {
    var list = "<ul>";
    for (var i = 0; i < courses.length; i++) {
        if (id == courses[i].Id) {
            for (var j = 0; j < courses[i].Students.length; j++) {
                list += "<li>" + courses[i].Students[j].Firstname + " " + courses[i].Students[j].Lastname + "</li>";
            }
        }
    }
    list += "</ul>";
    return list;
}

function refreshTableApspc() {
    var data = "";
    for (var i = 0; i < courses.length; i++) {
        data += "<tr >";
        data += "<td>" + courses[i].Title + "</td>";
        data += "<td>" + getAssignmentsforCourseapspc(courses[i].Id) + "</td>";
        data += "<td>" + getStudentsforCourseapspc(courses[i].Id) + "</td>";
        data += `<td><button onclick="editApspc(${courses[i].Id})"><img src="img/edit.png" alt="edit_button" height="30" width="30" id="edit_button" class="buttons" /></button></td>`;
        data += "</tr>";
    }

    document.getElementById("tbody_apspc").innerHTML = data;
}
//end apspc Refresh

//Fill Apspc form
function fillFormTitleApspc() {
    var data = "";
    courses.forEach(function (course) {
        data += `<option class="apspc" value="${course.Id}">${course.Title}</option>`;
    })
    document.getElementById("select_apspc").innerHTML = data;
}

function fillFormAssignmentApspc() {
    var data = "";
    assignments.forEach(function (assignment) {
        data += `<div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input apspccheckbox" value="${assignment.Id}">
                        ${assignment.Title}
                        </label>
                 </div>`;
    })

    document.getElementById("inputs_apspc").innerHTML = data;
}

function fillFormStudentApspc() {
    var data = "";
    students.forEach(function (student) {
        data += `<div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input sapspccheckbox" value="${student.Id}">
                        ${student.Firstname} ${student.Lastname}
                        </label>
                 </div>`;
    })

    document.getElementById("inputss_apspc").innerHTML = data;

}

function editApspc(id) {
    $("#button_table_apspc").hide("fast");
    $("#div_editform_apspc").empty();
    var formapspcedit = "";
    courses.forEach(function (course) {
        if (course.Id == id) {
            formapspcedit =
                `<form action="" id="editform_apspc" onsubmit="updateApspc(${course.Id}); return false;" >
                <h2>Edit Assignments and Students for ${course.Title} Course</h2>                
                    <div class="form-group">
                        <label for="Assignment">Assignment:</label><br>
                            <div id="editinputs_apspc">
                            ${getSelectedAssignmentsforCourseapspc(course.Id)}
                            </div>                        
                    </div>
                    <div class="form-group">
                        <label for="Student">Student:</label><br>
                            <div id="editinputs_sapspc">
                            ${getSelectedStudentsforCourseapspc(course.Id)}
                            </div>                        
                    </div>
                        <input type="submit" name="submit" value="submit" class="btn btn-primary mb-3" id="editsubmit_apspc" />
                </form>`

        }
    })
    $("#div_editform_apspc").append(formapspcedit);
}

function getSelectedStudentsforCourseapspc(id) {
    var data = "";
    courses.forEach(function (course) {
        if (course.Id == id) {
            students.forEach(function (student) {
                if (course.Students.includes(student)) {
                    data += `<div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input editapspccheckboxstudents" value="${student.Id}" checked>
                                ${student.Firstname} ${student.Lastname}
                                </label>
                             </div>`;
                }
                else {
                    data += `<div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input editapspccheckboxstudents" value="${student.Id}" >
                                ${student.Firstname} ${student.Lastname}
                                </label>
                             </div>`;
                }
            })
        }
    })
    return data;
}

function getSelectedAssignmentsforCourseapspc(id) {
    var data = "";
    courses.forEach(function (course) {
        if (course.Id == id) {
            assignments.forEach(function (assignment) {
                if (course.Assignments.includes(assignment)) {
                    data += `<div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input editapspccheckboxassignments" value="${assignment.Id}" checked>
                                ${assignment.Title}
                                </label>
                             </div>`;
                }
                else {
                    data += `<div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input editapspccheckboxassignments" value="${assignment.Id}" >
                                ${assignment.Title}
                                </label>
                             </div>`;
                }
            })
        }
    })
    return data;
}

function updateApspc(id) {
    courses.forEach(function (course) {
        if (course.Id == id) {
            course.Assignments = [];
            course.Students = [];
            $.each($('input[class="form-check-input editapspccheckboxassignments"]:checked'), function () {
                var assignmentid = this.value;
                var assignment = assignments.find(x => x.Id == assignmentid);
                if (!course.Assignments.includes(assignment)) {
                    console.log(assignment);
                    course.Assignments.push(assignment);
                }
            });
            $.each($('input[class="form-check-input editapspccheckboxstudents"]:checked'), function () {
                var studentid = this.value;
                var student = students.find(x => x.Id == studentid);
                if (!course.Students.includes(student)) {
                    course.Students.push(student);
                }
            });

        }
    })

    $("#editform_apspc").hide("fast");
    $("#button_table_apspc").show("slow");
    refreshTableApspc();

}



$(document).ready(function () {
    $("form").hide();

    $('form').submit(function (e) {
        e.preventDefault();
    });

    //assignment
    $("#form_assignment").submit(function () {
        var assignment = new Assignment();
        var listDate = $("#SubDateTime").val().split("-");
        listDate.reverse();
        //var date = listDate[0] + "/" + listDate[1] + "/" + listDate[2];
        var lastassignment = assignments[assignments.length - 1];
        assignment.Id = lastassignment.Id + 1;
        assignment.Title = $("#TitleAssignment").val();
        assignment.Description = $("#Description").val();
        assignment.SubDateTime = listDate.join("/");
        assignment.OralMark = $("#OralMark").val();
        assignment.TotalMark = $("#TotalMark").val();

        assignments.push(assignment);
        refreshTableAssignments();
        $("#form_assignment").hide();
        $("#button_table_assignment").fadeIn("slow");

    });

    //student
    $("#form_student").submit(function () {
        var student = new Student();
        var listDate = $("#Dateofbirth").val().split("-");
        listDate.reverse();
        //var date = listDate[0] + "/" + listDate[1] + "/" + listDate[2];
        var laststudent = students[students.length - 1];
        student.Id = laststudent.Id + 1;
        student.Firstname = $("#FirstnameStudent").val();
        student.Lastname = $("#LastnameStudent").val();
        student.Dateofbirth = listDate.join("/");
        student.Tuitionfees = $("#Tuitionfees").val();

        students.push(student);
        refreshTableStudents();
        $("#form_student").hide();
        $("#button_table_student").fadeIn("slow");

    });


    //trainer
    $("#form_trainer").submit(function () {
        var trainer = new Trainer();
        var lasttrainer = trainers[trainers.length - 1];
        trainer.Id = lasttrainer.Id + 1;
        trainer.Firstname = $("#FirstnameTrainer").val();
        trainer.Lastname = $("#LastnameTrainer").val();
        trainer.Subject = $("#Subject").val();

        trainers.push(trainer);
        refreshTableTrainers();
        $("#form_trainer").hide();
        $("#button_table_trainer").fadeIn("slow");

    });

    //course
    $("#form_course").submit(function () {
        var course = new Course();
        var listDate1 = $("#StartDate").val().split("-");
        var listDate2 = $("#EndDate").val().split("-");
        listDate1.reverse();
        listDate2.reverse();
        var lastcourse = courses[courses.length - 1];
        course.Id = lastcourse.Id + 1;
        course.Title = $("#TitleCourse").val();
        course.Type = $("#Type").val();
        course.Stream = $("#Stream").val();
        course.Startdate = listDate1.join("/");
        course.Enddate = listDate2.join("/");

        courses.push(course);
        refreshTableCourses();
        $("#form_course").hide();
        $("#button_table_course").fadeIn("slow");

    });


    //tpc
    $("#form_tpc").submit(function () {
        var courseId = "";
        $.each($('option[class="tpc"]:selected'), function () {
            courseId = this.value;
        })
        courses.forEach(function (course) {
            if (course.Id == courseId) {
                course.Trainers = [];
                console.log(course.Trainers);
                $.each($('input[class="form-check-input tpccheckbox"]:checked'), function () {
                    var trainerId = this.value;
                    var trainer = trainers.find(x => x.Id == trainerId);
                    if (!course.Trainers.includes(trainer)) {
                        course.Trainers.push(trainer);
                    }
                })
            }
        })
        refreshTableTpc();
        $("#form_tpc").hide();
        $("#button_table_tpc").fadeIn("slow");
    });

    //spc
    $("#form_spc").submit(function () {
        var courseId = "";
        $.each($('option[class="spc"]:selected'), function () {
            courseId = this.value;
        })
        courses.forEach(function (course) {
            if (course.Id == courseId) {
                course.Students = [];
                $.each($('input[class="form-check-input spccheckbox"]:checked'), function () {
                    var studentId = this.value;
                    var student = students.find(x => x.Id == studentId);
                    if (!course.Students.includes(student)) {
                        course.Students.push(student);
                    }
                })
            }
        })
        refreshTableSpc();
        $("#form_spc").hide();
        $("#button_table_spc").fadeIn("slow");
    });

    //apc
    $("#form_apc").submit(function () {
        var courseId = "";
        $.each($('option[class="apc"]:selected'), function () {
            courseId = this.value;
        })
        courses.forEach(function (course) {
            if (course.Id == courseId) {
                course.Assignments = [];
                $.each($('input[class="form-check-input apccheckbox"]:checked'), function () {
                    var assignmentId = this.value;
                    var assignment = assignments.find(x => x.Id == assignmentId);
                    if (!course.Assignments.includes(assignment)) {
                        course.Assignments.push(assignment);
                    }
                })
            }
        })
        refreshTableApc();
        $("#form_apc").hide();
        $("#button_table_apc").fadeIn("slow");
    });


    //apspc
    $("#form_apspc").submit(function () {
        var courseId = "";
        $.each($('option[class="apspc"]:selected'), function () {
            courseId = this.value;
        })
        courses.forEach(function (course) {
            if (course.Id == courseId) {
                course.Assignments = [];
                course.Students = [];
                $.each($('input[class="form-check-input apspccheckbox"]:checked'), function () {
                    var assignmentId = this.value;
                    var assignment = assignments.find(x => x.Id == assignmentId);
                    if (!course.Assignments.includes(assignment)) {
                        course.Assignments.push(assignment);
                    }
                })
                course.Students = [];
                $.each($('input[class="form-check-input sapspccheckbox"]:checked'), function () {
                    var studentId = this.value;
                    var student = students.find(x => x.Id == studentId);
                    if (!course.Students.includes(student)) {
                        course.Students.push(student);
                    }
                })
            }
        })
        refreshTableApspc();
        $("#form_apspc").hide();
        $("#button_table_apspc").fadeIn("slow");
    });

});

refreshTableAssignments();
refreshTableStudents();
refreshTableTrainers();
refreshTableCourses();
refreshTableTpc();
refreshTableSpc();
refreshTableApc();
refreshTableApspc();