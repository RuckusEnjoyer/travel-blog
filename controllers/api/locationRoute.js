const router = require("express").Router();
const { Location } = require("../../models");
const withAuth = require("../../utils/auth");


//GET ALL LOCATIONS FROM LOCATIONS DATABASE
router.get('/', async (req, res) => {
    try{
        const locations = await Location.findAll()
        res.json(locations);
    } catch (err) {
        res.status(500).json(err);
    }
})

//ADD A LOCATION TO LOCATIONS DATABASE
router.post('/', withAuth, async (req, res) => {
    try{
       const newLoc = Location.create({
        name: req.body.location_name
       })
    res.status(200).json(newLoc)
    } catch (err) {
        res.status(500).json(err);
    }
})

// //GETTING ONE ID
// router.post('/:id',)


module.exports = router;