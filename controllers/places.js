const router = require('express').Router();

// GET /places
router.get('/', (req,res) => {
    let places = [{
        name: 'Busters On 28th',
        city: 'Minneapolis',
        state: 'MN',
        cuisines: 'American, Craft beer',
        pic: '/images/craftBurger.jpeg'
      }, {
        name: 'Brewery Bhavana',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'Chinese, Craft beer',
        pic: '/images/dimSum.jpeg'
      }]
      ;
    res.render('places/index', { places })
})

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new');
});

// GET /places/:id


module.exports = router;