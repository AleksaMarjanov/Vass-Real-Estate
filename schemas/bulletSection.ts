import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'bulletSection',
    title: 'BulletSection',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "description",
        title: "description",
        type: "string",
      }),
    ],
  })
  