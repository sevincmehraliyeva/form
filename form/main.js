const nameInput =document.getElementById("exampleInputName")
const surnameInput =document.getElementById("exampleInputSurname")
const ageInput =document.getElementById("exampleInputAge")
const studentIdInput =document.getElementById("exampleInputStudent")
const submit =document.getElementById("myForm")

submit.addEventListener("submit", function (event){
    event.preventDefault();
    fetch("https://655c30f2ab37729791aa0509.mockapi.io/studends", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name:nameInput.value,
                surname: surnameInput.value,
                age: ageInput.value,
                studentId: studentIdInput.value,
            })

        })
        .then((response)=>response.json())
        .then(data=>{
            console.log(
                data
            );
        })
       
    })
