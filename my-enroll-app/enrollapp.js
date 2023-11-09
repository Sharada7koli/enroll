const express = require('express');
const app = express();
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'enrolldb',
  password: 'root',
  port: 5432,
});

const corsOptions = {
    origin: 'http://localhost:4200'
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your application.' });
});

pool.connect();
app.get('/api/enroll', (req, res) => {
  pool.query('SELECT * FROM enroll', (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching data from the database' ,error});
    } else {
      res.json(result.rows);
    }
  });
});

app.post('/api/enroll',(req,res)=>{
    const { username, email, phone, topic, timepreference} = req.body;
    pool.query('INSERT INTO enroll (username, email, phone, topic, timepreference) VALUES ($1, $2, $3, $4, $5)',
    [username, email, phone, topic, timepreference],
    (error, result) => {
      console.log('node result-',result)
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ message: 'Error inserting data into the database' });
      } else {
        res.status(201).json({ message: 'Data inserted successfully' });
      }
    }
    );
  });

  app.delete('/api/enroll/:email', (req, res) => {
    const enrollmentId = req.params.email;
  console.log(enrollmentId);
    pool.query('DELETE FROM enroll WHERE email = $1', [enrollmentId], (error, result) => {
      if (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Error deleting data from the database',error:error.message });
      } else {
        if (result.rowCount === 0) {
          res.status(404).json({ message: 'No records found for deletion' });
        } else {
          res.status(200).json({ message: 'Enrollment deleted successfully' });
        }
      }
    });
  });
  
  app.put('/api/enroll/:email', (req, res) => {
    const enrollmentId = req.params.email;
    const { username, email, phone, topic, timepreference } = req.body;
  
    pool.query(
      'UPDATE enroll SET username = $1, email = $2, phone = $3, topic = $4, timepreference = $5 WHERE email = $6',
      [username, email, phone, topic, timepreference, enrollmentId],
      (error, result) => {
        if (error) {
          console.error('Error updating data:', error);
          res.status(500).json({ message: 'Error updating data in the database', error: error.message });
        } else {
          if (result.rowCount === 0) {
            res.status(404).json({ message: 'No records found for updating' });
          } else {
            res.status(200).json({ message: 'Enrollment updated successfully' });
          }
        }
      }
    );
  });
  



const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});