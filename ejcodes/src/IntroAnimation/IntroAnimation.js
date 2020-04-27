import React, { useEffect } from 'react';
import styles from './IntroAnimation.module.css';
import { gsap} from 'gsap';
import reactLogo from '../logo.svg'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(MorphSVGPlugin);

function IntroAnimation (props) {
	const header = React.createRef();
	const mom = React.createRef();
	const momsHead = React.createRef();
	const kid = React.createRef();
	const kidHead = React.createRef();
	const dad = React.createRef();
	const dadsHead = React.createRef();
	const growth= React.createRef();
	const code = React.createRef();
	const code2 = React.createRef();
	const growth2 = React.createRef();
	const grit = React.createRef();
	const passion = React.createRef();
	const E = React.createRef();
	const J = React.createRef();
	const leftMountain = React.createRef();
	const centerMountain = React.createRef();
	const rightMountain = React.createRef();
	const sun = React.createRef();
	const moon =React.createRef();
	const LeftBracket = React.createRef();
	const RightBracket = React.createRef();
	const reactLogo = React.createRef();
	const tl = gsap.timeline();
	
	useEffect(()=>{
		gsap.to(header.current,{color:"#8C0", duration:2});
		gsap.to(mom.current, {morphSVG:leftMountain.current ,duration:2, delay:1.5});
		gsap.to(kid.current, {morphSVG: centerMountain.current, duration:2, delay:1.5});
		gsap.to(dad.current, {morphSVG:rightMountain.current ,duration:2, delay:1.5});
		gsap.to(kid.current, {morphSVG: centerMountain.current, duration:2, delay:1.5});
		gsap.to(momsHead.current, {morphSVG:code.current, x:-150, y:300, scale:2, duration:2, delay:1.5});
		
		tl.to(dadsHead.current, {morphSVG:sun.current, duration:2, delay:3})
		.to(dadsHead.current, {morphSVG:moon.current, duration:2},"+=1")
		.to(dadsHead.current, {morphSVG:code2.current, x:95, y:250, scale:2, duration:2},"+=1")
		// .to(dadsHead.current, {morphSVG:{reactLogo}} //toDO)
		
		
		
		},[reactLogo,mom,momsHead, kid, dad, dadsHead,leftMountain, centerMountain, rightMountain, sun, moon, grit, passion, header,code, growth,code2, growth2]);

		


return(<>
	<h1 ref={header}>
		Hello Gsap Animation,
	</h1>


<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
viewBox="0 0 1920 1080">

{/* <g id="Layer_2">
<text transform="matrix(1 0 0 1 947.8193 519.3223)" class="st0 st1">J</text>
</g>
<g id="Layer_3">
<text transform="matrix(0.6892 0 0 1 847.0264 519.8525)" class="st0 st1">E</text>
</g>
<g id="Layer_5">
<text transform="matrix(1 0 0 1 764.8574 542.0547)" class="st2 st3">{</text>
<text transform="matrix(1 0 0 1 1005.6338 543.3398)" class="st2 st3">}</text>
</g> */}

<g id="Layer_6">

<path ref={mom} id={styles.mom} className={styles.mom} d="M922.66,327.57c-4.81-2.43-10.69-0.5-13.12,4.31l-17.08,33.78c0,0-41.93,1.35-57.2,5.67
c-7.17,2.03-15.09,5.3-17.17,12.46c-2.32,8.02-0.18,16.87,5.57,22.93c0,0,13.23,15.06,6.79,44.4
c-4.08,18.58,1.69,32.39,7.97,39.05c1.64,4.76,2.77,9.62,3.81,14.54c1.1,6.55,1.95,13.07,2.24,19.72
c0.3,6.93-0.07,13.8-0.59,20.71c-0.21,1.8-0.41,3.6-0.61,5.38c-0.67,4.49-1.41,8.95-2.37,13.38c-0.94,4.36-2.12,8.64-3.34,12.93
c-1.93,6.81-4.57,13.41-7.23,19.96l-0.2,0.49c-2.36,5.86,0.42,12.74,6.17,15.35c5.71,2.59,12.65,0.18,15.53-5.38
c3.55-6.83,7.05-13.7,9.89-20.86c3.56-8.98,6.66-18.09,8.96-27.48c0.77-3.15,1.44-6.31,2.1-9.48c1.4-8.1,2.57-16.19,2.99-24.4
c0.41-8,0.27-15.99-0.41-23.97c8.48,17.82,14.79,36.68,18.25,56.12c0.95,5.33,1.59,10.69,2.16,16.07
c0.38,5.32,0.69,10.62,0.69,15.96c0,3.58-0.15,7.15-0.3,10.73l-0.03,0.59c-0.25,6.3,4.65,11.82,10.92,12.36
c6.32,0.55,12.11-4.15,12.88-10.45c0.49-3.97,0.98-7.93,1.3-11.92c0.49-6.17,0.63-12.32,0.68-18.5
c-0.26-9.78-0.89-19.49-2.28-29.19c-1.41-9.83-3.45-19.57-6.04-29.16c-4.48-16.6-10.62-32.79-18.28-48.18
c-0.06-0.95-0.15-1.9-0.3-2.86c-0.94-6.22-1.93-12.4-3.18-18.56c-1.57-7.76-3.73-15.34-6.07-22.9
c-1.53-4.25-3.08-8.45-4.85-12.61c-1.79-4.21-3.84-8.3-6.06-12.3l28.22-8.16l1.29-0.37c3.09-0.91,5.73-3.2,6.98-6.44
l16.02-41.49C929.13,335.19,927.17,329.85,922.66,327.57C917.85,325.14,927.17,329.85,922.66,327.57z"/>
<path ref={momsHead} id={momsHead} className={styles.mom} d="M848.36,338.51c0-13.98-9.19-26.75-22.46-31.17c-13.37-4.45-28.46,0.36-36.82,11.68c-8.39,11.35-8.47,27.3-0.19,38.73
c8.28,11.44,23.38,16.38,36.81,12c13.29-4.33,22.57-17.04,22.66-31.02C848.36,338.66,848.36,338.59,848.36,338.51
C848.36,320.37,848.36,356.65,848.36,338.51z"/>
<path ref={dad} id={dad} className={styles.dad} d="M961.33,326.15l-19.3-38.17c-2.68-5.26-9.28-7.52-14.62-4.98c-5.13,2.45-7.58,8.63-5.53,13.93l18.1,46.89
c1.33,3.39,4.19,6.2,7.95,7.29l1.39,0.4l24.41,7.06c-7.75,14.11-12.71,29.64-15.85,45.38c-1.41,7.08-2.45,14.22-3.19,21.4
c-0.39,3.79-0.7,7.58-0.93,11.39c-0.24,4.02-0.58,8.1-0.35,12.13c-8.02,17.87-14.24,36.44-18.71,55.51
c-2.14,9.11-3.71,18.38-4.84,27.67c-1.1,9.08-1.59,18.17-1.83,27.31c0.05,6.87,0.19,13.72,0.74,20.57
c0.37,4.62,0.93,9.21,1.49,13.81c0.89,7.12,7.47,12.45,14.62,11.81c7.08-0.64,12.57-6.92,12.27-14.02l-0.03-0.61
c-0.17-3.96-0.33-7.91-0.34-11.87c0-6.12,0.34-12.19,0.78-18.29c1.04-9.74,2.45-19.38,4.62-28.94
c2.23-9.82,5.09-19.5,8.52-28.97c2.55-7.04,5.42-13.97,8.56-20.77c0.36,0.11,0.73,0.22,1.1,0.33c-0.63,8.47-0.63,17-0.11,25.47
c0.53,8.74,1.8,17.34,3.29,25.95c2.03,9.7,4.38,19.31,7.61,28.68c3.09,8.95,6.7,17.65,10.76,26.19
c1.68,3.54,3.51,6.99,5.31,10.46c3.34,6.37,11.38,9.06,17.87,5.93c6.34-3.06,9.28-10.74,6.63-17.25l-0.2-0.5
c-2.86-7.03-5.68-14.1-7.84-21.39c-2.8-9.46-5.01-19.03-6.47-28.79c-0.1-0.7-0.21-1.4-0.31-2.11c-0.23-2.01-0.46-4.04-0.69-6.08
c-0.58-7.79-1.01-15.54-0.66-23.36c0.33-7.52,1.29-14.91,2.54-22.33c0.85-4.03,1.74-8.03,2.89-12c0.53-1.84,1.13-3.66,1.77-5.46
c0.3-0.85,2.73-7.23,2.89-8.04c0.71-2.27,1.2-4.6,1.46-6.96c0.27-2.41,0.26-4.84,0.38-7.26c0.22-4.37,0.57-8.73,1.08-13.08
c0.8-6.76,1.98-13.49,3.78-20.06c1.83-6.7,4.21-13.61,8.17-19.39c0.3-0.43,0.59-0.87,0.93-1.26
c11.57-13.33,15.02-25.43,10.4-39.26c-4.62-13.84-17.36-19.93-31.87-21.27C1005.36,327.89,961.33,326.15,961.33,326.15z"/>
<path ref={dadsHead} id={dadsHead} className={styles.dadsHead} d="M1051.2,257.52c-13.88,0-26.89,8.01-33.15,20.4c-6.35,12.56-4.89,28.08,3.65,39.25c8.52,11.13,22.93,16.59,36.69,13.89
c13.5-2.65,24.71-12.96,28.49-26.19c3.87-13.51-0.4-28.39-10.83-37.8C1069.28,260.95,1060.34,257.52,1051.2,257.52z"/>
<path ref={kid} id={kid} className={styles.kid} d="M895.67,328.41l0.27-0.18c3.13-2.05,6.2-4.16,8.92-6.74c3.21-3.05,5.77-6.7,7.45-10.81c2.17-5.49,2.55-11.17,2.97-16.97
c0.19-2.58,0.37-5.15,0.56-7.73c0.1-1.39,0.06-2.92,0.37-4.29c12.88-0.3,20.61-6.07,24.21-6.86c2.73,5.62,5.49,11.22,8.81,16.52
c2,3.18,4.17,6.29,6.71,9.06c1.27,1.39,2.58,2.74,4.42,3.33c1.84,0.6,3.88,0.44,5.6-0.43c2.77-1.4,4.39-4.49,3.97-7.57
c-0.46-3.35-3.35-5.32-5.41-7.73c-4.44-5.2-7.89-11.23-10.69-17.45c1.76-1.63,3.15-3.64,4.04-5.9
c5.85,5.61,14.92,6.71,21.94,2.68c6.03-3.47,9.66-10.28,9.18-17.21c-0.49-7.08-5.15-13.37-11.77-15.92
c-6.82-2.63-14.79-0.87-19.86,4.41c-2.08,2.16-3.61,4.83-4.44,7.72c-3.02-2.39-6.91-3.7-11.06-3.39h0
c-8.38,0.62-16.95,2.54-24.72,5.75c-8.68,3.59-16.4,9.08-20.94,17.49c-0.99,1.83-1.98,3.82-2.48,5.85
c-0.45,1.82-0.46,3.74-0.28,5.6c0.23,2.4,0.85,4.69,1.46,7.01c0.64,2.43,1.13,4.9,1.51,7.39c0.6,3.95,1.11,8.29,0.32,12.25
c-0.45,2.26-1.64,4.17-3.35,5.7c-0.91,0.82-1.94,1.52-3.01,2.11c-0.48,0.26-0.96,0.51-1.46,0.73c-0.25,0.11-0.69,0.41-0.97,0.41
c-4.7,1.82-6.91,7.45-4.56,11.95C885.69,329.62,891.48,331.15,895.67,328.41z"/>
</g>



<path ref={leftMountain} id={leftMountain} className={styles.leftMountain} d="M1192.38,542.85l-103.34-161.62c-2.11-3.3-5.75-5.3-9.66-5.3c-3.91,0-7.55,2-9.66,5.3L966.39,542.85
c-2.27,3.55-2.43,8.07-0.42,11.78c2.01,3.71,5.88,6.01,10.08,6.01h206.67c4.2,0,8.07-2.31,10.08-6.01
C1194.81,550.92,1194.65,546.41,1192.38,542.85L1192.38,542.85z M1079.38,408.83l30.64,47.92h-30.64l-22.96,23.09l-13.66-13.73
L1079.38,408.83z"/>

<path ref={centerMountain} id={centerMountain} className={styles.centerMountain} d="M1092.2,536.45L948.76,313.32c-2.93-4.56-7.98-7.32-13.41-7.32c-5.42,0-10.47,2.76-13.41,7.32L778.51,536.45
c-3.15,4.9-3.38,11.14-0.58,16.26c2.8,5.12,8.16,8.3,13.99,8.3h286.88c5.83,0,11.2-3.18,13.99-8.3
C1095.58,547.58,1095.35,541.35,1092.2,536.45L1092.2,536.45z M935.36,351.41l42.53,66.15h-42.53l-31.88,31.88l-18.96-18.96
L935.36,351.41z"/>


<path ref={rightMountain} id={rightMountain} className={styles.rightMountain} d="M857.76,546.55l-82.31-128.04c-1.68-2.62-4.58-4.2-7.69-4.2c-3.11,0-6.01,1.58-7.69,4.2l-82.31,128.04
c-1.81,2.81-1.94,6.39-0.33,9.33c1.6,2.94,4.68,4.76,8.03,4.76h164.62c3.35,0,6.42-1.83,8.03-4.76
C859.7,552.94,859.57,549.36,857.76,546.55L857.76,546.55z M767.76,440.37l24.4,37.96h-24.4l-18.29,18.29l-10.88-10.88
L767.76,440.37z"/>

<circle ref={sun} className={styles.sun} id="sun" cx="1095" cy="306" r="67"/>

<path ref={moon} className={styles.moon} id="moon" d="M1093.4,373c20.67,0,39.54-9.4,52.04-24.81c1.85-2.28-0.17-5.61-3.03-5.06
c-32.51,6.19-62.36-18.73-62.36-51.55c0-18.9,10.12-36.28,26.56-45.64c2.54-1.44,1.9-5.29-0.98-5.82
c-4.04-0.74-8.14-1.12-12.24-1.12c-36.98,0-67,29.97-67,67C1026.4,342.98,1056.37,373,1093.4,373z"/>

 <g id="Layer_7">
<path ref={growth} className={styles.growth} id="growth"  d="M1010.62,500.94H848.23c-2.61,0-5.06,1.09-6.71,2.98c-1.65,1.89-2.39,4.46-2.04,7.05l16.01,94.08
c0.73,5.03,5.25,8.96,10.34,8.96h127.19c5.08,0,9.61-3.93,10.34-8.95l15.99-93.96l0.02-0.12c0.36-2.59-0.39-5.16-2.04-7.05
C1015.68,502.02,1013.24,500.94,1010.62,500.94z"/>

<path ref={growth2} className={styles.growth2} id="growth2"  d="M1022.03,429.49h-89.81v-46.83c0.3-0.11,0.44-0.22,0.57-0.35c5.21-5.08,13.78-7.8,23.7-10.95
c18.1-5.74,40.63-12.89,54.63-38.93c7.55-14.04,11.52-33.16,11.18-53.83c-0.27-16.53-3.38-32.53-7.73-39.81
c-1.9-3.19-4.15-4.8-6.67-4.8c-1.34,0-3.3,0.48-5.02,2.75c-4.23,5.6-13.34,8.44-23.89,11.72
c-18.07,5.62-40.56,12.61-54.07,37.74c-6.81,12.66-10,27.87-10.83,42.46c-3.3-5.4-7.71-10.66-13.69-15.55
c-18.59-15.2-46.68-20.59-65.09-20.59c-11.73,0-18.57,2.03-20.36,6.02c-0.44,0.99-1.2,3.6,1.27,6.34
c4,4.46,4.91,12.69,5.96,22.21c1.82,16.54,4.08,37.12,23.55,53.04c18.23,14.91,44.78,20.22,63.54,20.22
c2.64,0,8.65-0.4,8.65-0.4v29.52h-80.49c-5.29,0-9.59,4.29-9.59,9.59v37.36c0,5.29,4.29,9.59,9.59,9.59h184.59
c5.29,0,9.59-4.29,9.59-9.59v-37.36C1031.62,433.79,1027.33,429.49,1022.03,429.49z M903.57,372.85l-0.32-0.33l-0.08-0.08
l-0.02-0.02c-0.02-0.03,0.12,0.15,0.05,0.07l-0.04-0.03l-0.16-0.14c-0.41-0.37-0.83-0.75-1.26-1.13
c-0.89-0.72-1.77-1.48-2.73-2.18c-3.79-2.86-8.26-5.45-13.03-7.95c-4.76-2.52-9.79-4.98-14.45-7.84
c-2.33-1.42-4.55-2.96-6.58-4.58c-2.02-1.63-3.82-3.4-5.29-5.21c-1.45-1.82-2.62-3.64-3.36-5.39c-0.21-0.42-0.37-0.85-0.52-1.26
c-0.15-0.41-0.29-0.81-0.42-1.19c-0.2-0.79-0.39-1.49-0.51-2.14c-0.1-0.67-0.17-1.25-0.22-1.76c-0.05-0.5-0.02-0.91-0.03-1.26
c0.01-0.69,0.02-1.05,0.02-1.05s0.19,0.31,0.56,0.89c0.19,0.29,0.38,0.67,0.66,1.06c0.27,0.38,0.58,0.82,0.93,1.31
c0.38,0.46,0.79,0.97,1.24,1.52c0.52,0.5,0.96,1.09,1.58,1.62c0.29,0.27,0.59,0.55,0.9,0.83c0.33,0.26,0.66,0.54,1.01,0.81
c0.33,0.28,0.72,0.53,1.08,0.81c0.36,0.28,0.75,0.55,1.16,0.8c1.61,1.06,3.42,2.08,5.45,3.06c2.02,0.99,4.23,1.95,6.57,2.94
c4.68,1.99,9.88,4.11,15.05,6.81c2.58,1.35,5.14,2.87,7.57,4.57c2.43,1.7,4.72,3.61,6.76,5.67c1.02,1.02,1.96,2.11,2.84,3.2
c0.42,0.56,0.83,1.12,1.25,1.67l0.15,0.2l0.04,0.05c-0.06-0.07,0.1,0.12,0.09,0.11l0.02,0.02l0.06,0.1l0.25,0.39
c0.16,0.26,0.32,0.52,0.48,0.78c1.28,2.06,2.46,4.04,3.51,5.88c0.52,0.93,1.03,1.82,1.48,2.68c0.45,0.87,0.87,1.7,1.26,2.49
c0.26,0.53,0.49,1.02,0.72,1.51v4.28c-0.15-0.12-0.29-0.23-0.45-0.36c-0.97-0.79-2.13-1.78-3.42-2.92
c-1.28-1.16-2.73-2.47-4.3-3.9c-1.56-1.45-3.21-3.04-4.92-4.76C904.01,373.28,903.79,373.06,903.57,372.85z M944.82,350.84
l0.33-0.41l0.08-0.1l0.02-0.03c0.02-0.02-0.08,0.08-0.03,0.03l0.03-0.05l0.14-0.2c0.37-0.53,0.74-1.06,1.12-1.61
c0.7-1.13,1.44-2.24,2.11-3.45c2.73-4.77,5.02-10.29,7.11-16.12c2.12-5.81,4.09-11.91,6.54-17.62c1.22-2.85,2.56-5.61,4.05-8.15
c1.48-2.54,3.16-4.85,4.92-6.8c1.78-1.94,3.6-3.55,5.41-4.68c0.43-0.3,0.88-0.56,1.32-0.8c0.43-0.24,0.85-0.47,1.25-0.68
c0.84-0.37,1.59-0.7,2.29-0.96c0.73-0.23,1.37-0.42,1.92-0.57c0.55-0.15,1.02-0.2,1.4-0.27c0.77-0.12,1.18-0.18,1.18-0.18
s-0.33,0.26-0.94,0.73c-0.3,0.24-0.7,0.51-1.12,0.87c-0.4,0.35-0.86,0.76-1.37,1.21c-0.48,0.48-1.01,1.02-1.58,1.6
c-0.26,0.31-0.53,0.63-0.82,0.96c-0.29,0.32-0.57,0.66-0.83,1.04c-0.27,0.37-0.55,0.74-0.84,1.13c-0.26,0.41-0.53,0.83-0.8,1.26
c-0.28,0.41-0.52,0.89-0.79,1.35c-0.13,0.23-0.26,0.46-0.4,0.7c-0.12,0.25-0.24,0.49-0.36,0.74c-1,1.98-1.93,4.2-2.77,6.66
c-0.85,2.45-1.63,5.11-2.42,7.92c-1.58,5.61-3.19,11.83-5.44,18.08c-1.13,3.12-2.43,6.23-3.95,9.23c-1.52,3-3.29,5.87-5.26,8.48
c-0.97,1.31-2.04,2.54-3.1,3.7c-0.56,0.56-1.11,1.12-1.66,1.67l-0.2,0.2l-0.05,0.05l-0.07,0.08l-0.02,0.02l-0.1,0.09l-0.39,0.35
c-0.26,0.23-0.53,0.46-0.79,0.69c-1.05,0.91-2.05,1.8-3.05,2.64c-0.98,0.84-2.02,1.65-2.99,2.4c-0.98,0.75-1.91,1.48-2.81,2.15
c-0.91,0.66-1.75,1.28-2.57,1.84c-1.63,1.14-3.07,2.1-4.26,2.88c-2.39,1.57-3.85,2.38-3.85,2.38s0.8-1.45,2.37-3.86
c0.78-1.21,1.76-2.64,2.91-4.25c1.16-1.61,2.46-3.4,3.87-5.31c1.44-1.92,3-4.01,4.65-6.21
C944.4,351.39,944.61,351.12,944.82,350.84z"/>
</g>

<path ref={code} id={code} className={styles.code} d="M1108.92,296H761.06c-5.01,0-9.06,4.06-9.06,9.06v223.22c0,5.01,4.06,9.06,9.06,9.06h123.52
c-2.09,12.98-7.09,36.97-17.93,60.65c-0.8,1.74-1.15,3.69-0.78,5.58c0.87,4.49,4.69,7.43,8.91,7.43h119.26
c1.92,0,3.83-0.51,5.39-1.63c3.7-2.66,4.78-7.36,3.02-11.19c-10.9-23.74-15.92-47.82-18.02-60.84h124.51
c5.01,0,9.06-4.06,9.06-9.06V305.06C1117.99,300.06,1113.93,296,1108.92,296z M1099.86,519.22h-20.4v-4.25
c0-4.54-3.22-8.6-7.72-9.25c-5.6-0.81-10.41,3.52-10.41,8.97v4.53h-14.73v-4.25c0-4.54-3.22-8.61-7.72-9.25
c-5.6-0.8-10.41,3.52-10.41,8.97v4.53H770.13V314.13h329.73V519.22z"/>
<path ref={code2} id={code2} className={styles.code2} d="M956.72,433.9c-8.33,0-15.75,3.96-20.49,10.08l-24.46-12.54c2.51-3.99,3.96-8.7,3.96-13.74c0-5.05-1.46-9.76-3.96-13.74
l24.46-12.54c4.74,6.13,12.16,10.08,20.49,10.08c14.28,0,25.9-11.62,25.9-25.89s-11.62-25.89-25.9-25.89s-25.9,11.62-25.9,25.89
c0,1.9,0.21,3.75,0.6,5.54l-28.15,14.43c-3.92-2.39-8.52-3.77-13.44-3.77c-14.28,0-25.9,11.62-25.9,25.89
c0,14.28,11.62,25.89,25.9,25.89c4.92,0,9.52-1.38,13.44-3.77l28.15,14.43c-0.39,1.79-0.6,3.64-0.6,5.54
c0,14.28,11.62,25.89,25.9,25.89s25.9-11.62,25.9-25.89C982.62,445.52,971,433.9,956.72,433.9z"/>


</svg>
	
</>);

}
export default IntroAnimation;