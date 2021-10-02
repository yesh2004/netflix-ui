import {MovieContainer,MovieTitle,MovieRow,MoviePoster} from './Movie.styles'

const Movie=({title,movies})=>{
	return(
		<MovieContainer>
			<MovieTitle>{title}</MovieTitle>
			<MovieRow>
				{movies.map(movie=>(
					<MoviePoster
					key={movie.id}
					src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
      				alt={movie.name}
					/>
					))}
			</MovieRow>
		</MovieContainer>

		)
}
export default Movie