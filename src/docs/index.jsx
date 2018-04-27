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
							<div className="col-xs-offset-1 col-xs-5">
								<a href="//dixonandmoe.com">
									<h2>BY DIXON &amp; MOE
										<span>➔</span>
									</h2>
								</a>
								<div className="white-block"></div>
							</div>
							<div className="col-xs-offset-1≠ col-xs-5">
								<a href="//nelo.is">
									<h2>PORTED BY NELO
										<span>➔</span>
									</h2>
								</a>
							</div>
						</div>
						<div className="title">
							<div className="row">
								<div className="col-md-offset-1 col-md-7">
									<h1>react-rellax</h1>
								</div>
								<div className="col-md-3 text-right">
									<a href="https://github.com/nelonoel/react-rellax">GITHUB</a>
								</div>
							</div>
						</div>
						<div className="subtitle">
							<div className="row">
								<div className="col-md-offset-1 col-md-2">
									<h3>React Component</h3>
								</div>
								<div className="col-md-3">
									<h3>No manual initialization</h3>
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
									<Parallax as="h2" speed={-3}>Quezon City<br />Philippines</Parallax>
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
								<div className="col-md-12 text-center" style={{ marginTop: '40px' }}>
									<h4>INSTALLATION</h4>
								</div>
							</div>

							<div className="row">
								<div className="col-md-offset-2 col-md-8">
									<div className="text-editor">
										<code>
											npm <span className="purple">i</span> --save <span className="white">react-rellax</span>
										</code>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12 text-center" style={{ marginTop: '40px' }}>
									<h4>USAGE</h4>
								</div>
							</div>

							<div className="row">
								<div className="col-md-offset-2 col-md-8">
									<div className="text-editor">
										<code>
											<span className="purple">import</span> Parallax <span className="green">from</span> <span className="white">'react-rellax'</span>
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
											&lt;Parallax&gt;
											<span className="white">&nbsp;I’m slow and smooth&nbsp;</span>
											&lt;/Parallax&gt;
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
											&lt;Parallax <span className="purple">speed</span>="<span className="green">6</span>"&gt;<br />
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
									<p>
										Because <a href="https://github.com/dixonandmoe/rellax">Rellax.js</a> is awesome.
										Big thanks to <a href="//dixonandmoe.com">Dixon & Moe</a> for creating a minimal Parallax library,
										it was easy enough to port into React.
									</p>
								</div>
							</div>

							<div className="row" style={{ marginTop: '140px' }}>
								<div className="col-md-offset-5 col-md-6">
									<h4>DOCUMENTATION</h4>
									<p>View full documentation and source code in <a href="https://github.com/nelonoel/react-rellax">Github</a>.</p>
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
							<div className="col-md-2">
								<a className="dam" href="https://nelo.is">Nelo</a>
							</div>
							<div className="col-md-offset-1 col-md-2">
								<a href="https://www.facebook.com/sharer/sharer.php?u=https://nelonoel.github.io/react-rellax">Share
							<span>➔</span>
								</a>
							</div>
							<div className="col-md-offset-0 col-md-2">
								<a href="https://twitter.com/share?url=https://nelonoel.github.io/react-rellax">Tweet
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
