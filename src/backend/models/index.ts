import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

import { initUserModel, User } from './user.model';
import { initClienteModel } from './cliente.model';
import { initProdutoModel } from './produto.model';
import { initVendaModel } from './venda.model';
import { initVendaProdutoModel } from './vendaProduto.model';

const sequelize = new Sequelize(process.env.DB_URL!, {
  dialect: 'postgres',
  logging: false,
});

initUserModel(sequelize);
initClienteModel(sequelize); 
initProdutoModel(sequelize);   
initVendaModel(sequelize);
initVendaProdutoModel(sequelize);
export { sequelize, User };