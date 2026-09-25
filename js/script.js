/* =========================================================
   FANDOMVERSE APPLICATION
   No backend required
   LocalStorage / SessionStorage used where needed
========================================================= */

"use strict";


/* =========================================================
   CATEGORY DATA
========================================================= */

const categories = [

    {
        id: "anime",
        name: "Anime",
        icon: "fa-solid fa-dragon"
    },

    {
        id: "gaming",
        name: "Gaming",
        icon: "fa-solid fa-gamepad"
    },

    {
        id: "movies",
        name: "Movies",
        icon: "fa-solid fa-film"
    },

    {
        id: "tv",
        name: "TV Shows",
        icon: "fa-solid fa-tv"
    },

    {
        id: "kpop",
        name: "K-Pop",
        icon: "fa-solid fa-music"
    },

    {
        id: "comics",
        name: "Comics",
        icon: "fa-solid fa-book-open"
    },

    {
        id: "manga",
        name: "Manga",
        icon: "fa-solid fa-book"
    }

];


/* =========================================================
   IMAGE COLLECTION
========================================================= */

const images = {

    anime:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=90",

    anime2:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=90",

    gaming:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=90",

    gaming2:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=90",

    movies:
        "https://i.ytimg.com/vi/f_bKjZeJBBI/hqdefault.jpg",

    movies2:
        "https://i.ytimg.com/vi/iFl4YeX6jmc/hqdefault.jpg",

    tv:
        "https://i.ytimg.com/vi/BLBvbMtjyAQ/hqdefault.jpg",

    kpop:
        "https://i.ytimg.com/vi/CgCVZdcKcqY/hqdefault.jpg",

    music:
        "https://i.ytimg.com/vi/1jKnI_ib8c8/hqdefault.jpg",

    comics:
        "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?auto=format&fit=crop&w=900&q=90",

    manga:
        "https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088851303/240/9784088851303.jpg",

    merchandise:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=90",

    shoes:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=90",

    hoodie:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=90",

    figure:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=90"

};


/* =========================================================
   CONTENT DATA
========================================================= */

const content = [

    {
        id: 1,
        category: "anime",
        title: "The Rise of a New Anime Generation",
        description:
            "Explore how modern anime is creating new fandom communities around the world.",
        type: "article",
        image: images.anime,
        date: "2026-05-20",
        popularity: 98,
        featured: true
    },

    {
        id: 2,
        category: "gaming",
        title: "Top RPG Worlds Every Gamer Should Explore",
        description:
            "A journey through immersive gaming worlds, characters and stories.",
        type: "article",
        image: images.gaming,
        date: "2026-05-18",
        popularity: 95,
        featured: true
    },

    
   

    {
        id: 5,
        category: "kpop",
        title: "Why K-Pop Communities Are So Global",
        description:
            "Music, performances and fan culture across international communities.",
        type: "article",
        image: "https://media.assettype.com/outlook-respawn/2026-03-13/zjd381hw/k-pop-global-export-boom-domestic-authority-tension.jpg",  //here
        date: "2026-05-12",
        popularity: 97,
        featured: true
    },

    {
        id: 6,
        category: "comics",
        title: "The Art of Modern Comics",
        description:
            "Discover how artists continue to reinvent the visual language of comics.",
        type: "article",
        image: images.comics,
        date: "2026-05-10",
        popularity: 90,
        featured: true
    },

    {
        id: 7,
        category: "manga",
        title: "Inside the World of Manga Storytelling",
        description:
            "Explore visual storytelling techniques used by manga creators.",
        type: "article",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvd-X53ir3LCUkyoOD0YCvC1LnetHZ1ykg4gHBh6OYg&s=10",
        date: "2026-05-08",
        popularity: 92,
        featured: true
    },

    {
        id: 8,
        category: "anime",
        title: "Anime Visual Gallery",
        description: "A curated collection of anime-inspired visual moments.",
        type: "gallery",
        image: images.anime2,
        date: "2026-04-20",
        popularity: 88,
        featured: false
    },

    {
        id: 9,
        category: "gaming",
        title: "Gaming Setup Showcase",
        description: "Explore immersive gaming environments.",
        type: "gallery",
        image: images.gaming2,
        date: "2026-04-18",
        popularity: 87,
        featured: false
    },

  

    {
        id: 11,
        category: "kpop",
        title: "Live Performance Collection",
        description: "Explore live music and performance culture.",
        type: "video",
        image: images.music,
        date: "2026-04-12",
        popularity: 96,
        featured: false
    },

    {
        id: 12,
        category: "manga",
        title: "Manga Audio Stories",
        description: "Podcast-style fandom discussions and audio clips.",
        type: "audio",
        image: "https://i.ytimg.com/vi/DKNM-3LpfZE/hqdefault.jpg",
        date: "2026-04-10",
        popularity: 83,
        featured: false
    },


    /* =========================================================
       HIGH-END PC GAMING PICKS
    ========================================================= */

    {
        id: 101,
        category: "gaming",
        title: "Cyberpunk 2077",
        description: "A story-driven open-world RPG set in Night City, where V takes on dangerous jobs, powerful corporations and the mystery of the Relic. PC players can explore a dense futuristic city with deep character builds and cinematic quests.",
        type: "article",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
        date: "2026-09-20",
        popularity: 99,
        featured: true
    },

    {
        id: 102,
        category: "gaming",
        title: "Red Dead Redemption 2",
        description: "Rockstar's epic western adventure follows Arthur Morgan and the Van der Linde gang across a vast open world. It combines cinematic storytelling, exploration, combat, wildlife and a detailed living frontier.",
        type: "article",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
        date: "2026-09-18",
        popularity: 98,
        featured: true
    },

    {
        id: 103,
        category: "gaming",
        title: "Baldur's Gate 3",
        description: "A massive fantasy RPG built around party-based adventure, branching choices and turn-based combat. Your decisions can change relationships, quests and the direction of the story across the Forgotten Realms.",
        type: "article",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
        date: "2026-09-16",
        popularity: 97,
        featured: true
    },

    {
        id: 104,
        category: "gaming",
        title: "Elden Ring",
        description: "FromSoftware's open-world action RPG sends players across the Lands Between to discover bosses, weapons, hidden areas and a huge interconnected fantasy world. Exploration and build experimentation are central to the experience.",
        type: "article",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
        date: "2026-09-14",
        popularity: 97,
        featured: true
    },

    {
        id: 105,
        category: "gaming",
        title: "Hogwarts Legacy",
        description: "A single-player open-world wizarding adventure set in the Hogwarts world. Players attend classes, learn spells, explore magical locations, complete quests and develop their own student character.",
        type: "article",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg",
        date: "2026-09-12",
        popularity: 95,
        featured: false
    },

    {
        id: 106,
        category: "gaming",
        title: "Counter-Strike 2",
        description: "Valve's competitive tactical shooter focuses on precise gunplay, team strategy and round-based objectives. Steam's current charts continue to show Counter-Strike 2 among the most-played PC games.",
        type: "article",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
        date: "2026-09-10",
        popularity: 100,
        featured: true
    },

    /* =========================================================
       TRENDING MOVIES - REAL / OFFICIAL POSTER ART
    ========================================================= */

    {
        id: 201,
        category: "movies",
        title: "Resident Evil",
        description: "Zach Cregger's 2026 reinvention of the Resident Evil franchise follows Bryan, a medical courier whose routine night turns into a terrifying fight for survival. The film returns the series to a darker survival-horror direction while introducing a new story and characters rather than directly retelling the games. Sony Pictures lists Austin Abrams, Zach Cherry, Kali Reis and Paul Walter Hauser in the cast.",
        type: "article",
        image: "https://d9s3e2ooa0od7.cloudfront.net/assets/resident-evil/4569e7e0-a5b5-4b5b-84fc-2c39ede8ac67/4569e7e0-a5b5-4b5b-84fc-2c39ede8ac67.jpg",
        date: "2026-09-22",
        popularity: 100,
        featured: true,
        genre: "Survival Horror",
        director: "Zach Cregger",
        cast: "Austin Abrams • Zach Cherry • Kali Reis • Paul Walter Hauser"
    },
    {
        id: 202,
        category: "movies",
        title: "Mayday",
        description: "Mayday is a 2026 action-comedy built around a high-concept adventure with Ryan Reynolds and Kenneth Branagh. The story mixes action, comedy and a dangerous mission, giving the film a fast-moving blockbuster tone while keeping the character relationships at the center of the adventure.",
        type: "article",
        image: "https://i.ytimg.com/vi/om5Un9X720M/hqdefault.jpg",
        date: "2026-09-21",
        popularity: 99,
        featured: true,
        genre: "Action • Comedy",
        director: "Jonathan Goldstein & John Francis Daley",
        cast: "Ryan Reynolds • Kenneth Branagh"
    },
    {
        id: 203,
        category: "movies",
        title: "The Odyssey",
        description: "Christopher Nolan's The Odyssey adapts Homer's epic into a large-scale cinematic journey following Odysseus on his perilous voyage home after the Trojan War. The film is being presented as an IMAX-focused event and features Matt Damon as Odysseus alongside a major ensemble cast, bringing mythological locations, monsters and legendary encounters to the big screen.",
        type: "article",
        image: "https://i.ytimg.com/vi/f_bKjZeJBBI/hqdefault.jpg",
        date: "2026-09-20",
        popularity: 99,
        featured: true,
        genre: "Epic • Adventure • Mythology",
        director: "Christopher Nolan",
        cast: "Matt Damon • Tom Holland • Anne Hathaway • Zendaya"
    },
    {
        id: 204,
        category: "movies",
        title: "Spider-Man: Brand New Day",
        description: "Spider-Man: Brand New Day continues Peter Parker's story in a world where people no longer remember him. The official Sony synopsis follows Peter as he fights crime full-time while dealing with the emotional consequences of being forgotten, and a new threat forces him into a dangerous transformation. The cast includes Tom Holland, Zendaya, Sadie Sink, Jacob Batalon, Jon Bernthal, Tramell Tillman, Michael Mando and Mark Ruffalo.",
        type: "article",
        image: "https://i.ytimg.com/vi/62bIsvRcPv0/hqdefault.jpg",
        date: "2026-09-19",
        popularity: 98,
        featured: true,
        genre: "Action • Adventure • Superhero",
        director: "Destin Daniel Cretton",
        cast: "Tom Holland • Zendaya • Sadie Sink • Jacob Batalon • Jon Bernthal • Mark Ruffalo"
    },
    {
        id: 205,
        category: "movies",
        title: "The Whisper Man",
        description: "The Whisper Man is a Netflix mystery thriller based on Alex North's novel. A father and his son become connected to a disturbing case involving a notorious killer, turning a family crisis into a tense investigation filled with secrets, fear and psychological suspense.",
        type: "article",
        image: "https://m.media-amazon.com/images/M/MV5BZDdjOTQzMzEtZjYyOC00MWI0LWJlZDItNDBmMDFmODYxZDk1XkEyXkFqcGc%40._V1_.jpg",
        date: "2026-09-18",
        popularity: 97,
        featured: false,
        genre: "Mystery • Thriller • Horror",
        director: "James Watkins",
        cast: "Robert De Niro • Bobby Cannavale • Michelle Monaghan"
    },
    {
        id: 206,
        category: "movies",
        title: "The Dog Stars",
        description: "Ridley Scott's The Dog Stars is a post-apocalyptic survival drama based on Peter Heller's acclaimed novel. After a devastating pandemic, a pilot and his loyal dog try to survive in a dangerous world while an armed stranger changes the balance of their isolated life. The film stars Jacob Elordi and Josh Brolin.",
        type: "article",
        image: "https://www.laughingplace.com/uploads/media/2026/06/The-Dog-Stars-Trailer.jpg",
        date: "2026-09-17",
        popularity: 96,
        featured: false,
        genre: "Post-Apocalyptic • Survival",
        director: "Ridley Scott",
        cast: "Jacob Elordi • Josh Brolin"
    },
    {
        id: 207,
        category: "movies",
        title: "Coyote vs. Acme",
        description: "Coyote vs. Acme turns the classic Wile E. Coyote and Road Runner setup into a live-action and animation courtroom comedy. After another run of disastrous Acme products, Wile E. Coyote takes the company to court, creating a story that combines Looney Tunes chaos with a human legal adventure.",
        type: "article",
        image: "https://image.tmdb.org/t/p/original/jGiVm1i1qvRlIaVaJA7UKPFRWVf.jpg",
        date: "2026-09-16",
        popularity: 96,
        featured: false,
        genre: "Comedy • Animation • Family",
        director: "Dave Green",
        cast: "John Cena • Will Forte • Lana Condor"
    },
    {
        id: 208,
        category: "movies",
        title: "Star Wars: The Mandalorian and Grogu",
        description: "The Mandalorian and Grogu brings Din Djarin and Grogu from the Star Wars television universe into a theatrical adventure. The story continues their partnership while expanding the scale of their journey with cinematic action, new worlds and the wider Star Wars mythology.",
        type: "article",
        image: "https://i.ytimg.com/vi/8i_1IUJqlKg/hqdefault.jpg",
        date: "2026-09-15",
        popularity: 95,
        featured: true,
        genre: "Science Fiction • Adventure",
        director: "Jon Favreau",
        cast: "Pedro Pascal • Jeremy Allen White • Sigourney Weaver"
    },
    {
        id: 209,
        category: "movies",
        title: "The Runner",
        description: "The Runner is a 2026 thriller built around a race against time. The film's promotional material centers on a mother who must keep moving while following dangerous instructions to save her kidnapped son, turning an ordinary run into an increasingly desperate survival mission.",
        type: "article",
        image: "https://images.gram.pl/news/embed/xbjt20260717084610654bvua.jpg",
        date: "2026-09-14",
        popularity: 94,
        featured: false,
        genre: "Thriller • Drama",
        director: "Kevin Macdonald",
        cast: "Gal Gadot • Damian Lewis • Rory Wilmot"
    },
    
    {
        id: 211,
        category: "movies",
        title: "Mutiny",
        description: "Mutiny is a 2026 action thriller starring Jason Statham and set against a dangerous maritime backdrop. Betrayal, pursuit and survival collide as the protagonist is forced into a violent struggle aboard a ship, giving the film a contained, high-pressure action setting.",
        type: "article",
        image: "https://img.asmedia.epimg.net/resizer/v2/Q6VNCXDA4VFE7HNF67M4BPQFHE.jpg?auth=cafeb76b13ea248ef0633d2d6567f7d26ffbf104a340d8e680c18a707755d95c&width=1440",
        date: "2026-09-12",
        popularity: 93,
        featured: false,
        genre: "Action • Thriller",
        director: "Jean-François Richet",
        cast: "Jason Statham"
    },
    
    {
        id: 213,
        category: "movies",
        title: "Onslaught",
        description: "Onslaught is an action-horror thriller from A24 centered on a mother who must protect her daughter when violence erupts around them. The campaign presents Adria Arjona as a former Army sniper pushed back into combat, creating a tense mix of family protection, military action and horror.",
        type: "article",
        image: "https://www.hola.com/us/horizon/original_aspect_ratio/b1990e41022d-screenshot-2026-07-27-at-21238-pm.png",
        date: "2026-09-10",
        popularity: 91,
        featured: false,
        genre: "Action • Horror • Thriller",
        director: "Adam Wingard",
        cast: "Adria Arjona • Dan Stevens • Drew Starkey • Rebecca Hall"
    },
    {
        id: 214,
        category: "movies",
        title: "Toy Story 5",
        description: "Toy Story 5 returns Woody, Buzz Lightyear, Jessie and the rest of the toy gang for a new Pixar adventure built around the changing relationship between children, toys and technology. The official Disney material introduces Lilypad, a high-tech smart tablet that becomes a new challenge for the toys and pushes the classic characters into another emotional mission.",
        type: "article",
        image: "https://lumiere-a.akamaihd.net/v1/images/au_movies_pixar_toy-story-5_payoff_poster_ae3360f6.jpeg?region=0%2C0%2C540%2C810",
        date: "2026-09-09",
        popularity: 96,
        featured: true,
        genre: "Animation • Family • Adventure",
        director: "Andrew Stanton",
        cast: "Tom Hanks • Tim Allen • Joan Cusack • Greta Lee"
    },
    {
        id: 215,
        category: "movies",
        title: "The Sheep Detectives",
        description: "The Sheep Detectives is a playful mystery-comedy in which an unusual group of sheep become involved in solving a case. The promotional art leans into the film's family-friendly detective theme, using the flock itself as the central visual hook and giving the story a light, humorous identity.",
        type: "article",
        image: "https://www.dvd-trailers.gr/posters/oi_malliaroi_detectives_2026.jpg",
        date: "2026-09-08",
        popularity: 90,
        featured: false,
        genre: "Comedy • Mystery • Family",
        director: "To be announced",
        cast: "Ensemble voice cast"
    },
    {
        id: 216,
        category: "movies",
        title: "The Drama",
        description: "A24's The Drama follows a couple whose wedding becomes much more complicated than expected. Zendaya and Robert Pattinson headline the story, while the film's promotional material presents the relationship as a strange, emotionally charged mix of romance, discomfort and dark comedy.",
        type: "article",
        image: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/243663/Damage_DOM_Online_1-Sheet_Fin21_R-Z_HR.jpg",
        date: "2026-09-07",
        popularity: 90,
        featured: false,
        genre: "Romance • Drama • Dark Comedy",
        director: "Kristoffer Borgli",
        cast: "Zendaya • Robert Pattinson"
    },
    {
        id: 217,
        category: "movies",
        title: "Mother Mary",
        description: "Mother Mary is David Lowery's music-driven drama starring Anne Hathaway and Michaela Coel. The film explores fame, performance, ambition and relationships through the story of a major musician, with original music connected to Charli XCX, Jack Antonoff and FKA twigs.",
        type: "article",
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/6107ec57-b972-4c0f-a38a-31ff253c740c/1920x",
        date: "2026-09-06",
        popularity: 89,
        featured: false,
        genre: "Drama • Music",
        director: "David Lowery",
        cast: "Anne Hathaway • Michaela Coel • Hunter Schafer"
    },
    {
        id: 218,
        category: "movies",
        title: "Street Fighter",
        description: "The 2026 Street Fighter film brings Capcom's iconic fighting-game world to live action. The movie is built around recognizable fighters, tournament-style conflict and martial-arts spectacle, translating the game's competitive energy into a new cinematic story.",
        type: "article",
        image: "https://cdn-origin.cool-style.com.tw/cool/2025/12/G772uq5agAEQZzk.jpg",
        date: "2026-09-05",
        popularity: 94,
        featured: true,
        genre: "Action • Martial Arts",
        director: "Kitao Sakurai",
        cast: "Andrew Koji • Noah Centineo • Jason Momoa"
    },
    {
        id: 219,
        category: "movies",
        title: "Avengers: Doomsday",
        description: "Avengers: Doomsday is Marvel Studios' next major superhero event, bringing a large ensemble of Marvel characters into a new conflict. The film is positioned as a major crossover chapter and features Robert Downey Jr. in a new role, with the story expanding the wider Marvel Cinematic Universe.",
        type: "article",
        image: "https://i.ytimg.com/vi/iFl4YeX6jmc/hqdefault.jpg",
        date: "2026-09-04",
        popularity: 98,
        featured: true,
        genre: "Superhero • Action • Sci-Fi",
        director: "Anthony Russo & Joe Russo",
        cast: "Robert Downey Jr. • Chris Hemsworth • Pedro Pascal • Vanessa Kirby"
    },
    {
        id: 220,
        category: "movies",
        title: "Heart of the Beast",
        description: "Heart of the Beast is a survival thriller centered on a former special forces soldier and his military-trained dog after a dangerous mission leaves them stranded in the Alaskan wilderness. Brad Pitt leads the film, with the story focusing on loyalty, survival and the bond between a soldier and his canine companion.",
        type: "article",
        image: "https://i.ytimg.com/vi/JFQcDFhNh4o/hqdefault.jpg",
        date: "2026-09-03",
        popularity: 88,
        featured: false,
        genre: "Survival • Thriller • Action",
        director: "David Ayer",
        cast: "Brad Pitt"
    }
];


