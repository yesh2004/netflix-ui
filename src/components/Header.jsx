import {useState,useEffect} from 'react'
import {HeaderContainer} from './Header.styles'

const Header=()=>{
	const [isDark,setIsDark]=useState(false)

	useEffect(()=>{
		window.addEventListener('scroll',()=>{
			if(window.scrollY>100){
				setIsDark(true)
			}else{
				setIsDark(false)
			}
			return()=>{
				window.removeEventListener('scroll')
			}
		})
	},[])

	return(
		<HeaderContainer dark={isDark}>
			<img
		        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
		        alt=""
		      />
      		<img
		        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
		        alt=""
		        style={{paddingRight:'15px'}}
		      />

		</HeaderContainer>
		)
}
export default Header