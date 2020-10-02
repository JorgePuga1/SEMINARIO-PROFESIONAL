const config = {
dbUrl: process.env.DN_URL || 'mongodb+srv://ups:ups2020@cluster0.momdj.gcp.mongodb.net/utups?retryWrites=true&w=majority',
port: process.envPORT || 5000,
host: process.envPORT || 'http://localhost',
publicRoute:process.env.PUBLIC_ROUTE || '/',
filesRoute: process.env.FILES_ROUTE || 'files',

}
module.exports = config
 