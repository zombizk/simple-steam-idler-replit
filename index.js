const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [1172470, 236390, 230410, 1203220, 1599340, 1222670, 1085660, 1049590, 552990, 444200, 1240440, 291550, 2357570, 1665460, 1607250, 1815780, 744900, 1721470, 532210, 1474700, 466240, 674020, 1713610, 444090, 389570, 504370, 2293600, 1352080, 747610, 1675900, 1088150, 2215910];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});


var username2 = process.env.username2;
var password2 = process.env.password2;
var shared_secret2 = process.env.shared2;

var games2 = [1172470, 236390, 230410, 1203220, 1599340, 1222670, 1085660, 1049590, 552990, 444200, 1240440, 291550, 2357570, 1665460, 1607250, 1815780, 744900, 1721470, 532210, 1474700, 466240, 674020, 1713610, 444090, 389570, 504370, 2293600, 1352080, 747610, 1675900, 1088150, 2215910];  // Enter here AppIDs of the needed games
var status2 = 1;  // 1 - online, 7 - invisible


user2 = new steamUser();
user2.logOn({"accountName": username2, "password": password2, "twoFactorCode": steamTotp.generateAuthCode(shared_secret2)});
user2.on('loggedOn', () => {
if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
user2.setPersona(status2);               
user2.gamesPlayed(games2);
});


var username3 = process.env.username3;
var password3 = process.env.password3;
var shared_secret3 = process.env.shared3;

var games3 = [1172470, 236390, 230410, 1203220, 1599340, 1222670, 1085660, 1049590, 552990, 444200, 1240440, 291550, 2357570, 1665460, 1607250, 1815780, 744900, 1721470, 532210, 1474700, 466240, 674020, 1713610, 444090, 389570, 504370, 2293600, 1352080, 747610, 1675900, 1088150, 2215910];  // Enter here AppIDs of the needed games
var status3 = 1;  // 1 - online, 7 - invisible


user3 = new steamUser();
user3.logOn({"accountName": username3, "password": password3, "twoFactorCode": steamTotp.generateAuthCode(shared_secret3)});
user3.on('loggedOn', () => {
if (user3.steamID != null) console.log(user3.steamID + ' - Successfully logged on');
user3.setPersona(status3);               
user3.gamesPlayed(games3);
});