/* =========================================================
   TRENDING TV SHOWS - 2026
========================================================= */

const trendingTVShows = [
    {
        id: 301,
        category: "tv",
        title: "The Gentlemen",
        description: "Guy Ritchie\'s crime-comedy series follows Eddie Horniman after he unexpectedly inherits a country estate and discovers that it sits at the center of a profitable criminal operation.",
        type: "article",
        image: "https://i.ytimg.com/vi/01IeKpHvgvM/hqdefault.jpg",
        date: "2026-09-24",
        popularity: 100,
        featured: true
    },
    {
        id: 302,
        category: "tv",
        title: "Silo",
        description: "A dystopian mystery set in an underground silo where thousands of people live under strict rules. Engineer Juliette Nichols begins uncovering secrets about why the silo exists and what lies outside.",
        type: "article",
        image: "https://i.ytimg.com/vi/BLBvbMtjyAQ/hqdefault.jpg",
        date: "2026-09-23",
        popularity: 99,
        featured: true
    },
    {
        id: 303,
        category: "tv",
        title: "Lanterns",
        description: "The 2026 DC series follows Hal Jordan and John Stewart as Green Lanterns investigating a mystery on Earth, bringing a grounded cosmic-superhero story into the DC Universe.",
        type: "article",
        image: "https://i.ytimg.com/vi/THq3riWv9bk/hqdefault.jpg",
        date: "2026-09-22",
        popularity: 98,
        featured: true
    },
    {
        id: 304,
        category: "tv",
        title: "Reacher",
        description: "Jack Reacher is a former military investigator who travels from place to place and becomes involved in dangerous conspiracies, using his investigative skills and combat experience to uncover the truth.",
        type: "article",
        image: "https://images.justwatch.com/poster/310578329/s718/reacher.jpg",
        date: "2026-09-21",
        popularity: 97,
        featured: true
    },
    {
        id: 305,
        category: "tv",
        title: "Bleach: Thousand-Year Blood War",
        description: "Ichigo Kurosaki and the Soul Reapers face the Quincy army in the final major conflict of the Bleach story, with the fate of the Soul Society hanging in the balance.",
        type: "article",
        image: "https://cdn.europosters.eu/image/1300/posters/bleach-tybw-key-art-i280058.jpg",
        date: "2026-09-20",
        popularity: 96,
        featured: true
    },
    {
        id: 306,
        category: "tv",
        title: "Ted Lasso",
        description: "American football coach Ted Lasso is recruited to manage an English football club despite having little experience with the sport, building friendships and changing the people around him.",
        type: "article",
        image: "https://images.justwatch.com/poster/320936342/s718/ted-lasso.jpg",
        date: "2026-09-19",
        popularity: 95,
        featured: true
    },
    {
        id: 307,
        category: "tv",
        title: "Lioness",
        description: "A CIA Marine team works undercover against high-level terrorist threats. The series mixes covert operations, military action and the personal cost of intelligence work.",
        type: "article",
        image: "https://upload.wikimedia.org/wikipedia/en/6/64/Lioness_%282025%29_title_card.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        date: "2026-09-18",
        popularity: 94,
        featured: false
    },
    {
        id: 308,
        category: "tv",
        title: "House of the Dragon",
        description: "Set generations before Game of Thrones, the series follows the Targaryen dynasty and the political struggle surrounding succession to the Iron Throne.",
        type: "article",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcajxVs-LT3q8F0DC-nZRHkIO4l72KOjSrQAv_CKfIw&s=10",
        date: "2026-09-17",
        popularity: 93,
        featured: true
    },
    {
        id: 309,
        category: "tv",
        title: "Breaking Bad",
        description: "Chemistry teacher Walter White enters the illegal drug trade after receiving a cancer diagnosis, partnering with former student Jesse Pinkman and transforming his life completely.",
        type: "article",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ib7u8qZ6oAxKlARL3iHs52llTDxANpBj66racEGsIQ&s=10",
        date: "2026-09-16",
        popularity: 92,
        featured: false
    },
    {
        id: 310,
        category: "tv",
        title: "Wednesday",
        description: "Wednesday Addams attends Nevermore Academy, where she investigates a string of mysterious incidents while dealing with school life, family secrets and supernatural dangers.",
        type: "article",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KxXSBtzP_CNPJrGqMPRAzQGItvgwHB1l8XoPhDusLA&s=10",
        date: "2026-09-15",
        popularity: 91,
        featured: true
    }
];

content.push(...trendingTVShows);


/* =========================================================
   K-POP GROUPS - OFFICIAL LOGOS + MEMBER DETAILS
========================================================= */

