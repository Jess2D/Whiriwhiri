import hostel from './types/hostel.png'
import hotel from './types/hotel.png'
import house from './types/house.png'
import motel from './types/motel.png'

interface Accomodation {
    image: string;
    type: string;
    minPeople: number;
    maxPeople: number;
    minNight: number;
    maxNight: number;
    price: string;
}

export const accomodation: Accomodation[] =
    [
        { image: hotel, type: "Hotel", minPeople: 1, maxPeople: 2, price: "$157/night", minNight: 1, maxNight: 5 },
        { image: hostel, type: "Hostel", minPeople: 1, maxPeople: 1, price: "$30/night", minNight: 1, maxNight: 10 },
        { image: motel, type: "Motel", minPeople: 2, maxPeople: 4, price: "$90/night", minNight: 3, maxNight: 10 },
        { image: house, type: "House", minPeople: 1, maxPeople: 4, price: "$240/night", minNight: 2, maxNight: 15 }
    ]