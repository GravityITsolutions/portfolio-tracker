// Server configuration data

module.exports = {
    'baseUri' : '/user-management/api',
    'database': 'localhost:27017/pt-user',
    // Security
    'jwt' : {
        'tokenHeaderName' : 'x-access-token',
    	'secret' : 'MySuperSecretKey',
        'issuer': 'b2mcomputing',
        'timeout': 28800,  // 8 hours - 8*60*60
        'audience': 'PortfolioTracker',
        'subject' : 'noreply@b2mcomputing.com',
        'saltRounds' : 10,
    }
};