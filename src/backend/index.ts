import { sequelize } from './models';

await sequelize.sync({ alter: true }); 