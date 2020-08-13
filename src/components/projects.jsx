import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="animate-box" data-animate-effect="fadeInLeft">
								<h2 className="colorlib-heading">Project Gallery</h2>
							</div>
						</div>
						<div className="row ">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/canoe.png)', height: 450 }}>
									<div className="desc">
										<div className="con" style={{ color: "white", height: 450 }}>
											<h2 style={{ color: "white" }}>Canoe (Mobile App)</h2>
											<span>July 2020 - <br />#mobile-app-development #VoIP #SIP #Kamailio #SWIFT-UI </span>
											<p className="icon">
												<span><a href="https://youtu.be/5ZUVz8e8zg8" target="_blank" rel="noopener noreferrer"><i className="icon-youtube" /> UX/UI design</a></span>
											</p>
											<p>(Still in development) An entrepreneurial mobile app development project. Helps drivers from fatigued driving by matching them with other drivers on the road. Users will talk to strangers over the phone, potentially reduce the risk of falling asleep. The main selling points will be the communication functionality and matching algorithms.
											<br />I am responsible for the Voice over IP (i.e. communication) feature. I decided to use SIP for VoIP. I deployed a Kamailio SIP server on Google Cloud VM and integrated a SIP client on the IOS app. I’m currently working on realizing the chat room functionality.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/mental_health_app.png)', height: 450 }}>
									<div className="desc">
										<div className="con" style={{ color: "white", height: 450 }}>
											<h2 style={{ color: "white" }}>Mental Health App</h2>
											<span>January 2020 – April 2020 <br /> #Android #PHP #MAMP #MySQL #Kotlin</span>
											<p className="icon">
												<span>
													<a href="/raw/conversation-model.pdf" target="_blank" rel="noopener noreferrer"><i className="icon-file" /> conversation-model</a>
												</span>
											</p>
											<p>Lehigh health center was interested in the conversation model of an Alexa Skill developed by a capstone project team. I was put in place to replicate the same model on an existing Android App.
											<br />I implemented this conversation model by storing user conversation states in the backend and then looking up the proper response (MAMP + MySQL + PHP).  I integrated a text-to-voice feature and a quick default response feature to the chatbot. Finally, I made the PHQ-9 and GAD-7 test with the relatively new Kotlin language.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/doko.png)', height: 450 }}>
									<div className="desc">
										<div className="con" style={{ color: "white", height: 450 }}>
											<h2 style={{ color: "white" }}>Doko Project (Robot)</h2>
											<span>February 2018 – December 2019 <br /> #Android #TensorFlow-Lite #OpenCV #CMUSphix #deep-learning #Keras #CNN #SQLite</span>
											<p className="icon">
												<span><a href="/raw/doko-poster.pdf" target="_blank" rel="noopener noreferrer"><i className="icon-file" /> poster</a> {' '}
													<a href="/raw/doko-first-semester.pdf" target="_blank" rel="noopener noreferrer"><i className="icon-file" /> presentation1</a> {' '}
													<a href="/raw/doko-second-semester.pdf" target="_blank" rel="noopener noreferrer"><i className="icon-file" /> presentation2</a> {' '}
													<a href="https://www.youtube.com/channel/UCaSNgcTUVjWCDrIFnofPbOg" target="_blank" rel="noopener noreferrer"><i className="icon-youtube" /> demo</a></span>
											</p>
											<p>This project was sponsored by OhmniLabs, Inc. Doko’s main functionalities were navigation, face recognition, and conversation. Doko was supposed to be deployed in a hospital environment, helping the patient navigate inside a hospital and fight against loneliness.
											<br />The Android App running on Doko was fully designed and developed by myself, with face detection, face recognition, emotion detection, and communication features implemented by OpenCV, MobileNets + TF Lite, Customed model + TF Lite, and CMU Sphinx respectively. Users’ profiles were stored together with face features and conversation history in a built-in SQLite database. I also designed and trained an emotion detection deep learning model with Python + Keras.</p>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
