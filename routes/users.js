const express = require('express');
const router = express.Router();
const sql = require('mssql');

var config = {
  server: 'hc-sysdev\\qa',
  database: 'EQM',
  user: 'qat',
  password: 'qapass1'
};

//// register a user using POST method
//// server link   /api/users
//// access: public
router.get('/', (req, res) => {
  //res.json({ message: 'test asshole' });
  console.log(req.query.username);
  try {
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function(conn) {
      var request = new sql.Request(conn);
      request.input('inUsername', sql.VarChar(30), req.query.username);
      request
        .execute('sp_getLoginFromUserAccount_React')
        .then(function(recordset) {
          //console.dir(recordset);
          res.json(recordset.recordset);
          conn.close();
        })
        .catch(function(err) {
          console.log(err);
          conn.close();
        });
    });
    //res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
