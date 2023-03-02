import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'faqs',
    title: 'FAQs',
    type: 'document',
    fields: [
        defineField({
        name: 'question',
        title: 'Question',
        type: 'string',
      }),
    
      defineField({
        name: 'answer',
        title: 'Answer',
        type: 'string',
      }),
    ],
  });