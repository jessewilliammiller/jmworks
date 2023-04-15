function Work(art, title, artist, jmRole, year, link) {
  this.art = art;
  this.title = title;
  this.artist = artist;
  this.jmRole = jmRole;
  this.year = year;
  this.link = link;
}

const allWorks = [
  new Work(
    "images/works-album-art/jmfodder.jpg",
    "Our Fodder",
    "JM Fodder",
    "Composer/Producer/Mixing",
    "2023",
    "https://jmfodder.bandcamp.com/album/our-fodder"
  ),
  new Work(
    "images/works-album-art/sideshows.jpg",
    "Sideshows",
    "Peg",
    "Gutar/Vocals",
    "2023",
    "https://pegtheband.bandcamp.com/album/sideshows"
  ),
  new Work(
    "images/works-album-art/kickflipthedevil.jpg",
    "Kickflip the Devil (Single)",
    "Joe Waine",
    "Mixing/Mastering/Guitar",
    "2022",
    "https://joewaineband.bandcamp.com/track/kickflip-the-devil"
  ),
  new Work(
    "images/works-album-art/kindasick.jpg",
    "Kinda Sick b/w Never Coming Down",
    "JM Fodder",
    "Songwriter/Producer",
    "2022",
    "https://jmfodder.bandcamp.com/album/kinda-sick"
  ),
  new Work(
    "images/works-album-art/unreleasedsongs.jpg",
    "Unreleased Songs 2016-2020",
    "JM Fodder",
    "Songriter/Producer/Mixing/Mastering",
    "2022",
    "https://jmfodder.bandcamp.com/album/kinda-sick"
  ),
  new Work(
    "images/works-album-art/driveoverhere.jpg",
    "Drive Over Here bw Suspended Disbelief",
    "JM Fodder",
    "Songwriter/Producer",
    "2022",
    "https://jmfodder.bandcamp.com/album/drive-over-here-suspended-disbelief"
  ),
  new Work(
    "images/works-album-art/10moods.jpg",
    "10 Moods",
    "Tone Squad",
    "Songwriter/Producer/Mixing/Mastering",
    "2022",
    "https://open.spotify.com/album/29mjCPf7fctHNt7L3QCC1m?si=UgndKI3VT1yDA7srTCY3pQ"
  ),
  new Work(
    "images/works-album-art/likeamemory.jpg",
    "Like A Memory",
    "Supertown",
    "Songwriter/Producer/Mixing/Mastering",
    "2022",
    "https://supertown100.bandcamp.com/album/like-a-memory"
  ),
  new Work(
    "images/works-album-art/unclejessesbass.jpg",
    "Uncle Jesse's Bass",
    "JM Fodder",
    "Songwriter/Producer",
    "2021",
    "https://jmfodder.bandcamp.com/album/uncle-jesses-bass"
  ),
  new Work(
    "images/works-album-art/inconcert.jpg",
    "In Concert",
    "Señor Fin",
    "Guitar/Vocals/Producer",
    "2021",
    "https://senorfin.bandcamp.com/track/in-concert"
  ),
  new Work(
    "images/works-album-art/songsimade.jpg",
    "Songs I Made on My Computer (EP)",
    "JM Fodder",
    "Guitar/Producer",
    "2020",
    "https://jmfodder.bandcamp.com/album/songs-i-made-on-my-computer-ep"
  ),
  new Work(
    "images/works-album-art/personalitytest.jpg",
    "Personality Test (single)",
    "JM Fodder",
    "Guitar/Producer",
    "2020",
    "https://jmfodder.bandcamp.com/track/personality-test-single"
  )
]

allWorks.map((work) => {
  console.log(Object.values(work))
})

const worksContainer = document.getElementById('works-container');

const worksHtml = allWorks.map(work => `
  <div class="work-card">
    <img src="${work.art}" alt="${work.title}">
    <div class="work-details">
      <h3>${work.title}<br>
        <small>[${work.year}]</small>
      </h3>
      <p>${work.artist}</p>
      <p>${work.jmRole}</p>
      <a href="${work.link}" target="_blank">Listen</a>
    </div>
  </div>
`).join('');

worksContainer.innerHTML = worksHtml;