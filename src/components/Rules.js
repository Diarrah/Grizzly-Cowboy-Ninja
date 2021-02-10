import React, { useState, useContext } from 'react';
import { GameContext } from '../App';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Keyboard } from 'swiper';
import { rpsRules } from '../images/RPS';
import { gcnRules, rule2, rule3, rule4 } from '../images/GCN';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Pagination, Keyboard]);

const Rules = () => {
    const { grizzlyMode } = useContext(GameContext);
    const [moduleOpen, setModuleOpen] = useState(false);

    return (
        <>
        <button className="rules__btn" onClick={() => setModuleOpen(!moduleOpen)}>Rules</button>
        <div className={`rules__wrapper${moduleOpen ? ' active': ''}`}>
            <div className="wrapper__header">
                <span>Rules</span>
                <button onClick={() => setModuleOpen(false)}>
                    <svg className="close" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path fill="#3B4262" fillRule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/>
                    </svg>
                </button>
            </div>
            {!grizzlyMode && (
                <div className="rules rules--rps">
                    <img src={rpsRules} alt="Rules of Rock, Paper, Scissors" />
                </div>
            )}
            {grizzlyMode && moduleOpen && (
                <div className="rules rules--gcn">
                    <Swiper
                        direction="horizontal"
                        pagination={{ clickable: true }}
                        keyboard={{ enabled: true }}
                        simulateTouch={false}
                        slidesPerView={1}
                    >
                        <SwiperSlide className="rule rule--1">
                            <p>
                                Have you ever played <span>Grizzly, Cowboy, Ninja?</span>
                                <small>(Yes, this is a real game!)</small> 
                                    <br /><br /><hr /><br />
                                It's a fun twist on the classic game of <span>Rock, Paper, Scissors.</span>
                                    <br /><hr /><br />
                                The rules are just as straight forward and easy to learn, too.<br /><br />
                                    
                                <svg className="arrow" width="201" height="8" viewBox="0 0 201 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M200.354 4.35355C200.549 4.15829 200.549 3.84171 200.354 3.64645L197.172 0.464466C196.976 0.269204 196.66 0.269204 196.464 0.464466C196.269 0.659728 196.269 0.976311 196.464 1.17157L199.293 4L196.464 6.82843C196.269 7.02369 196.269 7.34027 196.464 7.53553C196.66 7.7308 196.976 7.7308 197.172 7.53553L200.354 4.35355ZM0 4.5H200V3.5H0V4.5Z" fill="#3B4363"/>
                                </svg>
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="rule rule--2">
                            <div className="rule__img__container">
                                <img src={rule2} alt="Cowboy vs. Bear" />
                            </div>
                            <div className="rule__textbox">
                                <span>Cowboy vs. Bear</span> <br />
                                <p>Cowboy can pull & shoot quicker than Bear can close the distance for a swipe.</p>
                                <span>Cowboy wins.</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rule rule--3">
                        <div className="rule__img__container">
                                <img src={rule3} alt="Bear vs. Ninja" />
                                </div>
                            <div className="rule__textbox">
                                <span>Bear vs. Ninja</span><br />
                                <p>Ninja only has 1 sword but Bear has 10 - his claws! He is sliced up in no time.</p>
                                <span>Bear wins.</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rule rule--4">
                            <div className="rule__img__container">
                                <img src={rule4} alt="Ninja vs. Cowboy" />
                            </div>
                            <div className="rule__textbox">
                                <span>Ninja vs. Cowboy</span><br />
                                <p>Ninja is sly & can sneak up on Cowboy before he even has a chance to notice.</p>
                                <span>Ninja wins.</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rule rule--5">
                            <img src={gcnRules} alt="Rules of Grizzly, Cowboy, Ninja" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            )}
        </div>
        </>
    )
}

export default Rules