module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e52ca5d2bf97335470430e5fa1ba9c4a'),
  },
});
