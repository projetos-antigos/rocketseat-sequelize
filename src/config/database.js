module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username:'postgres',
    password:'rsc140506',
    database:'sequelizedb',
    define:{
        //Cria dos campos na tabela, created_at e updated_at
        //Que armazena a data da criação e ultima alteração da tabela
        timestamps: true,
        //Coloca os nomes da tabela em snake Case - ex.: user_name        
        undsecored: true
    }
}