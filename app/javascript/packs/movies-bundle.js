window.ReactOnRails = window.ReactOnRails || require('react-on-rails').default;

import MovieList from '../bundles/Movies/components/MovieList';
import Movie from '../bundles/Movies/components/Movie';
import MovieForm from '../bundles/Movies/components/MovieForm';

ReactOnRails.register({
    MovieList,
    Movie,
    MovieForm
});
