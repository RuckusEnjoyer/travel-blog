const router = require('express').Router();
const {User}= require('../../models');

router.post('signup', async (req, res) => {
    try{
    
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;