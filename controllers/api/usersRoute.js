const router = require('express').Router();
const {User}= require('../../models');

router.post('/signup',  async (req, res) => {
    try{
    const userNew = new User()
    userNew.username = req.body.username;
    userNew.email = req.body.email;
    userNew.password = req.body.password;
    
    const userData = await userNew.save()

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

router.post('/login', async (req, res) => {
    try{
        console.log("hello")
        const userData = await User.findOne({where: {username: req.body.username}});
        if(!userData){
            res.status(400).json({message: "Incorrect email or password, please try again"});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({message: "Incorrect email or password, please try again"});
            return;
        }
        req.session.save(() => {
            req.session.username = userData.id;
            req.session.logged_in = true;
            res.json({user: userData, message: "You are now logged in!"});
        });
        ;
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;