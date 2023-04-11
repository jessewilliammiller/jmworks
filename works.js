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
      <h3>${work.title}</h3>
      <p><strong>Artist:</strong> ${work.artist}</p>
      <p><strong>Role:</strong> ${work.jmRole}</p>
      <p><strong>Year:</strong> ${work.year}</p>
      <a href="${work.link}" target="_blank">Listen</a>
    </div>
  </div>
`).join('');

worksContainer.innerHTML = worksHtml;