const button = document.querySelector('.register');

button.addEventListener('click', () => {
    fetch("http://172.30.179.248:10001/prod-api/api/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: "test",
            password: "123456",
            phonenumber: "1",
            sex: "0"
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); // Add error handling
})
