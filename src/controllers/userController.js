const { createUser, getUser } = require('../models/usersModel')

const userRegiter = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;
    const newUser = await createUser(email, password, rol, lenguage);
    res.status(201).json(newUser);

  } catch (e) {
    showError(res, e);
  }
}

const getProfiles = async (req, res) => {
  try {
    const email = req.user["email"];
    const resp = await getUser(email);
    res.json(resp);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los datos" });
  }
};

module.exports = { userRegiter, getProfiles };
