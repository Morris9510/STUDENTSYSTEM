let Students = JSON.parse(localStorage.getItem("Students")) || [];

function Student(
  email,
  password,
  firstName,
  lastName,
  age,
  grade101,
  grade102,
  grade103
) {
  this.email = email;
  this.password = password;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.grade = {
    grade101,
    grade102,
    grade103,
  };
}

function register() {
  const inputEmail = document.getElementById("txtEmail").value;
  const inputPassword = document.getElementById("txtPassword").value;
  const inputFirstName = document.getElementById("txtFirstName").value;
  const inputLastName = document.getElementById("txtLastName").value;
  const inputAge = document.getElementById("txtAge").value;
  const inputGrade101 = Number(document.getElementById("txt101").value);
  const inputGrade102 = Number(document.getElementById("txt102").value);
  const inputGrade103 = Number(document.getElementById("txt103").value);

  const newStudent = new Student(
    inputEmail,
    inputPassword,
    inputFirstName,
    inputLastName,
    inputAge,
    inputGrade101,
    inputGrade102,
    inputGrade103
  );

  Students.push(newStudent);
  localStorage.setItem("Students", JSON.stringify(Students));

  console.log(newStudent);

  let averageGrade = (inputGrade101 + inputGrade102 + inputGrade103) / 3;
  console.log(averageGrade);
}
