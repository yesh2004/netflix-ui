import tw,{styled} from 'twin.macro'

export const MovieContainer=styled.div`
	${tw`
		my-8
		`}

`
export const MovieTitle=styled.h2`
	${tw`
		text-2xl
		font-bold
		uppercase
		mx-8
		`}

`
export const MovieRow=styled.div`
	${tw`
		flex
		overflow-x-auto
		mt-4
		p-4

		`}
	&::-webkit-scrollbar {
    display: none;
  }

`

export const MoviePoster=styled.img`
	${tw`
		m-2
		w-40
		`
	}
	transition: all 0.2s;
	&:hover {
    transform: scale(1.09);
  }

`