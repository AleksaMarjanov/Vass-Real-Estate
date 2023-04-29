import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pageInfo',
    title: 'PageInfo',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
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
            name: 'description_one',
            title: 'Description One',
            type: 'string',
        }),
        defineField({
            name: 'description_two',
            title: 'Description Two',
            type: 'string',
        }),

        defineField({
            name: 'description_three',
            title: 'Description Three',
            type: 'string',
        }),
        defineField({
            name: "phoneNumber",
            title: "PhoneNumber",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "address",
            title: "Address",
            type: "string",
        }),
        defineField({
            name: "socials",
            title: "Socials",
            type: "array",
            of: [{ type: "reference", to: { type: "social" } }],
        })
    ],
})

