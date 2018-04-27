import React from "react";
import { render } from "react-dom";
import Parallax from "../../lib";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/main.css"

function Demo() {
	return (
		<div>
			<div className="grid">
				<div className="container">
					<div className="row">
						<div className="col-md-offset-1 col-md-2">
							<div className="grid-line"></div>
						</div>
						<div className="col-md-2">
							<div className="grid-line"></div>
						</div>
						<div className="col-md-2">
							<div className="grid-line"></div>
						</div>
						<div className="col-md-2">
							<div className="grid-line"></div>
						</div>
						<div className="col-md-2">
							<div className="grid-line" style={{ marginRight: '-30px', borderRight: '1px solid #ccc' }}></div>
						</div>
					</div>
				</div>
			</div>

			<Parallax className="fixed-top" speed={-2} style={{ transform: 'rotate(45deg)' }} />
			<main className="main">
				<header>
					<div className="container">
						<div className="row">
							<div className="col-md-offset-1 col-md-11">
								<a href="http://dixonandmoe.com/">
									<h2>BY DIXON & MOE
										<span>➔</span>
									</h2>
								</a>
								<div className="white-block"></div>
							</div>
						</div>
						<div className="title">
							<div className="row">
								<div className="col-md-offset-1 col-md-6">
									<h1>react-rellax
										<span>JS</span>
									</h1>
								</div>
								<div className="col-md-4 text-right">
									<a href="https://github.com/dixonandmoe/rellax">GITHUB</a>
								</div>
							</div>
						</div>
						<div className="subtitle">
							<div className="row">
								<div className="col-md-offset-1 col-md-2">
									<h3>Light (871b gz)</h3>
								</div>
								<div className="col-md-2">
									<h3>Vanilla Javascript</h3>
								</div>
								<div className="col-md-2">
									<h3>Parallax Library</h3>
								</div>
							</div>
						</div>
					</div>
				</header>

				<section className="section san-francisco">
					<div className="absolute">
						<div className="container">
							<div className="row">
								<div className="col-md-offset-1 col-md-11">
									<Parallax as="h2" speed={-3}>San Francisco<br />California</Parallax>
								</div>
							</div>
						</div>
					</div>

					<div className="absolute above">
						<div className="container">
							<div className="row">
								<div className="col-md-offset-1 col-md-2">
									<Parallax className="lg-green" speed={2} style={{ transform: 'rotate(45deg)' }} />
									<Parallax className="sm-green" speed={5} style={{ transform: 'rotate(45deg)' }} />
								</div>
								<div className="col-md-offset-2 col-md-1">
									<Parallax className="sm-purple" speed={2} style={{ transform: 'rotate(45deg)' }} />
								</div>
								<div className="col-md-offset-3 col-md-1">
									<Parallax className="xs-green" speed={5} style={{ transform: 'rotate(45deg)' }} />
									<Parallax className="md-green" speed={1} style={{ transform: 'rotate(45deg)' }} />
								</div>
								<div className="col-md-1">
									<Parallax className="lg-purple" speed={3} style={{ transform: 'rotate(45deg)' }} />
								</div>
							</div>
						</div>
					</div>


					<div className="container">
						<div className="row">
							<div className="col-md-offset-1 col-md-5">
								<div className="date">
									Incorporated—<br /> 1850<br /><br /> 37°47′N 122°25′W
								</div>
							</div>
							<div className="col-md-offset-1 col-md-4">
								<div className="temp">
									68°
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section"></section>

				<section className="section">
					<div style={{ marginTop: '200px' }}>
						<div className="container">
							<div className="row">
								<div className="col-md-12 text-center">
									<h4>JAVASCRIPT (ACCEPTS ANY CLASS NAME)</h4>
								</div>
							</div>
							<div className="row">
								<div className="col-md-offset-2 col-md-8">
									<div className="text-editor">
										<code>
											<span className="purple">var</span> rellax = <span className="green">new</span> <span className="white">Rellax</span>('.rellax');
                    </code>
									</div>
								</div>
							</div>


							<div className="row">
								<div className="col-md-12 text-center" style={{ marginTop: '80px' }}>
									<h4>BASIC MARKUP (DEFAULT SPEED: -2)</h4>
								</div>
							</div>

							<div className="row">
								<div className="col-md-offset-2 col-md-8">
									<div className="text-editor">
										<code>
											&lt;div <span className="purple">class</span>="<span className="green">rellax</span>"&gt;<br />
											<span className="white">&nbsp;&nbsp;I’m slow and smooth</span><br />
											&lt;/div&gt;
                    </code>
									</div>
								</div>
							</div>


							<div className="row">
								<div className="col-md-12 text-center" style={{ marginTop: '40px' }}>
									<h4>OPTIONAL SPEED (-10 to +10)</h4>
								</div>
							</div>

							<div className="row">
								<div className="col-md-offset-2 col-md-8">
									<div className="text-editor">
										<code>
											&lt;div <span className="purple">class</span>="<span className="green">rellax</span>" <span className="purple">speed</span>="<span className="green">6</span>"&gt;<br />
											<span className="white">&nbsp;&nbsp;I’m slow and smooth</span><br />
											&lt;/div&gt;
                    </code>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section">
					<div className="absolute above" style={{ pointerEvents: 'none' }}>
						<div className="container">
							<div className="row">

								<div className="col-md-offset-1 col-md-2">
									<Parallax className="bt-green" speed={5} style={{ transform: 'rotate(45deg)' }} />
								</div>

								<div className="col-md-offset-0 col-md-1">
									<Parallax className="md-dixonandmoe" speed={2} style={{ transform: 'rotate(45deg)' }} />
								</div>

								<div className="col-md-offset-5 col-md-1">
									<Parallax className="md-twitter" speed={1} style={{ transform: 'rotate(45deg)' }} />
								</div>

								<div className="col-md-1">
									<Parallax className="md-facebook" speed={3} percentage={0.5} style={{ transform: 'rotate(45deg)' }} />
								</div>

							</div>
						</div>
					</div>

					<div className="copy" style={{ marginTop: '200px', marginBottom: '500px' }}>
						<div className="container">
							<div className="row">
								<div className="col-md-offset-1 col-md-6">
									<h4>SERIOUSLY, WHY?!</h4>
									<p>Come on, how boring is the internet without excessive javascript? We made this library since too many github repos
										are abandoned (RIP skrollr) or feature creepy. You got some beef or caught us slippin on unit tests, send rants and
										10mb gifs to
								<a href="mailto:moe@dixonandmoe.">moe@dixonandmoe.com</a>
									</p>
								</div>
							</div>

							<div className="row" style={{ marginTop: '140px' }}>
								<div className="col-md-offset-5 col-md-6">
									<h4>BUT ACTUALLY</h4>
									<p>We've benefitted so much from open source projects that we're actively trying to give back. As designers, we're starting
								by releasing our own quirky js code.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="share">
					<div className="container">
						<div className="row">
							<div className="col-md-offset-1 col-md-3">
								<a className="dam" href="http://dixonandmoe.com/">Dixon &amp; Moe</a>
							</div>
							<div className="col-md-offset-3 col-md-2">
								<a href="https://www.facebook.com/sharer/sharer.php?u=http://dixonandmoe.com/rellax/">Share
							<span>➔</span>
								</a>
							</div>
							<div className="col-md-offset-0 col-md-2">
								<a href="https://twitter.com/share?url=http://dixonandmoe.com/rellax/">Tweet
							<span>➔</span>
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

render(<Demo />, document.getElementById("app"));