const kpopGroups = [
    {
        id: 401, category: "kpop", title: "BTS", type: "article", date: "2026-09-24", popularity: 100, featured: true,
        image: "https://i.ytimg.com/vi/_gyultVTesk/hqdefault.jpg",
        groupLogo: "https://i.ytimg.com/vi/_gyultVTesk/hqdefault.jpg",
        description: "BTS is a seven-member South Korean group whose music combines pop, hip-hop, R&B and performance-focused production. The official BIGHIT MUSIC profile lists RM, Jin, SUGA, j-hope, Jimin, V and Jung Kook as the members. Their fandom is known as ARMY, and the group has built a global career through albums, stadium performances and self-produced music.",
        members: ["RM — leader, rapper and songwriter", "Jin — vocalist", "SUGA — rapper, producer and songwriter", "j-hope — rapper, dancer and performer", "Jimin — vocalist and dancer", "V — vocalist and performer", "Jung Kook — vocalist and performer"]
    },
    {
        id: 402, category: "kpop", title: "BLACKPINK", type: "article", date: "2026-09-23", popularity: 99, featured: true,
        image: "https://i.ytimg.com/vi/2GJfWMYCWY0/hqdefault.jpg",
        groupLogo: "https://www.rollingstone.com/wp-content/uploads/2022/07/%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%A8%E1%84%91%E1%85%B5%E1%86%BC%E1%84%8F%E1%85%B3-%E1%84%80%E1%85%A9%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8-%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg?w=1581&h=1054&crop=1",
        description: "BLACKPINK is a four-member South Korean girl group known for combining K-pop, pop, hip-hop and EDM influences with highly visual performances. YG Entertainment's official profile lists JISOO, JENNIE, ROSÉ and LISA as the four members. The group has developed a major international touring, streaming and fashion presence.",
        members: ["JISOO — vocalist", "JENNIE — rapper and vocalist", "ROSÉ — vocalist and guitarist", "LISA — rapper, vocalist and dancer"]
    },
    {
        id: 403, category: "kpop", title: "TWICE", type: "article", date: "2026-09-22", popularity: 98, featured: true,
        image: "https://m.media-amazon.com/images/M/MV5BNjAzNDRkYjAtMjdiYS00NTczLTk3MmUtNzQyM2EwNTUwOGNjXkEyXkFqcGc%40._V1_.jpg",
        groupLogo: "https://m.media-amazon.com/images/M/MV5BNjAzNDRkYjAtMjdiYS00NTczLTk3MmUtNzQyM2EwNTUwOGNjXkEyXkFqcGc%40._V1_.jpg",
        description: "TWICE is a nine-member girl group under JYP Entertainment, recognized for bright pop releases, choreography and a strong fan community. The official TWICE profile lists NAYEON, JEONGYEON, MOMO, SANA, JIHYO, MINA, DAHYUN, CHAEYOUNG and TZUYU. Their music spans Korean and Japanese releases and multiple pop styles.",
        members: ["NAYEON — vocalist", "JEONGYEON — vocalist", "MOMO — dancer and vocalist", "SANA — vocalist", "JIHYO — leader and vocalist", "MINA — dancer and vocalist", "DAHYUN — rapper and vocalist", "CHAEYOUNG — rapper and vocalist", "TZUYU — vocalist and visual"]
    },
    {
        id: 404, category: "kpop", title: "Stray Kids", type: "article", date: "2026-09-21", popularity: 97, featured: true,
        image: "https://i.ytimg.com/vi/TtfeL-8iO64/hqdefault.jpg",
        groupLogo: "https://i.ytimg.com/vi/TtfeL-8iO64/hqdefault.jpg",
        description: "Stray Kids is an eight-member JYP Entertainment group known for self-directed music, powerful rap, energetic choreography and a distinctive performance identity. JYP's official profile lists BANG CHAN, LEE KNOW, CHANGBIN, HYUNJIN, HAN, FELIX, SEUNGMIN and I.N. The group frequently explores themes of identity, ambition and finding an individual path.",
        members: ["BANG CHAN — leader, producer and vocalist", "LEE KNOW — dancer and vocalist", "CHANGBIN — rapper and producer", "HYUNJIN — rapper, dancer and vocalist", "HAN — rapper, vocalist and producer", "FELIX — rapper and dancer", "SEUNGMIN — vocalist", "I.N — vocalist"]
    },
    {
        id: 405, category: "kpop", title: "SEVENTEEN", type: "article", date: "2026-09-20", popularity: 96, featured: true,
        image: "https://i.ytimg.com/vi/v1Gmh4S-mQ4/hqdefault.jpg",
        groupLogo: "https://i.ytimg.com/vi/v1Gmh4S-mQ4/hqdefault.jpg",
        description: "SEVENTEEN is a thirteen-member PLEDIS Entertainment group known for its self-producing approach, synchronized choreography and three-unit structure: hip-hop, vocal and performance. PLEDIS lists S.COUPS, JEONGHAN, JOSHUA, JUN, HOSHI, WONWOO, WOOZI, THE 8, MINGYU, DK, SEUNGKWAN, VERNON and DINO. The group's identity is strongly connected to teamwork and member participation in music and performance.",
        members: ["S.COUPS — leader and rapper", "JEONGHAN — vocalist", "JOSHUA — vocalist", "JUN — performance and vocalist", "HOSHI — performance leader and dancer", "WONWOO — rapper", "WOOZI — vocalist and producer", "THE 8 — dancer and vocalist", "MINGYU — rapper", "DK — vocalist", "SEUNGKWAN — vocalist", "VERNON — rapper", "DINO — dancer and vocalist"]
    },
    {
        id: 406, category: "kpop", title: "NewJeans", type: "article", date: "2026-09-19", popularity: 95, featured: true,
        image: "https://images.seeklogo.com/logo-png/64/1/newjeans-logo-png_seeklogo-649834.png",
        groupLogo: "https://images.seeklogo.com/logo-png/64/1/newjeans-logo-png_seeklogo-649834.png",
        description: "NewJeans became known for a minimalist, nostalgic approach to K-pop that blends pop, R&B and contemporary production. The group's public lineup and agency situation changed during 2025–2026; a July 2026 Yonhap report described new group content featuring four members — Haerin, Hyein, Minji and Hanni — while noting that Minji's agency status was still being discussed at that time. This card therefore reflects the reported 2026 situation rather than assuming an unchanged five-member lineup.",
        members: ["MINJI — vocalist", "HANNI — vocalist", "HAERIN — vocalist", "HYEIN — vocalist", "DANIELLE — former fifth member; agency announced contract termination in 2025"]
    },
    {
        id: 407, category: "kpop", title: "aespa", type: "article", date: "2026-09-18", popularity: 94, featured: false,
        image: "https://i.pinimg.com/736x/f0/a5/21/f0a521fdbb92296e2ef171519659b01a.jpg",
        groupLogo: "https://i.ytimg.com/vi/2GJfWMYCWY0/hqdefault.jpg",
        description: "aespa is an SM Entertainment girl group built around a futuristic concept that connects real-world members with virtual counterparts. Their sound moves across electropop, hip-hop and experimental pop, while their visual identity frequently uses digital, cyber and alternate-world themes.",
        members: ["KARINA — leader, rapper and dancer", "GISELLE — rapper and vocalist", "WINTER — vocalist and dancer", "NINGNING — main vocalist"]
    },
    {
        id: 408, category: "kpop", title: "IVE", type: "article", date: "2026-09-17", popularity: 93, featured: false,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ive_logo_%28Black%29.svg",
        groupLogo: "https://i.ytimg.com/vi/2GJfWMYCWY0/hqdefault.jpg",
        description: "IVE is a Starship Entertainment girl group known for polished pop production, confident performance concepts and a strong emphasis on individuality. The group debuted as a six-member act and has built a broad Korean and international audience through title tracks, choreography and fashion-forward visuals.",
        members: ["GAEUL — rapper and dancer", "YUJIN — leader and vocalist", "REI — rapper and vocalist", "WONYOUNG — vocalist", "LIZ — main vocalist", "LEESEO — vocalist"]
    },
    {
        id: 409, category: "kpop", title: "LE SSERAFIM", type: "article", date: "2026-09-16", popularity: 92, featured: false,
        image: "https://i.ytimg.com/vi/a2grcJdfXmY/hqdefault.jpg",
        groupLogo: "https://i.ytimg.com/vi/a2grcJdfXmY/hqdefault.jpg",
        description: "LE SSERAFIM is a Source Music girl group under HYBE known for performance-heavy releases and themes of confidence, resilience and moving forward. Their visual branding uses a sharp, minimal logo and a strong fashion-performance identity.",
        members: ["SAKURA — vocalist and performer", "KIM CHAEWON — leader and vocalist", "HUH YUNJIN — vocalist", "KAZUHA — dancer and vocalist", "HONG EUNCHAE — vocalist and performer"]
    },
    {
        id: 410, category: "kpop", title: "ENHYPEN", type: "article", date: "2026-09-15", popularity: 91, featured: false,
        image: "https://i.ytimg.com/vi/K5SXamqxoio/hqdefault.jpg",
        groupLogo: "https://i.ytimg.com/vi/K5SXamqxoio/hqdefault.jpg",
        description: "ENHYPEN is a BELIFT LAB group known for performance-focused K-pop with recurring themes of youth, identity, fantasy and connection. The group's music and visual storytelling often build a connected universe across albums, videos and performances.",
        members: ["JUNGWON — leader and vocalist", "HEESEUNG — vocalist", "JAY — rapper and vocalist", "JAKE — vocalist", "SUNGHOON — dancer and vocalist", "SUNOO — vocalist", "NI-KI — dancer and vocalist"]
    }
];

content.push(...kpopGroups);


/* =========================================================
   CHARACTERS
========================================================= */


/* =========================================================
   CHARACTERS — VERIFIED POPULAR CHARACTERS
   Replaced placeholder/fake names with recognizable characters.
   Images use official publisher/studio/developer assets or
   official video thumbnails.
========================================================= */

