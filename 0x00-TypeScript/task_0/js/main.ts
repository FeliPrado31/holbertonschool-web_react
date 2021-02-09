// Studen interface

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create objects

const student1: Student = {
  firstName: "Holberton",
  lastName: "School",
  age: 0,
  location: "idk",
};

const student2: Student = {
  firstName: "School",
  lastName: "School",
  age: 0,
  location: "idk",
};

// Create two students, and create an array named studentsList containing the two variables
const studentsList: Student[] = [];
studentsList.push(student1);
studentsList.push(student2);

// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table

const body: HTMLElement = document.body;
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

table.innerHTML = `
  <thead>
    <tr>
      <th colspan="2">Students</th>
    </tr>
  </thead>`;

body.appendChild(table);
table.appendChild(tbody);

studentsList.forEach(({ firstName, location }: Student) => {
  const tr: HTMLTableRowElement = document.createElement("tr");
  const firstNameTable: HTMLTableDataCellElement = document.createElement("td");
  const locationTable: HTMLTableCellElement = document.createElement("td");

  firstNameTable.textContent = firstName;
  locationTable.textContent = location;

  tr.appendChild(firstNameTable);
  tr.appendChild(locationTable);

  tbody.appendChild(tr);
});
