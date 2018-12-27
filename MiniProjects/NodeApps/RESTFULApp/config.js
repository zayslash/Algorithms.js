/*
Name: Zanif Sandy
create and export configuration vaiables

*/

var environments = {};

//staging Object
environments.staging = {
  'port' : 3000,
  'envName' : 'staging'
};

//production environment object
environments.production = {
  'port' : 5000,
  'envName' : 'production'
};

var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;


module.exports = environmentToExport;
