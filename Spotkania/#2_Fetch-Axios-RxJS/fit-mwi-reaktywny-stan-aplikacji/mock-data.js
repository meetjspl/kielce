const faker = require('faker');

module.exports = () => ({
  users: [...Array(15)].map((el, idx) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
      id: idx + 1,
      firstName: firstName,
      lastName: lastName,
      email: faker.internet.email(firstName, lastName)
    };
  })
});
