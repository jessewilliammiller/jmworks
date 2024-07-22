function Work(art, title, artist, jmRole, year, link) {
  this.art = art;
  this.title = title;
  this.artist = artist;
  this.jmRole = jmRole;
  this.year = year;
  this.link = link;
}

const artPath = "images/works-album-art"

const allWorks = [
  new Work(
    `${artPath}/goincircles.jpg`,
    "Go In Circles (Single)",
    "Rachel Ewen",
    "Producer, Mixer, Guitarist",
    "2024",
    "https://rachelewen.bandcamp.com/track/go-in-circles"
  ),
  new Work(
    `${artPath}/babyboy.jpeg`,
    "Baby Boy (Single)",
    "JM Fodder",
    "Writer, Performer, Producer, Mixer",
    "2024",
    "https://jmfodder.bandcamp.com/track/baby-boy"
  ),
  new Work(
    `${artPath}/jmfodderbrokenupworks.jpeg`,
    "Broken Up Before b/w Techno Reality",
    "JM Fodder",
    "Writer, Performer, Producer",
    "2023",
    "https://jmfodder.bandcamp.com/album/broken-up-before"
  ),
  new Work(
    `${artPath}/rachelewenmelatonin.jpeg`,
    "Melatonin",
    "Rachel Ewen",
    "Producer, Mixer, Guitarist",
    "2023",
    "https://rachelewen.bandcamp.com/track/melatonin"
  ),
  new Work(
    `${artPath}/MIF XI.jpeg`,
    "Meditations In Fear vol. XI",
    "Various Artists",
    "Curator/Contributor",
    "2023",
    "https://meditationsinfear.bandcamp.com/album/xi"
  ),
  new Work(
    `${artPath}/Lost.jpeg`,
    "Lost",
    "Rachel Ewen",
    "Producer",
    "2023",
    "https://rachelewen.bandcamp.com/track/lost"
  ),
  new Work(
    `${artPath}/letmein.jpeg`,
    "Let Me In",
    "Rachel Ewen",
    "Producer",
    "2023",
    "https://rachelewen.bandcamp.com/track/let-me-in"
  ),
  new Work(
    `${artPath}/echochamber.jpg`,
    "Echo Chamber (Remix)",
    "Mason Lynass/JM Fodder",
    "Remixer",
    "2023",
    "https://masonlynass.bandcamp.com/album/music-for-an-ordinary-day-remixes"
  ),
  new Work(
    `${artPath}/purplenoon.jpeg`,
    "Purple Noon (single)",
    "Joe Waine",
    "Producer / Guitar / Bass",
    "2023",
    "https://joewaineband.bandcamp.com/track/purple-noon"
  ),
  new Work(
    `${artPath}/ourfodder.jpg`,
    "Our Fodder",
    "JM Fodder",
    "Composer / Producer / Mixing",
    "2023",
    "https://jmfodder.bandcamp.com/album/our-fodder"
  ),
  new Work(
    `${artPath}/sideshows.jpg`,
    "Sideshows",
    "Peg",
    "Guitar / Vocals",
    "2023",
    "https://pegtheband.bandcamp.com/album/sideshows"
  ),
  new Work(
    `${artPath}/kickflipthedevil.jpg`,
    "Kickflip the Devil (Single)",
    "Joe Waine",
    "Mixing / Mastering / Guitar",
    "2022",
    "https://joewaineband.bandcamp.com/track/kickflip-the-devil"
  ),
  new Work(
    `${artPath}/kindasick.jpg`,
    "Kinda Sick b/w Never Coming Down",
    "JM Fodder",
    "Songwriter / Producer",
    "2022",
    "https://jmfodder.bandcamp.com/album/kinda-sick"
  ),
  new Work(
    `${artPath}/unreleasedsongs.jpg`,
    "Unreleased Songs 2016-2020",
    "JM Fodder",
    "Songwriter / Producer / Mixing / Mastering",
    "2022",
    "https://jmfodder.bandcamp.com/album/unreleased-songs-2016-2020"
  ),
  new Work(
    `${artPath}/driveoverhere.jpg`,
    "Drive Over Here bw Suspended Disbelief",
    "JM Fodder",
    "Songwriter / Producer",
    "2022",
    "https://jmfodder.bandcamp.com/album/drive-over-here-suspended-disbelief"
  ),
  new Work(
    `${artPath}/10moods.jpg`,
    "10 Moods",
    "Tone Squad",
    "Songwriter / Producer / Mixing / Mastering",
    "2022",
    "https://open.spotify.com/album/29mjCPf7fctHNt7L3QCC1m?si=UgndKI3VT1yDA7srTCY3pQ"
  ),
  new Work(
    `${artPath}/likeamemory.jpg`,
    "Like A Memory",
    "Supertown",
    "Songwriter / Producer / Mixing / Mastering",
    "2022",
    "https://supertown100.bandcamp.com/album/like-a-memory"
  ),
  new Work(
    `${artPath}/unclejessesbass.jpg`,
    "Uncle Jesse's Bass",
    "JM Fodder",
    "Songwriter / Producer / Mixing",
    "2021",
    "https://jmfodder.bandcamp.com/album/uncle-jesses-bass"
  ),
  new Work(
    `${artPath}/inconcert.jpg`,
    "In Concert",
    "Señor Fin",
    "Guitar / Vocals / Producer",
    "2021",
    "https://senorfin.bandcamp.com/track/in-concert"
  ),
  new Work(
    `${artPath}/songsimade.jpg`,
    "Songs I Made on My Computer (EP)",
    "JM Fodder",
    "Songwriter / Producer",
    "2020",
    "https://jmfodder.bandcamp.com/album/songs-i-made-on-my-computer-ep"
  ),
  new Work(
    `${artPath}/personalitytest.jpg`,
    "Personality Test (single)",
    "JM Fodder",
    "Songwriter / Producer",
    "2020",
    "https://jmfodder.bandcamp.com/track/personality-test-single"
  ),
  new Work(
    `${artPath}/LUWUM.jpg`,
    "LUWUM",
    "JM Fodder",
    "Songwriter / Producer",
    "2020",
    "https://jmfodder.bandcamp.com/album/luwum"
  ),
  new Work(
    `${artPath}/2000andwhat.jpg`,
    "2000 and what",
    "Supertown",
    "Songwriter / Producer / Mixing / Mastering",
    "2020",
    "https://supertown100.bandcamp.com/album/2000-and-what"
  ),
  new Work(
    `${artPath}/neways.jpg`,
    "neways... (Single)",
    "Supertown",
    "Songwriter / Producer / Mixing / Mastering",
    "2020",
    "https://supertown100.bandcamp.com/track/neways"
  ),
  new Work(
    `${artPath}/up2myheart.jpg`,
    "Up 2 My Heart (Single)",
    "Supertown",
    "Songwriter / Producer / Mixing / Mastering",
    "2020",
    "https://open.spotify.com/album/1jPwSig4KICzjrgXEhBJ5L?si=xQVzpSJGSNKDk_LVduBu1w"
  ),
  new Work(
    `${artPath}/passenger.png`,
    "The Passenger (Original Score)",
    "Jesse Miller",
    "Composer / Producer / Mixing",
    "2020",
    "https://youtu.be/rRCRL8TNoVA"
  ),
  new Work(
    `${artPath}/hardlyalone.jpg`,
    "Hardly Alone",
    "Señor Fin",
    "Songwriter / Guitar / Vocals / Producer",
    "2019",
    "https://senorfin.bandcamp.com/album/hardly-alone"
  ),
  new Work(
    `${artPath}/welcometo.jpg`,
    "Welcome To",
    "Supertown",
    "Songwriter / Producer / Mixing / Mastering",
    "2019",
    "https://open.spotify.com/album/0UKvuOcSo8EyRQZcUGCz03?si=D83QdbsyRKOViXdmkn26ng"
  ),
  new Work(
    `${artPath}/cry.jpg`,
    "Cry (EP)",
    "Baby Jessica",
    "Keys / Guitar",
    "2019",
    "https://babyjessica.bandcamp.com/album/cry"
  ),
  new Work(
    `${artPath}/spiritgrows.jpg`,
    "Spirit Grows, Spirit Shakes",
    "JM Fodder",
    "Songwriter / Producer",
    "2018",
    "https://jmfodder.bandcamp.com/album/spirit-grows-spirit-shakes"
  ),
  new Work(
    `${artPath}/hathair.jpg`,
    "Hat Hair",
    "Hat Hair",
    "Guitar / Vocals / Producer / Songwriter / Mixing",
    "2018",
    "https://hathair.bandcamp.com/album/hat-hair"
  ),
  new Work(
    `${artPath}/jazzy.jpg`,
    "Jazzy",
    "Señor Fin",
    "Songwriter / Guitar / Vocals / Producer",
    "2017",
    "https://senorfin.bandcamp.com/album/jazzy"
  ),
  new Work(
    `${artPath}/cakedrink.jpg`,
    "Cake Drink",
    "Señor Fin",
    "Songwriter / Guitar / Vocals / Producer",
    "2016",
    "https://senorfin.bandcamp.com/album/cake-drink"
  ),
  new Work(
    `${artPath}/thinktank.jpg`,
    "Think Tank",
    "JM Fodder",
    "Songwriter / Producer / Mixing",
    "2016",
    "https://jmfodder.bandcamp.com/album/think-tank"
  ),
  new Work(
    `${artPath}/placesworn.jpg`,
    "Places Worn",
    "JM Fodder",
    "Songwriter / Producer / Mixing / Mastering",
    "2015",
    "https://jmfodder.bandcamp.com/album/places-worn"
  ),
  new Work(
    `${artPath}/theflaminggiraffe.jpg`,
    "The Flaming Giraffe",
    "JM Fodder",
    "Songwriter / Producer / Mixing / Mastering",
    "2014",
    "https://jmfodder.bandcamp.com/album/the-flaming-giraffe"
  ),
  new Work(
    `${artPath}/havefun.jpg`,
    "Have Fun, It's a Party",
    "Hat Hair",
    "Guitar / Vocals / Producer",
    "2014",
    "https://hathair.bandcamp.com/album/have-fun-its-a-party"
  ),
  new Work(
    `${artPath}/spinningcircles.jpg`,
    "Spinning Circles",
    "Señor Fin",
    "Songwriter / Guitar / Vocals / Producer",
    "2013",
    "https://senorfin.bandcamp.com/album/spinning-circles"
  ),
  new Work(
    `${artPath}/liquidworld.jpg`,
    "Liquid World / Killing Time",
    "JM Fodder",
    "Songwriter / Producer / Mixing / Mastering",
    "2013",
    "https://jmfodder.bandcamp.com/album/liquid-world-killing-time"
  ),
  new Work(
    `${artPath}/underneath.jpg`,
    "Underneath",
    "Señor Fin",
    "Songwriter / Guitar / Vocals / Producer",
    "2012",
    "https://senorfin.bandcamp.com/album/underneath-2"
  )
]

// allWorks.map((work) => {
//   console.log(Object.values(work))
// })

const worksContainer = document.getElementById('works-container');

const worksHtml = allWorks.map(work => `
  <a href="${work.link}" target="_blank" class="work-card">
    <img src="${work.art}" alt="${work.title}">
    <div class="work-details">
      <p>${work.jmRole}</p>
      <h3>${work.title}<br>
        <small>[${work.year}]</small>
      </h3>
      <p>by ${work.artist}</p>
      
    </div>
  </a>
`).join('');

worksContainer.innerHTML = worksHtml;

