import tw,{styled} from 'twin.macro'

export const HeaderContainer=styled.div`
	${tw`
		flex
		justify-between
		py-4
		px-2
		fixed
		top-0
		w-full
		transition-all
		z-10
		h-8
		m-auto
		overflow-hidden
		`}
		${props=>props.dark?tw`bg-black`:'bg-transparent'}

		img{
			${tw`
				h-8
				
				`}
			
		}

`