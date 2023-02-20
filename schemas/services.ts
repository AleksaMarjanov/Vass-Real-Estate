import { defineType, defineField } from "sanity";

export default defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
          }),
          defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
    ]
})