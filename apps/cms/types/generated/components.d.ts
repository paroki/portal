import type { Struct, Schema } from '@strapi/strapi';

export interface BlockSlider extends Struct.ComponentSchema {
  collectionName: 'components_block_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface BlockSeo extends Struct.ComponentSchema {
  collectionName: 'components_block_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImageUrl: Schema.Attribute.String;
  };
}

export interface BlockRichText extends Struct.ComponentSchema {
  collectionName: 'components_block_rich_text_md';
  info: {
    displayName: 'Rich Text (Markdown)';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface BlockImage extends Struct.ComponentSchema {
  collectionName: 'components_block_image';
  info: {
    displayName: 'Image';
    icon: 'file-video';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.slider': BlockSlider;
      'block.seo': BlockSeo;
      'block.rich-text': BlockRichText;
      'block.image': BlockImage;
    }
  }
}
