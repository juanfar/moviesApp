import { MovieCard } from "./moview-card.model";

export interface MovieListView {
  title: string;
  movies: MovieCard[];
}