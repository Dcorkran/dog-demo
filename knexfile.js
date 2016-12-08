module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/dog-demo'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
