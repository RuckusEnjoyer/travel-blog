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
       const newLoc = await Location.create({
        name: req.body.location_name.toLowerCase(),
       
       })
    res.status(200).json(newLoc)
    } catch (err) {
        res.status(500).json(err);
    }
})

// //GETTING ONE ID
// router.post('/:id',)


// Route to search for locations
router.get('/api/locations', async (req, res) => {
    try {
      const { search } = req.query;
      console.log(search);
  
      const location = await Location.findOne({
        where: {
          name: search
        }
      });
  
      if (location) {
        // Get the ID of the found location
        const locationId = location.id;
        console.log(locationId);
  
        // Redirect the user to the location page with the ID in the URL
        res.redirect(`/locations/${locationId}`);
      } else {
        res.status(404).json({ message: 'No matching locations found.' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  



module.exports = router;