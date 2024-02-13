// module.exports = ({ env }) => ({
//   auth: {
//     // secret: env('ADMIN_JWT_SECRET'),
//     secret: env("0JK2WI3BtrCae9o+b4U8Fw=="),
//   },
//   apiToken: {
//     // salt: env('API_TOKEN_SALT'),
//     salt: env("PYHXMPv8hnHtxyO81hp5Nw=="),
//   },
//   transfer: {
//     token: {
//       // salt: env('TRANSFER_TOKEN_SALT'),
//       salt: env("xw7fmMR71jYoSjkZo4SCOw=="),
//     },
//   },
//   flags: {
//     nps: env.bool("FLAG_NPS", true),
//     promoteEE: env.bool("FLAG_PROMOTE_EE", true),
//   },
// });

const crypto = require('crypto');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', crypto.randomBytes(16).toString('base64')),
  },
});

