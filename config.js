
var config = {};
config.account = {};


// 0 = Basic Logs | 1 = Medium Logs | 2 = Show All Logs
config.verbosityLevel = 1;


config.userAgent = 'flamebot';


config.feederServer = "ws://104.236.100.252:8081"; // Local to host bot

config.serverPort = 8081; //Port For Break Bot Run

config.client_uuid = "5d29"; //View uuid in extension

// Local for proxy
config.proxies = "proxy.txt";
config.botsPerIp = 3;
config.onboardingTimer = 0;

// Maximum number of bots to load
config.maxBots = 100;

config.useRandomSkinName = false; 
config.useStaticName = "FlameBots-Rel"; 


// spec_mode = FOLLOW MOUSE ON SPECTATE
// blind = BOT FARM
config.botMode = "spec_mode";


config.minimumMassBeforeFeed = 0;
config.enableSaveMoveTo = false;


module.exports = config;

