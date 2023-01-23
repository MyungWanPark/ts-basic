function Register(info) {
  console.log('registering..');
  // this.action = (info) => console.log(info);
}

const register1 = new Register('age');
const register2 = new Register('phone number');
Register.prototype.action = (info) => console.log(info);
console.log(register1);
console.log(register2);
console.clear();

function MappingTeacher(personId) {
  console.log('mapping teachers..');
}

MappingTeacher.prototype = Object.create(Register.prototype);
const mapped = new MappingTeacher(11);
console.log(mapped);
