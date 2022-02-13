module.exports = ({ env }) => ({
  url: env("https://strapi-fun.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["fooBar1", "fooBar2"]),
  },
});
