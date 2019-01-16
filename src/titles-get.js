import thirteenReasonsWhyImage from './images/13 Reason Why.jpeg';
import arrow from './images/Arrow.jpeg';
import starWarsVII from './images/StarWarsVII.jpeg';
import theBourneU from './images/TheBourneU.jpeg';
import theGoodfather from './images/TheGoodfather.jpeg';
import paulAofChrist from './images/PaulAofChrist.jpeg';

export default function getTitles() {
  return [
    { id: 'thirteen', name: '13 Reasons Why', img: thirteenReasonsWhyImage, details: '' },
    { id: 'arrow', name: 'Arrow', img: arrow },
    { id: 'starwarsvii', name: 'Star Wars VII', img: starWarsVII, details: 'Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren (Adam Driver) and the First Order. When a defector named Finn (John Boyega) crash-lands on a desert planet, he meets Rey (Daisy Ridley), a tough scavenger whose droid contains a top-secret map. Together, the young duo joins forces with Han Solo (Harrison Ford) to make sure the Resistance receives the intelligence concerning the whereabouts of Luke Skywalker (Mark Hamill), the last of the Jedi Knights.'},
    { id: 'thebourneultimatum', name: 'The Bourne Ultimatum', img: theBourneU, details: '' },
    { id: 'thegoodfather', name: 'The Goodfather', img: theGoodfather, details: '' },
    { id: 'paulapostolofchrist', name: 'Paul Apostol of Christ', img: paulAofChrist, details: '' }
  ];
}