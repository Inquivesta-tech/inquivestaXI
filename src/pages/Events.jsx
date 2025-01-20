import React from 'react'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard';
import { motion } from 'motion/react';
import EventsWrapper from '../components/EventsWrapper';
import { details, link } from 'motion/react-client';

const Events = () => {
    const core = [
        {name: "CSI", register: "#/register/CSI", details: ["Dive into the thrilling world of ",<strong>C</strong>,"rime ",<strong>S</strong>,"cene ",<strong>I</strong> ,"nvestigation at INQUIVESTA, the ultimate college fest! Step into the shoes of a detective as you unravel clues, interrogate suspects, and piece together evidence to crack a mind-bending mystery. Whether you're a true-crime enthusiast or just looking for an adrenaline-packed challenge, this event promises to test your logic, teamwork, and investigative skills. Get ready to think fast, act smart, and solve the unsolvable—because the case won't crack itself! This event is meant to test your deductive skills, you can expect questions based on general science, logic, reasoning in the context of the crime scenes, it shall also test your judgement in deciphering what is the true nature of the crime and not fall for the illusions and traps in front of you."]},
        {name: "Soulbeats", link: ""},
        {name: "Headshot", register: "https://headshot-inq.vercel.app/#games", link: "https://headshot-inq.vercel.app", details:"Headshot is the premier esports extravaganza at Inquivesta XI, the flagship college fest of IISER Kolkata. Designed for gaming enthusiasts and competitive players, this electrifying event brings together popular titles like Valorant, Marvel RIVALS, BGMI, and more. Whether you’re a sharpshooter, a strategist, or a fan of fast-paced action, \"Headshot\" promises an unforgettable experience filled with adrenaline, camaraderie, and intense battles. Step into the arena, showcase your skills, and claim your place among the champions in this ultimate celebration of gaming excellence!"},
        {name: "Anicon 3.0", link: "https://anicon3.github.io", register: "https://unstop.com/o/1kIEqrg?lb=Otz3Q9l&utm_medium=Share&utm_source=shortUrl", details: ["Anicon 3.0, a vibrant highlight of Inquivesta XI is the ultimate gathering for anime enthusiasts. This exciting anime convention promises a dynamic lineup of events, including dazzling cosplay competitions, captivating musical performances, engaging karaoke sessions, challenging quizzes, and thrilling games. Whether you're a die-hard fan of all things animated media or just curious to explore this fascinating world, Anicon 3.0 offers an unforgettable experience filled with creativity, culture, and camaraderie. Join us for a day of fun, fandom, and fantastic memories! Dont forget to follow us on instagram ", <a href='https://instagram.com/anicon3.o' target='_blank'>@anicon3.o</a>, <br/> ,<strong> Note that you only have to pay and register to attend the offline event. The online events/competitions have no registration Fees !!</strong>]},
        {name: "LOST", link: "https://xeylenol.github.io/LOST/", details: ["L.O.S.T. tells the story of a space research crew, who find themselves stranded on a long-lost Earth colony.", <br/>, "Stuck with no memories of how your ship went off trajectory and crashed, you and your team must explore the desolate lands in search for answers... and a way back home. Soon you will realize that there is more to this colony than meets the eye. The air is heavy with dread, and everything seems unnatural. Uncover the source of the fleshy veins riddling the streets, that seems to be driving everyone mad. Explore the city and find a way off this godforsaken planet.",<br/> ,"Enter this treasure hunt in groups of 4, and solve puzzles all around the campus."]},
        {name: "MUN'dane", details: ["MUN’dane 2025 features a diverse range of committees addressing crucial global and national issues. The United Nations Security Council will focus on security in the Middle East, with a special emphasis on Palestine. The United Nations Human Rights Council will examine humanitarian crises in South Asia. The Historic Lok Sabha will stimulate discussions on socio-economic development in India during the 13th Lok Sabha (1999). Lastly, the International Press Corps will represent media perspectives, ensuring transparency and accountability within the conference.", <br/>, <br/>,"MUN’dane 2025 warmly welcomes students from secondary schools, higher secondary schools, and colleges to participate in this prestigious event. Delegates must present a valid student or government-issued ID during registration and throughout the conference. The dress code for the event is strictly formal or traditional attire, reflecting the professionalism and decorum expected at such a platform."], register: "#/register/mundane", brochure: "https://raw.githubusercontent.com/TheSillyCoder/temp/main/MUN'dane_INQUIVESTA_XI_IISER_K_.pdf", link: "https://linktr.ee/mundane_iiserk"},
        {name: "GNQ", link: ""},
        {name: "Recycled Runway", link: "", details: "Step into the spotlight! This is a fashion competition/show where teams of four transform discarded materials into breathtaking creations. From innovative sketches to a captivating runway show, it's time to showcase your creativity, sustainability, and individual style. Register now and let your imagination take flight!"},
        {name: "Photon", link: ""},
    ];
    const cultural = [
        {name: "symphonix", link: "", details: "Compete for glory against other bands. 30 minutes to shine on an open air stage and win from a prizepool of 20000+"},
        {name: "monodrama", link: ""},
    ];
    const science = [
        {name: "Art in a culture", link: "", register: "#/register/ART_IN_A_CULTURE", details: "Unleash Your Inner Artist with Microbial Magic! Experience the extraordinary at this unique 2-Day Science-Art event where you become the conductor of microscopic symphonies. Participants must bring a self-attestation acknowledging their responsibility and safety in handling microbes. Accommodation is available for Day 2 at an additional fee. Only 40 participants can join this exclusive event. Register now to secure your place! Don't miss this unforgettable opportunity to explore the intersection of art and science!"},
        {name: "Bad Ad Hoc Hypothesis", register: "https://forms.gle/1aYxxsjcrTRXGqyt8", details: "Ever wanted to make claims so blasphemous that people end up executing you ? (uplifting Galilean noises). If yes, then now is the chance to come forward with the most absurd theories, to engage the audience in a light-hearted \"scientific\" talk as we are here with BAD AD-HOC HYPOTHESIS !"},
        {name: "Mind-Meld", link: "", register: "#/register/MIND_MELD", details: "Unleash Your Inner Telepath! A science related guessing game where one blindfolded player relies on their team’s indirect clues to identify the given prompt. Prompts include science related people, pheonomena and concepts(even hypothetical). Test your communication skills & win exciting prizes!"},
        {name: "Thrust", link: ""},
        {name: "Beat the drop", link: "", details: "Imagine dropping an egg from a great height... and it survives! Sounds impossible, right? But, what if you could create a clever contraption to defy gravity and protect your precious egg? Design and build a device that can safely drop a raw egg from a significant height without it breaking. You'll have a limited selection of materials and a ticking clock. Can you rise to the challenge and save the egg?  The most cost-effective and innovative designs will win from a prize pool of ₹10,000!"},
    ];
    const sports = [
        {name: "Chess", register: "#/register/Chess", details: "One day Rapid Open chess tournament "},
        {name: "Cubing Open", link: "", details: "An official WCA competition with 8 events 2x2,3x3,4x4,5x5, Pyraminx, Megaminx, Clock, OH. Win exciting prices and coupons sponsored by The Cubeology!!"},
        {name: "Futsal", link:""},
        {name: "3x3 Basketball", link:"", details: "3X3 Basketball Knouckout Showdown! Gameplay: 2 teams, 3 players each, 1 hoop. Score 21 points within 10 minutes or win in overtime! Who Can Play:Anyone, regardless of age or gender! How to Join: Register your team of 4(3+1 substitute)(Rs 100/- fee per team) on a first-come, first-served basis (limited to 20 teams)! Rules: Official FIBA 3X3 Basketball rules apply. Let's play!"},
    ];
  return (
    <>
    <Navbar active="events"/>
    <div className='main-content darkbg events-cont'>
        <EventsWrapper eventsArray={core} category="Core"/>
        <EventsWrapper eventsArray={science} category="Science"/>
        <EventsWrapper eventsArray={cultural} category="Cultural"/>
        <EventsWrapper eventsArray={sports} category="Sports"/>
    </div>
    </>
  )
}

export default Events