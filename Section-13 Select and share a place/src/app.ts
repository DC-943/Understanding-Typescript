import axios from "axios"

const form = document.querySelector("form")!
const addressInput = document.getElementById("address")! as HTMLInputElement

const GOOGLE_API_KEY = "AIzaSyAQ5b-yXF_Ke5SFpHF-qGk65YMCmN4Noo"

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[]
  status: "OK" | "ZERO_RESULTS"
}
function searchAddressHandler(event: Event) {
  event.preventDefault()
  const enteredAddress = addressInput.value
  //send this to Google's API
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location")
      }
      const coordinates = response.data.results[0].geometry.location
    })
    .catch((err) => {
      alert(err.message)
      console.log(err)
    })
}

form.addEventListener("submit", searchAddressHandler)
