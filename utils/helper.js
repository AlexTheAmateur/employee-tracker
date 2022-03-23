const cTable = require("console.table");
const inquirer = require("inquirer");
const db = require("../db/connections");

const menuQuestion = [
  {
    type: "list",
    name: "menu",
    message: "Weclome to Employee Tracker! What would you like to do?",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
      "exit",
    ],
  },
];

const startQuestion = () => {
  inquirer.prompt(menuQuestion).then((menuAnswer) => {
    if (menuAnswer.menu === "view all departments") {
      viewDepartments();
    }
    if (menuAnswer.menu === "view all roles") {
      viewRole();
    }
    if (menuAnswer.menu === "view all employees") {
      viewEmployee();
    }
    // if (menuAnswer.role === "add a department") {
    // }
    // if (menuAnswer.role === "add a role") {
    // }
    // if (menuAnswer.role === "add an employee") {
    // }
    // if (menuAnswer.role === "update an employee role") {
    // }
    if (menuAnswer.menu === "exit") {
    }
  });
};

function viewDepartments() {
  return db
    .promise()
    .query("SELECT * FROM department")
    .then(([rows]) => {
      console.table(rows);
    })
    .then(() => startQuestion());
}

function viewEmployee() {
  return db
    .promise()
    .query("SELECT * FROM employee")
    .then(([rows]) => {
      console.table(rows);
    })
    .then(() => startQuestion());
}

function viewRole() {
  return db
    .promise()
    .query("SELECT * FROM role")
    .then(([rows]) => {
      console.table(rows);
    })
    .then(() => startQuestion());
}

module.exports = {
  startQuestion,
};
