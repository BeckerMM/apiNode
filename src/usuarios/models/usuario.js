const {  DataTypes, Model } = require('sequelize');
const connection = require('../../database/connection')

class User extends Model {}

User.init({
 id:{
    type : DataTypes.STRING,
    allowNull:false,
    primaryKey: true
 },
 name:{
    type :DataTypes.STRING,
    allowNull: false
 },
 password:{
    type: DataTypes.STRING,
    allowNull: false
 },
 email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
 }
},{
    sequelize:connection,
    modelName: 'users'
});

User.sync()
.then(() => {
    console.log("Usuário sincronizado")
}).catch((e)=>{
    console.log("Erro: ", e)
})

module.exports = User;