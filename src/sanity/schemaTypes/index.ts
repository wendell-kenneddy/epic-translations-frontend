import { type SchemaTypeDefinition } from "sanity";
import { sagaType } from "./sagaType";
import { songType } from "./songType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sagaType, songType],
};
