import type { CollectionConfig } from 'payload';
import { slateEditor } from '@payloadcms/richtext-slate';

export const FinancialAid: CollectionConfig = {
  slug: 'financialAid',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'img',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'date',
      type: 'date',
    },
    {
      name: 'time',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
      defaultValue: [
        {
          children: [{ text: 'Here is some default content for this field' }],
        },
      ],
      required: true,
      editor: slateEditor({
        admin: {
          elements: [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'indent',
            'ol',
            'ul',
            'blockquote',
            'textAlign',
            'upload',
            'link'
          ],
          leaves: [
            'bold',       
            'italic',     
            'underline',   
            'strikethrough', 
          ],
          link: {
            fields: [
              {
                name: 'rel',
                label: 'Rel Attribute',
                type: 'select',
                hasMany: true,
                options: ['noopener', 'noreferrer', 'nofollow'],
              },
            ],
          },
          upload: {
            collections: {
              media: {
                fields: [
                ],
              },
            },
          },
        },
      }),
    },
  ],
};

export default FinancialAid;
