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
        // Define the actions we want to enable
        const actionsToEnable = [
          'api::itl-hero.itl-hero.find',
          'api::itl-hero.itl-hero.findOne', 
          'api::project-cargo-hero.project-cargo-hero.find',
          'api::project-cargo-hero.project-cargo-hero.findOne'
        ];

        // Enable each permission individually
        for (const action of actionsToEnable) {
          try {
            await strapi.query('plugin::users-permissions.permission').updateMany({
              where: {
                role: publicRole.id,
                action: action,
              },
              data: { enabled: true },
            });
            console.log(`✅ Enabled permission: ${action}`);
          } catch (permError) {
            console.log(`⚠️ Could not update permission ${action}, trying to create it...`);
            // If update fails, try to create the permission
            try {
              await strapi.query('plugin::users-permissions.permission').create({
                data: {
                  action: action,
                  enabled: true,
                  policy: '',
                  role: publicRole.id,
                },
              });
              console.log(`✅ Created permission: ${action}`);
            } catch (createError) {
              console.error(`❌ Failed to create permission ${action}:`, createError);
            }
          }
        }

        console.log('✅ Finished setting up permissions for ITL Hero and Project Cargo Hero');
      }
    } catch (error) {
      console.error('❌ Error in bootstrap permissions setup:', error);
    }
  },
};