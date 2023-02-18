// The small Guava Computer Store keeps track of its employees and the sales their employees make. The data is exported by their system into JSON format. An example of each is below.

// Employee: {"id":1,"firstName":"John", "lastName":"Smith", "gender":"Male", "age":23, "position":"Manager"} 

// Sale: {"staffId":1, "item":"Wi-Fi Adapter", "price":40.00, "date":"01-09-2022"}  

// task to convert JSON string to object

console.log('\nTask to convert JSON string to object: \n')

let employee01 = JSON.parse('{"id":1,"firstName":"John", "lastName":"Smith", "gender":"Male", "age":23, "position":"Manager"}');

console.log(employee01);

let sale01 = JSON.parse('{"staffId":1, "item":"Wi-Fi Adapter", "price":40.00, "date":"01-09-2022"}');

console.log(sale01);

// Function task to format object into readable text

console.log('\nTask to format object into readable text: \n')

function listEmployee (employee) {
    console.log(`Employee details: \n First name:  ${employee.firstName} \n Last name: ${employee.lastName} \n Gender: ${employee.gender} \n Age: ${employee.age} Position: ${employee.position}`);
}

listEmployee(employee01);

function listSale (sale) {
    console.log(`Sale details: \n Staff ID: ${sale.staffId} \n Item: ${sale.item} \n Price: ${sale.price} \n Date: ${sale.date}`);
}

listSale(sale01);

// Constructor task - create a constructor to make it easier to create new employees

console.log('\nConstructor tasks - Create and use constructors to define new employees and sales records: \n')

function Employee (firstName, lastName, gender, age, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age; 
    this.position = position;
    this.listEmployeeDetails = function () {
        console.log(`Employee details: \n First name:  ${this.firstName} \n Last name: ${this.lastName} \n Gender: ${this.gender} \n Age: ${this.age} Position: ${this.position}`);
    }
};

// Constructor task - create a constructor to make it easier to record more sales

function Sale (staffId, item, price, date) {
    const d = new Date();
    let formattedDate = d.toDateString(date);
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = formattedDate;
    this.listSales = function () {
        console.log(`Sale details: \n Staff ID: ${this.StaffId} \n Item: ${this.item} \n Price: ${this.price} \n Date: ${this.date}`);
    }
}

// Use a constructor to add a new salesperson: Mary Sue, 32 years female

let employee2 = new Employee('Mary', 'Sue', 'female', 32, 'salesperson');

// Refactor the code to re-create employee1 using constructor

let employee1 = new Employee('John', 'Smith', 'Male', 23, 'Manager');

// Use a constructor to record a new sale for employee 1 who sold a WiFi adapter 2 days after 1st sale

let sale2 = new Sale (1, 'Wi-Fi Adapter', '$40.00', '03-09-2022');

// Refactor the code to re-create sale1 using constructor

let sale1 = new Sale (1, 'Wi-Fi Adapter', '$40.00', '01-09-2022');

// print results of constructor work 

employee1.listEmployeeDetails();
employee2.listEmployeeDetails();
sale1.listSales();
sale2.listSales();

// Array task 

console.log('\n Add employees and sales to arrays, then stringify the results: \n');

let employees = [employee1, employee2];
let sales = [sale1, sale2];

// Bonus task 2

console.log(JSON.stringify(employees));
console.log(JSON.stringify(sales));

// Bonus tasks: When creating a constructor for these objects, add the function for displaying employee and sale information as a method

// Bonus tasks: Using toString() on one of these custom objects does not produce useful output. Modify the objects, so they do have a useful toString method.

// Bonus tasks: JavaScript has built-in functions that can work with dates, called JavaScript Date Reference Links to an external site. (W3Schools, 2022). Use them to convert the date string in the sales object and get that date's day of the week.