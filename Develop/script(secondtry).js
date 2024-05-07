// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


addEmployeesBtn.addEventListener('click',function() {
//     const userFirstName = prompt('add First Name');
    addEmployee = true;
  while (addEmployee) {
        let firstName = prompt ("enter first name");
        let lastName = prompt ("enter last name");
        let salary = prompt ("enter salary", 0);
        let number = parseInt(salary);
        var employeeArray = {
          firstName: firstName,
          lastName: lastName,
          number: number,
    }}});

// TODO: Get user input to create and return an array of employee objects

 
// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
    const toatlSalary = employeesArray.reduce((acc, emplyee) => acc + employeesArray.salary, 0);
    const averageSalary = toatlSalary / employeesArray.length;
    const averge = employeesArray.length;
    // check to make sure the line below displays the average in the console log 
    console.log(`the average of salary is: - ${averge}`)
 
}
//TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
