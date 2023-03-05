/* Create a script that puts the collection of employees and sales into objects, either by using inbuilt functions or creating the objects from scratch. If using the latter method, you can also use your object constructor from last week to help with this, and make sure to put the employees and sales into an array. */

let employeesJson = require('./module3_files/Workshop_JSON_Employees');
let salesJson = require('./module3_files/Workshop_JSON_Sales');

console.log('Printing to console the employee and sales JSON objects: ', employeesJson, salesJson);

/* Create a function to traverse all the employees and sales and show information for each. You can reuse the function that displays the formatted information for each from the last workshop. */

console.log('Printing to console the details of each employee: ');

function listEmployees (employee) {
    console.log(`Employee details: \n Id: ${employee.id} \n First name:  ${employee.firstName} \n Last name: ${employee.lastName} \n Gender: ${employee.gender} \n Age: ${employee.age} \n Position: ${employee.position}`);
};

for (let i=0; i < employeesJson.length; i++) {
    //console.log('each employee object as a string ' + JSON.stringify(employeesJson[i]));
    listEmployees(employeesJson[i])
};

console.log('Printing to console the details of each sale: ');

function listSale (sale) {
    console.log(`Sale details: \n Staff ID: ${sale.staffId} \n Item: ${sale.item} \n Price: ${sale.price} \n Date: ${sale.date}`);
};

for (let i=0; i < salesJson.length; i++) {
    listSale(salesJson[i]);
};

/* Create a function that can return the data of one employee or sales objects, identifying them by the employee's ID. */

function getDetailsForEmployee(id) {
    for (let i=0; i < employeesJson.length; i++) {
        //console.log(employeesJson[i].id);
        if (id == employeesJson[i].id) {
            listEmployees(employeesJson[i]);
        }
    };    
}

getDetailsForEmployee(2);

console.log("Printing out an example of getting an employee's sales records using Id number '3', a staff member who has made multiple sales: ");

function getSalesForEmployee(id) {
    for (let i=0; i < salesJson.length; i++) {
        if (id == salesJson[i].staffId) {
            listSale(salesJson[i]);
        }
    };
}

getSalesForEmployee(3); 

/* Create a function to find employees and/or sales with a certain property—for example, all salespeople or sales over 10 dollars. */

// find all sales over $10, and lookup employee details by name for the sale

function listSalesOverAmount(amount) {
    for (let i=0; i < salesJson.length; i++) {
        if (salesJson[i].price >= amount) {
            listSale(salesJson[i]);
            console.log('Sale made by ');
            getDetailsForEmployee(salesJson[i].staffId);
        }
    };
};

listSalesOverAmount(10);

// Bonus tasks

/* Instead of copying the contents of the text files into your JavaScript program, read them directly and parse them into the required objects.
 Solution: converted project to use npm to store/fetch downloaded json files */

 /* Create a new object that allows you to combine an employee with sales records and then add the sales to the employees for all employees.
Once you have done so, create a function to show formatted information on an employee and all the sales they have made, if any. */

console.log('Printing to console, the results of bonus task to create new object for employees with their sales information');

// how to add property to object
// separate function to get all sales for an employee? 
// run that function against a loop that looks up all employees? 

let employeeAndSalesData = [];

let salesForEmployee = []; 









