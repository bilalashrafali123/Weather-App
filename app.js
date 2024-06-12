const form = document.querySelector('.form')
const input = document.querySelector('.input')


// axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=YOUR_API_KEY`)


form.addEventListener('submit' , (Event)=>{
    Event.preventDefault()
})