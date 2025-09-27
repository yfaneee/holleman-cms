const { createStrapi } = require('@strapi/strapi');

async function fixITLPermissions() {
  const strapi = await createStrapi().load();
  
  try {
    console.log('🔧 Fixing ITL Hero permissions...');
    
    // Get the Public role
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { name: 'Public' },
    });
    
    if (!publicRole) {
      console.error('❌ Public role not found');
      return;
    }
    
    console.log(`✅ Found Public role: ${publicRole.id}`);
    
    // Get existing ITL permissions to see what's missing
    const existingPermissions = await strapi.query('plugin::users-permissions.permission').findMany({
      where: {
        role: publicRole.id,
        action: { $contains: 'itl-hero' }
      }
    });
    
    console.log('Existing ITL permissions:', existingPermissions.map(p => p.action));
    
    // Define what permissions should exist (same as other content types)
    const requiredActions = [
      'api::itl-hero.itl-hero.find',
      'api::itl-hero.itl-hero.findOne',
      'api::itl-hero.itl-hero.create', 
      'api::itl-hero.itl-hero.update',
      'api::itl-hero.itl-hero.delete'
    ];
    
    // Create missing permissions
    for (const action of requiredActions) {
      const exists = existingPermissions.find(p => p.action === action);
      if (!exists) {
        try {
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action: action,
              enabled: action.includes('find'), // Enable find actions, disable write actions
              policy: '',
              role: publicRole.id,
            },
          });
          console.log(`✅ Created permission: ${action}`);
        } catch (error) {
          console.error(`❌ Failed to create ${action}:`, error.message);
        }
      } else {
        console.log(`⏭️ Permission already exists: ${action}`);
      }
    }
    
    console.log('🎉 ITL Hero permissions fix complete!');
    
  } catch (error) {
    console.error('❌ Error fixing permissions:', error);
  }
  
  await strapi.destroy();
  process.exit(0);
}

fixITLPermissions();

