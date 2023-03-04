var partyData = {
  "headline": "Thirsty Thirty",
  "subheadline": "HOSTED BY CARL & MARVIN",
  "shortDescription": "Taking our BIRTHDAY PARTY to the next level - exactly, it's a ROOFTOP HEATING. " +
    "<br />So please join us to celebrate the our round birthday with music and drinks in Berlin.",
  "date": "Saturday, 16. September 2023",
  "time": "16:00 - 03:00 CET",
  "location": "Location will be announced later this year.",
  "hosts": "Marvin & Carl"
}

Object.keys(partyData).map(key => {
  document.getElementById(key).innerHTML = partyData[key]
})