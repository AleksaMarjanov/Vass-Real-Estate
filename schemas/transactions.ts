import { defineType, defineField } from 'sanity';

export default defineType({
    name:'transactions',
    title:'Transactions',
    type: 'document',
    fields:[
        defineField({
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),
    ]
})