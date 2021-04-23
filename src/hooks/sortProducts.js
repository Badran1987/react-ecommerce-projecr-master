const sortAsc = (a,b) => a.price - b.price
const sortDsc = (a,b) => b.price - a.price
const sortNews = (a,b) => a.price - b.price


const sortProducts = (items, sortBy) => {

    return[...items].sort(sortBy)
}

export {sortProducts,sortAsc,sortDsc,sortNews}