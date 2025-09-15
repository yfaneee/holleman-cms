import type { Schema, Struct } from '@strapi/strapi';

export interface ContentSectionContentSection extends Struct.ComponentSchema {
  collectionName: 'components_content_section_content_sections';
  info: {
    displayName: 'ContentSection';
    icon: 'message';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface MetadataSeo extends Struct.ComponentSchema {
  collectionName: 'components_metadata_seo_s';
  info: {
    displayName: 'seo ';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-section.content-section': ContentSectionContentSection;
      'metadata.seo': MetadataSeo;
    }
  }
}
