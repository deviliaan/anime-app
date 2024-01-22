import axios from "axios"

export async function load() {
    const res = await axios.get('https://anime-api.xyz/page-1')
    // console.log(res)
    return {
        animes: res.data
    }
}