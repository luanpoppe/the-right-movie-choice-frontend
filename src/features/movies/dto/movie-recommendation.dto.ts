import z from "zod";
import { SingleMovieReccomendationSchema } from "../entities/movie-recommendation.entity";

export const MovieRecommendationResponseDTOSchema = z.object({
  movies: z.array(SingleMovieReccomendationSchema),
  response: z.string(),
});

export type MovieRecommendationResponseDTO = z.infer<
  typeof MovieRecommendationResponseDTOSchema
>;
