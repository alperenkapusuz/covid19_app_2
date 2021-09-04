import axios from "axios";

const  mainLink = "https://api.covid19api.com"

export const fetchCountries = async () => {
    const { data } = await axios.get(`${mainLink}/countries`)
    return data
}

export const fetchDailyData = async (country) => {
    const { data } = await axios.get(`${mainLink}/dayone/country/${country}`)
    return data
}