import { defineCollection, z } from "astro:content";

const helados = defineCollection({
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    categoria: z.string(),
    precio: z.number(),
    thumbnail: z.string(),
    img:z.string(),
    opinionProfesional: z.string(),
    InformacionNutricional: z.object({
      tamanoPorcion: z.string(),
      porcionPorEnvase: z.number(),
      energiaTotal: z.string(),
      calorias: z.string(),
      grasas: z.string(),
      azucar: z.string(),
      proteinas: z.string(),
      sodio: z.string().optional(),
      colesterol:z.string(),
      carbohidratos:z.string(),
      
    }),
  }),
});

export const collections = { helados };
