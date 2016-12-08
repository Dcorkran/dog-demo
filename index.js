const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.DATABASE_URL || 'postgres://localhost/dog-demo';
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});

app.get('/dogs',(req,res)=>{
  knex('dogs').then((dog)=>{
    res.json(dog);
  });
});

app.get('/dogs/:id',(req,res)=>{
  knex.select().from('dogs').where('id',req.params.id)
  .then((dog)=>{
    res.json(dog);
  });
});

app.post('/dogs', (req,res)=>{
  knex('dogs')
  .insert({name:req.body.name, age:req.body.age, breed:req.body.breed})
  .returning('id','name','age','breed')
  .then((dog)=>{
    res.json(dog);
  });
});

app.put('/dogs/:id',(req,res)=>{
  knex('dogs')
  .where('id',req.params.id)
  .update({
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed
  })
  .then((dog)=>{
    res.json(dog);
  });
});

app.delete('/dogs/:id', (req,res)=>{
  knex('dogs')
  .where('id',req.params.id)
  .del()
  .then((dog)=>{
    res.json(dog);
  });
});
