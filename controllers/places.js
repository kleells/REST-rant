const router = require('express').Router();

//GET /places
router.get('/', (req,res) => {
    let places = [{
        name: 'Busters On 28th',
        city: 'Minneapolis',
        state: 'MN',
        cuisines: 'American, Craft beer',
        pic: 'https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyJTIwYmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
      }, {
        name: 'Brewery Bhavana',
        city: 'PRaleigh',
        state: 'NC',
        cuisines: 'Chinese, Craft beer',
        pic: 'https://thumbs.dreamstime.com/b/dim-sum-bamboo-steamed-bowl-anf-glass-beer-wooden-table-side-view-172560574.jpg'
      }]
      ;
    res.render('places/index', { places })
})

module.exports = router;