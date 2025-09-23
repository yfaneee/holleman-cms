import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAgroContactSectionAgroContactSection
  extends Struct.SingleTypeSchema {
  collectionName: 'agro_contact_sections';
  info: {
    displayName: 'Agro-Contact-Section';
    pluralName: 'agro-contact-sections';
    singularName: 'agro-contact-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    highlightedText: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::agro-contact-section.agro-contact-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAgroContentSectionAgroContentSection
  extends Struct.SingleTypeSchema {
  collectionName: 'agro_content_sections';
  info: {
    displayName: 'Agro-Content-Section';
    pluralName: 'agro-content-sections';
    singularName: 'agro-content-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bulletPoints: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    highlightedTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::agro-content-section.agro-content-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    displayName: 'Article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Author: Schema.Attribute.String;
    Concluzie: Schema.Attribute.String;
    Content: Schema.Attribute.RichText;
    ContentSection: Schema.Attribute.Component<
      'content-section.content-section',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.Date;
    excerpt: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Seo: Schema.Attribute.Component<'metadata.seo', true>;
    slug: Schema.Attribute.String & Schema.Attribute.Unique;
    Subtitle: Schema.Attribute.String;
    tags: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogArticleSectionBlogArticleSection
  extends Struct.SingleTypeSchema {
  collectionName: 'blog_article_sections';
  info: {
    displayName: 'BlogArticleSection';
    pluralName: 'blog-article-sections';
    singularName: 'blog-article-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-article-section.blog-article-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogStayConnectedBlogStayConnected
  extends Struct.SingleTypeSchema {
  collectionName: 'blog_stay_connecteds';
  info: {
    displayName: 'BlogStayConnected';
    pluralName: 'blog-stay-connecteds';
    singularName: 'blog-stay-connected';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    facebookUrl: Schema.Attribute.String;
    highlightedTitle: Schema.Attribute.String;
    instagramUrl: Schema.Attribute.String;
    linkedinUrl: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-stay-connected.blog-stay-connected'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    tiktokUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCariereBeneficiiCariereBeneficii
  extends Struct.SingleTypeSchema {
  collectionName: 'cariere_beneficiis';
  info: {
    displayName: 'Cariere-Beneficii';
    pluralName: 'cariere-beneficiis';
    singularName: 'cariere-beneficii';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    highlightedTitle1: Schema.Attribute.String;
    highlightedTitle2: Schema.Attribute.String;
    highlightedTitle3: Schema.Attribute.String;
    highlightedTitle4: Schema.Attribute.String;
    highlightedTitle5: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cariere-beneficii.cariere-beneficii'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
    title3: Schema.Attribute.String;
    title4: Schema.Attribute.String;
    title5: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCariereDeCeHollemanCariereDeCeHolleman
  extends Struct.SingleTypeSchema {
  collectionName: 'cariere_de_ce_hollemen';
  info: {
    displayName: 'Cariere-DeCe-Holleman';
    pluralName: 'cariere-de-ce-hollemen';
    singularName: 'cariere-de-ce-holleman';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    careerQuoteText: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cariere-de-ce-holleman.cariere-de-ce-holleman'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCineSuntemDespreNoiCineSuntemDespreNoi
  extends Struct.SingleTypeSchema {
  collectionName: 'cine_suntem_despre_nois';
  info: {
    displayName: 'DespreNoiCineSuntem';
    pluralName: 'cine-suntem-despre-nois';
    singularName: 'cine-suntem-despre-noi';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.RichText;
    footerText: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cine-suntem-despre-noi.cine-suntem-despre-noi'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Value1Description: Schema.Attribute.String;
    Value1Title: Schema.Attribute.String;
    Value2Description: Schema.Attribute.String;
    Value2Title: Schema.Attribute.String;
    Value3Description: Schema.Attribute.String;
    Value3Title: Schema.Attribute.String;
    Value4Description: Schema.Attribute.String;
    Value4Title: Schema.Attribute.String;
    Value5Description: Schema.Attribute.String;
    Value5Title: Schema.Attribute.String;
  };
}

export interface ApiContactAcoperireContactAcoperire
  extends Struct.SingleTypeSchema {
  collectionName: 'contact_acoperires';
  info: {
    displayName: 'ContactAcoperire';
    pluralName: 'contact-acoperires';
    singularName: 'contact-acoperire';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bulletPoints: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    intro: Schema.Attribute.RichText;
    introSubtitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-acoperire.contact-acoperire'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactLocationContactLocation
  extends Struct.SingleTypeSchema {
  collectionName: 'contact_locations';
  info: {
    displayName: 'ContactLocation1';
    pluralName: 'contact-locations';
    singularName: 'contact-location';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-location.contact-location'
    > &
      Schema.Attribute.Private;
    mobile: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    services: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactLocation2ContactLocation2
  extends Struct.SingleTypeSchema {
  collectionName: 'contact_location2s';
  info: {
    displayName: 'ContactLocation2';
    pluralName: 'contact-location2s';
    singularName: 'contact-location2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-location2.contact-location2'
    > &
      Schema.Attribute.Private;
    mobile: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    services: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactNetworkInfoContactNetworkInfo
  extends Struct.SingleTypeSchema {
  collectionName: 'contact_network_infos';
  info: {
    displayName: 'Contact-network-info';
    pluralName: 'contact-network-infos';
    singularName: 'contact-network-info';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    highlightedText: Schema.Attribute.String;
    intro: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-network-info.contact-network-info'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactNetworkOfficeContactNetworkOffice
  extends Struct.CollectionTypeSchema {
  collectionName: 'contact_network_offices';
  info: {
    displayName: 'Contact-network-office';
    pluralName: 'contact-network-offices';
    singularName: 'contact-network-office';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-network-office.contact-network-office'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDespreNoiCeNeDefinesteDespreNoiCeNeDefineste
  extends Struct.SingleTypeSchema {
  collectionName: 'despre_noi_ce_ne_definestes';
  info: {
    displayName: 'DespreNoiCeNeDefineste';
    pluralName: 'despre-noi-ce-ne-definestes';
    singularName: 'despre-noi-ce-ne-defineste';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Leadership1Description: Schema.Attribute.RichText;
    Leadership1Title: Schema.Attribute.String;
    Leadership2Description: Schema.Attribute.RichText;
    Leadership2Title: Schema.Attribute.String;
    Leadership3Description: Schema.Attribute.RichText;
    Leadership3Title: Schema.Attribute.String;
    Leadership4Description: Schema.Attribute.RichText;
    Leadership4Title: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::despre-noi-ce-ne-defineste.despre-noi-ce-ne-defineste'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDespreNoiCertificariDespreNoiCertificari
  extends Struct.SingleTypeSchema {
  collectionName: 'despre_noi_certificaris';
  info: {
    displayName: 'DespreNoiCertificari';
    pluralName: 'despre-noi-certificaris';
    singularName: 'despre-noi-certificari';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Certification1: Schema.Attribute.String;
    Certification2: Schema.Attribute.String;
    Certification3: Schema.Attribute.String;
    Certification4: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    intro: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::despre-noi-certificari.despre-noi-certificari'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDespreNoiConducereaDespreNoiConducerea
  extends Struct.SingleTypeSchema {
  collectionName: 'despre_noi_conducereas';
  info: {
    displayName: 'DespreNoiConducerea';
    pluralName: 'despre-noi-conducereas';
    singularName: 'despre-noi-conducerea';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description1: Schema.Attribute.RichText;
    description2: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::despre-noi-conducerea.despre-noi-conducerea'
    > &
      Schema.Attribute.Private;
    Member1Avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Member1Name: Schema.Attribute.String;
    Member1Position: Schema.Attribute.String;
    Member2Avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Member2Name: Schema.Attribute.String;
    Member2Position: Schema.Attribute.String;
    Member3Avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Member3Name: Schema.Attribute.String;
    Member3Position: Schema.Attribute.String;
    Member4Avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Member4Name: Schema.Attribute.String;
    Member4Position: Schema.Attribute.String;
    Member5Avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Member5Name: Schema.Attribute.String;
    Member5Position: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDespreNoiPageDespreNoiPage extends Struct.SingleTypeSchema {
  collectionName: 'despre_noi_pages';
  info: {
    displayName: 'DespreNoiHero';
    pluralName: 'despre-noi-pages';
    singularName: 'despre-noi-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::despre-noi-page.despre-noi-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDespreNoiResponsabilitateDespreNoiResponsabilitate
  extends Struct.SingleTypeSchema {
  collectionName: 'despre_noi_responsabilitates';
  info: {
    displayName: 'DespreNoiResponsabilitate';
    pluralName: 'despre-noi-responsabilitates';
    singularName: 'despre-noi-responsabilitate';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Initiative1Description: Schema.Attribute.RichText;
    Initiative1Title: Schema.Attribute.String;
    Initiative2Description: Schema.Attribute.RichText;
    Initiative2Title: Schema.Attribute.String;
    Initiative3Description: Schema.Attribute.RichText;
    Initiative3Title: Schema.Attribute.String;
    Initiative4Description: Schema.Attribute.RichText;
    Initiative4Title: Schema.Attribute.String;
    Intro: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::despre-noi-responsabilitate.despre-noi-responsabilitate'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHeavyLiftContentSectionHeavyLiftContentSection
  extends Struct.SingleTypeSchema {
  collectionName: 'heavy_lift_content_sections';
  info: {
    displayName: 'HeavyLiftContentSection';
    pluralName: 'heavy-lift-content-sections';
    singularName: 'heavy-lift-content-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::heavy-lift-content-section.heavy-lift-content-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Section1Content: Schema.Attribute.RichText;
    Section1Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Section1Title: Schema.Attribute.String;
    Section2Content: Schema.Attribute.RichText;
    Section2Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Section2Title: Schema.Attribute.String;
    Section3Content: Schema.Attribute.RichText;
    Section3Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Section3Title: Schema.Attribute.String;
    Section4Content: Schema.Attribute.RichText;
    Section4Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Section4Title: Schema.Attribute.String;
    Section5Content: Schema.Attribute.RichText;
    Section5Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Section5Title: Schema.Attribute.String;
    Section6Content: Schema.Attribute.RichText;
    Section6Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Section6Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHeavyLiftServiceCardHeavyLiftServiceCard
  extends Struct.SingleTypeSchema {
  collectionName: 'heavy_lift_service_cards';
  info: {
    displayName: 'HeavyLiftServiceCard';
    pluralName: 'heavy-lift-service-cards';
    singularName: 'heavy-lift-service-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::heavy-lift-service-card.heavy-lift-service-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SectionTitle: Schema.Attribute.String;
    Service1Title: Schema.Attribute.String;
    Service2Title: Schema.Attribute.String;
    Service3Title: Schema.Attribute.String;
    Service4Title: Schema.Attribute.String;
    Service5Title: Schema.Attribute.String;
    Service6Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeProjectCargoSectionHomeProjectCargoSection
  extends Struct.SingleTypeSchema {
  collectionName: 'home_project_cargo_sections';
  info: {
    displayName: 'HomeProjectCargoSection';
    pluralName: 'home-project-cargo-sections';
    singularName: 'home-project-cargo-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-project-cargo-section.home-project-cargo-section'
    > &
      Schema.Attribute.Private;
    mainDescription: Schema.Attribute.RichText;
    publishedAt: Schema.Attribute.DateTime;
    secondaryDescription: Schema.Attribute.RichText;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIstoricEvolutieIstoricEvolutie
  extends Struct.SingleTypeSchema {
  collectionName: 'istoric_evoluties';
  info: {
    displayName: 'DespreNoiIstoricEvolutie';
    pluralName: 'istoric-evoluties';
    singularName: 'istoric-evolutie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::istoric-evolutie.istoric-evolutie'
    > &
      Schema.Attribute.Private;
    Paragraph1: Schema.Attribute.RichText;
    Paragraph2: Schema.Attribute.RichText;
    publishedAt: Schema.Attribute.DateTime;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiItlReteaItlRetea extends Struct.SingleTypeSchema {
  collectionName: 'itl_reteas';
  info: {
    displayName: 'ITL-retea';
    pluralName: 'itl-reteas';
    singularName: 'itl-retea';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    featuresList: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::itl-retea.itl-retea'
    > &
      Schema.Attribute.Private;
    mapImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiItlTransportLogisticsSectionItlTransportLogisticsSection
  extends Struct.SingleTypeSchema {
  collectionName: 'itl_transport_logistics_sections';
  info: {
    displayName: 'ITL-transport-logistics-section';
    pluralName: 'itl-transport-logistics-sections';
    singularName: 'itl-transport-logistics-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bulletPoints: Schema.Attribute.RichText;
    catchphrase: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    highlightedText: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::itl-transport-logistics-section.itl-transport-logistics-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMisiuneDespreNoiMisiuneDespreNoi
  extends Struct.SingleTypeSchema {
  collectionName: 'misiune_despre_nois';
  info: {
    displayName: 'DespreNoiMisiune';
    pluralName: 'misiune-despre-nois';
    singularName: 'misiune-despre-noi';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    footerText: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::misiune-despre-noi.misiune-despre-noi'
    > &
      Schema.Attribute.Private;
    paragraph1: Schema.Attribute.RichText;
    paragraph2: Schema.Attribute.RichText;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProiecteInspirationSectionProiecteInspirationSection
  extends Struct.SingleTypeSchema {
  collectionName: 'proiecte_inspiration_sections';
  info: {
    displayName: 'Proiecte-inspiration-section';
    pluralName: 'proiecte-inspiration-sections';
    singularName: 'proiecte-inspiration-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::proiecte-inspiration-section.proiecte-inspiration-section'
    > &
      Schema.Attribute.Private;
    paragraphs: Schema.Attribute.RichText;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProiectePortfolioSectionProiectePortfolioSection
  extends Struct.SingleTypeSchema {
  collectionName: 'proiecte_portfolio_sections';
  info: {
    displayName: 'Proiecte-portfolio-section';
    pluralName: 'proiecte-portfolio-sections';
    singularName: 'proiecte-portfolio-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bulletPoints: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::proiecte-portfolio-section.proiecte-portfolio-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProjectCargoWhyChooseProjectCargoWhyChoose
  extends Struct.SingleTypeSchema {
  collectionName: 'project_cargo_why_chooses';
  info: {
    displayName: 'ProjectCargoWhyChoose';
    pluralName: 'project-cargo-why-chooses';
    singularName: 'project-cargo-why-choose';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::project-cargo-why-choose.project-cargo-why-choose'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Reason1: Schema.Attribute.String;
    Reason2: Schema.Attribute.String;
    Reason3: Schema.Attribute.String;
    Reason4: Schema.Attribute.String;
    Reason5: Schema.Attribute.String;
    Reason6: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProjectProject extends Struct.CollectionTypeSchema {
  collectionName: 'projects';
  info: {
    displayName: 'Project';
    pluralName: 'projects';
    singularName: 'project';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.RichText;
    division: Schema.Attribute.Enumeration<
      ['heavy-lift', 'project-cargo', 'itl', 'agro']
    >;
    Gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::project.project'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'metadata.seo', false>;
    slug: Schema.Attribute.String & Schema.Attribute.Unique;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::agro-contact-section.agro-contact-section': ApiAgroContactSectionAgroContactSection;
      'api::agro-content-section.agro-content-section': ApiAgroContentSectionAgroContentSection;
      'api::article.article': ApiArticleArticle;
      'api::blog-article-section.blog-article-section': ApiBlogArticleSectionBlogArticleSection;
      'api::blog-stay-connected.blog-stay-connected': ApiBlogStayConnectedBlogStayConnected;
      'api::cariere-beneficii.cariere-beneficii': ApiCariereBeneficiiCariereBeneficii;
      'api::cariere-de-ce-holleman.cariere-de-ce-holleman': ApiCariereDeCeHollemanCariereDeCeHolleman;
      'api::cine-suntem-despre-noi.cine-suntem-despre-noi': ApiCineSuntemDespreNoiCineSuntemDespreNoi;
      'api::contact-acoperire.contact-acoperire': ApiContactAcoperireContactAcoperire;
      'api::contact-location.contact-location': ApiContactLocationContactLocation;
      'api::contact-location2.contact-location2': ApiContactLocation2ContactLocation2;
      'api::contact-network-info.contact-network-info': ApiContactNetworkInfoContactNetworkInfo;
      'api::contact-network-office.contact-network-office': ApiContactNetworkOfficeContactNetworkOffice;
      'api::despre-noi-ce-ne-defineste.despre-noi-ce-ne-defineste': ApiDespreNoiCeNeDefinesteDespreNoiCeNeDefineste;
      'api::despre-noi-certificari.despre-noi-certificari': ApiDespreNoiCertificariDespreNoiCertificari;
      'api::despre-noi-conducerea.despre-noi-conducerea': ApiDespreNoiConducereaDespreNoiConducerea;
      'api::despre-noi-page.despre-noi-page': ApiDespreNoiPageDespreNoiPage;
      'api::despre-noi-responsabilitate.despre-noi-responsabilitate': ApiDespreNoiResponsabilitateDespreNoiResponsabilitate;
      'api::heavy-lift-content-section.heavy-lift-content-section': ApiHeavyLiftContentSectionHeavyLiftContentSection;
      'api::heavy-lift-service-card.heavy-lift-service-card': ApiHeavyLiftServiceCardHeavyLiftServiceCard;
      'api::agro-hero.agro-hero': ApiAgroHeroAgroHero;
      'api::blog-hero.blog-hero': ApiBlogHeroBlogHero;
      'api::cariere-hero.cariere-hero': ApiCariereHeroCariereHero;
      'api::contact-hero.contact-hero': ApiContactHeroContactHero;
      'api::heavy-lift-hero.heavy-lift-hero': ApiHeavyLiftHeroHeavyLiftHero;
      'api::home-hero.home-hero': ApiHomeHeroHomeHero;
      'api::cariere-pozitii.cariere-pozitii': ApiCarierePozitiiCarierePozitii;
      'api::itl-hero.itl-hero': ApiItlHeroItlHero;
      'api::proiecte-hero.proiecte-hero': ApiProiecteHeroProiecteHero;
      'api::project-cargo-hero.project-cargo-hero': ApiProjectCargoHeroProjectCargoHero;
      'api::home-project-cargo-section.home-project-cargo-section': ApiHomeProjectCargoSectionHomeProjectCargoSection;
      'api::istoric-evolutie.istoric-evolutie': ApiIstoricEvolutieIstoricEvolutie;
      'api::itl-retea.itl-retea': ApiItlReteaItlRetea;
      'api::itl-transport-logistics-section.itl-transport-logistics-section': ApiItlTransportLogisticsSectionItlTransportLogisticsSection;
      'api::misiune-despre-noi.misiune-despre-noi': ApiMisiuneDespreNoiMisiuneDespreNoi;
      'api::proiecte-inspiration-section.proiecte-inspiration-section': ApiProiecteInspirationSectionProiecteInspirationSection;
      'api::proiecte-portfolio-section.proiecte-portfolio-section': ApiProiectePortfolioSectionProiectePortfolioSection;
      'api::project-cargo-why-choose.project-cargo-why-choose': ApiProjectCargoWhyChooseProjectCargoWhyChoose;
      'api::project.project': ApiProjectProject;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}

export interface ApiCariereHeroCariereHero extends Struct.SingleTypeSchema {
  collectionName: 'cariere_heroes';
  info: {
    displayName: 'Cariere Hero';
    singularName: 'cariere-hero';
    pluralName: 'cariere-heroes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleText: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
  };
}

export interface ApiHeavyLiftHeroHeavyLiftHero extends Struct.SingleTypeSchema {
  collectionName: 'heavy_lift_heroes';
  info: {
    displayName: 'Heavy Lift Hero';
    singularName: 'heavy-lift-hero';
    pluralName: 'heavy-lift-heroes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleText: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
  };
}

export interface ApiHomeHeroHomeHero extends Struct.SingleTypeSchema {
  collectionName: 'home_heroes';
  info: {
    displayName: 'Home Hero';
    singularName: 'home-hero';
    pluralName: 'home-heroes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleText: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
  };
}

export interface ApiCarierePozitiiCarierePozitii extends Struct.SingleTypeSchema {
  collectionName: 'cariere_pozitii';
  info: {
    displayName: 'Cariere Pozitii';
    singularName: 'cariere-pozitii';
    pluralName: 'cariere-pozitii';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    position1Title: Schema.Attribute.String & Schema.Attribute.Required;
    position1Description: Schema.Attribute.Text & Schema.Attribute.Required;
    position2Title: Schema.Attribute.String & Schema.Attribute.Required;
    position2Description: Schema.Attribute.Text & Schema.Attribute.Required;
    position3Title: Schema.Attribute.String & Schema.Attribute.Required;
    position3Description: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
  };
}

export interface ApiAgroHeroAgroHero extends Struct.SingleTypeSchema {
  collectionName: 'agro_heroes';
  info: {
    displayName: 'Agro Hero';
    singularName: 'agro-hero';
    pluralName: 'agro-heroes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleText: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
  };
}

export interface ApiBlogHeroBlogHero extends Struct.SingleTypeSchema {
  collectionName: 'blog_heroes';
  info: {
    displayName: 'Blog Hero';
    singularName: 'blog-hero';
    pluralName: 'blog-heroes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleText: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
  };
}

export interface ApiContactHeroContactHero extends Struct.SingleTypeSchema {
  collectionName: 'contact_heroes';
  info: {
    displayName: 'Contact Hero';
    singularName: 'contact-hero';
    pluralName: 'contact-heroes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleText: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
  };
}

export interface ApiItlHeroItlHero extends Struct.SingleTypeSchema {
  collectionName: 'itl_heroes';
  info: {
    displayName: 'ITL Hero';
    singularName: 'itl-hero';
    pluralName: 'itl-heroes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleText: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
  };
}

export interface ApiProiecteHeroProiecteHero extends Struct.SingleTypeSchema {
  collectionName: 'proiecte_heroes';
  info: {
    displayName: 'Proiecte Hero';
    singularName: 'proiecte-hero';
    pluralName: 'proiecte-heroes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleText: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
  };
}

export interface ApiProjectCargoHeroProjectCargoHero extends Struct.SingleTypeSchema {
  collectionName: 'project_cargo_heroes';
  info: {
    displayName: 'Project Cargo Hero';
    singularName: 'project-cargo-hero';
    pluralName: 'project-cargo-heroes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleText: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
  };
}

