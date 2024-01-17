// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
        })
    })
    .then(resp => resp.json())
    .then(data => { 
        const userDataDiv = document.createElement('div');
        userDataDiv.innerHTML = data.id;
        document.body.appendChild(userDataDiv)
    })

    .catch(error => {
        const errorMsg = document.createElement('div');
        errorMsg.innerHTML = error.message;
        document.body.appendChild(errorMsg);
    })
}
