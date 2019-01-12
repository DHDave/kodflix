import thirteenReasonsWhyImage from './images/13 Reason Why.jpeg';
import arrow from './images/Arrow.jpeg';
import starWarsVII from './images/StarWarsVII.jpeg';
import theBourneU from './images/TheBourneU.jpeg';
import theGoodfather from './images/TheGoodfather.jpeg';
import paulAofChrist from './images/PaulAofChrist.jpeg';

export default function getTitles() {
  return [
    { id: 'thirteen', name: '13 Reasons Why', img: thirteenReasonsWhyImage },
    { id: 'arrow', name: 'Arrow', img: arrow },
    { id: 'starwarsvii', name: 'Star Wars VII', img: starWarsVII },
    { id: 'thebourneultimatum', name: 'The Bourne Ultimatum', img: theBourneU },
    { id: 'thegoodfather', name: 'The Goodfather', img: theGoodfather },
    { id: 'paulapostolofchrist', name: 'Paul Apostol of Christ', img: paulAofChrist }
  ];
}