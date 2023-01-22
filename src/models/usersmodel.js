const pool = require("../db/connectionDb").pool;
const bcrypt = require("bcryptjs");

const getUser = async (email, password) => {
  const consulta = "SELECT * FROM usuarios WHERE email = $1";
  const values = [email];
  const result = await pool.query(consulta, values);
  const rowCount = result.rowCount;
  console.log("result.rowCount", rowCount);

  if (!rowCount)
    throw {
      code: 404,
      message: "No se encontró ningún usuario con estas credenciales",
    };
  return result.rows;
};

const createUser = async (email, password, rol, lenguage) => {
  const passwordEncriptada = bcrypt.hashSync(password);
  const consulta =
    "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3 ,$4) RETURNING *";
  const values = [email, passwordEncriptada,rol, lenguage];
  const result = await pool.query(consulta, values);
  const rowCount = result.rowCount;

  if (!rowCount)
    throw {
      code: 404,
      message: "No se pudo crear el usuario",
    };
  return result.rows;
};

module.exports = { getUser, createUser };
