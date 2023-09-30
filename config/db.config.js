/*module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "postgres",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
*/
module.exports = {
  HOST: "dpg-ckb7j0fs0fgc73dl411g-a.frankfurt-postgres.render.com",
  USER: "user",
  PASSWORD: "ZsCVWFaJluHFVhC1spJUab7yzHpgKwqu",
  DB: "cortexer",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
/*
const { Pool } = require('pg');
const itemsPool = new Pool({
    connectionString: 'postgres://user:ZsCVWFaJluHFVhC1spJUab7yzHpgKwqu@dpg-ckb7j0fs0fgc73dl411g-a.frankfurt-postgres.render.com/cortexer',
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = itemsPool;*/