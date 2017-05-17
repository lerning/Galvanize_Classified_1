'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');


router.get('/', (req, res) => {
    knex('classifieds')
      .select(['id','description', 'title', 'price', 'item_image'])
      .then((classifieds) => {
         res.send(classifieds)
      })
})

router.get('/:id', (req, res) => {
   let id  = req.params.id
   knex('classifieds')
      .where('id', id)
      .select(['id','description', 'title', 'price', 'item_image'])
      .first()
      .then((classifieds) => {
         res.send(classifieds)
      })
   })

module.exports = router;
