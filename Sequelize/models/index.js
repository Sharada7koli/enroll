import express from 'express';
import { connection,sequelize } from './postgrsql.js';
import { userModel } from './user.js';
import { Sequelize } from 'sequelize';
import cors from 'cors';


const app = express();

const PORT = 3000;

connection();

//const userModel = userModel(Sequelize);
const User = userModel(sequelize)
app.use(express.json());
app.use(cors());

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/add-users', async (req, res) => {
  try {
    const { user, name } = req.body;
    const newUser = await User.create({ user, name });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/delete-users/:user', async (req, res) => {
  const userId = req.params.user;

  try {
    const deletedUser = await User.destroy({
      where: { user: userId },
    });

    if (deletedUser) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/update-user/:user', async (req, res) => {
  const userId = req.params.user;
  const { name } = req.body;

  try {
    const updatedUser = await User.update(
      { name: name },
      { where: { user: userId } }
    );

    if (updatedUser[0]) {
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/checkDuplicate/:user', async (req, res) => {
  const userId = req.params.user;

  try {
    const existingUser = await User.findOne({
      where: { user: userId },
    });

    if (existingUser) {
      res.status(200).json({ isDuplicate: true });
    } else {
      res.status(200).json({ isDuplicate: false });
    }
  } catch (error) {
    console.error('Error checking for duplicate user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/get-user-by-name/:name', async (req, res) => {
  const userName = req.params.name;

  try {
    const user = await User.findOne({
      where: { name: userName },
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    
    console.error('Error getting user by name:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});
