const router = require('express').Router();
const db = require('../models');

// GET /places
router.get('/', (req, res) => {
  db.Place.find()
      .then((places) => {
          res.render('places/index', { places })
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new');
});

// GET /places/:id
router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

// PUT Route
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// DELETE /places/:id
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router;