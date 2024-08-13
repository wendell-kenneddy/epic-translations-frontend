import { defineField, defineType } from "sanity";

export const songType = defineType({
  name: "song",
  title: "Song",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().error("A song must have a name."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "How the song name will appear in the URL.",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (rule) =>
        rule.required().error("A song must have a slug to generate a valid URL."),
    }),
    defineField({
      name: "index",
      title: "Index",
      description: "The order in which the song is defined within it's saga.",
      type: "number",
      validation: (rule) => rule.required().error("A song must be indexed."),
    }),
    defineField({
      name: "saga",
      title: "Saga",
      type: "reference",
      to: [{ type: "saga" }],
      validation: (rule) => rule.required().error("A song must be contained within a saga."),
    }),
    defineField({
      name: "lyrics",
      title: "Lyrics",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required().error("A song must contain lyrics.."),
    }),
  ],
});
