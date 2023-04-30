const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

// Create 2 functions: createUser, createCompany that return an object with the properties listed above
const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName()
    };
};

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: faker.address.streetAddress(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
};

// Create an api route "/api/users/new" that returns a new user
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// Create an api route "/api/companies/new" that returns a new company
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// Create an api route "/api/user/company" that returns both a new user and a new company
app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));