const express = require("express");
const app = express();
const port = 8000;

// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: "$" + faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.database.mongodbObjectId()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.database.mongodbObjectId(),
        name: "$" + faker.company.name(),
        address: {
            street : faker.location.street(),
            city : faker.location.city(),
            state : faker.location.state(),
            zipCode : faker.location.zipCode(),
            country : faker.location.country(),
        }
    };
    return newFake;
};

const newUser = createUser();
const newCompany = createCompany();

app.get("/api/users/new", (req, res) => {
    res.json( {user: newUser} );
});
app.get("/api/companies/new", (req, res) => {
    res.send( newCompany );
});
app.get("/api/user/company", (req, res) => {
    res.json( [{user: newUser,company: newCompany}] );
});


/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
