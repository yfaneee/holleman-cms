export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Ensure development mode works
  autoReload: env.bool('STRAPI_AUTO_RELOAD', env('NODE_ENV') === 'development'),
});
