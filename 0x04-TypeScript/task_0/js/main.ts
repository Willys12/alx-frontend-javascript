interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: 'Willys',
    lastName: 'Morgan',
    age: 21,
    location: 'Nigeria'
};
const student2: Student = {
    firstName: 'Mary',
    lastName: 'Jane',
    age: 23,
    location: 'Kenya'
};
const studentsList: Student[] = [student1, student2];

// Render table
document.addEventListener('DOMContentLoaded', () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    const firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';
    const locationHeader = document.createElement('th');
    locationHeader.textContent = 'Location';
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    tbody.appendChild(headerRow);
    
    // Create data rows
    studentsList.forEach(student => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
});