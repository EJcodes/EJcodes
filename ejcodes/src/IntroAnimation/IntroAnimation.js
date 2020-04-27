import React, { useEffect } from 'react';
import {gsap} from 'gsap';

function IntroAnimation (props) {
	const header = React.createRef();

	useEffect(()=>{
		gsap.to(header.current,{color:"#8C0", duration:2})
	},[header]);


return(<>
	<h1 ref={header}>
		Hello Gsap Animation
	</h1>
	</>);

}
export default IntroAnimation;