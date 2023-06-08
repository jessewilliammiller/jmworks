function Show(upcoming, line1, line2, link) {
    this.upcoming = upcoming;
    this.line1 = line1;
    this.line2 = line2
    this.link = link;
}

const allShows = [
    // true indicates upcoming show
    // false indicates past show
    // add a space within the quotes by adding <br/>
    
    new Show(
        true,
        "June 24th, J.M. Fodder @ Woodland Theatre",
        "Seattle, WA 2023 - DONATIONS at Door!"
    ),
    new Show(
        true,
        "July 9th w/ Peg & Jonny G (I'm playing in both bands) @ Add-A Ball (Arcade in Fremont",
        "Seattle, WA 2023 - FREE SHOW!!!"
    ),
    new Show(
        true,
        "July 26th Joe Waine w/ Locate S,1 @ Madame Lou's",
        "Seattle, WA 2023",
        "https://www.ticketweb.com/event/locate-s1-madame-lous-tickets/13186958"
    ),
    new Show(
        true,
        "July 29th J.M. Fodder @  Punk Show Under a Bridge (send me an email for location!)",
        "Portland, OR 2023 (Daytime, time TBA)",
    ),
    new Show(
        true,
        "August 19 (times TBA) J.M. Fodder / Joe Waine Band @ Wainestock (Volunteer Park)",
        "Seattle, WA 2023",
        "https://wainestock.com/"
    ),
    new Show(
        true,
        "August 4th, J.M. Fodder @ New Frontier ",
        "Tacoma, WA 2023",
        "https://thenewfrontierlounge.com/"
    ),
    new Show(
        false,
        "June 4th w/ Joe Waine @ Royal Room",
        "Seattle, WA 2023",
        "https://www.strangertickets.com/events/138600102/lake-joe-waine-generifus"
    ),
    new Show(
        false,
        "June 3th w/ Rachel Ewen @ River (SoFar Sounds)",
        "Seattle, WA, 2023",
        "https://www.sofarsounds.com/events/48013"
    ),
    new Show(
        false,
        "May 21st -w /Joe Waine @ Sunset Tavern",
        "Seattle, WA, 2023",
        "https://www.ticketweb.com/event/moss-joe-waine-drench-fries-sunset-tavern-tickets/13133605?pl=sunset&REFID=clientsitewp"

    ),
    new Show(
        false,
        "May 13 J.M. Fodder @ Bad Bar",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "May 6: J.M. Fodder @ Gallery 1412 w/ Patrick Toney",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "April 27 w/ Joe Waine & Crushing @ Fremont Abbey",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "April 2: Jonny G and the Music Factory @ Ft. George Brewery",
        "Astoria, OR 2023"
    ),
    new Show(
        false,
        "April 8 - JM Fodder & Rachel Ewen @ Woodland Studios",
        "Playing guitar in Rachel Ewen's band (our first show!) and doing my improv computer music thing as JM Fodder<br/>Seattle, WA 2023"
    ),
    new Show(
        false,
        "April 1: Jonny G and the Music Factory @ Souwester Arts",
        "Seaview, OR 2023"
    ),
    new Show(
        false,
        "March 31: Jonny G and the Music Factory @ Swan Dive",
        "Portland, OR 2023"
    ),
   
    new Show(
        false,
        "March 29 w/ Jonny G @ Bad Bar (Tour Kickoff!)",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "March 30: Jonny G and the Music Factory @ House Show",
        "Olympia, WA 2023"
    ),
    new Show(
        false,
        "March 24: Fodder/Peg (duo) @ The Vera Project",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "March 21 w/ Peg @ Sunset Tavern",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "March 11 - JM Fodder (record release) and Joe Waine band @ Bad Bar",
        "My big record release, don't miss this one!<br/>Seattle, WA 2023"
    ),
    new Show(
        false,
        "March 1 w/ Joe Waine @ Here After (The Crocodile)",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "Peg Album Release show! February 19 @ Woodland Studios",
        "Guitar w/ Peg, also on the bill is Ronan Delisle. very excited for this one:)<br/>Seattle, WA 2023"
    ),
    new Show(
        false,
        "January 27 @ Conor Byrne Pub",
        "Guitar w/ Joe Waine Band<br>Seattle, WA 2023"
    ),
    new Show(
        false,
        "NYE @ Blue Moon Tavern",
        "I’ll be playing guitar with the Joe Waine, also performing is Scott Yoder, Reverse Death (Record Release) and 129,600.<br/>Tickets at the door, $8, 8pm-2am<br/>Seattle, WA, 2022"
    ),
    new Show(
        false,
        "December 17th 2022 @ House Party (contact for address, details)",
        "I’ll be doing a computer based, electronic set of Reggaeton music as JM Fodder, both original and DJ selections."
    ),
    new Show(
        false,
        "December 11th 2022 @ Sunset Tavern",
        "I'll be playing guitar with the Joe Waine Band<br/>Seattle, WA"
    )
]

const upcomingDiv = document.getElementById('upcoming-div')

const upcomingHTML = allShows.filter((show) => show.upcoming)
    .map(upcomingShow => `
        <div class="oneShow">
            <p>${upcomingShow.line1}</p>
            <p>${upcomingShow.line2}</p>
            ${upcomingShow.link
            ? `<a href="${upcomingShow.link}" target="_blank">tix</a>`
            : ""}
        </div>
        <hr class="lilLine"></hr>
    `).join("");

upcomingDiv.innerHTML = upcomingHTML

const pastDiv = document.getElementById('past-div')

const pastHTML = allShows.filter((show) => !show.upcoming)
    .map(pastShow => `
        <div class="oneShow">
            <p>${pastShow.line1}</p>
            <p>${pastShow.line2}</p>
        </div>
        <hr class="lilLine"></hr>
`).join("");

pastDiv.innerHTML = pastHTML