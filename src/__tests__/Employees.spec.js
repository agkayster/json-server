import employees from '../db';

test('the employees data is correct', () => {
	expect(employees).toMatchSnapshot();
});

test('the employees data length is correct', () => {
	expect(employees).toHaveLength(3);
});

test('each employees first name is correct', () => {
	expect(employees.map((employee) => employee.first_name)).toEqual([
		'Sebastian',
		'Steve',
		'Ann',
	]);
});
test('each employees last name is correct', () => {
	expect(employees.map((employee) => employee.last_name)).toEqual([
		'Eschweiler',
		'Palmer',
		'Smith',
	]);
});

for (let i = 0; i < employees.length; i += 1) {
	test(`employees[${i}] should have properties(id, first_name, last_name, email)`, () => {
		expect(employees[i]).toHaveProperty('id');
		expect(employees[i]).toHaveProperty('first_name');
		expect(employees[i]).toHaveProperty('last_name');
		expect(employees[i]).toHaveProperty('email');
	});
}

test('employees returns Smith last', () => {
	const employee1 = employees[0];
	const employee2 = employees[1];
	const employee3 = employees[2];

	const employee = jest.fn((currentEmployee) => currentEmployee.last_name); // you can change the properties you are checking for based on the properties defined in the object//

	employee(employee1);
	employee(employee2);
	employee(employee3);

	expect(employee).toHaveNthReturnedWith(2, 'Palmer'); // you pick the particular return call out of the above three you want to focus on//
	expect(employee).toHaveLastReturnedWith('Smith');
});

test('employee data has Sebastian Eschweiler and matches an object', () => {
	const SebastianEschweiler = {
		id: 1,
		first_name: 'Sebastian',
		last_name: 'Eschweiler',
		email: 'sebastian@codingthesmartway.com',
	};

	expect(employees[0]).toMatchObject(SebastianEschweiler);
});
