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
      tamanoPorcion: z.number(),
      porcionPorEnvase: z.number(),
      energiaTotal: z.number(),
      calorias: z.number(),
      grasas: z.number(),
      grasasTrans: z.number(),
      grasasSaturadas: z.number(),
      azucar: z.number(),
      proteinas: z.number(),
      sodio: z.number(),
      colesterol:z.number(),
      carbohidratos:z.number(),
      fibraDietetica: z.number()
      
    }),
  }),
});

export const collections = { helados };
