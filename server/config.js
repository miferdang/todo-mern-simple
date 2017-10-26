const serverConfig = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017',
  port: process.env.PORT || 3000
};

export default serverConfig;
