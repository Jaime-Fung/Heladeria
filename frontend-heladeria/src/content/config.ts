import { defineCollection, z } from "astro:content";

const helados = defineCollection({
  schema: z.object({
    nombre: z.string(),
    categoria: z.string(),
    precio: z.number(),
    disponible: z.boolean(),
    img: z.string(),
    opinionProfesional: z.string(),
    datosNutricionales: z.object({
      calorias: z.string(),
      grasas: z.string(),
      azucar: z.string(),
      proteinas: z.string(),
      sodio: z.string().optional(),
    }),
  }),
});

export const collections = { helados }
