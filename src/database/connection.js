const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    Storage: './database/database.sqlite'
});

async function testeDatabase(){
    try {
        await sequelize.authenticate();
        console.log('Banco conectado com sucesso');

    } catch (error) {
        console.log('Conexao falhou: ', error)
    }
}

testeDatabase().then();

module.exports = sequelize;