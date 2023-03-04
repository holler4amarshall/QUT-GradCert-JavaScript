/* Create a script that puts the collection of employees and sales into objects, either by using inbuilt functions or creating the objects from scratch. If using the latter method, you can also use your object constructor from last week to help with this, and make sure to put the employees and sales into an array. */

const employees = JSON.parse(
{
    "id":1,
    "firstName":"John",
    "lastName":"Smith",
    "gender":"Male",
    "age":23,
    "position":"Manager"
},
{
    "id":2,
    "firstName":"Mary",
    "lastName":"Sue",
    "gender":"Female",
    "age":32,
    "position":"Salesperson"
},
{
    "id":3,
    "firstName":"Fred",
    "lastName":"Jones",
    "gender":"Non-Binary",
    "age":54,
    "position":"Salesperson"
},
{
    "id":4,
    "firstName":"Jane",
    "lastName":"Doe",
    "gender":"Female",
    "age":41,
    "position":"Accountant"
},
{
    "id":5,
    "firstName":"Joe",
    "lastName":"Bloggs",
    "gender":"Male",
    "age":65,
    "position":"IT Administrator"
});

console.log(employees);