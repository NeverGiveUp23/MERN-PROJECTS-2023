const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');


// for POST Requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//  Classes

// USER CLASS
const createUser = () => {
  // creating an object of fake user
  const newFakeUser = [
  {
    fullName: faker.name.fullName(),
    email: faker.vehicle.vehicle(),
    phoneNumber: faker.phone.number()
  },
  {
    fullName: faker.name.fullName(),
    email: faker.vehicle.vehicle(),
    phoneNumber: faker.phone.number()
  },
  {
    fullName: faker.name.fullName(),
    email: faker.vehicle.vehicle(),
    phoneNumber: faker.phone.number()
  }

  ] ;
  return newFakeUser;
};
//  assigning the function to a variable


// COMPANY CLASS

const createCompany = () => {
  const newFakeCompany = [
    {
      companyName: faker.company.name(),
      companyPhrase: faker.company.catchPhraseDescriptor(),
      company: faker.company.bsAdjective()
    },
    {
      companyName: faker.company.name(),
      companyPhrase: faker.company.catchPhraseDescriptor(),
      company: faker.company.bsAdjective()
    },
    {
      companyName: faker.company.name(),
      companyPhrase: faker.company.catchPhraseDescriptor(),
      companyAbj: faker.company.bsAdjective()
    }

  ];
  return newFakeCompany;
};


//  ROUTES

// creating user

app.get("/api/users/new", (req, res) => {
  res.json( { user: createUser() } );
});

//  Creating a new company
app.get("/api/companies/new", ( req, res ) => {
  res.json( {  company : createCompany() } );
} );

// Creating new Company & User
app.get("/api/user/company", (req, res ) => {
  res.json({
    // creating an object for user and company
    // assigning key value pairs, value will pass in the functions 
    user: createUser(),
    company: createCompany()
  });
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);