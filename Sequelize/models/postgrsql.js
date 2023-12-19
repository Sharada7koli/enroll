import { Sequelize } from 'sequelize';
import { userModel } from './user.js';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'sequelizedemo',
});

export { sequelize };

export const connection = async () => {
  let User = null;

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    User = userModel(sequelize);
    await sequelize.sync();
    console.log('Table created successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
