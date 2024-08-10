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
  ],
});
