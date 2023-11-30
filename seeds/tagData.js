const {Tag} = require('../models');
const tagData = [
    {
        name: 'Tag 1',
        description: 'Description for tag 1'
    },
    {
        name: 'Tag 2',
        description: 'Description for tag 2'
    },
    {
        name: 'Tag 3',
        description: 'Description for tag 3'
    },
    
]
const seedTag = () => Tag.bulkCreate(tagData);
module.exports = seedTag;