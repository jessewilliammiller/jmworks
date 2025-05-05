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
        "June 21st, Rachel Ewen @ Sunset Tavern",
        "Seattle, WA 2025"
    ),
    new Show(
        true,
        "June 4th, Rachel Ewen @ Rabbit Box Theatre",
        "Seattle, WA 2025"
    ),
    new Show(
        true,
        "June 1st, JM Fodder (solo) @ Woodland Theatre w/ Drunk Sallie (Album Release)",
        "Seattle, WA 2025"
    ),
    new Show(
        false,
        "April 3rd, Jonny G & The Music Factory @ Tractor Tavern w/ Oh, Rose & Coral Grief",
        "Seattle, WA 2025"
    ),
    new Show(
        false,
        "March 21st, Rachel Ewen @ Conor Byrne Pub w/ Heavy Bloom & Jay Si Proof",
        "Seattle, WA 2025"
    ),
    new Show(
        false,
        "March 3rd, JM Fodder (solo) @ Sunset Tavern w/ Sven (album release) & Don Piano",
        "Seattle, WA 2025"
    ),
    new Show(
        false,
        "February 17th, JM Fodder (solo) @ Sunset Tavern w/ Shoecraft (album release)",
        "Seattle, WA 2025"
    ),
    new Show(
        false,
        "February 14th, Rachel Ewen @ Add-A-Ball",
        "Seattle, WA 2025"
    ),
    new Show(
        false,
        "January 9, Rachel Ewen @ Bad Bar w/ Hyperbella & Shelby Natasha",
        "Seattle, WA 2025"
    ),
    new Show(
        false,
        "December 3, Jonny G & The Music Factory @ Sunset Tavern w/ Prim & Drunk Drama",
        "Seattle, WA 2024"
    ),
    
    new Show(
        false,
        "October 20, JM Fodder @ Clockout Lounge w/ Chong the Nomad (Gaza Benefit)",
        "Seattle, WA 2024"
    ),

    new Show(
        false,
        "October 18, Jonny G & the Music Factory @ Woodland Theatre w/ Manchildhood & Generifus (Album Release) ",
        "Seattle, WA 2024"
    ),
    
    new Show(
        false,
        "Sept 22nd, Peg @ Madame Lou's w/ Chris Cohen",
        "Seattle, WA 2024"
    ),
   
    
    new Show(
        false,
        "July 28th, Jonny G and the Music Factory @ Add-A-Ball w/ Fine Arts & Pool Boys",
        "Seattle, WA 2024"
    ),  
    new Show(
        false,
        "July 22nd, JM Fodder (Duo) @ Deep Shade (my backyard) w/ Bobbie, Boy in the Water & Joan Kelsey",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "July 18th, Rachel Ewen (EP Release!) @ The Sunset w/ Shaina Shepard & Ok Bucko",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "July 13th, JM Fodder (solo) @ Woodland Theatre w/ Simile & The Fourth Wall",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "July 1st, JM Fodder (solo) @ Rubin's Sister's Backyard :) w/ frogluv & Maya Stone",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "June 20th, Jonny G and the Music Factory @ Woodland Theatre w/ Okay Bucko & New Issue",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "June 17th, Jonny G and the Music Factory @ Chromatic Coffee",
        "San Jose, CA 2024"
    ),
    
    new Show(
        false,
        "June 16th, Jonny G and the Music Factory @ Greater Goods w/ The Senate",
        "Ojai, CA 2024"
    ),
    new Show(
        false,
        "June 15th, Jonny G and the Music Factory @ Scribble w/ Ronan Delisle & Sharon Silva",
        "Los Angeles, CA 2024"
    ),
    new Show(
        false,
        "June 14th, Jonny G and the Music Factory @ Martial Arts w/ Fieldress & Marika Christine",
        "Oakland, CA 2024"
    ),
    new Show(
        false,
        "June 12th, Jonny G and the Music Factory @ The Fixin To w/ Sawtooth & Swinging",
        "Portland, OR 2024"
    ),

    new Show(
        false,
        "May 21st, Jonny G and the Music Factory @ The Sunset w/ Telehealth & Kairos Creature Club",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "May 14th, JM Fodder @ The High Dive w/ King Ropes",
        "Seattle, WA 2024"
    ),
    
    new Show(
        false,
        "April 18th, JM Fodder @ Conor Byrne Pub w/ The Pond & Ancient Forest",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "March 18th, Peg @ The Royal Room",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "March 17th, JM Fodder/Peg @ Gallery 1412 - Racer Session",
        "Seattle, WA 2024"
    ),
  
    
    new Show(
        false,
        "March 1st, JM Fodder @ Clockout Lounge w/ YDC and Ok Bucko",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "Feb. 15th, JM Fodder (solo) @ The Royal Room",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "Jan. 20th, Peg (me on guitar) @ Sunset Tavern w/ Model Shop (record release) and Moon Palace",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "Jan. 13th, Peg (me on guitar) @ Cap Hill Loft (dm for address) w/ Don Piano and Joan Kelsey",
        "Seattle, WA 2024"
    ),
    new Show(
        false,
        "Jan. 6th, JM Fodder @ Conor Byrne w/ Oh, Rose & Jonny G and the Music Factory",
        "Seattle, WA 2024"
    ),
 
    new Show(
        false,
        "Dec. 4th, JM Fodder @ Tractor Tavern w/ Westmoreland and Cooper Kenward",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "Nov. 19, JM Fodder @ LA River d.i.y show w/ Ronan Delisle and frogluv",
        "Los Angeles, CA 2023"
    ),
    new Show(
        false,
        "Nov. 3, JM Fodder @ Mahayana (House Show) message me for the address!",
        "Olympia, WA 2023"
    ),
    new Show(
        false,
        "Sept 30, Jonny G and the Music Factory",
        "Everett, WA 2023"
    ),
    new Show(
        false,
        "Sept 23, 6pm - JM Fodder, Allyson Foster, Joan Kelsey @ Deep Shade (my backyard, dm for addy)",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "Sept 6th, 8pm, Rachel Ewen @ The Vera Project w/ De Luxe",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "Sept 6th, 10pm, Jonny G and the Music Factory @ Waterwheel (bar in Ballard)",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "August 27, Jonny G and the Music Factory @ Ballard Food Bank (fundraiser)",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "August 19 @ 7pm w/ J.M. Fodder & @ 8:30pm w/ Joe Waine Band @ Wainestock (Volunteer Park)",
        "Seattle, WA 2023",
        "https://wainestock.com/"
    ),
    new Show(
        false,
        "August 18 @ 8:30pm Jonny G and the Music Factory @ Wainestock (Volunteer Park)",
        "Seattle, WA 2023",
        "https://wainestock.com/"
    ),
    new Show(
        false,
        "August 12, J.M. Fodder (w/ Null State and Ben Kamen) @ Le Voyeur",
        "Olympia, WA 2023", 
        "https://www.levoyeurolympia.com/shows.html"
    ),
    new Show(
        false,
        "August 7th, J.M. Fodder @ House Show (private) w/ Ben Varian and Jake Tobin ",
        "Seattle, WA 2023"
    ),
    new Show(
        false,
        "August 5th, J.M. Fodder @ Casa Del Xolo ",
        "Seattle, WA 2023",
        "https://www.casadelxolo.com/"
    ),
    new Show(
        false,
        "August 4th, J.M. Fodder @ New Frontier",
        "Tacoma, WA 2023",
        "https://www.venuepilot.co/events/78441/orders/new"
    ),
    new Show(
        false,
        "August 2nd, Rachel Ewen @ private event",
        "Seabeck, WA 2023"
    ),
    new Show(
        false,
        "July 29th J.M. Fodder @ Trollfest (Under a Bridge, send me an email for location!)",
        "Portland, OR 2023 (time TBA)",
    ),
    new Show(
        false,
        "July 26th Joe Waine w/ Locate S,1 @ Madame Lou's",
        "Seattle, WA 2023",
        "https://www.ticketweb.com/event/locate-s1-madame-lous-tickets/13186958"
    ),
    new Show(
        false,
        "July 21st w/ Rachel Ewen @ Casa Del Xolo",
        "Seattle, WA 2023", 
        "https://www.casadelxolo.com/"

    ),
    new Show(
        false,
        "July 9th w/ Peg & Jonny G (I'm playing in both bands) @ Add-A Ball (Arcade in Fremont)",
        "Seattle, WA 2023 - FREE SHOW!!!"
    ),

    new Show(
        false,
        "June 24th, J.M. Fodder @ Woodland Theatre",
        "Seattle, WA 2023 - DONATIONS at Door!"
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
            ? `<a href="${upcomingShow.link}" target="_blank">link</a>`
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