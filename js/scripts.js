const hb = document.querySelector('#hamburgerBtn')
const pw = document.querySelector('#pageWrapper')

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver')
})

// import hotels json file
import { hotels } from '../data/hotels.js'

const hotelCards = document.querySelector('#cards')

// for loop for cards
hotels.forEach(hotel => {
    
    const cardSection = document.createElement('section')

    const cardImage = document.createElement('img')
    cardImage.src = `images/${hotel.image}`
    cardImage.alt = hotel.name

    const cardName = document.createElement('h2')
    cardName.textContent = hotel.name

    const cardAddress = document.createElement('address')
    cardAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`

    const cardPhone = document.createElement('a')
    cardPhone.text = hotel.phone
    cardPhone.href = `tel:${hotel.phone}`

    cardSection.appendChild(cardImage)
    cardSection.appendChild(cardName)
    cardSection.appendChild(cardAddress)
    cardSection.appendChild(cardPhone)
    hotelCards.appendChild(cardSection)

});