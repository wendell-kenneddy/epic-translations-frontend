import { defineField, defineType } from "sanity";

export const sagaType = defineType({
  name: "saga",
  title: "Saga",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().error("A saga must have a name."),
    }),
    defineField({
      name: "index",
      title: "Index",
      description: "The order in which the saga is defined within Epic.",
      type: "number",
      validation: (rule) => rule.required().error("A saga must be indexed."),
    }),
  ],
});
