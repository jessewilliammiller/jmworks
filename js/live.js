function Show(upcoming, date, venue, band, misc, link) {
    this.upcoming = upcoming;
    this.date = date;
    this.venue = venue;
    this.band = band;
    this.misc = misc;
    this.link = link;

}

const allShows = [
    new Show(
        true,
        "May 6, 2023",
        "Gallery 1412",
        "JM Fodder",
        "w/ Patrick Toney"
    ),
    new Show(
        false,
        "April 27, 2023",
        "Fremont Abbey",
        "Joe Waine",
        "w/ Crushing"
    )
]

function renderLink(link) {
    if (link) {
        return `<a href="${link}" target="_blank">tix</a>`
    }
}

const upcomingDiv = document.getElementById('upcoming-div')

const upcomingHTML = allShows.filter((show) => show.upcoming)
    .map(upcomingShow => `
        <div class="oneShow">
            <p>${upcomingShow.date}: ${upcomingShow.band} @ ${upcomingShow.venue} ${upcomingShow.misc}</p>
            ${renderLink(upcomingShow.link)}
        </div>

        <hr class="lilLine"></hr>
    `).join("");

upcomingDiv.innerHTML = upcomingHTML

const pastDiv = document.getElementById('past-div')

const pastHTML = allShows.filter((show) => !show.upcoming)
.map(pastShow => `
        <div class="oneShow">
            <p>${pastShow.date}: ${pastShow.band} @ ${pastShow.venue} ${pastShow.misc}</p>
        </div>

        <hr class="lilLine"></hr>
    `).join("");

pastDiv.innerHTML = pastHTML