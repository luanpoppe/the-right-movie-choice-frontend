import z from "zod";

export const SingleMovieReccomendationSchema = z.object({
  title: z.string().nonempty(),
  director: z.string().nonempty(),
  actors: z.array(z.string()),
  releaseYear: z.coerce.number(),
  streamingPlatform: z.string(),
  imdbRating: z.coerce.number(),
  description: z.string(),
  durationInMinutes: z.coerce.number(),
});

export type SingleMovieReccomendationEntity = z.infer<
  typeof SingleMovieReccomendationSchema
>;

export const MultipleMoviesRecommendationsSchema = z.array(
  SingleMovieReccomendationSchema
);

export type MovieRecommendationEntity = z.infer<
  typeof MultipleMoviesRecommendationsSchema
>;
