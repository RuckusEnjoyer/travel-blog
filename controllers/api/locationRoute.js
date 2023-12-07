const router = require("express").Router();
const { Location } = require("../../models");
const withAuth = require("../../utils/auth");


//GET ALL LOCATIONS FROM LOCATIONS DATABASE
router.get('/', async (req, res) => {

    try{
        const locations = await Location.findAll()
        console.log("line 11")
        res.json(locations);
    } catch (err) {
        res.status(500).json(err);
    }
})

//ADD A LOCATION TO LOCATIONS DATABASE
router.post('/', withAuth, async (req, res) => {
  try {
    // Check if the location already exists
    const existingLoc = await Location.findOne({
      where: {
        name: req.body.location_name
      }
    });

    // If the location already exists, return an error
    if (existingLoc) {
      return res.status(400).json({ error: 'Location already exists' });
    }

    // Create a new location
    const newLoc = await Location.create({
      name: req.body.location_name
    });

    res.status(200).json(newLoc);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Route to search for locations
router.get('/search', async (req, res) => {
    try {
      const { search } = req.query;
      
  
      const location = await Location.findOne({
        where: {
          name: search.toLowerCase()
        }
      });
  
      if (location) {
        // Get the ID of the found location
        const locationId = location.id;

        // Redirect the user to the location page with the ID in the URL
        res.json(location);
      } else {
        res.status(404).json({ message: 'No matching locations found.' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  



module.exports = router;