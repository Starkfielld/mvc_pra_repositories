const UserRepository = require('../repositories/userRepository');

const userRepository = new UserRepository();

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userRepository.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar Usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar Usuários' });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name, age, sex } = req.body;
    const newUser = await userRepository.addUser(name, age, sex);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error ao adicionar usuário:', error);
    res.status(500).json({ error: 'Error ao adicionar usuário' });
  }
};
