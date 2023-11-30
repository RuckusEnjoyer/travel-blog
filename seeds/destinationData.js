const {Destination} = require('../models');

const destinationData = [
    {
        destination_name: 'Destination 1',
    },
    {
        destination_name: 'Destination 2',
    },
    {
        destination_name: 'Destination 3',
    },

]
const seedDestination = () => Destination.bulkCreate(destinationData);
module.exports = seedDestination;