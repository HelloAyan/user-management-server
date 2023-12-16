const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
    },
    {
        "id": 2,
        "name": "Alice Johnson",
        "email": "alice@example.com"
    },
    {
        "id": 3,
        "name": "Bob Smith",
        "email": "bob@example.com"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "email": "emily@example.com"
    },
    {
        "id": 5,
        "name": "Michael Brown",
        "email": "michael@example.com"
    },
    {
        "id": 6,
        "name": "Olivia Wilson",
        "email": "olivia@example.com"
    },
    {
        "id": 7,
        "name": "William Martinez",
        "email": "william@example.com"
    },
    {
        "id": 8,
        "name": "Sophia Anderson",
        "email": "sophia@example.com"
    },
    {
        "id": 9,
        "name": "James Taylor",
        "email": "james@example.com"
    },
    {
        "id": 10,
        "name": "Ava Thomas",
        "email": "ava@example.com"
    }
]


app.get('/', (req, res) => {
    res.send('User management system is running...');
})

app.get('/user', (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`Server is running on port  ${port}`);
});