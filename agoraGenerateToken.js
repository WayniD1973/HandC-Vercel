const {
  RtcTokenBuilder,
  RtmTokenBuilder,
  RtcRole,
  RtmRole,
} = require("agora-access-token");
const appId = "b06802b73d3c479586deb42cb474016d";
const appCertificate = "d6ecd61721f648d28d173afe7416d353";
const channelName = "General";
const uid = 0;
const role = RtcRole.PUBLISHER;
const expirationTimeInSeconds = 999999999;
const currentTimestamp = Math.floor(Date.now() / 1000);
const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(
  appId,
  appCertificate,
  channelName,
  uid,
  role,
  privilegeExpiredTs
);
console.log("Token with integer number Uid: " + tokenA);
