import { defineType, defineField } from 'sanity';

export default defineType({
    name:'trustedBy',
    title:'TrustedBy',
    type: 'document',
    fields:[
        defineField({
            name:'mainImage',
            title:'Main Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),
    ]
})