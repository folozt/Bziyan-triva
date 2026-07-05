/* =====================================================
   TRIVIA HUB - Main Script
   ===================================================== */

// ---------- Category Definitions ----------
const CATEGORIES = [
  { id: "general", name: "General Knowledge", icon: "🧠" },
  { id: "music", name: "Music", icon: "🎵" },
  { id: "sports", name: "Sports", icon: "⚽" },
  { id: "games", name: "Video Games", icon: "🎮" },
  { id: "social", name: "Social Media", icon: "📱" },
  { id: "trends", name: "Internet Trends", icon: "🌐" },
  { id: "movies", name: "Movies & TV", icon: "🎬" },
  { id: "geography", name: "Geography", icon: "🌍" },
  { id: "science", name: "Science", icon: "🔬" },
  { id: "history", name: "History", icon: "📜" },
  { id: "technology", name: "Technology", icon: "💻" },
  { id: "random", name: "Random Mix", icon: "🎲" }
];

// ---------- Question Bank ----------
// Each question: { q: "...", options: [...4 options...], answer: "correct option text" }
const QUESTIONS = {
  general: [
    { q: "What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne", "Perth"], answer: "Canberra" },
    { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { q: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Saturn", "Mars"], answer: "Jupiter" },
    { q: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Gd", "Go"], answer: "Au" },
    { q: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: "7" },
    { q: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" },
    { q: "What language has the most native speakers?", options: ["English", "Mandarin", "Spanish", "Hindi"], answer: "Mandarin" },
    { q: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: "6" },
    { q: "What is the freezing point of water in Celsius?", options: ["0", "32", "100", "-1"], answer: "0" },
    { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Mercury"], answer: "Mars" },
    { q: "What is the tallest mountain in the world?", options: ["K2", "Everest", "Kilimanjaro", "Denali"], answer: "Everest" },
    { q: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: "8" },
    { q: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: "Yen" },
    { q: "Which organ pumps blood through the body?", options: ["Liver", "Heart", "Lungs", "Kidney"], answer: "Heart" },
    { q: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"], answer: "Blue Whale" },
    { q: "How many bones are in the adult human body?", options: ["106", "206", "306", "406"], answer: "206" },
    { q: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Carbon Dioxide" },
    { q: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Horse", "Leopard"], answer: "Cheetah" },
    { q: "How many days are in a leap year?", options: ["364", "365", "366", "367"], answer: "366" },
    { q: "Which is the smallest country in the world?", options: ["Monaco", "Vatican City", "Malta", "Liechtenstein"], answer: "Vatican City" },
    { q: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion", "Lime"], answer: "Avocado" },
    { q: "What do bees collect from flowers to make honey?", options: ["Pollen", "Sap", "Nectar", "Water"], answer: "Nectar" },
    { q: "How many strings does a standard guitar have?", options: ["4", "5", "6", "7"], answer: "6" },
    { q: "What is technically the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctic", "Arabian"], answer: "Antarctic" }
  ],
  music: [
    { q: "Who is known as the \"King of Pop\"?", options: ["Elvis Presley", "Michael Jackson", "Prince", "Usher"], answer: "Michael Jackson" },
    { q: "How many keys are on a standard piano?", options: ["76", "88", "92", "100"], answer: "88" },
    { q: "Which band sang \"Bohemian Rhapsody\"?", options: ["Queen", "The Beatles", "Rolling Stones", "Led Zeppelin"], answer: "Queen" },
    { q: "Which instrument typically has 6 strings?", options: ["Violin", "Guitar", "Cello", "Banjo"], answer: "Guitar" },
    { q: "Who composed the \"Moonlight Sonata\"?", options: ["Mozart", "Beethoven", "Bach", "Chopin"], answer: "Beethoven" },
    { q: "Which artist released the album \"Thriller\"?", options: ["Michael Jackson", "Prince", "Madonna", "Whitney Houston"], answer: "Michael Jackson" },
    { q: "What genre is Bob Marley known for?", options: ["Jazz", "Reggae", "Rock", "Blues"], answer: "Reggae" },
    { q: "Which of these was NOT a member of The Beatles?", options: ["John Lennon", "Paul McCartney", "Mick Jagger", "Ringo Starr"], answer: "Mick Jagger" },
    { q: "Which band is often cited as the best-selling music act of all time?", options: ["Elvis", "The Beatles", "Michael Jackson", "Madonna"], answer: "The Beatles" },
    { q: "Which instrument is Yo-Yo Ma famous for playing?", options: ["Violin", "Piano", "Cello", "Flute"], answer: "Cello" },
    { q: "What does \"DJ\" stand for?", options: ["Disc Jockey", "Dance Jam", "Digital Jockey", "Dance Junction"], answer: "Disc Jockey" },
    { q: "Which pop star is known as \"Queen Bey\"?", options: ["Rihanna", "Beyonce", "Adele", "Taylor Swift"], answer: "Beyonce" },
    { q: "Which band performed \"Stairway to Heaven\"?", options: ["Led Zeppelin", "Pink Floyd", "The Who", "Queen"], answer: "Led Zeppelin" },
    { q: "What music genre originated in New Orleans?", options: ["Jazz", "Country", "Reggae", "Techno"], answer: "Jazz" },
    { q: "Which country is the birthplace of K-pop?", options: ["China", "Japan", "South Korea", "Thailand"], answer: "South Korea" },
    { q: "Who sang \"Shape of You\"?", options: ["Ed Sheeran", "Justin Bieber", "Bruno Mars", "Sam Smith"], answer: "Ed Sheeran" },
    { q: "What does \"EDM\" stand for?", options: ["Electronic Dance Music", "Electric Drum Music", "Extended Dance Mix", "Electronic Digital Music"], answer: "Electronic Dance Music" },
    { q: "Which singer is known as \"The Boss\"?", options: ["Bruce Springsteen", "Bon Jovi", "Billy Joel", "Elton John"], answer: "Bruce Springsteen" },
    { q: "What is the highest female singing voice type?", options: ["Alto", "Soprano", "Mezzo", "Tenor"], answer: "Soprano" },
    { q: "Which artist released the album \"1989\"?", options: ["Taylor Swift", "Katy Perry", "Ariana Grande", "Selena Gomez"], answer: "Taylor Swift" },
    { q: "What instrument does a drummer primarily play?", options: ["Guitar", "Drums", "Bass", "Keyboard"], answer: "Drums" },
    { q: "Which music streaming service uses a green logo?", options: ["Spotify", "Apple Music", "Tidal", "YouTube Music"], answer: "Spotify" },
    { q: "Who wrote the opera \"The Magic Flute\"?", options: ["Beethoven", "Mozart", "Bach", "Verdi"], answer: "Mozart" },
    { q: "What is a group of singers performing together called?", options: ["Choir", "Band", "Orchestra", "Ensemble"], answer: "Choir" },
    { q: "Which 1969 festival is known as \"three days of peace and music\"?", options: ["Coachella", "Woodstock", "Lollapalooza", "Glastonbury"], answer: "Woodstock" }
  ],
  sports: [
    { q: "How many players are on a soccer team on the field per side?", options: ["9", "10", "11", "12"], answer: "11" },
    { q: "In which sport would you perform a \"slam dunk\"?", options: ["Basketball", "Volleyball", "Tennis", "Baseball"], answer: "Basketball" },
    { q: "How many holes are in a standard round of golf?", options: ["9", "18", "24", "36"], answer: "18" },
    { q: "Who is credited with inventing basketball?", options: ["James Naismith", "Walter Camp", "Abner Doubleday", "William Morgan"], answer: "James Naismith" },
    { q: "How many players are on a basketball court per team?", options: ["4", "5", "6", "7"], answer: "5" },
    { q: "What sport is played at Wimbledon?", options: ["Tennis", "Golf", "Cricket", "Rugby"], answer: "Tennis" },
    { q: "How often are the Summer Olympics held?", options: ["Every 2 years", "Every 4 years", "Every 5 years", "Every year"], answer: "Every 4 years" },
    { q: "What is the maximum possible score in ten-pin bowling?", options: ["200", "250", "300", "350"], answer: "300" },
    { q: "In baseball, how many strikes make an out?", options: ["2", "3", "4", "5"], answer: "3" },
    { q: "Which sport uses a shuttlecock?", options: ["Tennis", "Badminton", "Squash", "Table Tennis"], answer: "Badminton" },
    { q: "How many players are on a volleyball team on court?", options: ["5", "6", "7", "8"], answer: "6" },
    { q: "What color card signals a player is sent off in soccer?", options: ["Yellow", "Red", "Blue", "Black"], answer: "Red" },
    { q: "In American football, how many points is a touchdown worth?", options: ["3", "6", "7", "8"], answer: "6" },
    { q: "Which country has won the most FIFA World Cups?", options: ["Germany", "Brazil", "Argentina", "Italy"], answer: "Brazil" },
    { q: "What is considered the national sport of Japan?", options: ["Judo", "Sumo Wrestling", "Karate", "Baseball"], answer: "Sumo Wrestling" },
    { q: "How many rings are on the Olympic flag?", options: ["4", "5", "6", "7"], answer: "5" },
    { q: "In cricket, how many players are on each team?", options: ["9", "10", "11", "12"], answer: "11" },
    { q: "What is the term for scoring zero runs in cricket called?", options: ["Duck", "Golden", "Zero", "Blank"], answer: "Duck" },
    { q: "Which sport is nicknamed \"the sweet science\"?", options: ["Wrestling", "Boxing", "Fencing", "Judo"], answer: "Boxing" },
    { q: "Approximately how many miles is a marathon?", options: ["20", "22", "26.2", "30"], answer: "26.2" },
    { q: "What is the term for three strikes in a row in bowling?", options: ["Turkey", "Triple", "Strike Out", "Hat trick"], answer: "Turkey" },
    { q: "In ice hockey, how many players (including goalie) are on the ice per team?", options: ["5", "6", "7", "8"], answer: "6" },
    { q: "Which sport uses the term \"love\" for a score of zero?", options: ["Tennis", "Squash", "Badminton", "Table Tennis"], answer: "Tennis" },
    { q: "What is the diameter of a basketball hoop in inches?", options: ["16", "18", "20", "22"], answer: "18" },
    { q: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "UK", "Japan"], answer: "Brazil" }
  ],
  games: [
    { q: "Which company created Mario?", options: ["Sega", "Nintendo", "Sony", "Microsoft"], answer: "Nintendo" },
    { q: "What is the best-selling video game of all time?", options: ["Tetris", "Minecraft", "GTA V", "Fortnite"], answer: "Minecraft" },
    { q: "Which game series features the character Master Chief?", options: ["Halo", "Gears of War", "Destiny", "Call of Duty"], answer: "Halo" },
    { q: "What company makes the PlayStation?", options: ["Sony", "Microsoft", "Nintendo", "Sega"], answer: "Sony" },
    { q: "What is the name of Nintendo's famous plumber character?", options: ["Luigi", "Mario", "Wario", "Toad"], answer: "Mario" },
    { q: "Which battle royale game features a purple storm circle?", options: ["Fortnite", "PUBG", "Apex Legends", "Warzone"], answer: "Fortnite" },
    { q: "What does \"NPC\" stand for in gaming?", options: ["Non-Player Character", "New Player Class", "Network Player Control", "Non-Playable Class"], answer: "Non-Player Character" },
    { q: "Which game series features the \"Master Sword\"?", options: ["Zelda", "Final Fantasy", "Kingdom Hearts", "Elden Ring"], answer: "Zelda" },
    { q: "In Minecraft, which material makes the strongest tools?", options: ["Wood", "Stone", "Iron", "Diamond"], answer: "Diamond" },
    { q: "Which company developed Fortnite?", options: ["Epic Games", "Valve", "EA", "Ubisoft"], answer: "Epic Games" },
    { q: "What does \"XP\" stand for in gaming?", options: ["Experience Points", "Extra Power", "Extended Play", "Exclusive Points"], answer: "Experience Points" },
    { q: "Which game popularized the modern battle royale genre?", options: ["Fortnite", "PUBG", "Apex Legends", "H1Z1"], answer: "PUBG" },
    { q: "What is the console developed by Microsoft called?", options: ["Xbox", "PlayStation", "Switch", "Wii"], answer: "Xbox" },
    { q: "Which game franchise features Pikachu?", options: ["Pokemon", "Digimon", "Yu-Gi-Oh", "Sonic"], answer: "Pokemon" },
    { q: "What is the name of Sega's hedgehog mascot?", options: ["Sonic", "Tails", "Knuckles", "Shadow"], answer: "Sonic" },
    { q: "Who is the main villain in most Super Mario games?", options: ["Bowser", "Ganon", "Wario", "King Boo"], answer: "Bowser" },
    { q: "Which gaming console was released earliest?", options: ["PlayStation", "Nintendo 64", "Sega Genesis", "Xbox"], answer: "Sega Genesis" },
    { q: "What genre is \"League of Legends\"?", options: ["FPS", "MOBA", "RPG", "Racing"], answer: "MOBA" },
    { q: "Which company owns the Call of Duty franchise?", options: ["Activision", "EA", "Ubisoft", "Sony"], answer: "Activision" },
    { q: "What does \"FPS\" commonly stand for as a game genre?", options: ["First Person Shooter", "Frames Per Second", "Fast Paced Strategy", "Final Play Style"], answer: "First Person Shooter" },
    { q: "Which company publishes the Assassin's Creed series?", options: ["Ubisoft", "EA", "Activision", "Rockstar"], answer: "Ubisoft" },
    { q: "Which sandbox game is famous for building with blocks?", options: ["Minecraft", "Roblox", "Terraria", "Fortnite"], answer: "Minecraft" },
    { q: "Which iconic weapon does Link carry in Zelda games?", options: ["Master Sword", "Buster Sword", "Excalibur", "Keyblade"], answer: "Master Sword" },
    { q: "Which company developed Grand Theft Auto?", options: ["Rockstar Games", "EA", "Ubisoft", "Bethesda"], answer: "Rockstar Games" },
    { q: "Which handheld console did Nintendo release in 2017?", options: ["Switch", "3DS", "Game Boy", "Wii U"], answer: "Switch" }
  ],
  social: [
    { q: "Which app is known for short dance and lip-sync videos?", options: ["TikTok", "LinkedIn", "Twitter", "Reddit"], answer: "TikTok" },
    { q: "What is the character limit for a post on X (Twitter)?", options: ["140", "240", "280", "300"], answer: "280" },
    { q: "Which platform used a blue bird as its former logo?", options: ["Twitter (X)", "Facebook", "Instagram", "Snapchat"], answer: "Twitter (X)" },
    { q: "What does \"DM\" stand for?", options: ["Direct Message", "Direct Mail", "Digital Media", "Dual Message"], answer: "Direct Message" },
    { q: "Which app is known for disappearing photo messages?", options: ["Snapchat", "Instagram", "Facebook", "TikTok"], answer: "Snapchat" },
    { q: "Who founded Facebook?", options: ["Mark Zuckerberg", "Jack Dorsey", "Elon Musk", "Bill Gates"], answer: "Mark Zuckerberg" },
    { q: "What is Instagram's short-form video feature called?", options: ["Reels", "Shorts", "Stories", "Clips"], answer: "Reels" },
    { q: "Which platform is known for community discussion boards called \"subreddits\"?", options: ["Reddit", "Tumblr", "Twitter", "Pinterest"], answer: "Reddit" },
    { q: "What symbol is used before a hashtag?", options: ["#", "@", "&", "*"], answer: "#" },
    { q: "What does it mean when content \"goes viral\"?", options: ["It spreads rapidly online", "It gets deleted", "It goes offline", "It gets reported"], answer: "It spreads rapidly online" },
    { q: "Which app is primarily used for professional networking?", options: ["LinkedIn", "TikTok", "Snapchat", "Pinterest"], answer: "LinkedIn" },
    { q: "What is YouTube's short-form video feature called?", options: ["Shorts", "Reels", "Stories", "Clips"], answer: "Shorts" },
    { q: "Which platform did Elon Musk rename to \"X\"?", options: ["Twitter", "Facebook", "Instagram", "Snapchat"], answer: "Twitter" },
    { q: "What does a social media \"algorithm\" primarily do?", options: ["Recommends content to users", "Deletes old posts", "Creates hashtags", "Verifies accounts"], answer: "Recommends content to users" },
    { q: "Which app is known for image boards and mood boards?", options: ["Pinterest", "Reddit", "Tumblr", "LinkedIn"], answer: "Pinterest" },
    { q: "What symbol usually indicates a verified account?", options: ["Checkmark", "Star", "Heart", "Flag"], answer: "Checkmark" },
    { q: "What does \"FYP\" stand for on TikTok?", options: ["For You Page", "Find Your People", "Follow Your Passion", "Feature Your Post"], answer: "For You Page" },
    { q: "Which company owns both Instagram and Facebook?", options: ["Meta", "Google", "Twitter", "ByteDance"], answer: "Meta" },
    { q: "What is it called when brands pay influencers to promote products?", options: ["Sponsored Content", "Free Trial", "Cold Outreach", "Ad Blocking"], answer: "Sponsored Content" },
    { q: "Which app popularized 24-hour disappearing \"Stories\" first?", options: ["Snapchat", "Instagram", "Facebook", "TikTok"], answer: "Snapchat" },
    { q: "What does it mean to get \"ratio'd\" online?", options: ["Replies outnumber likes negatively", "A chart goes viral", "An algorithm update", "An account gets verified"], answer: "Replies outnumber likes negatively" },
    { q: "Which company developed TikTok?", options: ["ByteDance", "Meta", "Google", "Tencent"], answer: "ByteDance" },
    { q: "What is a \"meme\" best described as?", options: ["A humorous shared image or idea", "A type of online ad", "A private message", "A verified badge"], answer: "A humorous shared image or idea" },
    { q: "Which platform is known for short-form blogging with a scrolling dashboard?", options: ["Tumblr", "LinkedIn", "Pinterest", "Reddit"], answer: "Tumblr" },
    { q: "What does \"going live\" mean on social media?", options: ["Broadcasting in real time", "Posting a photo", "Deleting an account", "Blocking someone"], answer: "Broadcasting in real time" }
  ],
  trends: [
    { q: "What best describes a \"meme\"?", options: ["Funny shared content", "A computer virus", "A web browser", "A type of currency"], answer: "Funny shared content" },
    { q: "What year did \"Gangnam Style\" go viral worldwide?", options: ["2010", "2012", "2014", "2016"], answer: "2012" },
    { q: "What does \"LOL\" stand for?", options: ["Laugh Out Loud", "Lots of Love", "Live On Line", "Laugh Often Loudly"], answer: "Laugh Out Loud" },
    { q: "Which viral trend involved pouring cold water for charity?", options: ["Ice Bucket Challenge", "Cinnamon Challenge", "Mannequin Challenge", "Ice Age Challenge"], answer: "Ice Bucket Challenge" },
    { q: "What does \"GOAT\" mean in internet slang?", options: ["Greatest Of All Time", "Good On All Terms", "Go On And Try", "Great Outstanding Amazing Talent"], answer: "Greatest Of All Time" },
    { q: "What is a \"troll\" in internet culture?", options: ["Someone who provokes online arguments", "A type of malware", "A search engine", "A hashtag"], answer: "Someone who provokes online arguments" },
    { q: "What does \"FOMO\" stand for?", options: ["Fear Of Missing Out", "Fear Of Making Offers", "Focus On My Own", "Friends Over Me Often"], answer: "Fear Of Missing Out" },
    { q: "In what year did TikTok launch globally under that name?", options: ["2016", "2017", "2018", "2019"], answer: "2018" },
    { q: "What best defines a \"viral video\"?", options: ["A video that spreads quickly online", "A video about viruses", "A deleted video", "A private video"], answer: "A video that spreads quickly online" },
    { q: "What is \"doomscrolling\"?", options: ["Endlessly scrolling negative news", "Playing mobile games", "Watching movies online", "Online shopping"], answer: "Endlessly scrolling negative news" },
    { q: "What does \"brb\" mean?", options: ["Be right back", "Bring resources back", "Big red button", "Better run baby"], answer: "Be right back" },
    { q: "Which meme features a man looking back at another woman while his partner looks on?", options: ["Distracted Boyfriend", "Woman Yelling at Cat", "Drake Meme", "Success Kid"], answer: "Distracted Boyfriend" },
    { q: "What does \"IYKYK\" stand for?", options: ["If You Know You Know", "Is Your Knowledge Yours Kept", "I Yell Kindly You Know", "It's Your Kind, You Keep"], answer: "If You Know You Know" },
    { q: "What is \"cancel culture\"?", options: ["Public boycotting of someone for their actions", "A type of software update", "A meme format", "A hashtag trend"], answer: "Public boycotting of someone for their actions" },
    { q: "What does calling someone an \"NPC\" mean online?", options: ["They act unoriginal or scripted", "They are a professional gamer", "They are a moderator", "They are a bot account"], answer: "They act unoriginal or scripted" },
    { q: "Which viral video from 2015 involved a llama chase?", options: ["Llama Drama", "Chewbacca Mom", "Charlie Bit My Finger", "Double Rainbow"], answer: "Llama Drama" },
    { q: "What does it mean when a post gets \"ratio'd\"?", options: ["It gets more critical replies than likes", "It wins an argument", "It goes viral positively", "It gets verified"], answer: "It gets more critical replies than likes" },
    { q: "What best describes an \"influencer\"?", options: ["Someone who impacts followers' opinions or purchases online", "A type of software", "A hashtag trend", "A camera brand"], answer: "Someone who impacts followers' opinions or purchases online" },
    { q: "What does \"based\" mean in internet slang?", options: ["Confidently authentic", "Confused", "Angry", "Bored"], answer: "Confidently authentic" },
    { q: "Which viral challenge involved eating spoonfuls of cinnamon?", options: ["Cinnamon Challenge", "Ice Bucket Challenge", "Mannequin Challenge", "Tide Pod Challenge"], answer: "Cinnamon Challenge" },
    { q: "What does it mean to \"stan\" someone online?", options: ["To be an obsessive fan", "To troll someone", "To create a hashtag", "To make a meme"], answer: "To be an obsessive fan" },
    { q: "What is \"clickbait\"?", options: ["Misleading headlines used to get clicks", "A type of virus", "A search filter", "An ad blocker"], answer: "Misleading headlines used to get clicks" },
    { q: "In which year did the \"Harlem Shake\" trend go viral?", options: ["2012", "2013", "2014", "2015"], answer: "2013" },
    { q: "What does \"rizz\" mean in modern slang?", options: ["Charisma", "Rhythm", "Riches", "Respect"], answer: "Charisma" },
    { q: "What is a \"hashtag\" primarily used for?", options: ["Categorizing content by topic", "Sending private messages", "Blocking users", "Editing photos"], answer: "Categorizing content by topic" }
  ],
  movies: [
    { q: "Who directed \"Jaws\" and \"E.T.\"?", options: ["Steven Spielberg", "George Lucas", "James Cameron", "Martin Scorsese"], answer: "Steven Spielberg" },
    { q: "Which film is the highest-grossing movie of all time (unadjusted)?", options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars"], answer: "Avatar" },
    { q: "Which show is set in the fictional town of Hawkins, Indiana?", options: ["Stranger Things", "Riverdale", "Twin Peaks", "Supernatural"], answer: "Stranger Things" },
    { q: "Who played Iron Man in the Marvel Cinematic Universe?", options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"], answer: "Robert Downey Jr." },
    { q: "Which film franchise features a wizard named Harry?", options: ["Harry Potter", "Lord of the Rings", "Narnia", "Percy Jackson"], answer: "Harry Potter" },
    { q: "What is the name of the coffee shop in \"Friends\"?", options: ["Central Perk", "Java Junction", "The Grind", "Perk Up"], answer: "Central Perk" },
    { q: "Who directed both \"Titanic\" and \"Avatar\"?", options: ["James Cameron", "Steven Spielberg", "Ridley Scott", "Peter Jackson"], answer: "James Cameron" },
    { q: "Which animation studio created \"Toy Story\"?", options: ["Pixar", "DreamWorks", "Disney Animation", "Illumination"], answer: "Pixar" },
    { q: "What is Batman's secret identity?", options: ["Bruce Wayne", "Clark Kent", "Tony Stark", "Peter Parker"], answer: "Bruce Wayne" },
    { q: "Which TV series follows the Stark family in a fantasy kingdom?", options: ["Game of Thrones", "The Witcher", "Vikings", "House of the Dragon"], answer: "Game of Thrones" },
    { q: "Who played the Joker in \"The Dark Knight\"?", options: ["Heath Ledger", "Jack Nicholson", "Joaquin Phoenix", "Jared Leto"], answer: "Heath Ledger" },
    { q: "What is the name of Han Solo's ship in Star Wars?", options: ["Millennium Falcon", "Star Destroyer", "X-Wing", "Death Star"], answer: "Millennium Falcon" },
    { q: "Which movie features the line \"I'll be back\"?", options: ["The Terminator", "Predator", "RoboCop", "Total Recall"], answer: "The Terminator" },
    { q: "Which film is the highest-grossing animated movie as of the mid-2020s?", options: ["Frozen II", "The Lion King (2019)", "Inside Out 2", "Frozen"], answer: "Inside Out 2" },
    { q: "Which sitcom follows six friends living in NYC apartments?", options: ["Friends", "Seinfeld", "How I Met Your Mother", "The Office"], answer: "Friends" },
    { q: "Who plays Captain Jack Sparrow in Pirates of the Caribbean?", options: ["Johnny Depp", "Orlando Bloom", "Geoffrey Rush", "Javier Bardem"], answer: "Johnny Depp" },
    { q: "What is the name of the magical school in Harry Potter?", options: ["Hogwarts", "Beauxbatons", "Durmstrang", "Ilvermorny"], answer: "Hogwarts" },
    { q: "Which show features dragons and takes place in Westeros?", options: ["Game of Thrones", "The Witcher", "Vikings", "Merlin"], answer: "Game of Thrones" },
    { q: "Who directed \"Pulp Fiction\"?", options: ["Quentin Tarantino", "Martin Scorsese", "Christopher Nolan", "David Fincher"], answer: "Quentin Tarantino" },
    { q: "What is the name of Tony Stark's AI assistant?", options: ["JARVIS", "FRIDAY", "EDITH", "ULTRON"], answer: "JARVIS" },
    { q: "Which film won Best Picture for the 2019 movie year?", options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"], answer: "Parasite" },
    { q: "What is the name of the fictional African nation in Black Panther?", options: ["Wakanda", "Zamunda", "Genovia", "Latveria"], answer: "Wakanda" },
    { q: "Who played Hermione Granger in the Harry Potter films?", options: ["Emma Watson", "Emma Stone", "Emma Roberts", "Emma Thompson"], answer: "Emma Watson" },
    { q: "Which streaming service produced \"Stranger Things\"?", options: ["Netflix", "Hulu", "Amazon Prime", "Disney+"], answer: "Netflix" },
    { q: "What is the name of the paper company in \"The Office\" (US)?", options: ["Dunder Mifflin", "Wernham Hogg", "Initech", "Sabre"], answer: "Dunder Mifflin" }
  ],
  geography: [
    { q: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
    { q: "Which is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile" },
    { q: "What is the smallest continent by land area?", options: ["Australia", "Europe", "Antarctica", "South America"], answer: "Australia" },
    { q: "Which country has the largest population as of recent estimates?", options: ["China", "India", "USA", "Indonesia"], answer: "India" },
    { q: "What is the capital of Canada?", options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], answer: "Ottawa" },
    { q: "Which is the largest hot desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Arabian"], answer: "Sahara" },
    { q: "What is the capital of Japan?", options: ["Tokyo", "Osaka", "Kyoto", "Yokohama"], answer: "Tokyo" },
    { q: "Which country is shaped like a boot?", options: ["Italy", "Greece", "Spain", "Portugal"], answer: "Italy" },
    { q: "What is the tallest waterfall in the world?", options: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"], answer: "Angel Falls" },
    { q: "Which mountain range is often considered the border between Europe and Asia?", options: ["Ural Mountains", "Alps", "Andes", "Himalayas"], answer: "Ural Mountains" },
    { q: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: "Cairo" },
    { q: "Which country has the most time zones (including territories)?", options: ["Russia", "USA", "France", "China"], answer: "France" },
    { q: "What is the smallest country in the world by area?", options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"], answer: "Vatican City" },
    { q: "Which ocean is the smallest?", options: ["Arctic", "Indian", "Atlantic", "Southern"], answer: "Arctic" },
    { q: "What is the capital of Brazil?", options: ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Salvador"], answer: "Brasilia" },
    { q: "Which African country was formerly known as Abyssinia?", options: ["Ethiopia", "Kenya", "Sudan", "Somalia"], answer: "Ethiopia" },
    { q: "What is the largest island in the world?", options: ["Greenland", "Australia", "Madagascar", "Borneo"], answer: "Greenland" },
    { q: "Which country has the most natural lakes?", options: ["Canada", "Russia", "USA", "Finland"], answer: "Canada" },
    { q: "What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne", "Perth"], answer: "Canberra" },
    { q: "Which river flows through Egypt?", options: ["Nile", "Amazon", "Congo", "Niger"], answer: "Nile" },
    { q: "What is the highest mountain in Africa?", options: ["Kilimanjaro", "Mount Kenya", "Atlas", "Drakensberg"], answer: "Kilimanjaro" },
    { q: "Which country lies in both Europe and Asia?", options: ["Turkey", "Greece", "Italy", "Spain"], answer: "Turkey" },
    { q: "What is the capital of Russia?", options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"], answer: "Moscow" },
    { q: "Which sea is known as the saltiest body of water?", options: ["Dead Sea", "Red Sea", "Black Sea", "Caspian Sea"], answer: "Dead Sea" },
    { q: "What is the capital of South Korea?", options: ["Seoul", "Busan", "Incheon", "Daegu"], answer: "Seoul" }
  ],
  science: [
    { q: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "H2"], answer: "H2O" },
    { q: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], answer: "8" },
    { q: "What force pulls objects toward the Earth?", options: ["Gravity", "Magnetism", "Friction", "Inertia"], answer: "Gravity" },
    { q: "What is known as the powerhouse of the cell?", options: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"], answer: "Mitochondria" },
    { q: "What gas do humans need to breathe to survive?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Oxygen" },
    { q: "What is the approximate speed of light in km/s?", options: ["300,000", "150,000", "500,000", "1,000,000"], answer: "300,000" },
    { q: "Who developed the theory of relativity?", options: ["Einstein", "Newton", "Galileo", "Hawking"], answer: "Einstein" },
    { q: "What is the boiling point of water in Celsius?", options: ["90", "100", "110", "120"], answer: "100" },
    { q: "Which planet is best known for its prominent rings?", options: ["Saturn", "Jupiter", "Uranus", "Neptune"], answer: "Saturn" },
    { q: "What is the scientific study of living organisms called?", options: ["Biology", "Chemistry", "Physics", "Geology"], answer: "Biology" },
    { q: "Which subatomic particle carries a negative charge?", options: ["Electron", "Proton", "Neutron", "Photon"], answer: "Electron" },
    { q: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dioxyribonuclear Acid", "Deoxyribose Nucleic Acid", "Diribonucleic Acid"], answer: "Deoxyribonucleic Acid" },
    { q: "What is the hardest known natural substance on Earth?", options: ["Diamond", "Gold", "Iron", "Quartz"], answer: "Diamond" },
    { q: "Which scientist proposed the theory of evolution by natural selection?", options: ["Charles Darwin", "Isaac Newton", "Albert Einstein", "Gregor Mendel"], answer: "Charles Darwin" },
    { q: "What is the process by which plants make their own food called?", options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"], answer: "Photosynthesis" },
    { q: "What is the chemical symbol for sodium?", options: ["Na", "So", "Sd", "S"], answer: "Na" },
    { q: "How many chambers does the human heart have?", options: ["2", "3", "4", "5"], answer: "4" },
    { q: "Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
    { q: "What type of energy does the sun primarily emit?", options: ["Solar", "Nuclear", "Wind", "Geothermal"], answer: "Solar" },
    { q: "What is the pH value of pure water?", options: ["7", "0", "14", "1"], answer: "7" },
    { q: "What is the unit of electrical resistance called?", options: ["Ohm", "Volt", "Watt", "Ampere"], answer: "Ohm" },
    { q: "Which blood type is known as the universal donor?", options: ["O negative", "AB positive", "A positive", "B negative"], answer: "O negative" },
    { q: "What is the scientific study of weather called?", options: ["Meteorology", "Geology", "Astronomy", "Ecology"], answer: "Meteorology" },
    { q: "Which organ filters blood in the human body?", options: ["Kidneys", "Liver", "Lungs", "Heart"], answer: "Kidneys" },
    { q: "What is the most abundant gas in Earth's atmosphere?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"], answer: "Nitrogen" }
  ],
  history: [
    { q: "Who was the first President of the United States?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: "George Washington" },
    { q: "In what year did World War II end?", options: ["1943", "1945", "1947", "1950"], answer: "1945" },
    { q: "Which ancient civilization built the pyramids of Giza?", options: ["Egyptians", "Romans", "Greeks", "Mayans"], answer: "Egyptians" },
    { q: "Who was the British Prime Minister during most of World War II?", options: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Tony Blair"], answer: "Winston Churchill" },
    { q: "In what year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], answer: "1912" },
    { q: "Which empire was ruled by Julius Caesar?", options: ["Roman Empire", "Greek Empire", "Persian Empire", "Ottoman Empire"], answer: "Roman Empire" },
    { q: "Which wall fell in 1989, symbolizing the end of Cold War divisions?", options: ["Berlin Wall", "Great Wall", "Hadrian's Wall", "Wall of China"], answer: "Berlin Wall" },
    { q: "Who was the first person to walk on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], answer: "Neil Armstrong" },
    { q: "Which country gifted the Statue of Liberty to the USA?", options: ["France", "UK", "Spain", "Italy"], answer: "France" },
    { q: "What year did World War I begin?", options: ["1912", "1914", "1916", "1918"], answer: "1914" },
    { q: "Who was known as the \"Maid of Orleans\"?", options: ["Joan of Arc", "Marie Antoinette", "Catherine the Great", "Elizabeth I"], answer: "Joan of Arc" },
    { q: "Which document begins with the words \"We the People\"?", options: ["US Constitution", "Declaration of Independence", "Magna Carta", "Bill of Rights"], answer: "US Constitution" },
    { q: "Which ancient wonder was located in Alexandria?", options: ["Lighthouse of Alexandria", "Colossus of Rhodes", "Hanging Gardens", "Great Pyramid"], answer: "Lighthouse of Alexandria" },
    { q: "Which Egyptian queen was famous for her relationships with Roman leaders?", options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"], answer: "Cleopatra" },
    { q: "Which country was among the first to grant women the right to vote?", options: ["New Zealand", "USA", "UK", "France"], answer: "New Zealand" },
    { q: "In which year did the French Revolution begin?", options: ["1789", "1799", "1776", "1804"], answer: "1789" },
    { q: "Who was the leader of Nazi Germany during World War II?", options: ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini", "Hermann Goring"], answer: "Adolf Hitler" },
    { q: "Which ship famously carried Pilgrims to America in 1620?", options: ["Mayflower", "Santa Maria", "Endeavour", "Beagle"], answer: "Mayflower" },
    { q: "What was the name of the cultural rebirth period after the Middle Ages?", options: ["Renaissance", "Enlightenment", "Reformation", "Industrial Revolution"], answer: "Renaissance" },
    { q: "Which US President was assassinated in 1865?", options: ["Abraham Lincoln", "John F. Kennedy", "James Garfield", "William McKinley"], answer: "Abraham Lincoln" },
    { q: "Which country built the Great Wall?", options: ["China", "Japan", "Mongolia", "Korea"], answer: "China" },
    { q: "What was the name of the deadly global pandemic in 1918?", options: ["Spanish Flu", "Black Death", "SARS", "Bubonic Plague"], answer: "Spanish Flu" },
    { q: "Who wrote the Declaration of Independence?", options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"], answer: "Thomas Jefferson" },
    { q: "Which ancient civilization is credited with inventing democracy?", options: ["Ancient Greece", "Ancient Rome", "Ancient Egypt", "Mesopotamia"], answer: "Ancient Greece" },
    { q: "In what year did the Berlin Wall fall?", options: ["1985", "1989", "1991", "1993"], answer: "1989" }
  ],
  technology: [
    { q: "Who co-founded Apple with Steve Wozniak?", options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Jeff Bezos"], answer: "Steve Jobs" },
    { q: "What does \"CPU\" stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Core Processing Unit"], answer: "Central Processing Unit" },
    { q: "Which company created the Windows operating system?", options: ["Microsoft", "Apple", "Google", "IBM"], answer: "Microsoft" },
    { q: "What does \"WWW\" stand for?", options: ["World Wide Web", "World Wide Wire", "Wide World Web", "Wireless Web Way"], answer: "World Wide Web" },
    { q: "Who founded Amazon?", options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], answer: "Jeff Bezos" },
    { q: "What does \"AI\" stand for?", options: ["Artificial Intelligence", "Automated Information", "Advanced Interface", "Applied Intelligence"], answer: "Artificial Intelligence" },
    { q: "Which company developed the Android operating system?", options: ["Google", "Apple", "Samsung", "Microsoft"], answer: "Google" },
    { q: "What does \"USB\" stand for?", options: ["Universal Serial Bus", "United Serial Bus", "Universal System Bus", "Unified Serial Bus"], answer: "Universal Serial Bus" },
    { q: "Who is known as the founder of Tesla and SpaceX?", options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Larry Page"], answer: "Elon Musk" },
    { q: "What does \"HTML\" stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "Hyperlink Text Markup Language"], answer: "HyperText Markup Language" },
    { q: "Which company created the first iPhone?", options: ["Apple", "Samsung", "Google", "Nokia"], answer: "Apple" },
    { q: "What does \"RAM\" stand for?", options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Run Access Memory"], answer: "Random Access Memory" },
    { q: "Who founded Microsoft?", options: ["Bill Gates", "Steve Jobs", "Larry Page", "Jeff Bezos"], answer: "Bill Gates" },
    { q: "What does \"GPU\" stand for?", options: ["Graphics Processing Unit", "General Processing Unit", "Graphic Program Unit", "Global Processing Unit"], answer: "Graphics Processing Unit" },
    { q: "Which company owns the messaging app WhatsApp?", options: ["Meta", "Google", "Microsoft", "Twitter"], answer: "Meta" },
    { q: "What year was the first iPhone released?", options: ["2005", "2007", "2009", "2011"], answer: "2007" },
    { q: "What does \"Wi-Fi\" commonly refer to?", options: ["Wireless networking technology", "Wired Fidelity", "Wide Field", "Wireless Field"], answer: "Wireless networking technology" },
    { q: "Which company developed the Google search engine?", options: ["Google Inc.", "Microsoft", "Yahoo", "Apple"], answer: "Google Inc." },
    { q: "What does \"URL\" stand for?", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Locator", "Universal Reference Link"], answer: "Uniform Resource Locator" },
    { q: "Which programming language is best known for web page interactivity?", options: ["JavaScript", "Python", "C++", "Java"], answer: "JavaScript" },
    { q: "What does \"VR\" stand for?", options: ["Virtual Reality", "Video Recording", "Visual Reality", "Virtual Recording"], answer: "Virtual Reality" },
    { q: "Which company created the social network Facebook?", options: ["Meta (Facebook Inc.)", "Google", "Twitter", "Microsoft"], answer: "Meta (Facebook Inc.)" },
    { q: "What does \"IoT\" stand for?", options: ["Internet of Things", "Internet of Technology", "Input Output Technology", "Internet Operating Tech"], answer: "Internet of Things" },
    { q: "Which company makes the Galaxy series of smartphones?", options: ["Samsung", "Apple", "Google", "Huawei"], answer: "Samsung" },
    { q: "What does \"SaaS\" stand for?", options: ["Software as a Service", "System as a Service", "Software and Systems", "Server as a Service"], answer: "Software as a Service" }
  ]
};

// Build the "Random Mix" pool by combining all categories
QUESTIONS.random = Object.keys(QUESTIONS).reduce((all, key) => all.concat(QUESTIONS[key]), []);

// ---------- Game State ----------
let state = {
  currentCategory: null,
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  timer: null,
  timeLeft: 15,
  totalQuestions: 10,
  answered: false
};

const TIME_PER_QUESTION = 15;
const TIMER_CIRCUMFERENCE = 282.6; // 2 * PI * 45

// ---------- DOM References ----------
const loadingScreen = document.getElementById("loading-screen");
const screens = {
  home: document.getElementById("home-screen"),
  categories: document.getElementById("categories-screen"),
  quiz: document.getElementById("quiz-screen"),
  results: document.getElementById("results-screen")
};

const playNowBtn = document.getElementById("play-now-btn");
const backHomeBtn = document.getElementById("back-home-btn");
const categoriesGrid = document.getElementById("categories-grid");
const homeHighScore = document.getElementById("home-high-score");

const categoryLabel = document.getElementById("category-label");
const questionCounter = document.getElementById("question-counter");
const scoreCounter = document.getElementById("score-counter");
const progressBar = document.getElementById("progress-bar");
const timerCircle = document.getElementById("timer-circle");
const timerText = document.getElementById("timer-text");
const questionText = document.getElementById("question-text");
const optionsGrid = document.getElementById("options-grid");

const resultPercentage = document.getElementById("result-percentage");
const resultScoreText = document.getElementById("result-score-text");
const resultRank = document.getElementById("result-rank");
const replayBtn = document.getElementById("replay-btn");
const chooseCategoryBtn = document.getElementById("choose-category-btn");

const confettiContainer = document.getElementById("confetti-container");

// ---------- Utility Functions ----------
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

function getHighScore() {
  const val = localStorage.getItem("triviaHubHighScore");
  return val ? parseInt(val, 10) : 0;
}

function setHighScoreIfBetter(percentage) {
  const current = getHighScore();
  if (percentage > current) {
    localStorage.setItem("triviaHubHighScore", String(percentage));
    return true;
  }
  return false;
}

function updateHomeHighScoreDisplay() {
  homeHighScore.textContent = getHighScore() + "%";
}

// ---------- Simple Sound Effects (Web Audio API) ----------
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  return audioCtx;
}

function playTone(frequency, duration, type) {
  try {
    const ctx = getAudioCtx();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.type = type || "sine";
    oscillator.frequency.value = frequency;
    gainNode.gain.value = 0.15;
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    oscillator.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio not supported/blocked - fail silently
  }
}

function playCorrectSound() {
  playTone(880, 0.25, "sine");
  setTimeout(() => playTone(1174, 0.3, "sine"), 120);
}

function playIncorrectSound() {
  playTone(200, 0.35, "sawtooth");
}

function playClickSound() {
  playTone(440, 0.08, "square");
}

// ---------- Confetti ----------
function launchConfetti() {
  const colors = ["#7c5cff", "#00d4ff", "#ff5c9d", "#2ecc71", "#ffd93d"];
  const pieceCount = 120;
  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const size = Math.random() * 8 + 6;
    piece.style.width = size + "px";
    piece.style.height = (size * 0.4) + "px";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    const duration = Math.random() * 2 + 2.5;
    piece.style.animationDuration = duration + "s";
    piece.style.animationDelay = (Math.random() * 0.5) + "s";
    confettiContainer.appendChild(piece);
    setTimeout(() => piece.remove(), (duration + 1) * 1000);
  }
}

// ---------- Build Category Cards ----------
function buildCategoryCards() {
  categoriesGrid.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `
      <span class="category-icon">${cat.icon}</span>
      <div class="category-name">${cat.name}</div>
    `;
    card.addEventListener("click", () => {
      playClickSound();
      startQuiz(cat.id, cat.name);
    });
    categoriesGrid.appendChild(card);
  });
}

// ---------- Quiz Flow ----------
function startQuiz(categoryId, categoryName) {
  const pool = QUESTIONS[categoryId];
  const shuffledPool = shuffleArray(pool);
  const selected = shuffledPool.slice(0, state.totalQuestions);

  // Shuffle options within each question and store the correct answer text
  state.currentQuestions = selected.map(q => ({
    question: q.q,
    options: shuffleArray(q.options),
    answer: q.answer
  }));

  state.currentCategory = categoryName;
  state.currentIndex = 0;
  state.score = 0;

  categoryLabel.textContent = categoryName;
  scoreCounter.textContent = "0";

  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  state.answered = false;
  const q = state.currentQuestions[state.currentIndex];

  questionCounter.textContent = `Question ${state.currentIndex + 1}/${state.totalQuestions}`;
  const progressPct = (state.currentIndex / state.totalQuestions) * 100;
  progressBar.style.width = progressPct + "%";

  questionText.textContent = q.question;
  optionsGrid.innerHTML = "";

  q.options.forEach(optionText => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optionText;
    btn.addEventListener("click", () => handleAnswer(optionText, btn));
    optionsGrid.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(state.timer);
  state.timeLeft = TIME_PER_QUESTION;
  updateTimerDisplay();

  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      if (!state.answered) {
        handleAnswer(null, null); // time's up, no answer selected
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerText.textContent = state.timeLeft;
  const fraction = state.timeLeft / TIME_PER_QUESTION;
  const offset = TIMER_CIRCUMFERENCE * (1 - fraction);
  timerCircle.style.strokeDashoffset = offset;

  if (state.timeLeft <= 5) {
    timerCircle.style.stroke = "var(--incorrect)";
  } else {
    timerCircle.style.stroke = "var(--accent2)";
  }
}

function handleAnswer(selectedText, btnEl) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timer);

  const q = state.currentQuestions[state.currentIndex];
  const allButtons = optionsGrid.querySelectorAll(".option-btn");
  allButtons.forEach(b => (b.disabled = true));

  const isCorrect = selectedText === q.answer;

  if (isCorrect) {
    state.score++;
    scoreCounter.textContent = state.score;
    if (btnEl) btnEl.classList.add("correct");
    playCorrectSound();
  } else {
    if (btnEl) btnEl.classList.add("incorrect");
    playIncorrectSound();
    // Highlight the correct answer as well
    allButtons.forEach(b => {
      if (b.textContent === q.answer) {
        b.classList.add("correct");
      }
    });
  }

  setTimeout(() => {
    state.currentIndex++;
    if (state.currentIndex < state.totalQuestions) {
      renderQuestion();
    } else {
      finishQuiz();
    }
  }, 1300);
}

function finishQuiz() {
  const percentage = Math.round((state.score / state.totalQuestions) * 100);
  const isNewHigh = setHighScoreIfBetter(percentage);

  resultPercentage.textContent = percentage + "%";
  resultScoreText.textContent = `You scored ${state.score} out of ${state.totalQuestions}`;

  let rank;
  if (percentage === 100) {
    rank = "🏅 Trivia Master";
  } else if (percentage >= 80) {
    rank = "⭐ Expert";
  } else if (percentage >= 60) {
    rank = "🎯 Great";
  } else if (percentage >= 40) {
    rank = "👍 Good";
  } else {
    rank = "🌱 Beginner";
  }
  resultRank.textContent = rank + (isNewHigh ? " — New High Score!" : "");

  progressBar.style.width = "100%";
  showScreen("results");

  if (percentage >= 80) {
    launchConfetti();
  }

  updateHomeHighScoreDisplay();
}

// ---------- Event Listeners ----------
playNowBtn.addEventListener("click", () => {
  playClickSound();
  showScreen("categories");
});

backHomeBtn.addEventListener("click", () => {
  playClickSound();
  showScreen("home");
});

replayBtn.addEventListener("click", () => {
  playClickSound();
  startQuiz(
    CATEGORIES.find(c => c.name === state.currentCategory)?.id || "random",
    state.currentCategory
  );
});

chooseCategoryBtn.addEventListener("click", () => {
  playClickSound();
  showScreen("categories");
});

// ---------- Init ----------
function init() {
  buildCategoryCards();
  updateHomeHighScoreDisplay();
  showScreen("home");

  // Simulate loading screen
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 900);
}

document.addEventListener("DOMContentLoaded", init);
