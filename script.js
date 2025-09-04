function handleSubmit(e) {
  e.preventDefault(); 
  const rollno = document.getElementById("roll").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const mobileno = document.getElementById("phone").value;
  const email = document.getElementById("pass").value;
  const course = document.getElementById("course").value;
  const city = document.getElementById("city").value;
  const address = document.getElementById("add").value;
  console.log(rollno, fname, lname, mobileno, email, course, city, address);
  
  const ans=document.getElementById("output");
  ans.innerText=`Your roll no ${rollno}, Your full name = ${fname} ${lname}, 
   Your mobile no ${mobileno}, your email = ${email}, your course = ${course},
   Your city = ${city}, your address = ${address}`;
}
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);