const characters = [
    // ANIME
    {id:2001,name:"Naruto Uzumaki",featured:true,category:"anime",series:"Naruto",image:"https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=%2Fnaruto%2Fjp%2Fnews%2F2024%2F07%2F24%2FQHv7oJWebyjF9t8V%2F43968.jpg",biography:"Naruto Uzumaki is the hero of Naruto who grows from an isolated young ninja into the Seventh Hokage. His story is built around perseverance, friendship and protecting the Hidden Leaf Village.",traits:"Ninja • Hokage • Determined",source:"NARUTO Official Site"},
    {id:2002,name:"Goku",featured:true,category:"anime",series:"Dragon Ball",image:"https://crystalpng.com/wp-content/uploads/2025/09/GOKU-PNG.png",biography:"Goku is the central hero of Dragon Ball and one of anime's most recognizable characters. He is a Saiyan martial artist who constantly trains and protects Earth from powerful threats.",traits:"Saiyan • Martial Artist • Hero",source:"Dragon Ball"},
    {id:2003,name:"Monkey D. Luffy",featured:true,category:"anime",series:"One Piece",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW3EmSSQY9Z62eeT3vcu1gkEQwtkbwl1vLWneKJhRQ&s=10",biography:"Monkey D. Luffy is the captain of the Straw Hat Pirates and the central hero of One Piece. He travels the Grand Line chasing his dream of becoming the Pirate King.",traits:"Pirate Captain • Straw Hat • One Piece",source:"VIZ / Shueisha / Toei Animation"},
    {id:2004,name:"Satoru Gojo",category:"anime",series:"Jujutsu Kaisen",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhrhBdsW4RUQv1eAX-2rWzabLGNQg4oBJr-CGW7NVxg&s=10",biography:"Satoru Gojo is a powerful jujutsu sorcerer and teacher in Jujutsu Kaisen. He is known for the Six Eyes, Limitless technique and his confident personality.",traits:"Sorcerer • Six Eyes • JJK",source:"TOHO Animation / Shueisha"},
    {id:2005,name:"Tanjiro Kamado",category:"anime",series:"Demon Slayer",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NeI92CAEnpNWaILEtyiOLOpFiqkqUpsQVsaTL3ma3w&s=10",biography:"Tanjiro Kamado is the compassionate protagonist of Demon Slayer. He becomes a Demon Slayer while searching for a way to restore his sister Nezuko.",traits:"Demon Slayer • Swordsman • Compassionate",source:"Shueisha / Ufotable"},
    {id:2006,name:"Sasuke Uchiha",category:"anime",series:"Naruto",image:"https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=%2Fnaruto%2Fjp%2Fnews%2F2024%2F07%2F24%2F67oQQx2jkcz69vOr%2F43947.jpg",biography:"Sasuke Uchiha is Naruto's legendary rival and one of the last major Uchiha characters. His story follows revenge, redemption and his changing relationship with Naruto.",traits:"Uchiha • Shinobi • Rival",source:"NARUTO Official Site"},

    // GAMING
    {id:2007,name:"Mario",featured:true,category:"gaming",series:"Super Mario",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyFVGfo9Ar2J1UtyTzyAOSilOFTdH0uVpPbqqZ4ta7w&s=10",biography:"Mario is Nintendo's iconic Mushroom Kingdom hero. He has appeared across platforming, racing, sports and adventure games for decades.",traits:"Hero • Plumber • Nintendo Icon",source:"Nintendo Official Site"},
    {id:2008,name:"Link",category:"gaming",series:"The Legend of Zelda",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUXPgZQEzVC9VJlIVaM7mg4zzsj-2c3swZMELSomv0Q&s=10",biography:"Link is the recurring hero of The Legend of Zelda and a defender of Hyrule. He is known for courage, exploration, swordplay and solving ancient mysteries.",traits:"Hero of Hyrule • Courage • Swordsman",source:"Nintendo Official Site"},
    {id:2009,name:"Pikachu",category:"gaming",series:"Pokémon",image:"https://i.pinimg.com/736x/82/c4/d7/82c4d79468a5b9a45e66f165303e71ab.jpg",biography:"Pikachu is the electric Pokémon and one of the world's most recognizable game characters. It is closely associated with Ash Ketchum and the wider Pokémon franchise.",traits:"Electric • Pokémon • Icon",source:"Pokémon"},
    {id:2010,name:"Sonic the Hedgehog",category:"gaming",series:"Sonic the Hedgehog",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzke76mNZDIXl2-cT1sIQJT2ghsUHMJbzpSfs6YDk8FQ&s=10",biography:"Sonic is Sega's super-fast blue hedgehog and the star of the Sonic the Hedgehog franchise. His adventures center on speed, freedom and stopping Dr. Eggman.",traits:"Speed • Hero • SEGA",source:"SEGA / Paramount Pictures"},
    {id:2011,name:"Kratos",category:"gaming",series:"God of War",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmq1wkP4rhOF9V7ln6S-cm-Wv_Pp_r-xkOvZn8xU99aQ&s=10",biography:"Kratos is the warrior protagonist of God of War. His story moves from Greek mythology into Norse mythology as he confronts gods, monsters and his own past.",traits:"Warrior • God • God of War",source:"Santa Monica Studio"},
    {id:2012,name:"Lara Croft",category:"gaming",series:"Tomb Raider",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lS8ZX2LSgS03ry-qJRRikoTibc5RFWmEBqRV5UX_dA&s=10",biography:"Lara Croft is the adventurous archaeologist at the center of Tomb Raider. She explores ancient ruins, solves puzzles and survives dangerous expeditions around the world.",traits:"Archaeologist • Explorer • Tomb Raider",source:"Crystal Dynamics / Square Enix"},

    // MOVIES
    {id:2013,name:"Spider-Man",featured:true,category:"movies",series:"Marvel / Spider-Man",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGSXhnQCwO_h4nqHHSkPf3SzMdvjocCTHUvtcy7j4lg&s=10",biography:"Peter Parker is Spider-Man, the web-slinging Marvel hero whose stories combine responsibility, friendship and protecting New York. He is one of the most recognizable superhero characters in film.",traits:"Web-Slinger • Hero • Marvel",source:"Sony Pictures / Marvel"},
    {id:2014,name:"Iron Man",category:"movies",series:"Marvel / Iron Man",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyB9F4FOOGkZUCe0wOhSr5qskIYHp3VElpmRlqqSxkyA&s=10",biography:"Tony Stark is the armored superhero known as Iron Man. His technology, personality and sacrifice make him a central figure in the Avengers saga.",traits:"Armored Hero • Inventor • Avengers",source:"Marvel Entertainment"},
    {id:2015,name:"Captain America",category:"movies",series:"Marvel / Captain America",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgnqzqAkJnWm59UMkyeIbFgcUJ4AO0hWm4H2pK1cXtg&s=10",biography:"Steve Rogers is Captain America, the super-soldier who becomes a major Avengers leader. His film story spans the Second World War and the modern Marvel era.",traits:"Super Soldier • Avenger • Leader",source:"Marvel Studios / Marvel Entertainment"},
    {id:2016,name:"Black Panther",category:"movies",series:"Marvel / Black Panther",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMFYdzRi_Ex60pFNqre3xdc8ZlZX-JKr70AYq1Lai9w&s=10",biography:"T'Challa is Black Panther, protector and king of Wakanda. The character combines advanced technology, royal responsibility and the traditions of Wakanda.",traits:"Wakanda • King • Hero",source:"Marvel Studios / Marvel Entertainment"},
    {id:2017,name:"Darth Vader",category:"movies",series:"Star Wars",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckY1z_jlC5MWoNkVntSEB2JP5Vs5sioUVKh0uZftLCA&s=10",biography:"Darth Vader is the Sith Lord formerly known as Anakin Skywalker. He is one of the most recognizable figures in the Star Wars saga and a major symbol of its conflict.",traits:"Sith • Force User • Star Wars",source:"StarWars.com"},
    {id:2018,name:"Jack Sparrow",category:"movies",series:"Pirates of the Caribbean",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAWaqGTKuAAfbeHDBxFaRkeWTX737ZAfTKdM90vEBSw&s=10",biography:"Captain Jack Sparrow is the eccentric pirate at the center of Pirates of the Caribbean. He is known for clever escapes, unpredictable plans and his pursuit of freedom.",traits:"Pirate • Captain • Adventurer",source:"Disney"},

    // TV
    {id:2019,name:"Wednesday Addams",featured:true,category:"tv",series:"Wednesday",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmsM0davqNL-aa0tHtg9Iot_-f9cT1fxeU4Huko_r_w&s=10",biography:"Wednesday Addams is the central character of Netflix's Wednesday. She is a sharp, gothic student at Nevermore Academy who investigates mysteries around her.",traits:"Gothic • Detective • Addams Family",source:"Netflix Tudum"},
    {id:2020,name:"Eleven",category:"tv",series:"Stranger Things",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTU-AIET7oGK6y3GW2fS51V9CMSAczCSUNMZJPui_rQ&s=10",biography:"Eleven is a central Stranger Things character with powerful psychic abilities. Her friendships with the Hawkins group become a major part of the fight against supernatural threats.",traits:"Psychic • Hero • Hawkins",source:"Netflix Tudum"},
    {id:2021,name:"Walter White",category:"tv",series:"Breaking Bad",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYasoNaNyDIPMQEUr75qXQqfYsqvcN2gHauQFaiXwYw&s=10",biography:"Walter White is the central character of Breaking Bad, a chemistry teacher whose choices transform his life and drive the series' story. He is portrayed by Bryan Cranston.",traits:"Chemist • Breaking Bad • Drama",source:"AMC"},
    {id:2022,name:"Rick Grimes",category:"tv",series:"The Walking Dead",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlsprQelC3Mzxl66uAd5otbiPxxV5Rxf5iwTMPKrYiQ&s",biography:"Rick Grimes is the former sheriff and central survivor at the heart of The Walking Dead. He is portrayed by Andrew Lincoln and becomes a leader of the survivor group.",traits:"Sheriff • Survivor • Leader",source:"The Walking Dead / AMC"},
    {id:2023,name:"Jon Snow",category:"tv",series:"Game of Thrones",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OReF8TTRtYSGaU6tQy-KcreegNVNOU7btlJSZxRSrA&s",biography:"Jon Snow is a central Game of Thrones character connected to House Stark and the Night's Watch. His story becomes deeply tied to the struggle for Westeros.",traits:"Stark • Night's Watch • Leader",source:"HBO / Game of Thrones"},
    {id:2024,name:"Sherlock Holmes",category:"tv",series:"Sherlock",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjEL7GMP0UM_v6GrCvN2stS3mnFpkZh3kRO6UBhcxUg&s=10",biography:"Sherlock Holmes is the brilliant consulting detective at the center of the BBC series Sherlock. He uses observation, deduction and unconventional methods to solve complex cases.",traits:"Detective • Deduction • BBC",source:"BBC"},

    // COMICS
    {id:2025,name:"Superman",category:"comics",series:"DC Comics",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj17ZQEFk3MI5qtSpswNeHESGi3-8FrgkkkYjIKdZzFw&s=10",biography:"Superman is Clark Kent, the Kryptonian hero who protects Metropolis. He is one of DC's foundational superheroes and is known for flight, strength and his commitment to helping others.",traits:"Super Strength • Flight • DC",source:"DC Official Character Page"},
    {id:2026,name:"Batman",featured:true,category:"comics",series:"DC Comics",image:"https://static.dc.com/dc/files/default_images/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?w=160",biography:"Batman is Bruce Wayne, Gotham City's vigilante detective. Without superpowers, he relies on training, technology, investigation and determination to fight crime.",traits:"Detective • Vigilante • DC",source:"DC Official Character Page"},
    {id:2027,name:"Wonder Woman",category:"comics",series:"DC Comics",image:"https://static.dc.com/dc/files/default_images/Char_Thumb_WonderWoman_20190116_5c3fc6aa51d064.76155401.jpg?w=160",biography:"Wonder Woman is Diana Prince, an Amazon warrior and one of DC's most enduring heroes. Her stories connect mythology, heroism and the defense of humanity.",traits:"Amazon • Warrior • DC",source:"DC Official Character Page"},
    {id:2028,name:"The Flash",category:"comics",series:"DC Comics",image:"https://static.dc.com/dc/files/default_images/Char_Thumb_Flash_20190116_5c3fcaaa18f023.90325986.jpg?w=160",biography:"The Flash is the super-speed hero whose connection to the Speed Force defines many DC stories. Multiple characters have carried the mantle, including Barry Allen.",traits:"Speed Force • Hero • DC",source:"DC Official Character Page"},
    {id:2029,name:"Deadpool",category:"comics",series:"Marvel",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wwB5KRvhwcFnFwSlR2HxfPCrCevFeeaRxt0E3z0QXQ&s=10",biography:"Deadpool is Marvel's wisecracking mercenary known for rapid healing, fourth-wall jokes and chaotic adventures. His stories mix action, comedy and superhero satire.",traits:"Mercenary • Healing • Marvel",source:"Marvel"},
    {id:2030,name:"The Joker",category:"comics",series:"DC Comics",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtOB38VyX05ZGjTR0SsuNizVmQORaRAv9FOnet5n25Q&s=10",biography:"The Joker is Batman's most famous arch-enemy and one of DC's best-known villains. His different stories portray him as a criminal mastermind obsessed with chaos and Batman.",traits:"Villain • Gotham • DC",source:"Warner Bros. / DC"},

    // MANGA
    {id:2031,name:"Yuji Itadori",category:"manga",series:"Jujutsu Kaisen",image:"https://i.ytimg.com/vi/DKNM-3LpfZE/hqdefault.jpg",biography:"Yuji Itadori is the protagonist of Jujutsu Kaisen. He is drawn into the world of cursed spirits and jujutsu sorcerers after a dangerous encounter with a cursed object.",traits:"Jujutsu Sorcerer • Protagonist • JJK",source:"TOHO Animation / Shueisha"},
    {id:2032,name:"Eren Yeager",category:"manga",series:"Attack on Titan",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkyLfGwEnQYJbdBoe0b34CHQtvhgN8WIasi5NlGYe13g&s=10",biography:"Eren Yeager is a central character in Attack on Titan whose story begins with a desire to destroy the Titans. His goals and worldview change dramatically as the series unfolds.",traits:"Titan • Scout • Attack on Titan",source:"Kodansha / MAPPA"},
    {id:2033,name:"Light Yagami",category:"manga",series:"Death Note",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJkAZpPRi0XAAG0yor1zC1T_fE_9St2QS_0NSvYYE-A&s=10",biography:"Light Yagami is the central character of Death Note. After discovering the supernatural notebook, he begins a dangerous plan to reshape the world according to his own idea of justice.",traits:"Strategist • Death Note • Protagonist",source:"Shueisha / Madhouse"},
    {id:2034,name:"Saitama",category:"manga",series:"One-Punch Man",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUGganfmNZrDPMDffBMuu1G_g0UhZydJUNjukoj_EhQ&s=10",biography:"Saitama is the hero of One-Punch Man who can defeat opponents with a single punch. His overwhelming strength contrasts with his everyday boredom and deadpan humor.",traits:"Hero • One Punch • Comedy",source:"Shueisha / Madhouse"},
    {id:2035,name:"Kakashi Hatake",category:"manga",series:"Naruto",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzokiWgPcE140dUB5EMly1Ny5W9laM-PymAgNBbDbxuA&s",biography:"Kakashi Hatake is Team 7's legendary Jonin leader, known as the Copy Ninja. He serves as a mentor to Naruto, Sasuke and Sakura while carrying his own complicated past.",traits:"Copy Ninja • Jonin • Mentor",source:"NARUTO Official Site"},
    
];


/* =========================================================
   EVENTS
========================================================= */

const events = [];

let eventId = 1;

categories.forEach(category => {

    for (let i = 1; i <= 3; i++) {

        events.push({

            id: eventId++,

            category: category.id,

            title:
                `${category.name} Fan Event ${i}`,

            date:
                `2026-${String(6 + i).padStart(2,"0")}-${String(5 + i).padStart(2,"0")}`,

            location:
                i === 1
                    ? "Tokyo"
                    : i === 2
                        ? "Seoul"
                        : "Los Angeles",

            description:
                `A community event celebrating the ${category.name} fandom with discussions, activities and fan experiences.`,

            status:
                i === 1
                    ? "upcoming"
                    : "past"

        });

    }

});


/* =========================================================
   TRAILERS
========================================================= */

const trailers = [

    // ANIME — real/current official or publisher trailers
    {id:201,category:"anime",title:"Fall 2026 Anime Season | Official Preview",image:"https://i.ytimg.com/vi/zjTA2uE_y_8/hqdefault.jpg",status:"upcoming",duration:"Season Preview",releaseDate:"Fall 2026",videoId:"zjTA2uE_y_8",source:"Crunchyroll"},
    {id:202,category:"anime",title:"Summer 2026 Anime Season | Official Preview",image:"https://i.ytimg.com/vi/DWM2IfkzLHo/hqdefault.jpg",status:"released",duration:"Season Preview",releaseDate:"Summer 2026",videoId:"DWM2IfkzLHo",source:"Crunchyroll"},
    {id:203,category:"anime",title:"Overgeared | Official Trailer",image:"https://i.ytimg.com/vi/XER9knL33-8/hqdefault.jpg",status:"upcoming",duration:"Official Trailer",releaseDate:"2026",videoId:"XER9knL33-8",source:"Crunchyroll"},
    {id:204,category:"anime",title:"Overgeared | Official Teaser",image:"https://i.ytimg.com/vi/sOT9Jp8Sdj0/hqdefault.jpg",status:"upcoming",duration:"Official Teaser",releaseDate:"2026",videoId:"sOT9Jp8Sdj0",source:"Crunchyroll"},
    {id:205,category:"anime",title:"Firefly Wedding | Main PV",image:"https://i.ytimg.com/vi/Ex9LrBK-7hk/hqdefault.jpg",status:"upcoming",duration:"Main PV",releaseDate:"October 2026",videoId:"Ex9LrBK-7hk",source:"Fuji TV / david production"},
    {id:206,category:"anime",title:"Magic Knight Rayearth | New Anime Project PV",image:"https://i.ytimg.com/vi/IWnj91xAq7o/hqdefault.jpg",status:"upcoming",duration:"Project PV",releaseDate:"2026",videoId:"IWnj91xAq7o",source:"E&H production"},

    // GAMING
    {id:207,category:"gaming",title:"Grand Theft Auto VI | Trailer 2",image:"https://i.ytimg.com/vi/VQRLujxTm3c/hqdefault.jpg",status:"upcoming",duration:"Trailer 2",releaseDate:"November 19, 2026",videoId:"VQRLujxTm3c",source:"Rockstar Games"},
    {id:208,category:"gaming",title:"Marvel Cosmic Invasion | Trailer",image:"https://i.ytimg.com/vi/cjoT4EoaUCs/hqdefault.jpg",status:"released",duration:"Official Trailer",releaseDate:"2025",videoId:"cjoT4EoaUCs",source:"Tribute Games"},
    {id:209,category:"gaming",title:"Tomb Raider: Catalyst | New Trailer",image:"https://i.ytimg.com/vi/olOTdoW6XsQ/hqdefault.jpg",status:"upcoming",duration:"New Trailer",releaseDate:"2027",videoId:"olOTdoW6XsQ",source:"Crystal Dynamics"},
    {id:210,category:"gaming",title:"Tomb Raider: Legacy of Atlantis | New Trailer",image:"https://i.ytimg.com/vi/1lJBNZ1Dk6k/hqdefault.jpg",status:"upcoming",duration:"New Trailer",releaseDate:"2026",videoId:"1lJBNZ1Dk6k",source:"Crystal Dynamics / Flying"},
    {id:211,category:"gaming",title:"Forest 3 | New Trailer",image:"https://i.ytimg.com/vi/YFNTrsa7eM8/hqdefault.jpg",status:"upcoming",duration:"New Trailer",releaseDate:"TBA",videoId:"YFNTrsa7eM8",source:"Endnight Games"},
    {id:212,category:"gaming",title:"Diablo IV: Lord of Hatred | Expansion Trailer",image:"https://i.ytimg.com/vi/3qrN2-u_V-c/hqdefault.jpg",status:"upcoming",duration:"Expansion Trailer",releaseDate:"2026",videoId:"3qrN2-u_V-c",source:"Blizzard Entertainment"},

    // MOVIES
    {id:243,category:"movies",title:"Resident Evil | Official Trailer",image:"https://i.ytimg.com/vi/9Aiv1cqmH4w/hqdefault.jpg",status:"released",duration:"Official Trailer",releaseDate:"September 18, 2026",videoId:"9Aiv1cqmH4w",source:"Sony Pictures Releasing"},
    {id:244,category:"movies",title:"Practical Magic 2 | Official Trailer",image:"https://i.ytimg.com/vi/Ho10_4IX1jE/hqdefault.jpg",status:"released",duration:"Official Trailer",releaseDate:"September 11, 2026",videoId:"Ho10_4IX1jE",source:"Warner Bros."},
    {id:213,category:"movies",title:"Avengers: Doomsday | Official Trailer",image:"https://i.ytimg.com/vi/iFl4YeX6jmc/hqdefault.jpg",status:"upcoming",duration:"02:25",releaseDate:"December 18, 2026",videoId:"iFl4YeX6jmc",source:"Marvel Entertainment"},
    {id:214,category:"movies",title:"Heart of the Beast | Official Trailer",image:"https://i.ytimg.com/vi/JFQcDFhNh4o/hqdefault.jpg",status:"upcoming",duration:"02:40",releaseDate:"September 25, 2026",videoId:"JFQcDFhNh4o",source:"Paramount Pictures"},
    {id:215,category:"movies",title:"Spider-Man: Brand New Day | New Trailer",image:"https://i.ytimg.com/vi/62bIsvRcPv0/hqdefault.jpg",status:"released",duration:"02:34",releaseDate:"July 31, 2026",videoId:"62bIsvRcPv0",source:"Sony Pictures Entertainment"},
    {id:216,category:"movies",title:"The Odyssey | Official New Trailer",image:"https://i.ytimg.com/vi/f_bKjZeJBBI/hqdefault.jpg",status:"released",duration:"02:31",releaseDate:"July 17, 2026",videoId:"f_bKjZeJBBI",source:"Universal Pictures"},
    {id:217,category:"movies",title:"Clayface | Official Trailer",image:"https://i.ytimg.com/vi/pJt96whxunA/hqdefault.jpg",status:"upcoming",duration:"Official Trailer",releaseDate:"October 2026",videoId:"pJt96whxunA",source:"Warner Bros. / DC Studios"},
    {id:218,category:"movies",title:"Disclosure Day | Official Trailer",image:"https://i.ytimg.com/vi/SCYT8vb2siQ/hqdefault.jpg",status:"upcoming",duration:"Official Trailer",releaseDate:"2026",videoId:"SCYT8vb2siQ",source:"Universal Pictures"},

    // TV
    {id:219,category:"tv",title:"Lanterns | Official Trailer",image:"https://i.ytimg.com/vi/THq3riWv9bk/hqdefault.jpg",status:"upcoming",duration:"Official Trailer",releaseDate:"2026",videoId:"THq3riWv9bk",source:"HBO Max / DC"},
    {id:220,category:"tv",title:"The Gentlemen: Season 2 | Official Trailer",image:"https://i.ytimg.com/vi/01IeKpHvgvM/hqdefault.jpg",status:"released",duration:"Official Trailer",releaseDate:"September 2026",videoId:"01IeKpHvgvM",source:"Netflix"},
    {id:221,category:"tv",title:"Silo: Season 3 | Official Trailer",image:"https://i.ytimg.com/vi/BLBvbMtjyAQ/hqdefault.jpg",status:"released",duration:"Official Trailer",releaseDate:"July 2026",videoId:"BLBvbMtjyAQ",source:"Apple TV+"},
    {id:222,category:"tv",title:"Invincible: Season 3 | Official Trailer",image:"https://i.ytimg.com/vi/rbHUhCcSXEM/hqdefault.jpg",status:"released",duration:"Official Trailer",releaseDate:"2025",videoId:"rbHUhCcSXEM",source:"Prime Video"},
    {id:223,category:"tv",title:"Spider-Noir | Official Trailer",image:"https://i.ytimg.com/vi/u48_JpUloGY/hqdefault.jpg",status:"released",duration:"Official Trailer",releaseDate:"2026",videoId:"u48_JpUloGY",source:"Sony Pictures Television"},
    {id:224,category:"tv",title:"Silo: Season 2 | Official Trailer",image:"https://i.ytimg.com/vi/CLJDR-vFUdY/hqdefault.jpg",status:"released",duration:"Official Trailer",releaseDate:"2024",videoId:"CLJDR-vFUdY",source:"Apple TV+"},

    // K-POP
   
    {id:226,category:"kpop",title:"Stray Kids — Endless Sun | 60s Film",image:"https://i.ytimg.com/vi/40S9ZH1gVH4/hqdefault.jpg",status:"released",duration:"60s Film",releaseDate:"2026",videoId:"40S9ZH1gVH4",source:"Stray Kids / Bioré UV"},
    {id:227,category:"kpop",title:"Stray Kids | Bioré UV Message Film",image:"https://i.ytimg.com/vi/TRBuJpckg8Y/hqdefault.jpg",status:"released",duration:"Message Film",releaseDate:"2026",videoId:"TRBuJpckg8Y",source:"Stray Kids / Bioré UV"},
    {id:228,category:"kpop",title:"Stray Kids — Youtiful | Official Video",image:"https://i.ytimg.com/vi/RrFn_KJn7Rk/hqdefault.jpg",status:"released",duration:"Official Video",releaseDate:"2023",videoId:"RrFn_KJn7Rk",source:"Stray Kids / JYP"},
    {id:229,category:"kpop",title:"ITZY — Motto | Official Music Video",image:"https://i.ytimg.com/vi/1jKnI_ib8c8/hqdefault.jpg",status:"released",duration:"Official MV",releaseDate:"2026",videoId:"1jKnI_ib8c8",source:"ITZY / JYP"},
    {id:230,category:"kpop",title:"ITZY — Motto | Dance Practice",image:"https://i.ytimg.com/vi/F0aVlZivC3g/hqdefault.jpg",status:"released",duration:"Dance Practice",releaseDate:"2026",videoId:"F0aVlZivC3g",source:"ITZY / JYP"},

    // COMICS / COMIC ADAPTATIONS
    {id:231,category:"comics",title:"Clayface | Official Trailer",image:"https://i.ytimg.com/vi/pJt96whxunA/hqdefault.jpg",status:"upcoming",duration:"Official Trailer",releaseDate:"October 2026",videoId:"pJt96whxunA",source:"DC Studios / Warner Bros."},
    {id:232,category:"comics",title:"Lanterns | Official Trailer",image:"https://i.ytimg.com/vi/THq3riWv9bk/hqdefault.jpg",status:"upcoming",duration:"Official Trailer",releaseDate:"2026",videoId:"THq3riWv9bk",source:"DC Studios / HBO Max"},
    {id:233,category:"comics",title:"Invincible: Season 3 | Official Trailer",image:"https://i.ytimg.com/vi/rbHUhCcSXEM/hqdefault.jpg",status:"released",duration:"Official Trailer",releaseDate:"2025",videoId:"rbHUhCcSXEM",source:"Prime Video"},
    {id:234,category:"comics",title:"Spider-Man: Brand New Day | New Trailer",image:"https://i.ytimg.com/vi/62bIsvRcPv0/hqdefault.jpg",status:"released",duration:"New Trailer",releaseDate:"2026",videoId:"62bIsvRcPv0",source:"Sony Pictures"},
    {id:235,category:"comics",title:"Avengers: Doomsday | Official Trailer",image:"https://i.ytimg.com/vi/iFl4YeX6jmc/hqdefault.jpg",status:"upcoming",duration:"Official Trailer",releaseDate:"2026",videoId:"iFl4YeX6jmc",source:"Marvel Entertainment"},
    {id:236,category:"comics",title:"Marvel Cosmic Invasion | Trailer",image:"https://i.ytimg.com/vi/cjoT4EoaUCs/hqdefault.jpg",status:"released",duration:"Official Trailer",releaseDate:"2025",videoId:"cjoT4EoaUCs",source:"Marvel / Tribute Games"},

    // MANGA / MANGA-BASED ANIME
    {id:237,category:"manga",title:"Jujutsu Kaisen Season 3 | Official PV",image:"https://i.ytimg.com/vi/DKNM-3LpfZE/hqdefault.jpg",status:"released",duration:"Official PV",releaseDate:"2026",videoId:"DKNM-3LpfZE",source:"TOHO Animation / MBS"},
    {id:238,category:"manga",title:"Dorohedoro Season 2 | Official PV",image:"https://i.ytimg.com/vi/GHjCjHAKo9c/hqdefault.jpg",status:"released",duration:"Official PV",releaseDate:"April 2026",videoId:"GHjCjHAKo9c",source:"MAPPA"},
    {id:239,category:"manga",title:"Firefly Wedding | Main PV",image:"https://i.ytimg.com/vi/Ex9LrBK-7hk/hqdefault.jpg",status:"upcoming",duration:"Main PV",releaseDate:"October 2026",videoId:"Ex9LrBK-7hk",source:"Fuji TV / david production"},
    {id:240,category:"manga",title:"Magic Knight Rayearth | New Anime Project PV",image:"https://i.ytimg.com/vi/IWnj91xAq7o/hqdefault.jpg",status:"upcoming",duration:"Project PV",releaseDate:"2026",videoId:"IWnj91xAq7o",source:"E&H production"},
    {id:241,category:"manga",title:"One Piece | Official Anime Video",image:"https://i.ytimg.com/vi/IznYQHSWJ7w/hqdefault.jpg",status:"released",duration:"Official Video",releaseDate:"2026",videoId:"IznYQHSWJ7w",source:"ONE PIECE / Toei Animation"},
    {id:242,category:"manga",title:"The Apothecary Diaries Season 3 | Official PV",image:"https://i.ytimg.com/vi/VEX4Jr3rBUQ/hqdefault.jpg",status:"upcoming",duration:"Official PV",releaseDate:"October 2026",videoId:"VEX4Jr3rBUQ",source:"OLM / TOHO Animation"}
];


/* =========================================================
   TRAILERS ALSO APPEAR IN EXPLORE
   Keep trailer cards available when a user filters Explore
   by any fandom category (including Anime).
========================================================= */

trailers.forEach((trailer, index) => {
    content.push({
        id: 9000 + index,
        category: trailer.category,
        title: trailer.title,
        description: `Official ${getCategoryName(trailer.category)} trailer/video for ${trailer.title}. Open the card to watch it inside FandomVerse.`,
        type: "video",
        image: trailer.image,
        date: trailer.releaseDate || "2026-01-01",
        popularity: 85,
        featured: false,
        videoId: trailer.videoId || null,
        source: trailer.source,
        duration: trailer.duration
    });
});


/* =========================================================
   MERCHANDISE
========================================================= */

const merchandise = [
    { id: 1, category: "Gaming", name: "I Must Go Video Games Hoodie", price: "Rs 4,999", image: "images/merch-01.jpg", description: "Black gaming hoodie with a bold gamer graphic." },
    { id: 2, category: "TV Shows", name: "Fandom TV Shows Poster Collection", price: "Rs 2,499", image: "images/merch-02.jpg", description: "Poster collage featuring popular TV fandoms." },
    { id: 3, category: "Movies", name: "Classic 007 Movie Graphic T-Shirt Collection", price: "Rs 3,499", image: "images/merch-03.jpg", description: "Classic James Bond inspired graphic tee collection." },
    { id: 4, category: "Anime", name: "Solo Leveling Graphic Hoodie", price: "Rs 5,499", image: "images/merch-04.jpg", description: "White Solo Leveling inspired graphic hoodie." },
    { id: 5, category: "K-Pop", name: "Its Snow for Lovers Embroidered Cap", price: "Rs 1,899", image: "images/merch-05.jpg", description: "Embroidered fandom-style baseball cap." },
    { id: 6, category: "Korean", name: "Seoul South Korea Hoodie", price: "Rs 3,999", image: "images/merch-06.jpg", description: "Minimal Seoul streetwear hoodie." },
    { id: 7, category: "Gaming", name: "Game On Retro Gaming Poster", price: "Rs 2,299", image: "images/merch-07.jpg", description: "Retro gaming wall poster with classic controllers." },
    { id: 8, category: "Anime", name: "One Piece Character Cap Set", price: "Rs 2,799", image: "images/merch-08.jpg", description: "Black anime caps featuring iconic character emblems." },
    { id: 9, category: "Streetwear", name: "Black Oversized Focus Hoodie", price: "Rs 4,299", image: "images/merch-09.jpg", description: "Minimal oversized black streetwear hoodie." },
    { id: 10, category: "Movies", name: "Classic Movie VHS Stack Mug", price: "Rs 1,699", image: "images/merch-10.jpg", description: "Cinema-inspired ceramic mug with classic movie covers." },
    { id: 11, category: "Comics", name: "Superhero Metal Keychain Set", price: "Rs 1,499", image: "images/merch-11.jpg", description: "Mixed superhero-inspired metal keychains." },
    { id: 12, category: "Anime", name: "Demon Slayer Bookmark Collection", price: "Rs 999", image: "images/merch-12.jpg", description: "Demon Slayer character bookmark set." },
    { id: 13, category: "Anime", name: "Madara Uchiha Graphic T-Shirt", price: "Rs 2,999", image: "images/merch-13.jpg", description: "Black Madara-inspired manga graphic T-shirt." },
    { id: 14, category: "Anime", name: "Anime Sketch Art Print", price: "Rs 1,799", image: "images/merch-14.jpg", description: "Hand-drawn anime sketch style art print." },
    { id: 15, category: "Gaming", name: "Level Up Gamer Mug", price: "Rs 1,499", image: "images/merch-15.jpg", description: "Black gaming mug with level-up design." },
    { id: 16, category: "Comics", name: "Marvel Character Pop Art Poster Set", price: "Rs 2,499", image: "images/merch-16.jpg", description: "Pop-art style superhero character poster set." },
    { id: 17, category: "K-Pop", name: "I Listen To K-Pop Trucker Cap", price: "Rs 1,899", image: "images/merch-17.jpg", description: "K-pop themed black and white trucker cap." },
    { id: 18, category: "K-Pop", name: "K-Pop Idol Style Keychain Set", price: "Rs 1,299", image: "images/merch-18.jpg", description: "Colorful K-pop inspired character keychains." },
    { id: 19, category: "K-Pop", name: "BTS Black Graphic T-Shirt", price: "Rs 2,799", image: "images/merch-19.jpg", description: "Black BTS graphic T-shirt with front and back artwork." },
    { id: 20, category: "K-Pop", name: "Stray Kids This & That Collector Set", price: "Rs 3,499", image: "images/merch-20.jpg", description: "Stray Kids inspired collector-style merchandise set." }
];


/* =========================================================
   STATE
========================================================= */

let bookmarks =
    JSON.parse(
        localStorage.getItem("fandomverseBookmarks") || "[]"
    );

let cart =
    JSON.parse(
        localStorage.getItem("fandomverseCart") || "[]"
    );


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderCategories();

    renderFeatured();

    renderMedia();

    renderHomeCharacters();

    renderHomeEvents();

    renderMerchandise();

    setupFilters();

    renderArticles();

    renderCharacters();

    renderEvents();

    renderTrailers();

    renderFullMerchandise();

    updateCartCount();

    updateVisitorCounter();

    startClock();

    setupSearch();

    hidePreloader();

    startHeroBannerRotation();

});


/* =========================================================
   HERO BANNER AUTO ROTATION (5 slides, every 3s)
========================================================= */

function startHeroBannerRotation() {

    const slides =
        document.querySelectorAll(".hero-slide");

    if (!slides.length) return;

    let currentIndex = 0;

    setInterval(() => {

        slides[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add("active");

    }, 3000);

}


/* =========================================================
   PRELOADER
========================================================= */

function hidePreloader() {

    setTimeout(() => {

        const preloader =
            document.getElementById("preloader");

        if (preloader) {

            preloader.classList.add("hide");

        }

    }, 700);

}


/* =========================================================
   NAVIGATION
========================================================= */

function navigateTo(page) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(p => {

        p.classList.remove("active");

    });


    const target =
        document.getElementById(
            page + "Page"
        );

    if (target) {

        target.classList.add("active");

    }


    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.classList.remove("active");

            if (
                link.dataset.page === page
            ) {

                link.classList.add("active");

            }

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (page === "bookmarks") {

        renderBookmarks();

    }

}


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategories() {

    const container =
        document.getElementById("categoryGrid");

    if (!container) return;


    container.innerHTML =
        categories.map(category => `

            <button
                class="category-card"
                onclick="filterCategory('${category.id}')"
            >

                <i class="${category.icon}"></i>

                <span>
                    ${category.name}
                </span>

            </button>

        `).join("");


    populateCategoryFilters();

}


function filterCategory(category) {

    navigateTo("explore");

    const select =
        document.getElementById(
            "categoryFilter"
        );

    if (select) {

        select.value = category;

    }

    renderExplore();

}


/* =========================================================
   CATEGORY FILTERS
========================================================= */

function populateCategoryFilters() {

    const ids = [
        "categoryFilter",
        "characterCategoryFilter",
        "eventCategoryFilter",
        "trailerCategoryFilter"
    ];


    ids.forEach(id => {

        const select =
            document.getElementById(id);

        if (!select) return;


        categories.forEach(category => {

            const option =
                document.createElement("option");

            option.value =
                category.id;

            option.textContent =
                category.name;

            select.appendChild(option);

        });

    });

}


/* =========================================================
   FEATURED ARTICLES
========================================================= */

function renderFeatured() {

    const container =
        document.getElementById("featuredGrid");

    if (!container) return;


    const items =
        content
            .filter(item => item.featured)
            .slice(0, 6);


    container.innerHTML =
        items.map(createArticleCard).join("");

}


/* =========================================================
   ARTICLE CARD
========================================================= */


const OFFICIAL_CONTENT_IMAGES = {
    // Movies — official studio/publisher trailer thumbnails
    201: "https://i.ytimg.com/vi/mNd1gb19A-c/hqdefault.jpg",   // Resident Evil — Sony Pictures
    202: "https://i.ytimg.com/vi/om5Un9X720M/hqdefault.jpg",   // Mayday — Apple TV
    203: "https://i.ytimg.com/vi/f_bKjZeJBBI/hqdefault.jpg",   // The Odyssey — Universal Pictures
    204: "https://i.ytimg.com/vi/62bIsvRcPv0/hqdefault.jpg",   // Spider-Man: Brand New Day — Sony Pictures
    214: "https://lumiere-a.akamaihd.net/v1/images/au_movies_pixar_toy-story-5_payoff_poster_ae3360f6.jpeg",
    219: "https://i.ytimg.com/vi/iFl4YeX6jmc/hqdefault.jpg",   // Avengers: Doomsday — Marvel Entertainment
    205: "https://m.media-amazon.com/images/M/MV5BZDdjOTQzMzEtZjYyOC00MWI0LWJlZDItNDBmMDFmODYxZDk1XkEyXkFqcGc%40._V1_.jpg",
    206: "https://www.laughingplace.com/uploads/media/2026/06/The-Dog-Stars-Trailer.jpg",
    207: "https://image.tmdb.org/t/p/original/jGiVm1i1qvRlIaVaJA7UKPFRWVf.jpg",
    208: "https://i.ytimg.com/vi/8i_1IUJqlKg/hqdefault.jpg",
    209: "https://images.gram.pl/news/embed/xbjt20260717084610654bvua.jpg",
    210: "https://www.movieinsider.com/images/movie/981887/1690566629",
    211: "https://img.asmedia.epimg.net/resizer/v2/Q6VNCXDA4VFE7HNF67M4BPQFHE.jpg?auth=cafeb76b13ea248ef0633d2d6567f7d26ffbf104a340d8e680c18a707755d95c&width=1440",
    212: "https://www.impawards.com/2026/posters/last_sunrise.jpg",
    213: "https://www.hola.com/us/horizon/original_aspect_ratio/b1990e41022d-screenshot-2026-07-27-at-21238-pm.png",
    215: "https://www.dvd-trailers.gr/posters/oi_malliaroi_detectives_2026.jpg",
    216: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/243663/Damage_DOM_Online_1-Sheet_Fin21_R-Z_HR.jpg",
    217: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/6107ec57-b972-4c0f-a38a-31ff253c740c/1920x",
    218: "https://cdn-origin.cool-style.com.tw/cool/2025/12/G772uq5agAEQZzk.jpg",
    220: "https://i.ytimg.com/vi/JFQcDFhNh4o/hqdefault.jpg",

    // TV — official network/platform trailer thumbnails
    301: "https://i.ytimg.com/vi/01IeKpHvgvM/hqdefault.jpg",   // The Gentlemen — Netflix
    302: "https://i.ytimg.com/vi/BLBvbMtjyAQ/hqdefault.jpg",   // Silo — Apple TV
    303: "https://i.ytimg.com/vi/THq3riWv9bk/hqdefault.jpg",   // Lanterns
    304: "https://i.ytimg.com/vi/PCbp1FfipPg/hqdefault.jpg",   // Reacher — Prime Video
    305: "https://i.ytimg.com/vi/DKKZ10FsSBM/hqdefault.jpg",   // Bleach — VIZ
    306: "https://i.ytimg.com/vi/d83sEjmZAjM/hqdefault.jpg",   // Ted Lasso — Apple TV

    // K-pop — official artist/label video thumbnails
    401: "https://i.ytimg.com/vi/_gyultVTesk/hqdefault.jpg",   // BTS — HYBE LABELS
    402: "https://i.ytimg.com/vi/CgCVZdcKcqY/hqdefault.jpg",   // BLACKPINK — Official Artist Channel
    403: "https://i.ytimg.com/vi/cLeUaxOk81w/hqdefault.jpg",   // Stray Kids — JYP / official campaign
    404: "https://i.ytimg.com/vi/1jKnI_ib8c8/hqdefault.jpg",   // ITZY — JYP Entertainment
    405: "https://i.ytimg.com/vi/Djglxd-pnjI/hqdefault.jpg",   // LE SSERAFIM — Official Artist Channel
    406: "https://i.ytimg.com/vi/G_xI-jm8maQ/hqdefault.jpg",   // ENHYPEN — Official Artist Channel

    // Manga — publisher artwork
    7: "https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088851303/240/9784088851303.jpg",
    12: "https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088851303/240/9784088851303.jpg"
};

const OFFICIAL_CATEGORY_FALLBACKS = {
    movies: "https://i.ytimg.com/vi/f_bKjZeJBBI/hqdefault.jpg",
    tv: "https://i.ytimg.com/vi/BLBvbMtjyAQ/hqdefault.jpg",
    kpop: "https://i.ytimg.com/vi/CgCVZdcKcqY/hqdefault.jpg",
    manga: "https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088851303/240/9784088851303.jpg"
};

function getOfficialImage(item) {
    // Use the item's own movie artwork as the second fallback.
    // This prevents every broken movie image from falling back to the
    // same generic movie poster.
    return OFFICIAL_CONTENT_IMAGES[item.id] ||
        item.image ||
        OFFICIAL_CATEGORY_FALLBACKS[item.category];
}

function getImageFallback(item) {
    // Keep each card tied to its own artwork before using a category fallback.
    return item.image || OFFICIAL_CATEGORY_FALLBACKS[item.category] || "";
}

function createArticleCard(item) {

    const saved =
        bookmarks.some(
            b =>
                b.type === "content" &&
                b.id === item.id
        );


    return `

        <article
            class="article-card"
            onclick="openContent(${item.id})"
        >

            <div class="article-image">

                <img
                    src="${getOfficialImage(item)}"
                    alt="${item.title}"
                    loading="lazy"
                    class="character-portrait"
                    onerror="this.onerror=null; this.src='${getImageFallback(item)}';"
                    class="${item.groupLogo ? "group-logo-image" : ""}"
                >

                <span class="article-type">
                    ${item.type}
                </span>

            </div>


            <div class="article-info">

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

                ${item.members ? `<div class="group-member-count"><i class="fa-solid fa-users"></i> ${item.members.length} members • Official group profile</div>` : ""}

                ${item.genre ? `<div class="group-member-count"><i class="fa-solid fa-film"></i> ${item.genre}</div>` : ""}

                <div class="article-meta">

                    <span>
                        ${getCategoryName(item.category)}
                    </span>

                    <span>
                        ${item.date}
                    </span>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   MEDIA HUB
========================================================= */

function renderMedia() {

    const container =
        document.getElementById("mediaGrid");

    if (!container) return;


    const media =
        content
            .filter(
                item =>
                    item.type === "video" ||
                    item.type === "gallery"
            )
            .slice(0, 6);


    container.innerHTML =
        media.map(item => `

            <article
                class="media-card"
                onclick="openContent(${item.id})"
            >

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy"
                >

                <span class="play-button">

                    <i class="fa-solid fa-play"></i>

                </span>

                <strong class="media-title">
                    ${item.title}
                </strong>

            </article>

        `).join("");

}


/* =========================================================
   HOME CHARACTERS
========================================================= */

function renderHomeCharacters() {

    const container =
        document.getElementById("homeCharacters");

    if (!container) return;


    container.innerHTML =
        characters
            .filter(character => character.featured)
            .slice(0, 5)
            .map(character => `

                <div
                    class="character-card"
                    onclick="openCharacter(${character.id})"
                >

                    <img
                        src="${character.image}"
                        alt="${character.name}"
                        loading="lazy"
                        onerror="this.style.opacity='.35'"
                    >

                    <h3>
                        ${character.name}
                    </h3>

                    <p>
                        ${getCategoryName(character.category)}
                    </p>

                </div>

            `).join("");

}


/* =========================================================
   HOME EVENTS
========================================================= */

function renderHomeEvents() {

    const container =
        document.getElementById("homeEvents");

    if (!container) return;


    container.innerHTML =
        events
            .slice(0, 3)
            .map(createMiniEvent)
            .join("");

}


function createMiniEvent(event) {

    const date =
        new Date(event.date);

    const month =
        date.toLocaleString(
            "en-US",
            { month: "short" }
        ).toUpperCase();


    return `

        <div
            class="event-mini"
            onclick="openEvent(${event.id})"
        >

            <div class="event-date">

                <strong>
                    ${date.getDate()}
                </strong>

                <small>
                    ${month}
                </small>

            </div>


            <div>

                <h3>
                    ${event.title}
                </h3>

                <p>
                    ${event.location}
                    •
                    ${getCategoryName(event.category)}
                </p>

            </div>

        </div>

    `;

}


/* =========================================================
   MERCHANDISE HOME
========================================================= */

function renderMerchandise() {

    const container =
        document.getElementById("merchGrid");

    if (!container) return;


    container.innerHTML =
        merchandise
            .slice(0, 5)
            .map(item => `

                <div class="merch-card">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        loading="lazy"
                    >

                    <div class="merch-info">

                        <h3>
                            ${item.name}
                        </h3>

                        <span class="merch-price">
                            ${item.price}
                        </span>

                        <button
                            onclick="addToCart(${item.id})"
                        >
                            Add to Cart
                        </button>

                    </div>

                </div>

            `).join("");

}


/* =========================================================
   FULL MERCH
========================================================= */

function renderFullMerchandise() {

    const container =
        document.getElementById("fullMerchGrid");

    if (!container) return;


    container.innerHTML =
        merchandise.map(item => `

            <article class="store-card">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >

                <div class="store-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                    <strong>
                        ${item.price}
                    </strong>

                    <button
                        onclick="addToCart(${item.id})"
                    >
                        <i class="fa-solid fa-cart-plus"></i>
                        Add to Cart
                    </button>

                </div>

            </article>

        `).join("");

}


/* =========================================================
   EXPLORE
========================================================= */

function setupFilters() {

    [
        "exploreSearch",
        "categoryFilter",
        "typeFilter",
        "sortFilter"
    ].forEach(id => {

        const element =
            document.getElementById(id);

        if (element) {

            element.addEventListener(
                "input",
                renderExplore
            );

            element.addEventListener(
                "change",
                renderExplore
            );

        }

    });


    const characterSearch =
        document.getElementById(
            "characterSearch"
        );

    if (characterSearch) {

        characterSearch.addEventListener(
            "input",
            renderCharacters
        );

    }


    [
        "characterCategoryFilter",
        "eventCategoryFilter",
        "eventStatusFilter",
        "trailerCategoryFilter",
        "trailerStatusFilter"
    ].forEach(id => {

        const element =
            document.getElementById(id);

        if (element) {

            element.addEventListener(
                "change",
                () => {

                    if (
                        id.includes("character")
                    ) {

                        renderCharacters();

                    } else if (
                        id.includes("event")
                    ) {

                        renderEvents();

                    } else {

                        renderTrailers();

                    }

                }
            );

        }

    });


    renderExplore();

}


function renderExplore() {

    const container =
        document.getElementById(
            "exploreGrid"
        );

    if (!container) return;


    const search =
        (
            document.getElementById(
                "exploreSearch"
            )?.value || ""
        ).toLowerCase();


    const category =
        document.getElementById(
            "categoryFilter"
        )?.value || "all";


    const type =
        document.getElementById(
            "typeFilter"
        )?.value || "all";


    const sort =
        document.getElementById(
            "sortFilter"
        )?.value || "featured";


    let result =
        content.filter(item => {

            const matchesSearch =
                !search ||
                item.title
                    .toLowerCase()
                    .includes(search) ||
                item.description
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =
                category === "all" ||
                item.category === category;


            const matchesType =
                type === "all" ||
                item.type === type;


            return (
                matchesSearch &&
                matchesCategory &&
                matchesType
            );

        });


    if (sort === "alphabetical") {

        result.sort(
            (a,b) =>
                a.title.localeCompare(b.title)
        );

    }


    if (sort === "newest") {

        result.sort(
            (a,b) =>
                new Date(b.date) -
                new Date(a.date)
        );

    }


    if (sort === "popular") {

        result.sort(
            (a,b) =>
                b.popularity -
                a.popularity
        );

    }


    if (sort === "featured") {

        result.sort(
            (a,b) =>
                Number(b.featured) -
                Number(a.featured)
        );

    }


    if (!result.length) {

        container.innerHTML = `
            <div class="dashboard-panel">
                <h2>No content found</h2>
                <p style="color:#77819b;margin-top:8px">
                    Try another search or filter.
                </p>
            </div>
        `;

        return;

    }


    container.innerHTML =
        result.map(createArticleCard).join("");

}


/* =========================================================
   ARTICLES
========================================================= */

function renderArticles() {

    const container =
        document.getElementById(
            "articlesGrid"
        );

    if (!container) return;


    container.innerHTML =
        content
            .filter(
                item =>
                    item.type === "article"
            )
            .map(createArticleCard)
            .join("");

}


/* =========================================================
   CHARACTERS
========================================================= */

function renderCharacters() {

    const container =
        document.getElementById(
            "charactersGrid"
        );

    if (!container) return;


    const category =
        document.getElementById(
            "characterCategoryFilter"
        )?.value || "all";


    const search =
        (
            document.getElementById(
                "characterSearch"
            )?.value || ""
        ).toLowerCase();


    const result =
        characters.filter(character => {

            return (

                (
                    category === "all" ||
                    character.category === category
                )

                &&

                (
                    !search ||
                    character.name
                        .toLowerCase()
                        .includes(search)
                )

            );

        });


    container.innerHTML =
        result.map(character => `

            <div class="database-character"
                 role="button"
                 tabindex="0"
                 onclick="openCharacter(${character.id})"
                 onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openCharacter(${character.id})}">

                <img
                    src="${character.image}"
                    alt="${character.name}"
                    loading="lazy"
                    class="character-portrait"
                    onerror="this.style.opacity='.35'"
                >

                <h3>${character.name}</h3>
                <p>${character.series}</p>

                <button
                    type="button"
                    onclick="event.stopPropagation(); openCharacter(${character.id})"
                >
                    View Details
                </button>

            </div>

        `).join("");

}


/* =========================================================
   EVENTS
========================================================= */

function renderEvents() {

    const container =
        document.getElementById(
            "eventsGrid"
        );

    if (!container) return;


    const category =
        document.getElementById(
            "eventCategoryFilter"
        )?.value || "all";


    const status =
        document.getElementById(
            "eventStatusFilter"
        )?.value || "all";


    const result =
        events.filter(event => {

            return (

                (
                    category === "all" ||
                    event.category === category
                )

                &&

                (
                    status === "all" ||
                    event.status === status
                )

            );

        });


    container.innerHTML =
        result.map(event => `

            <article class="database-event">

                <div class="event-date">

                    <strong>
                        ${new Date(event.date).getDate()}
                    </strong>

                    <small>
                        ${new Date(event.date)
                            .toLocaleString(
                                "en-US",
                                {month:"short"}
                            )
                            .toUpperCase()}
                    </small>

                </div>

                <h3>
                    ${event.title}
                </h3>

                <p>
                    ${event.description}
                </p>

                <span>
                    ${getCategoryName(event.category)}
                    •
                    ${event.location}
                </span>

            </article>

        `).join("");

}


/* =========================================================
   TRAILERS
========================================================= */

function renderTrailers() {

    const container =
        document.getElementById(
            "trailersGrid"
        );

    if (!container) return;


    const category =
        document.getElementById(
            "trailerCategoryFilter"
        )?.value || "all";


    const status =
        document.getElementById(
            "trailerStatusFilter"
        )?.value || "all";


    const result =
        trailers.filter(trailer => {

            return (

                (
                    category === "all" ||
                    trailer.category === category
                )

                &&

                (
                    status === "all" ||
                    trailer.status === status
                )

            );

        });


    container.innerHTML =
        result.map(trailer => `

            <article class="trailer-card">

                <div class="trailer-image">

                    <img
                        src="${trailer.image}"
                        alt="${trailer.title}"
                        loading="lazy"
                    >

                    <span
                        class="play-button"
                        onclick="playTrailer('${trailer.title}')"
                    >
                        <i class="fa-solid fa-play"></i>
                    </span>

                </div>

                <div class="trailer-info">

                    <h3>
                        ${trailer.title}
                    </h3>

                    <p>
                        ${getCategoryName(trailer.category)}
                        • ${trailer.duration}
                    </p>

                    <p style="font-size:12px;color:#8e98b2;margin-top:5px">
                        ${trailer.source}
                        ${trailer.releaseDate ? ` • ${trailer.releaseDate}` : ""}
                    </p>

                    <span>
                        ${trailer.status.toUpperCase()}
                    </span>

                </div>

            </article>

        `).join("");

}


/* =========================================================
   CONTENT MODAL
========================================================= */

function openContent(id) {

    const item =
        content.find(
            x => x.id === id
        );

    if (!item) return;


    const saved =
        bookmarks.some(
            b =>
                b.type === "content" &&
                b.id === id
        );


    const mediaPlayer = item.type === "video" && item.videoId
        ? `
            <div style="position:relative;padding-top:56.25%;border-radius:14px;overflow:hidden;background:#050816;margin-bottom:15px">
                <iframe
                    src="https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0"
                    title="${item.title}"
                    style="position:absolute;inset:0;width:100%;height:100%;border:0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        `
        : `
            <img class="modal-image" src="${item.image}" alt="${item.title}">
        `;

    openModal(`

        ${mediaPlayer}

        <span class="featured-label">
            ${item.type}
        </span>

        <h2 style="margin-top:12px">
            ${item.title}
        </h2>

        <p>
            ${item.description}
        </p>

        ${item.genre ? `<p><strong>Genre:</strong> ${item.genre}</p>` : ""}

        ${item.director ? `<p><strong>Director:</strong> ${item.director}</p>` : ""}

        ${item.cast ? `<p><strong>Cast:</strong> ${item.cast}</p>` : ""}

        ${item.type === "video" ? `<p><strong>Source:</strong> ${item.source || "Official source"}${item.duration ? ` • ${item.duration}` : ""}</p>` : ""}

        ${item.members ? `<div class="member-detail-list"><strong>Members:</strong>${item.members.map(member => `<div>• ${member}</div>`).join("")}</div>` : ""}

        <p>
            <strong>
                Category:
            </strong>
            ${getCategoryName(item.category)}
        </p>

        <p>
            <strong>
                Published:
            </strong>
            ${item.date}
        </p>

        <button
            class="primary-btn"
            style="margin-top:15px"
            onclick="toggleBookmark('content', ${item.id})"
        >
            <i class="fa-regular fa-bookmark"></i>
            ${saved ? "Remove Bookmark" : "Bookmark"}
        </button>

    `);

}


/* =========================================================
   CHARACTER MODAL
========================================================= */

function openCharacter(id) {

    const character =
        characters.find(
            x => x.id === id
        );

    if (!character) return;


    const shortBio =
        character.biography.split(". ")[0] + ".";


    openModal(`

        <div style="text-align:center">

            <img
                class="modal-image"
                style="
                    width:150px;
                    height:150px;
                    border-radius:50%;
                    display:block;
                    margin:0 auto 15px;
                    object-fit:cover;
                    object-position:50% 12%;
                "
                src="${character.image}"
                alt="${character.name}"
                onerror="this.style.opacity='.35'"
            >

            <h2>
                ${character.name}
            </h2>

            <p class="character-biography">
                ${character.series} • ${getCategoryName(character.category)}<br>
                ${shortBio}<br>
                ${character.traits}
            </p>

            <button
                class="primary-btn"
                style="margin-top:15px"
                onclick="toggleBookmark('character', ${character.id})"
            >
                Bookmark Character
            </button>

        </div>

    `);

}


/* =========================================================
   EVENT MODAL
========================================================= */

function openEvent(id) {

    const event =
        events.find(
            x => x.id === id
        );

    if (!event) return;


    openModal(`

        <h2>
            ${event.title}
        </h2>

        <p>
            <strong>Date:</strong>
            ${event.date}
        </p>

        <p>
            <strong>Location:</strong>
            ${event.location}
        </p>

        <p>
            <strong>Category:</strong>
            ${getCategoryName(event.category)}
        </p>

        <p>
            ${event.description}
        </p>

        <button
            class="primary-btn"
            style="margin-top:15px"
            onclick="toggleBookmark('event', ${event.id})"
        >
            Bookmark Event
        </button>

    `);

}


/* =========================================================
   MODAL
========================================================= */

function openModal(html) {

    const modal =
        document.getElementById("modal");

    const content =
        document.getElementById(
            "modalContent"
        );

    content.innerHTML = html;

    modal.classList.add("active");

}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("active");

}


document.addEventListener(
    "click",
    event => {

        const modal =
            document.getElementById("modal");

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   BOOKMARKS
========================================================= */

function toggleBookmark(type, id) {

    const index =
        bookmarks.findIndex(
            b =>
                b.type === type &&
                b.id === id
        );


    if (index >= 0) {

        bookmarks.splice(index, 1);

        showToast(
            "Removed from bookmarks"
        );

    } else {

        bookmarks.push({

            type,
            id,

            note: "",

            savedAt:
                new Date().toISOString()

        });

        showToast(
            "Added to bookmarks"
        );

    }


    localStorage.setItem(
        "fandomverseBookmarks",
        JSON.stringify(bookmarks)
    );

}


function openBookmarks() {

    navigateTo("bookmarks");

    renderBookmarks();

}


function renderBookmarks() {

    const container =
        document.getElementById(
            "bookmarksGrid"
        );

    if (!container) return;


    if (!bookmarks.length) {

        container.innerHTML = `

            <div class="dashboard-panel">

                <h2>
                    Your bookmark collection is empty
                </h2>

                <p style="color:#77819b;margin-top:8px">
                    Bookmark articles, characters and events
                    to see them here.
                </p>

            </div>

        `;

        return;

    }


    let html = "";


    bookmarks.forEach(bookmark => {

        if (bookmark.type === "content") {

            const item =
                content.find(
                    x => x.id === bookmark.id
                );

            if (!item) return;

            html += createArticleCard(item);

        }


        if (bookmark.type === "character") {

            const character =
                characters.find(
                    x => x.id === bookmark.id
                );

            if (!character) return;

            html += `

                <div class="dashboard-panel">

                    <div style="display:flex;gap:15px;align-items:center">

                        <img
                            src="${character.image}"
                            style="
                                width:70px;
                                height:70px;
                                object-fit:cover;
                                border-radius:50%;
                            "
                        >

                        <div>

                            <h3>
                                ${character.name}
                            </h3>

                            <p>
                                ${character.series}
                            </p>

                        </div>

                    </div>

                </div>

            `;

        }

    });


    container.innerHTML = html;

}


/* =========================================================
   EXPORT BOOKMARKS
========================================================= */

function exportBookmarks() {

    if (!bookmarks.length) {

        showToast(
            "No bookmarks to export"
        );

        return;

    }


    let text =
        "FANDOMVERSE BOOKMARKS\n";

    text +=
        "=====================\n\n";


    bookmarks.forEach((bookmark, index) => {

        let title = "Unknown";


        if (
            bookmark.type === "content"
        ) {

            title =
                content.find(
                    x => x.id === bookmark.id
                )?.title || title;

        }


        if (
            bookmark.type === "character"
        ) {

            title =
                characters.find(
                    x => x.id === bookmark.id
                )?.name || title;

        }


        text +=
            `${index + 1}. ${title}\n`;

        text +=
            `Type: ${bookmark.type}\n\n`;

    });


    const blob =
        new Blob(
            [text],
            {type:"text/plain"}
        );


    const url =
        URL.createObjectURL(blob);


    const a =
        document.createElement("a");

    a.href = url;

    a.download =
        "fandomverse-bookmarks.txt";

    a.click();

    URL.revokeObjectURL(url);

}


/* =========================================================
   CART
========================================================= */

function addToCart(id) {

    const item =
        merchandise.find(
            x => x.id === id
        );

    if (!item) return;


    cart.push({

        ...item,

        cartId:
            Date.now() +
            Math.random()

    });


    localStorage.setItem(
        "fandomverseCart",
        JSON.stringify(cart)
    );


    updateCartCount();

    showToast(
        `${item.name} added to cart`
    );

}


function updateCartCount() {

    const count =
        document.getElementById(
            "cartCount"
        );

    if (count) {

        count.textContent =
            cart.length;

    }

}


function openCart() {

    if (!cart.length) {

        openModal(`

            <h2>
                Your Cart is Empty
            </h2>

            <p>
                Add merchandise to your temporary
                shopping cart.
            </p>

        `);

        return;

    }


    let total =
        0;


    const htmlItems =
        cart.map(item => {

            // Prices are stored in Pakistani Rupees (Rs).
            // Strip the currency label and thousands separators so
            // multiple cart items are summed correctly.
            const numeric =
                Number(
                    String(item.price)
                        .replace(/[^0-9.]/g, "")
                );

            total +=
                Number.isFinite(numeric) ? numeric : 0;


            return `

                <div
                    style="
                        display:flex;
                        align-items:center;
                        gap:10px;
                        padding:10px 0;
                        border-bottom:
                        1px solid rgba(255,255,255,.06)
                    "
                >

                    <img
                        src="${item.image}"
                        style="
                            width:55px;
                            height:55px;
                            object-fit:cover;
                            border-radius:6px
                        "
                    >

                    <div style="flex:1">

                        <strong>
                            ${item.name}
                        </strong>

                        <small
                            style="
                                display:block;
                                color:#77819b;
                                margin-top:4px
                            "
                        >
                            ${item.price}
                        </small>

                    </div>

                    <button
                        onclick="removeCartItem('${item.cartId}')"
                        style="
                            border:0;
                            background:none;
                            color:#ff5a8a
                        "
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            `;

        }).join("");


    openModal(`

        <h2>
            Shopping Cart
        </h2>

        <p>
            This cart is only a demo.
            No payment or actual purchase is processed.
        </p>

        <div style="margin-top:15px">

            ${htmlItems}

        </div>

        <div
            style="
                display:flex;
                justify-content:space-between;
                margin-top:18px;
                font-size:14px
            "
        >

            <strong>
                Total
            </strong>

            <strong style="color:#c55cff">
                Rs ${total.toLocaleString("en-PK")}
            </strong>

        </div>

    `);

}


function removeCartItem(cartId) {

    cart =
        cart.filter(
            item =>
                String(item.cartId) !==
                String(cartId)
        );


    localStorage.setItem(
        "fandomverseCart",
        JSON.stringify(cart)
    );


    updateCartCount();

    openCart();

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    const input =
        document.getElementById(
            "globalSearchInput"
        );

    if (!input) return;


    input.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                const value =
                    input.value.trim();

                navigateTo("explore");

                const explore =
                    document.getElementById(
                        "exploreSearch"
                    );

                if (explore) {

                    explore.value =
                        value;

                }

                renderExplore();

            }

        }
    );

}


/* =========================================================
   CHATBOT
========================================================= */

function toggleChat() {

    document
        .getElementById("chatWindow")
        .classList.toggle("active");

}


function quickChat(text) {

    addUserMessage(text);

    setTimeout(() => {

        botReply(text);

    }, 300);

}


function handleChatKey(event) {

    if (
        event.key === "Enter"
    ) {

        sendChat();

    }

}


function sendChat() {

    const input =
        document.getElementById(
            "chatInput"
        );

    const text =
        input.value.trim();

    if (!text) return;


    addUserMessage(text);

    input.value = "";


    setTimeout(() => {

        botReply(text);

    }, 300);

}


function addUserMessage(text) {

    const container =
        document.getElementById(
            "chatMessages"
        );


    const div =
        document.createElement("div");

    div.className =
        "user-message";

    div.textContent =
        text;

    container.appendChild(div);

    container.scrollTop =
        container.scrollHeight;

}


function addBotMessage(text) {

    const container =
        document.getElementById(
            "chatMessages"
        );


    const div =
        document.createElement("div");

    div.className =
        "bot-message";

    div.innerHTML =
        text;

    container.appendChild(div);

    container.scrollTop =
        container.scrollHeight;

}


function botReply(text) {

    const msg =
        text.toLowerCase();


    if (
        msg.includes("anime")
    ) {

        addBotMessage(
            "Anime fans can explore articles, characters and media in our Anime category. <br><br><button class='quick-replies'><button onclick=\"filterCategory('anime')\">Explore Anime</button></button>"
        );

        return;

    }


    if (
        msg.includes("gaming") ||
        msg.includes("game")
    ) {

        addBotMessage(
            "Gaming fans can discover gaming articles, media and upcoming events."
        );

        return;

    }


    if (
        msg.includes("movie") ||
        msg.includes("film")
    ) {

        addBotMessage(
            "You can explore our Movies fandom and discover cinematic stories and trailers."
        );

        return;

    }


    if (
        msg.includes("event")
    ) {

        addBotMessage(
            "We have fandom events for every major category. Opening the Events section now."
        );

        setTimeout(() => {
            navigateTo("events");
        }, 700);

        return;

    }


    if (
        msg.includes("store") ||
        msg.includes("merch")
    ) {

        addBotMessage(
            "Check out the FandomVerse Store for merchandise. You can add items to a temporary cart."
        );

        setTimeout(() => {
            navigateTo("merchandise");
        }, 700);

        return;

    }


    if (
        msg.includes("hello") ||
        msg.includes("hi") ||
        msg.includes("hey")
    ) {

        addBotMessage(
            "Hey! 👋 I'm your FandomVerse Assistant. Ask me about anime, gaming, movies, events or merchandise."
        );

        return;

    }


    addBotMessage(
        "I can help you explore Anime, Gaming, Movies, TV Shows, K-Pop, Comics, Manga, Events and Merchandise."
    );

}


/* =========================================================
   VISITOR COUNTER
========================================================= */

function updateVisitorCounter() {

    let count =
        Number(
            localStorage.getItem(
                "fandomverseVisitors"
            ) || 1247
        );


    count += 1;


    localStorage.setItem(
        "fandomverseVisitors",
        count
    );


    const element =
        document.getElementById(
            "visitorCount"
        );


    if (element) {

        element.textContent =
            count.toLocaleString();

    }

}


/* =========================================================
   CLOCK
========================================================= */

function startClock() {

    function update() {

        const clock =
            document.getElementById(
                "clock"
            );

        if (!clock) return;


        const now =
            new Date();


        clock.textContent =
            now.toLocaleTimeString(
                "en-US",
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            );

    }


    update();

    setInterval(
        update,
        1000
    );

}


/* =========================================================
   AUTH DEMO
========================================================= */

function openAuth() {

    openModal(`

        <h2>
            FandomVerse Account
        </h2>

        <p>
            This is a demonstration-only login/signup
            interface. No real authentication is performed.
        </p>

        <input
            placeholder="Email"
            style="
                width:100%;
                padding:11px;
                margin-top:15px;
                background:#0b1329;
                color:white;
                border:1px solid rgba(255,255,255,.08);
                border-radius:6px;
                outline:none
            "
        >

        <input
            type="password"
            placeholder="Password"
            style="
                width:100%;
                padding:11px;
                margin-top:8px;
                background:#0b1329;
                color:white;
                border:1px solid rgba(255,255,255,.08);
                border-radius:6px;
                outline:none
            "
        >

        <button
            class="primary-btn"
            style="margin-top:12px"
            onclick="demoLogin()"
        >
            Login
        </button>

        <button
            class="secondary-btn"
            style="margin-left:5px"
            onclick="demoLogin()"
        >
            Sign Up
        </button>

    `);

}


function demoLogin() {

    closeModal();

    showToast(
        "Demo login successful"
    );

}


/* =========================================================
   CONTACT
========================================================= */

function sendContactMessage() {

    const name =
        document.getElementById(
            "contactName"
        )?.value.trim();


    const email =
        document.getElementById(
            "contactEmail"
        )?.value.trim();


    const message =
        document.getElementById(
            "contactMessage"
        )?.value.trim();


    if (
        !name ||
        !email ||
        !message
    ) {

        showToast(
            "Please complete all fields"
        );

        return;

    }


    showToast(
        "Message submitted successfully"
    );


    document.getElementById(
        "contactName"
    ).value = "";


    document.getElementById(
        "contactEmail"
    ).value = "";


    document.getElementById(
        "contactMessage"
    ).value = "";

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    document
        .getElementById("mainNav")
        .classList.toggle("mobile-open");

}


/* =========================================================
   TRAILER
========================================================= */

function playTrailer(title) {

    const trailer = trailers.find(item => item.title === title);

    if (!trailer) return;

    const player = `
            <div style="position:relative;padding-top:56.25%;border-radius:14px;overflow:hidden;background:#050816">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/${trailer.videoId}?autoplay=1&rel=0"
                    title="${trailer.title}"
                    style="position:absolute;inset:0;width:100%;height:100%;border:0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        `;

    openModal(`
        ${player}

        <h2 style="margin-top:18px">${trailer.title}</h2>

        <p style="color:#9aa4bd;margin-top:8px">
            Official source: ${trailer.source} • ${trailer.duration}
            ${trailer.releaseDate ? ` • Release: ${trailer.releaseDate}` : ""}
        </p>

        <p style="margin-top:12px">
            ${trailer.status === "upcoming"
                ? "Upcoming movie trailer — watch the official preview before its theatrical release."
                : "Official movie trailer from the studio/distributor channel."
            }
        </p>
    `);

}


/* =========================================================
   HELPERS
========================================================= */

function getCategoryName(id) {

    return (
        categories.find(
            category =>
                category.id === id
        )?.name || id
    );

}


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   GLOBAL ERROR PROTECTION
========================================================= */

window.addEventListener(
    "error",
    event => {

        console.error(
            "FandomVerse error:",
            event.error || event.message
        );

    }
);