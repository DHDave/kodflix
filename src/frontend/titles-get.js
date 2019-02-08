import thirteenReasonsWhyImage from './images/13 Reason Why.jpeg';
import arrow from './images/Arrow.jpeg';
import starWarsVII from './images/StarWarsVII.jpeg';
import theBourneU from './images/TheBourneU.jpeg';
import theGoodfather from './images/TheGoodfather.jpeg';
import paulAofChrist from './images/PaulAofChrist.jpeg';

export default function getTitles() {
  return [
    { id: 'thirteen', name: '13 Reasons Why', img: thirteenReasonsWhyImage, details: 'A classmate receives a series of tapes that unravel the mystery of a tenageg girls past.' },
    { id: 'arrow', name: 'Arrow', img: arrow, details: 'After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the North China Sea. He returned home to Star City, but sinister players with a connection to Olivers past will push the team to its breaking point, threatening his legacy as the Green Arrow.' },
    { id: 'starwarsvii', name: 'Star Wars VII', img: starWarsVII, details: 'Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren (Adam Driver) and the First Order. When a defector named Finn (John Boyega) crash-lands on a desert planet, he meets Rey (Daisy Ridley), a tough scavenger whose droid contains a top-secret map. Together, the young duo joins forces with Han Solo (Harrison Ford) to make sure the Resistance receives the intelligence concerning the whereabouts of Luke Skywalker (Mark Hamill), the last of the Jedi Knights.'},
    { id: 'thebourneultimatum', name: 'The Bourne Ultimatum', img: theBourneU, details: 'Bourne races to discover the final mysteries of his past while a government agent tries to track him down after a shootout in Moscow.' },
    { id: 'thegoodfather', name: 'The Goodfather', img: theGoodfather, details: 'Francis Ford Coppolas epic masterpiece features Marlon Brando in his Oscar-winning role as the patriarch of the Corleone family.' },
    { id: 'paulapostolofchrist', name: 'Paul Apostol of Christ', img: paulAofChrist, details: 'Paul (Faulkner), who goes from the most infamous persecutor of Christians to Christ’s most influential apostle, is spending his last days in a dark and bleak prison cell awaiting execution by Emperor Nero. Luke(Caviezel), his friend and physician, risks his life when he ventures into Rome to visit him. Paul is under the watchful eye of Mauritius (Martinez), the prisons prefect, who seeks to understand how this broken old man can pose such a threat. But before Pauls death sentence can be enacted, Luke resolves to write another book, one that details the beginnings of The Way and the birth of what will come to be known as the church. Their faith challenged an empire. But their words changed the world.' }
  ];
}