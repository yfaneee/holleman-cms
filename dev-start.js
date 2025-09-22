// Force Strapi to run in development mode
process.env.NODE_ENV = 'development';
process.env.STRAPI_DEV = 'true';

// Start Strapi
require('@strapi/strapi/lib/commands/develop');
