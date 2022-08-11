var person = {
  firstName: 'Patricia',
  lastName: 'Manalang',
  hobby: 'Watching TikToks'
};
console.log(person);
person.fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", person.fullName);

person.job = 'realtor';
console.log("The person's current job is:", person.job);

person.previousJob = 'college student';
console.log("The person's previous job is:", person.previousJob);

console.log('The complete person object:', person);
