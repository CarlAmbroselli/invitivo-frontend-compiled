var partyData = {
  "headline": "The Roaring Thirties",
  "subheadline": "a soirée by Carl & Marvin",
  "shortDescription": "Saturn has orbited around the sun as we embark to the next decade. Join us to celebrate and for the night with music, drinks, and good vibes in Berlin.",
  "date": "Saturday, 16. September 2023",
  "time": "16:00 - 03:00 CET",
  "location": "Location will be announced later this year.",
  "hosts": "Marvin & Carl"
}

Object.keys(partyData).map(key => {
  document.getElementById(key).innerHTML = partyData[key]
})