const User = require('../models/User');

class UserRepository {
  async getAllUsers() {
    return await User.find();
  }

  async addUser(name, age, sex) {
    const newUser = new User({
      name: name,
      age: age,
      sex: sex
    });
    await newUser.save();
    return newUser;
  }
}

module.exports = UserRepository;