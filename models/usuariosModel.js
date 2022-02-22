var pool = require("./bd");
var md5 = require("md5");

async function getUserByUserNameAndPassword(user, password) {
  try {
    var query =
      "select * from usuarios where usuario = ? and password = ? limit 1";
    var rows = await pool.query(query, [user, md5(password)]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
}

async function getNovedadesById(id) {
  var query = "select * from novedades where id = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function modificarNovedadById(obj, id) {
  try {
    var query = "update novedades set ? where id=?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserByUserNameAndPassword,
  getNovedadesById,
  modificarNovedadById,
};
