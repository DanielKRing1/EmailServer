// Currently only have one server machine, so
// Run this file for a simple way to run api/email/etc from one entry point
// In future, could split api/emai/etc processes onto separate servers

require('./email/server');
require('./api/server');
// oh didnt see this
// Require database server?
// ...
require('./api/databases/dynamodb');
