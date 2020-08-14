import * as titlesAPI from "./titleService";

const employees = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    firstName: "Michael",
    lastName: "Scott",
    title: { _id: "5b21ca3eeb7f6fbccd471818", name: "Regional Manager" },
    dailyRentalRate: 85000,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    firstName: "Jim",
    lastName: "Halpert",
    title: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Assistant Regional Manager",
    },
    dailyRentalRate: 50000,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    firstName: "Andy",
    lastName: "Bernard",
    title: { _id: "5b21ca3eeb7f6fbccd471820", name: "Regional Sales Director" },
    dailyRentalRate: 60000,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    firstName: "Angela",
    lastName: "Martin",
    title: { _id: "5b21ca3eeb7f6fbccd471814", name: "Senior Accountant" },
    dailyRentalRate: 65000,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    firstName: "Dwight",
    lastName: "Schrute",
    title: {
      _id: "5b21ca3eeb7f6fbccd471814",
      name: "Assistant to Regional Manager",
    },
    dailyRentalRate: 55000,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    firstName: "Pam",
    lastName: "Beesly",
    title: { _id: "5b21ca3eeb7f6fbccd471814", name: "Receptionist" },
    dailyRentalRate: 35000,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    firstName: "Darryl",
    lastName: "Philbin",
    title: { _id: "5b21ca3eeb7f6fbccd471820", name: "Warehouse Forman" },
    dailyRentalRate: 60000,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    firstName: "Kelly",
    lastName: "Kapoor",
    title: { _id: "5b21ca3eeb7f6fbccd471820", name: "Customer Service" },
    dailyRentalRate: 40000,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    firstName: "Meredith",
    lastName: "Palmer",
    title: { _id: "5b21ca3eeb7f6fbccd471818", name: "Customer Service" },
    dailyRentalRate: 40000,
  },
];

export function getEmployees() {
  return employees;
}

export function getEmployee(id) {
  return employees.find((emp) => emp._id === id);
}

// export function saveEmployee(employee) {
//   let employeeInDb = employees.find((emp) => emp._id === employee._id) || {};
//   employeeInDb.name = employee.name;
//   employeeInDb.title = titlesAPI.titles.find((t) => t._id === employee.titleId);
//   employeeInDb.lastName = employee.lastName;
//   employeeInDb.dailyRentalRate = employee.dailyRentalRate;

//   if (!employeeInDb._id) {
//     employeeInDb._id = Date.now();
//     employees.push(employeeInDb);
//   }

//   return employeeInDb;
// }

export function deleteEmployee(id) {
  let employeeInDb = employees.find((emp) => emp._id === id);
  employees.splice(employees.indexOf(employeeInDb), 1);
  return employeeInDb;
}
