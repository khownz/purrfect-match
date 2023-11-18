import { Cat } from '../types/cat';

const MYSTERY_CAT: Cat = {
  id: '1396dbce-3beb-498d-bcf4-420962a3b601',
  name: 'Dausy',
  age: '5 jaar',
  likes: ['In dozen zitten', 'Slapen (op baasje)'],
  bio:
    '😿 Mijn baasje heeft me achter gelaten om te gaan "werken" in de Ardennen.<br/>' +
    '🧺 Daarom ben ik op zoek naar een nieuw gezin dat mij een warm mandje kan aanbieden.',
  imagePathNames: [
    'assets/kittens/mystery-1.jpg',
    'assets/kittens/mystery-2.jpg',
    'assets/kittens/mystery-3.jpg',
    'assets/kittens/mystery-4.jpg',
    'assets/kittens/mystery-5.jpg',
    'assets/kittens/mystery-6.jpg',
  ],
};

export const KITTENS: Cat[] = [
  {
    id: '3704fefc-2119-43e6-b562-d15e3c57cf66',
    name: 'Ricky & Roxy',
    age: '5 maanden',
    likes: ['Avonturen', 'Speelse Vriendjes', 'Knuffelmomenten', 'Rusten'],
    bio:
      '🐾 Ricky en Roxy, een ondeugend broer-zus duo op ontdekkingstocht in de wereld.<br/>' +
      '🐱 Voor Roxy lijkt dat niet evident met drie pootjes, maar als je haar rond ziet lopen, merk je er niets van.<br/>' +
      '🤝 Sociale kittens die graag spelen met elkaar en andere katten, altijd van de partij als je op de zetel zit.<br/>' +
      '🛋️ Geen typische schootkatten, Ricky laat zich regelmatig aaien maar heeft ook zijn rustmomenten nodig.<br/>' +
      '🐾 Roxy laat liever niet aaien, maar ze laat het toe als ze je eenmaal kent en durft dan al wel eens te spinnen.<br/>' +
      '🚀 Ricky vliegt meteen rond in je huis, wil je meteen leren kennen. <br/>' +
      '🚸 Vanwege hun rustmomenten raden we hen niet aan voor gezinnen met jonge kinderen.<br/>' +
      '🌳 Ze kunnen ook de buitenwereld verkennen als je dat wil, maar voor Roxy is een afgeschermde omgeving het beste.',
    imagePathNames: [
      'assets/kittens/ricky-roxy-1.jpeg',
      'assets/kittens/ricky-roxy-2.jpeg',
      'assets/kittens/ricky-roxy-3.jpeg',
      'assets/kittens/ricky-roxy-4.jpeg',
      'assets/kittens/ricky-roxy-5.jpeg',
    ],
  },
  {
    id: '1e96e6e8-fcf4-414d-8875-878c0f3cc25e',
    name: 'Opoes & Ophelia',
    age: '3 maanden',
    likes: ['Ontdekkingen', 'Dutjes doen', 'Geborgenheid vinden', 'Knuffelen'],
    bio:
      '🐾 Ik ben Opoes, een zwart kattinnetje met witte snoet en witte pootjes.<br/>' +
      '🌟 Ontdekken doe ik met veel plezier, al moet ik toegeven dat dat dutje erna wel nog veel deugd doet.<br/>' +
      '😺 Wat wil je, ik word zo vlug moe van al het spelen en ontdekken… dan zoek ik geborgenheid bij broertjes en zusjes.<br/>' +
      '🛌 Gezellig hé, ik slaap het liefst omgeven door hun.<br/>' +
      '🐱 Mijn zusje Ophelia is ook een zwart-wit kattinnetje. Ze laat me niet vlug uit het lood slaan, nee hoor, ze staat haar mannetje!<br/>' +
      '🤫 Ze heeft gezegd dat ik dit eigenlijk niet mag zeggen, maar stiekem knuffelt ze wel heel graag met haar pleegmama (die is hier helemaal zot van!).<br/>' +
      '🎉 Spelen en ravotten doet ze graag en ze heeft duidelijk meer energie dan ik. Dat zal komen doordat ze wat groter en sterker is.',
    imagePathNames: ['assets/kittens/opoes-ophelia-1.png', 'assets/kittens/opoes-ophelia-2.png'],
  },
  {
    id: '2b89e94f-64ea-4422-b77f-e259bcc13806',
    name: 'Odette',
    age: '2 jaar',
    likes: ['Fletsen', 'Kopjes geven', 'Aaitjes krijgen'],
    bio:
      '🐾 Ik ben een 2-jarige tricolor, gesteriliseerde kattin met een bijzonder verhaal.<br/>' +
      "🤰 Toen ze mij vonden, was ik zwanger. Na sterilisatie was ik nog in 'mamamodus' en kreeg ik 2 nestjes om groot te trekken. Wat ik met glans en glorie doe.<br/>" +
      '😸 Men dacht dat ik een wilde kat ben. Nee hoor… ik ben een lieve poes.<br/>' +
      '🙅‍♀️ Ik word niet graag opgetild en vastgepakt; dat maakt mij bang en onrustig.<br/>' +
      '🐱 Ik laat duidelijk weten wat ik leuk vind en wat niet. Ik ben heel lief en kom graag kopjes geven en aaitjes geven.<br/>' +
      '🏡 Zodra mijn kids de deur uit zijn, zoek ik een thuis waar ik de tijd en ruimte krijg. Waar ik me kan ontplooien tot een lieve fletskat die je vertrouwt.',
    imagePathNames: ['assets/kittens/odette-1.jpg', 'assets/kittens/odette-2.jpg'],
  },
  { ...MYSTERY_CAT },
  {
    id: '0c64377b-4bde-4bfb-88a7-801df132cf54',
    name: 'Jools & Joey',
    age: '8 maanden',
    likes: ['Rollebollen', 'Spelen', 'Knuffelen', 'Verkennen'],
    bio:
      '🐯 Joey, lieve tijger, houdt van spelen en knuffels.<br/>' +
      '🏡 Zoekt warme thuis met mama Jools, sociaal en speels.<br/>' +
      '🌈 Veel bewegingsruimte binnen en buiten nodig.<br/>' +
      "🚫 Geen andere katten, honden of kleine kinderen vanwege Jools' temperament.",
    imagePathNames: [
      'assets/kittens/jools-joey-1.png',
      'assets/kittens/jools-joey-2.png',
      'assets/kittens/jools-joey-3.png',
      'assets/kittens/jools-joey-4.png',
      'assets/kittens/jools-joey-5.png',
      'assets/kittens/jools-joey-6.png',
      'assets/kittens/jools-joey-7.png',
    ],
  },
  {
    id: 'd407bc64-ba78-4f50-80b7-93e6b7fb0036',
    name: 'Dora',
    age: '10 maanden',
    likes: ['Geduld', 'Aandacht', 'Liefde', 'Kopjes geven'],
    bio:
      '🐾 Dora, prachtige lapjeskat met sprekende groene ogen.<br/>' +
      '💔 Jong trauma maakt haar verlegen en wantrouwend, niet agressief, maar houdt niet van aanraking.<br/>' +
      '🏡 Met geduld en liefde kan ze uitgroeien tot een lieve huiskat; geeft al kopjes aan haar opvangmama.<br/>' +
      '🚸 Niet geschikt voor gezin met kleine kinderen of honden, maar komt goed overeen met andere katten zolang ze zich kan terugtrekken.',
    imagePathNames: ['assets/kittens/dora-1.jpg', 'assets/kittens/dora-2.jpg', 'assets/kittens/dora-3.jpg'],
  },
  {
    id: '61c9c2b1-1ed0-4c0a-8d4b-c8a29fc72565',
    name: 'Frankie & Fen',
    age: '7 maanden',
    likes: ['Warmte', 'Samen ravotten', 'Geduld', 'Buiten zijn'],
    bio:
      '👋 Hallo, wij zijn (pleeg)broertjes Frankie en Fen.<br/>' +
      '🤝 Beide hebben wat tijd nodig om te wennen aan mensen, maar voelen zich super thuis, lekker warm.<br/>' +
      '🙌 Niet zo fan van grijpende handen, maar ik, Frankie, heb prachtige witte sokjes, terwijl mijn broertje nergens een spikkeltje wit heeft!<br/>' +
      '👁️ Helaas heeft mijn broertje zijn oogje verloren door ziekte, maar dat weerhoudt hem er niet van om achter mij aan te lopen. Hij is er snel aan gewend, dat is duidelijk!<br/>' +
      '🛋️ Niet echt knuffelkatjes, maar liggen graag wat verder op de zetel en ravotten rond met elkaar.<br/>' +
      '🏡 Fen en Frankie zoeken een huisje waar geduld en begrip voor hen is. Ze hebben misschien na een wenperiode behoefte om buiten te zijn. Andere kattenvriendjes zijn geen probleem.',
    imagePathNames: [
      'assets/kittens/frankie-fen-1.jpg',
      'assets/kittens/frankie-fen-2.jpeg',
      'assets/kittens/frankie-fen-3.jpeg',
      'assets/kittens/frankie-fen-4.jpeg',
    ],
  },
  {
    id: 'ff765432-353e-40ca-9eff-3f2ce4bf92ef',
    name: 'Simba & Scooby',
    age: '1 jaar',
    likes: ['Actief spelen', 'Kopjes geven', 'Klimmen', 'Knuffelen'],
    bio:
      '🐾 Simba, mooi tijgertje met grote vlekken, actief en nieuwsgierig. Kopjes na het spelen.<br/>' +
      "🐯 Scooby, grijs tijgertje met witte sokjes. Spring in 't veld, houdt van balletjes, klimmen en knuffelen.<br/>" +
      '🏡 Op zoek naar een forever-home in een gezin, met of zonder kindjes en andere dierenvriendjes.',
    imagePathNames: [
      'assets/kittens/simba-scooby-1.jpg',
      'assets/kittens/simba-scooby-2.jpg',
      'assets/kittens/simba-scooby-3.jpg',
      'assets/kittens/simba-scooby-4.jpg',
      'assets/kittens/simba-scooby-5.jpg',
      'assets/kittens/simba-scooby-6.png',
    ],
  },
];
