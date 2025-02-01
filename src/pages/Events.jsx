import React from 'react'
import Navbar from '../components/Navbar'
import EventsWrapper from '../components/EventsWrapper';

const Events = () => {
    const pronites = [
        {name: "Day 1 (8th Feb)", details: "Get ready for an unforgettable evening at IISER Kolkata’s Inquivesta Pronites, where music, energy, and excitement collide! Brace yourself as a sensational artist takes the stage, delivering a high-voltage performance that will leave you mesmerized. With dazzling lights, pulsating beats, and an electrifying atmosphere, this is the ultimate night to dance, sing, and celebrate. Whether you're a music lover or just looking for an exhilarating experience, Inquivesta Pronites promises a night of pure magic and memories that will last a lifetime. Don't miss out on the biggest musical extravaganza of the year!", register: "https://allevents.in/kalyani/inquivesta-pronite-8th-feb/80004785447484"}
    ]
    const core = [
        {name: "CSI", register: "", details: ["Dive into the thrilling world of ",<strong>C</strong>,"rime ",<strong>S</strong>,"cene ",<strong>I</strong> ,"nvestigation at INQUIVESTA, the ultimate college fest! Step into the shoes of a detective as you unravel clues, interrogate suspects, and piece together evidence to crack a mind-bending mystery. Whether you're a true-crime enthusiast or just looking for an adrenaline-packed challenge, this event promises to test your logic, teamwork, and investigative skills. Get ready to think fast, act smart, and solve the unsolvable—because the case won't crack itself! This event is meant to test your deductive skills, you can expect questions based on general science, logic, reasoning in the context of the crime scenes, it shall also test your judgement in deciphering what is the true nature of the crime and not fall for the illusions and traps in front of you."]},
        {name: "Soulbeats", register: "#/register/Soulbeats", details: [<p className='t-left'>Two-day dance event comprising:</p>, <ul className='t-left'><li>Stage dance competition: 'Xpress' ( Theme - Energy)</li> <li>Dance battle : 'Survival of the fittest'</li>  <li>Insta Reel-in (Theme : Innovation) Workshop and meet-and-greet with guest artist</li></ul>]},
        {name: "Headshot", register: "#/register/Headshot", link: "https://headshot-inq.vercel.app", details:"Headshot is the premier esports extravaganza at Inquivesta XI, the flagship college fest of IISER Kolkata. Designed for gaming enthusiasts and competitive players, this electrifying event brings together popular titles like Valorant, Marvel RIVALS, BGMI, and more. Whether you’re a sharpshooter, a strategist, or a fan of fast-paced action, \"Headshot\" promises an unforgettable experience filled with adrenaline, camaraderie, and intense battles. Step into the arena, showcase your skills, and claim your place among the champions in this ultimate celebration of gaming excellence!"},
        {name: "Anicon 3.0", link: "https://anicon3.github.io", register: "#/register/Anicon", details: ["Anicon 3.0, a vibrant highlight of Inquivesta XI is the ultimate gathering for anime enthusiasts. This exciting anime convention promises a dynamic lineup of events, including dazzling cosplay competitions, captivating musical performances, engaging karaoke sessions, challenging quizzes, and thrilling games. Whether you're a die-hard fan of all things animated media or just curious to explore this fascinating world, Anicon 3.0 offers an unforgettable experience filled with creativity, culture, and camaraderie. Join us for a day of fun, fandom, and fantastic memories! Dont forget to follow us on instagram ", <a href='https://instagram.com/anicon3.o' target='_blank'>@anicon3.o</a>, <br/> ,<strong> Note that you only have to pay and register to attend the offline event. The online events/competitions have no registration Fees !!</strong>]},
        {name: "LOST", register: "#/register/LOST", link: "https://xeylenol.github.io/LOST/", details: ["L.O.S.T. tells the story of a space research crew, who find themselves stranded on a long-lost Earth colony.", <br/>, "Stuck with no memories of how your ship went off trajectory and crashed, you and your team must explore the desolate lands in search for answers... and a way back home. Soon you will realize that there is more to this colony than meets the eye. The air is heavy with dread, and everything seems unnatural. Uncover the source of the fleshy veins riddling the streets, that seems to be driving everyone mad. Explore the city and find a way off this godforsaken planet.",<br/> ,"Enter this treasure hunt in groups of 4, and solve puzzles all around the campus."]},
        {name: "MUN'dane", details: ["MUN’dane 2025 features a diverse range of committees addressing crucial global and national issues. The United Nations Security Council will focus on security in the Middle East, with a special emphasis on Palestine. The United Nations Human Rights Council will examine humanitarian crises in South Asia. The Historic Lok Sabha will stimulate discussions on socio-economic development in India during the 13th Lok Sabha (1999). Lastly, the International Press Corps will represent media perspectives, ensuring transparency and accountability within the conference.", <br/>, <br/>,"MUN’dane 2025 warmly welcomes students from secondary schools, higher secondary schools, and colleges to participate in this prestigious event. Delegates must present a valid student or government-issued ID during registration and throughout the conference. The dress code for the event is strictly formal or traditional attire, reflecting the professionalism and decorum expected at such a platform."], register: "#/register/mundane", brochure: "https://raw.githubusercontent.com/TheSillyCoder/temp/main/MUN'dane_INQUIVESTA_XI_IISER_K_.pdf", link: "https://linktr.ee/mundane_iiserk"},
        {name: "GNQ", link: "", register: "#/register/GNQ", details: ["It is a known fact that humans like to be tested and to compete against each other to assert dominance over the opposition. It has historically been proven that it is the Brain and Brawn who comes out on top.", <br/>, "Quizzing provides a brilliant activity to keep the same spirit of competition with your opponents using your brainpower by forcing one to think outside the box to work on trivia-based questions, with the hints or relations that are to be searched for in the questions. With this same objective in mind, we bring you ", <strong>GNQ</strong>, " The Quizzing event of INQUIVESTA XI!"]},
        {name: "Recycled Runway", register: "#/register/RecycledRunway", details: "Step into the spotlight! This is a fashion competition/show where teams of four transform discarded materials into breathtaking creations. From innovative sketches to a captivating runway show, it's time to showcase your creativity, sustainability, and individual style. Register now and let your imagination take flight!"},
        {name: "Photon", register: "#/register/Photon", details: ["1. Themed Photography Competition",<br/>,"• Theme: Nostalgia Submission",<br/>,"•Limit: Up to 3 photos per participant.",<br/>,<br/>," 2. Photo-story Competition", <br/>,"Rules: Submit a narrative created using 5 to 7 photos. Accompany the photo series with a written story that cohesively connects the images. Participants must be present, either physically or virtually, during the judging process.", <br/>, <strong>Submission Deadline: 6th February 2025, 23:59. </strong>, <br/>, <br/>, "Judge: ", <strong>Sammya Brata Mullick (@deckle_edge) </strong>, <br/>," There will also be a photo exhibition open to the public every day of Inquivesta.",<br/>, <br/>,"Exciting prizes await the top three winners in both categories! Capture moments, tell stories, and showcase your talent with Photon!"]},
    ];
    const cultural = [
        {name: "symphonix", register: "#/register/Symphonix", details: "Compete for glory against other bands. 30 minutes to shine on an open air stage and win from a prizepool of 20000+"},
        {name: "drama", link: "", register: "#/register/Drama", details: [<strong>MonoDrama</strong>, <br />, "The drama can be with or without dialouges. This is a Solo event.Material of script can be original, adapted or an existing literary piece. Adapted pieces should be duly attributed to the original writers in the introduction or in the end. Pre-recorded music/sound effects may be used. Venue of performance is a closed stage. The play should be either in Hindi or English or mix of both. Some dialouges or some phrases can be in vernacular. But the institute using the vernacular phrases will use it at their own risk. No complaint for vernacular laguage will be entertained in the judging.", <br/>, "Props: basic chairs and tables will be provided but requests must be made beforehand to the event organiser. Participants need only bring any specific, easy-to-transport props.", <br/>, <br/>, <strong>Nukkad Natak</strong>, <br/>, "Team must consists of a minimum of 5 members and maxmiun 20 members. The time limit shall be maximum of 15 minutes exceeding which will lead to deduction of marks accordingly. Setup time should not exceed 5 mins.Play should be in Hindi/English or mixture of both. Usage of vernacular for any particular phrase must be done at own risk. No complaint for vernacular language will be entertained in the judging. Any kind of props needed must be brought along besides the basic props like chair , tables can be provided on spot but must be informed to the event coordinator beforehand. Any kind of disturbing content ,vulgarity or any instance that might hamper the competition , will not be entertained and will to immediate disqualification. The judges’ decision will be final and binding."]},

    ];
    const science = [
        {name: "Art in a culture", link: "", register: "", details: "Unleash Your Inner Artist with Microbial Magic! Experience the extraordinary at this unique 2-Day Science-Art event where you become the conductor of microscopic symphonies. Participants must bring a self-attestation acknowledging their responsibility and safety in handling microbes. Accommodation is available for Day 2 at an additional fee. Only 40 participants can join this exclusive event. Register now to secure your place! Don't miss this unforgettable opportunity to explore the intersection of art and science!"},
        {name: "Bad Ad Hoc Hypothesis", register: "https://forms.gle/1aYxxsjcrTRXGqyt8", details: "Ever wanted to make claims so blasphemous that people end up executing you ? (uplifting Galilean noises). If yes, then now is the chance to come forward with the most absurd theories, to engage the audience in a light-hearted \"scientific\" talk as we are here with BAD AD-HOC HYPOTHESIS !"},
        {name: "Mind-Meld", link: "", register: "", details: "Unleash Your Inner Telepath! A science related guessing game where one blindfolded player relies on their team’s indirect clues to identify the given prompt. Prompts include science related people, pheonomena and concepts(even hypothetical). Test your communication skills & win exciting prizes!"},
        {name: "Thrust", register: "#/register/Thrust", details: ["Ever felt like breaking from the binding pull of gravity? This is your chance... All you need is creativity and a bit of H20.",  <br/>, <br/>, "Thrust is Inquivesta's very own rocket assembly line, where participants get to make their own water-powered rockets, and compete against each other to craft the ultimate flying machine."]},
        {name: "Beat the drop", register: "#/register/BeatTheDrop", details: "Imagine dropping an egg from a great height... and it survives! Sounds impossible, right? But, what if you could create a clever contraption to defy gravity and protect your precious egg? Design and build a device that can safely drop a raw egg from a significant height without it breaking. You'll have a limited selection of materials and a ticking clock. Can you rise to the challenge and save the egg?  The most cost-effective and innovative designs will win from a prize pool of ₹10,000!"},
    ];
    const sports = [
        {name: "Chess", register: "#/register/Chess", details: "One day Rapid Open chess tournament "},
        {name: "Inquivesta Cube Open", register: "https://www.worldcubeassociation.org/competitions/InquivestaCubeOpen2025", details: "An official WCA competition with 8 events 2x2,3x3,4x4,5x5, Pyraminx, Megaminx, Clock, OH. Win exciting prices and coupons sponsored by The Cubeology!!"},
        {name: "Futsal", register:"#/register/Futsal", details: [<strong>5v5 Mixed Gender Futsal Tournament</strong>, <br/>, "Teams consist of 2 girls, 3 boys, 1 girl substitution, and 1 boy substitution. Each match features two 15-minute halves with a 5-minute break in between. The event will be of a knock-out format", <br/>,<br/>, <strong>Event Organisers:</strong>, <br/>, "Siba: 9556143435", <br/>, "Linupriya: 7815045556"]},
        {name: "3x3 Basketball", register:"#/register/Basketball3v3", details: "3X3 Basketball Knouckout Showdown! Gameplay: 2 teams, 3 players each, 1 hoop. Score 21 points within 10 minutes or win in overtime! Who Can Play:Anyone, regardless of age or gender! How to Join: Register your team of 4(3+1 substitute)(Rs 100/- fee per team) on a first-come, first-served basis (limited to 20 teams)! Rules: Official FIBA 3X3 Basketball rules apply. Let's play!"},
    ];
  return (
    <>
    <Navbar active="events"/>
    <div className='main-content darkbg events-cont'>
        <EventsWrapper eventsArray={pronites} category="Pronites"/>
        <EventsWrapper eventsArray={core} category="Core"/>
        <EventsWrapper eventsArray={science} category="Science"/>
        <EventsWrapper eventsArray={cultural} category="Cultural"/>
        <EventsWrapper eventsArray={sports} category="Sports"/>
    </div>
    </>
  )
}

export default Events