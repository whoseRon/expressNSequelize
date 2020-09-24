const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

//Get gig list
router.get('/', (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch((err) => console.error("There's an error: ", err))
);

// Add a gig
router.get('/add', (req, res) => {
  const data = {
    title: 'Looking for a React developer',
    technologies: 'React, Javascript, HTML, css',
    budget: '3000',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Facilis at et, voluptate eligendi voluptatibus ullam? Voluptatibus explicabo
    nesciunt necessitatibus esse veritatis. Excepturi eaque, deleniti harum commodi`,
    contact_email: `user1@gmail.com`,
  };

  let { title, technologies, budget, description, contact_email } = data;

  // Insert
  Gig.create({ title, technologies, budget, description, contact_email })
    .then((gig) => res.redirect('/gigs'))
    .catch((err) => console.error("There's an error in create: ", err));
});
module.exports = router;
