import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: 'description-one',
            title: 'Description One',
            type: 'string',
        }),
        defineField({
            name: 'description-two',
            title: 'Description Two',
            type: 'string',
        }),

        defineField({
            name: 'description-three',
            title: 'Description Three',
            type: 'string',
        }),
        defineField({
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),

    ],
});
