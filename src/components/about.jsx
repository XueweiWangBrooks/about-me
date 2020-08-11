import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>I am a graduate student from UC Berkeley. I’m currently studying in Data Science and System, with the degree of EECS Master of Engineering. This degree is specifically designed for students seeking a future in the industry. Hopefully, I will be graduate in May 2021.</p>
                                            <p>I love traveling a lot. Besides the US and China (where I live and where I was born), I have been to Kenya, Sudan, Qatar, UAE, Singapore, Japan, Mexico, and many more places. The photo on the front cover was taken in Cancun. Traveling allows me to encounter people from completely different cultures and races, boosting my understanding of diversity.</p>
                                            <p>In January 2020, I finished my Computer Science B.S. degree at Lehigh University. Lehigh is a top 50 US school. I was able to maintain high academic standards as well as accomplish multiple extracurricular projects. I graduated with the highest honor, a 3.95 Major GPA, and gained expertise in the field of Software Development and Machine Learning.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className=" animate-box" data-animate-effect="fadeInLeft">
                                <h2 className="colorlib-heading">Interest and expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-4">
                                    <div className="desc">
                                        <h3>Mobile App Development (IOS/Android)</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-1">
                                    <div className="desc">
                                        <h3>Data Science & Machine Learning</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-2">
                                    <div className="desc">
                                        <h3>Database Design & Management</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-3">
                                    <div className="desc">
                                        <h3>Data Structures & Algorithms</h3>
                                    </div>
                                </div>
                            </div>
                            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
