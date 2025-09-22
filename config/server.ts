export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Force development mode settings
  url: env('PUBLIC_URL', `http://${env('HOST', '0.0.0.0')}:${env.int('PORT', 1337)}`),
});
