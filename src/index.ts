export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
    // ...
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Set permissions for ITL Hero and Project Cargo Hero endpoints
    try {
      const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
        where: { name: 'Public' },
      });

      if (publicRole) {
        // ITL Hero permissions
        await strapi.query('plugin::users-permissions.permission').updateMany({
          where: {
            role: publicRole.id,
            action: ['api::itl-hero.itl-hero.find', 'api::itl-hero.itl-hero.findOne'],
          },
          data: { enabled: true },
        });

        // Project Cargo Hero permissions  
        await strapi.query('plugin::users-permissions.permission').updateMany({
          where: {
            role: publicRole.id,
            action: ['api::project-cargo-hero.project-cargo-hero.find', 'api::project-cargo-hero.project-cargo-hero.findOne'],
          },
          data: { enabled: true },
        });

        console.log('✅ Permissions set for ITL Hero and Project Cargo Hero endpoints');
      }
    } catch (error) {
      console.error('❌ Error setting permissions:', error);
    }
  },
};