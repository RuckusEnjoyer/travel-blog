const router = require('express').Router();
const {User}= require('../../models');

router.post('/signup', async (req, res) => {
    try{
    const userNew = new User()
    userNew.username = req.body.username;
    userNew.email = req.body.email;
    userNew.password = req.body.password;
    
    const userData = await userNew.save()
    console.log("hello");
    req.session.save(() => {
        req.session.username = userData.id;
        req.session.logged_in = true;
        res.status(200).json(userData);
    });
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
})

module.exports = router;