import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

import { initUserModel, User } from './user.model';

const sequelize = new Sequelize(process.env.DB_URL!, {
  dialect: 'postgres',
  logging: false,
});

initUserModel(sequelize);

export { sequelize, User };