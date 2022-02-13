module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '72c7207eafe9448be462007ba4e2cd0a'),
  },
});
