const sequelize = require('../config/connection');
const seedBlog = require('./blogData');
const seedComment = require('./commentData');
// const seedUser = require('./userData');
const destination = require('./destinationData');
const tag = require('./tagData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await seedUser();

  await destination();

  await seedBlog();

  await seedComment();
  
  await tag();

  process.exit(0);
};

seedAll();
