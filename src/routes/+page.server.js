import axios from "axios"

export async function load({url}) {
    let page = 1;
    if(url.searchParams.get('page')){
        page = url.searchParams.get('page')
    }
    const res = await axios.get(`https://anime-api.xyz/page-${page}`)
    // console.log(res)
    return {
        animes: res.data,
        currentPage: page
    }
}