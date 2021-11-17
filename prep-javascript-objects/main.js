var person = {
  firstName: 'Paul',
  lastName: 'Hong',
  hobby: 'playing basketball'
};

var firstName = person.firstName;
console.log('firstName:', firstName);
var lastName = person.lastName;
console.log('lastName:', lastName);
var hobby = person.hobby;
console.log('hobby:', hobby);

var fullName = person.firstName + ' ' + person.lastName;
console.log('This person\'s name is:', fullName);

person.job = 'student';
console.log('the person\'s job is', person.job);

person.previousJob = 'CSM';
console.log('the person\'s previous job is', person.previousJob);

console.log('The complete person object:', person);
