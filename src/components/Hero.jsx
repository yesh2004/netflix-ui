import {HeroContainer,HeroTitle,HeroDescription,HeroButton} from './Hero.styles'

const Hero=({movie})=>{
	return(
		<HeroContainer background={movie?.backdrop_path}> 
			<HeroTitle>{movie?.name}</HeroTitle>
			<HeroDescription>{movie?.overview}</HeroDescription>
			<HeroButton>Play</HeroButton>
      		<HeroButton>My List</HeroButton>
		</HeroContainer>
		)
}
export default Hero