import React from 'react';

import config from '../config/index.json';
import Divider from "./Divider";

const About = () => {
    const {company, about} = config;
    const {logo, name: companyName} = company;
    const {socialMedia, sections} = about;

    return (
        <div
            id="about"
            className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
        >
            <div className={`container max-w-5xl mx-auto m-8`}>
                <h1
                    className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
                >
                    {'Over AnalogApp'.split(' ').map((word, index) => (
                        <span
                            key={index}
                            className={index % 2 ? 'text-primary' : 'text-border'}
                        >
              {word}{' '}
            </span>
                    ))}
                </h1>
                <Divider/>

                <div className={`flex flex-wrap`}>
                    <div className={`w-5/6 sm:w-1/2 p-6`}>
                        <h3
                            className={`text-3xl text-gray-800 font-bold leading-none mb-3 lg:mt-20`}
                        >
                            De voordelen
                        </h3>
                        <ul className="list-disc">
                            <li className={`text-gray-600`}>
                                <span className={`text-yellow-800 font-bold`}>Veel goedkoper</span> dan wegwerpcamera's.
                            </li>
                            <li className={`text-gray-600`}>
                                Foto's van <span className={`text-yellow-800 font-bold`}>hogere kwaliteit</span> dan van
                                wegwerpcamera's, maar ook met old-school feel.
                            </li>
                            <li className={`text-gray-600`}>
                                <span className={`text-yellow-800 font-bold`}>Altijd</span> een wegwerpcamera bij je,
                                zonder extra gewicht.
                            </li>
                            <li className={`text-gray-600 mb-8`}>
                                De foto's worden <span className={`text-yellow-800 font-bold`}> bezorgd</span>, dus je
                                hoeft niet meer naar de winkel.
                            </li>
                        </ul>
                        {/*<div className="w-1 sm:w-1/2 mt-3">*/}
                        {/*    <a*/}
                        {/*        href="mailto:analogcamapp@gmail.com?subject=I like AnalogApp!"*/}
                        {/*        className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-background bg-secondary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}*/}
                        {/*    >*/}
                        {/*        Email ons*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                    <div className={`w-full sm:w-1/2 p-6`}>
                        <img
                            className="h-6/6"
                            src="/assets/images/camerahand.jpg"
                            alt="Title"
                        />
                    </div>
                </div>

                <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
                    <div className={`w-full sm:w-1/2 p-6`}>
                        <img
                            className="h-6/6"
                            src="/assets/images/graphic.jpg"
                            alt="#"
                        />
                    </div>
                    <div className={`w-full sm:w-1/2 p-6`}>
                        <div className={`align-middle`}>
                            <h3
                                className={`text-3xl text-gray-800 font-bold leading-none mb-3 lg:mt-10`}
                            >
                                Het idee
                            </h3>
                            <p className={`text-gray-600`}>AnalogApp is ontstaan vanuit de <span
                                className={`text-yellow-800 font-bold`}>frustratie</span> om telkens naar de
                                winkel te gaan voor wegwerpcamera's. Je moet naar de winkel om de camera te kopen,
                                vervolgens om hem te laten ontwikkelen, en daarna nog om de foto's op te halen.

                                <br/><br/>Dat moest
                                <span className={`text-yellow-800 font-bold`}> makkelijker </span> kunnen. </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* TOT HIERRRRRRRRRRRRRR */}


            <div className="flex flex-col items-center justify-center">
                <div>
                    <img src={logo} alt={companyName} className="w-16 h-16"/>
                </div>
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
                    {sections.map((section, index) => (
                        <a
                            key={`${section.name}-${index}`}
                            href={section.href}
                            className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
                        >
                            {section.name}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-x-8 mt-20 sm:mt-6 h-8">
                    <a
                        aria-label="instagram"
                        href={socialMedia.instagram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            className="fill-current text-gray-800 dark:text-white hover:text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="-100.7682 -167.947 873.3244 1007.682"
                        >
                            <g xmlns="http://www.w3.org/2000/svg" fill="#100f0d">
                                <path
                                    d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959"/>
                                <path
                                    d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308"/>
                            </g>
                        </svg>
                    </a>
                    <a
                        href="mailto:analogcamapp@gmail.com?subject=I like AnalogApp!"
                        className="w-full flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md border-primary text-background bg-border hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10"
                    >
                        <p>Email ons</p>
                    </a>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfaQ1PX1gxVkwmT-JIsPmImuAeOigX5oS9e0_diQZ_2PwZMMQ/viewform?usp=sf_link"
                        className="w-full flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md border-primary text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10"
                    >
                        <p>Nieuwsbrief</p>
                    </a>
                </div>
                <div className="flex items-center mt-6">
                    <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
                        &copy; {new Date().getFullYear()} designed by{' '}
                        <a href="mailto:analogcamapp@gmail.com?subject=I like AnalogApp!" rel="nofollow">
                            AnalogApp
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default About;
