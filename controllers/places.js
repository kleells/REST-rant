const router = require('express').Router();

//GET /places
router.get('/', (req,res) => {
    let places = [{
        name: 'Busters On 28th',
        city: 'Minneapolis',
        state: 'MN',
        cuisines: 'American, Craft beer',
        pic: '/images/craftBurger.jpeg'
      }, {
        name: 'Brewery Bhavana',
        city: 'PRaleigh',
        state: 'NC',
        cuisines: 'Chinese, Craft beer',
        pic: '/images/dimSum.jpeg'
      }]
      ;
    res.render('places/index', { places })
})

module.exports = router;