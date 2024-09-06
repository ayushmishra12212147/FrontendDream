import Typed from 'typed.js';
import React from 'react';

function ImageRoll() {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
            typeSpeed: 50,
			loop:true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <>
            <ul className="slideshow">

                <li><span>Image 02</span></li>
                <li><span>Image 03</span></li>
                <li><span>Image 04</span></li>
                <li><span>Image 05</span></li>
                <li><span>Image 06</span></li>
            </ul>
            <div className="container">
                <header>
                    <div className="second">
                        <h1>Welcome to Wisdom Wave!</h1>
                        <div className="container2">
                            <h1>Here You Can <span ref={el}></span></h1>
                        </div>




                    </div>
                </header>
            </div>

            <style>{`
            .container2 {
			width: 100%;
			height: 28vh;
			display: flex;
			justify-content: center;
            margin-top:-70px;
		}
		

		ol,
		ul {
			list-style: none;
		}

		

		
		q:before,
		q:after {
			content: '';
		}

		abbr,
		acronym {
			border: 0;
		}
	
		a {
			color: #333;
			text-decoration: none;
		}
		.container {
			/* position: relative; */
			text-align: center;
            margin-bottom:200px
		}

		.clr {
			clear: both;
		}

		.container>header {
			padding: 30px 30px 10px 20px;
			margin: 0px 20px 10px 20px;
			/* position: relative; */
			display: block;
			text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
			text-align: left;
		}

		.container>header h1 {
			/* font-family: "helvetica neue", helvetica; */
			font-size: 35px;
            text-align:center;
			line-height: 35px;
			position: relative;
			font-weight: 400;
			color: #fff;
			text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
			padding: 0px 0px 5px 0px;
            margin-top: 55px;
		}
		
		/* .container > header h1 span{

} */
		.container>header h2,
		p.info {
			font-size: 16px;
			font-style: italic;
			color: #f8f8f8;
			text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
		}
		
		.slideshow,
		.slideshow:after {
			/* position: fixed; */
			width: 100%;
			height: 100%;
			top: 0px;
			left: 0px;
			/* z-index: 0; */
		}
		.slideshow:after {
			content: '';
			background: transparent url(../images/pattern.png) repeat top left;
		}

		.slideshow li span {
			margin-top: 80px;
			width: 100%;
			height: 50%;
			position: absolute;
			top: 0px;
			left: 0px;
			color: transparent;
			background-size: cover;
			background-position: 50% 50%;
			background-repeat: none;
			opacity: 0;
			z-index: 0;
			/* -webkit-backface-visibility: hidden; */
			-webkit-animation: imageAnimation 30s linear infinite 0s;
			-moz-animation: imageAnimation 30s linear infinite 0s;
			-o-animation: imageAnimation 30s linear infinite 0s;
			-ms-animation: imageAnimation 30s linear infinite 0s;
			animation: imageAnimation 30s linear infinite 0s;
		}

		.slideshow li div {
			z-index: 1000;
			position: absolute;
			bottom: 30px;
			left: 0px;
			width: 100%;
			text-align: center;
			opacity: 0;
			-webkit-animation: titleAnimation 30s linear infinite 0s;
			-moz-animation: titleAnimation 30s linear infinite 0s;
			-o-animation: titleAnimation 30s linear infinite 0s;
			-ms-animation: titleAnimation 30s linear infinite 0s;
			animation: titleAnimation 30s linear infinite 0s;
		}

		.slideshow li div h3 {
			font-family: "helvetica neue", helvetica;
			text-transform: uppercase;
			font-size: 80px;
			padding: 0;
			line-height: 200px;
			color: rgba(255, 255, 255, 0.8);
		}

		.slideshow li:nth-child(1) span {
			background-image: url(https://www.21kschool.com/in/wp-content/uploads/sites/4/2021/01/rptgtpxd-1396254731.jpg);
		}

		.slideshow li:nth-child(2) span {
			background-image: url(https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
			-webkit-animation-delay: 6s;
			-moz-animation-delay: 6s;
			-o-animation-delay: 6s;
			-ms-animation-delay: 6s;
			animation-delay: 6s;
		}

		.slideshow li:nth-child(3) span {
			background-image: url(https://media.istockphoto.com/id/1369917180/photo/large-group-of-college-students-listening-to-their-professor-on-a-class.jpg?s=612x612&w=0&k=20&c=VKWAFCEmSzPWf0Xx-o4uVgo2opkrhMemIxjhFuUueGE=);
			-webkit-animation-delay: 12s;
			-moz-animation-delay: 12s;
			-o-animation-delay: 12s;
			-ms-animation-delay: 12s;
			animation-delay: 12s;
		}

		.slideshow li:nth-child(4) span {
			background-image: url(https://www.pinnacleinstitute.in/uploads/blog.jpg);
			-webkit-animation-delay: 18s;
			-moz-animation-delay: 18s;
			-o-animation-delay: 18s;
			-ms-animation-delay: 18s;
			animation-delay: 18s;
		}

		.slideshow li:nth-child(5) span {
			background-image: url(https://media.istockphoto.com/id/525409577/photo/elevated-view-of-students-writing-their-gcse-exam.jpg?b=1&s=612x612&w=0&k=20&c=vmUZFZlKxFWmec_Nn3B4wFkHxByTKOZfvfM8qx1IriQ=);
			-webkit-animation-delay: 24s;
			-moz-animation-delay: 24s;
			-o-animation-delay: 24s;
			-ms-animation-delay: 24s;
			animation-delay: 24s;
		}

		

		.slideshow li:nth-child(2) div {
			-webkit-animation-delay: 6s;
			-moz-animation-delay: 6s;
			-o-animation-delay: 6s;
			-ms-animation-delay: 6s;
			animation-delay: 6s;
		}

		.slideshow li:nth-child(3) div {
			-webkit-animation-delay: 12s;
			-moz-animation-delay: 12s;
			-o-animation-delay: 12s;
			-ms-animation-delay: 12s;
			animation-delay: 12s;
		}

		.slideshow li:nth-child(4) div {
			-webkit-animation-delay: 18s;
			-moz-animation-delay: 18s;
			-o-animation-delay: 18s;
			-ms-animation-delay: 18s;
			animation-delay: 18s;
		}

		.slideshow li:nth-child(5) div {
			-webkit-animation-delay: 24s;
			-moz-animation-delay: 24s;
			-o-animation-delay: 24s;
			-ms-animation-delay: 24s;
			animation-delay: 24s;
		}

		

		/* Animation for the slideshow images */
		@-webkit-keyframes imageAnimation {
			0% {
				opacity: 0;
				-webkit-animation-timing-function: ease-in;
			}

			8% {
				opacity: 1;
				-webkit-transform: scale(1.05);
				-webkit-animation-timing-function: ease-out;
			}

			17% {
				opacity: 1;
				-webkit-transform: scale(1.1);
			}

			25% {
				opacity: 0;
				-webkit-transform: scale(1.1);
			}

			100% {
				opacity: 0
			}
		}

		@-moz-keyframes imageAnimation {
			0% {
				opacity: 0;
				-moz-animation-timing-function: ease-in;
			}

			8% {
				opacity: 1;
				-moz-transform: scale(1.05);
				-moz-animation-timing-function: ease-out;
			}

			17% {
				opacity: 1;
				-moz-transform: scale(1.1);
			}

			25% {
				opacity: 0;
				-moz-transform: scale(1.1);
			}

			100% {
				opacity: 0
			}
		}

		@-o-keyframes imageAnimation {
			0% {
				opacity: 0;
				-o-animation-timing-function: ease-in;
			}

			8% {
				opacity: 1;
				-o-transform: scale(1.05);
				-o-animation-timing-function: ease-out;
			}

			17% {
				opacity: 1;
				-o-transform: scale(1.1);
			}

			25% {
				opacity: 0;
				-o-transform: scale(1.1);
			}

			100% {
				opacity: 0
			}
		}

		@-ms-keyframes imageAnimation {
			0% {
				opacity: 0;
				-ms-animation-timing-function: ease-in;
			}

			8% {
				opacity: 1;
				-ms-transform: scale(1.05);
				-ms-animation-timing-function: ease-out;
			}

			17% {
				opacity: 1;
				-ms-transform: scale(1.1);
			}

			25% {
				opacity: 0;
				-ms-transform: scale(1.1);
			}

			100% {
				opacity: 0
			}
		}

		@keyframes imageAnimation {
			0% {
				opacity: 0;
				animation-timing-function: ease-in;
			}

			8% {
				opacity: 1;
				transform: scale(1.05);
				animation-timing-function: ease-out;
			}

			17% {
				opacity: 1;
				transform: scale(1.1);
			}

			25% {
				opacity: 0;
				transform: scale(1.1);
			}

			100% {
				opacity: 0
			}
		}

		/* Animation for the title */
		@-webkit-keyframes titleAnimation {
			0% {
				opacity: 0;
				-webkit-transform: translateY(200px);
			}

			8% {
				opacity: 1;
				-webkit-transform: translateY(0px);
			}

			17% {
				opacity: 1;
				-webkit-transform: scale(1);
			}

			19% {
				opacity: 0
			}

			25% {
				opacity: 0;
				-webkit-transform: scale(10);
			}

			100% {
				opacity: 0
			}
		}

		@-moz-keyframes titleAnimation {
			0% {
				opacity: 0;
				-moz-transform: translateY(200px);
			}

			8% {
				opacity: 1;
				-moz-transform: translateY(0px);
			}

			17% {
				opacity: 1;
				-moz-transform: scale(1);
			}

			19% {
				opacity: 0
			}

			25% {
				opacity: 0;
				-moz-transform: scale(10);
			}

			100% {
				opacity: 0
			}
		}

		@-o-keyframes titleAnimation {
			0% {
				opacity: 0;
				-o-transform: translateY(200px);
			}

			8% {
				opacity: 1;
				-o-transform: translateY(0px);
			}

			17% {
				opacity: 1;
				-o-transform: scale(1);
			}

			19% {
				opacity: 0
			}

			25% {
				opacity: 0;
				-o-transform: scale(10);
			}

			100% {
				opacity: 0
			}
		}

		@-ms-keyframes titleAnimation {
			0% {
				opacity: 0;
				-ms-transform: translateY(200px);
			}

			8% {
				opacity: 1;
				-ms-transform: translateY(0px);
			}

			17% {
				opacity: 1;
				-ms-transform: scale(1);
			}

			19% {
				opacity: 0
			}

			25% {
				opacity: 0;
				-webkit-transform: scale(10);
			}

			100% {
				opacity: 0
			}
		}

		@keyframes titleAnimation {
			0% {
				opacity: 0;
				transform: translateY(200px);
			}

			8% {
				opacity: 1;
				transform: translateY(0px);
			}

			17% {
				opacity: 1;
				transform: scale(1);
			}

			19% {
				opacity: 0
			}

			25% {
				opacity: 0;
				transform: scale(10);
			}

			100% {
				opacity: 0
			}
		}

		/* Show at least something when animations not supported */
		.no-cssanimations .slideshow li span {
			opacity: 1;
		}

		@media screen and (max-width: 1140px) {
			.slideshow li div h3 {
				font-size: 100px
			}
		}

		@media screen and (max-width: 600px) {
			.slideshow li div h3 {
				font-size: 50px
			}
		}
		





       





		.child{
			display:flex;
			float: left;
			width: 15%;
			border: 3px solid black;
			height:180px;
			padding: 15px;
			margin: 10px 10px 10px 10px;
			border-radius: 50px;
		}
		.child:hover{
			background-color:#f9e8d7;
			shape-margin: 5%;
			box-shadow: 0px 0px 10px 10px #16FF67;
		}
            `}
            </style>


        </>
    )
}

export default ImageRoll