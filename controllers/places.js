const router = require('express').Router();

//link to index.js places router code
router.get('/', (req,res) => {
    res.send('GET /places')
})

module.exports = router;