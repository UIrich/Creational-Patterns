const UserFactory = require('./userFactory');

const user1 = UserFactory.createUser('admin', 'Leonardo');
const user2 = UserFactory.createUser('guest', 'Maria');

console.log(user1);
console.log(user2);