const trendingCoinsSlideshow = document.getElementById('trending_coins_slideshow')
const searchInput = document.getElementById('search_input')
const coinsContainer = document.getElementById('coins_container')
const searchButton = document.getElementById('search_input_button')
const coinDescription= document.getElementById('coin_description')
const coinInfoHeading = document.getElementById('coin_info_heading')
const coinInfoIcon = document.getElementById('coin_info_icon')
const coinPrices = document.getElementsByClassName('coin_pricing')
init()

function init() {
    // getTrendingCoins()
    // getCoins()
    getCoinInfo()
    createChart()
    // searchButton.addEventListener('click', getCoins)
}

function scrollAnimation() {
    let count = 0
    let flag = true // true means going up else down
    setInterval(() => {
        //     const paddingLeft = Number(getComputedStyle(trendingCoinsSlideshow).paddingLeft.replace("px", ""))
        // const paddingRight = Number(getComputedStyle(trendingCoinsSlideshow).paddingLeft.replace("px", ""))
        const endPoint = trendingCoinsSlideshow.scrollWidth - trendingCoinsSlideshow.offsetWidth
        if (flag) {
            count += 1
            if (count === endPoint) {
                flag = false
            }
        } else {
            count -= 1
            if (count === 0) {
                flag = true
            }
        }
        trendingCoinsSlideshow.scrollTo(count, 0)
    }, 10)

}

async function getTrendingCoins() {
    const res = await fetch('https://api.coingecko.com/api/v3/search/trending')
    const jsonData = await res.json()
    const bitcoinVaue = await getBitcoinValue()
    const coins = jsonData.coins
    let html = ''
    for (let i = 0; i < coins.length; i++) {
        const coinName = coins[i].item.name
        const coinPrice = coins[i].item.price_btc * bitcoinVaue
        const coinSymbol = coins[i].item.symbol
        const coinIconUrl = coins[i].item.small
        html += `<div class="trending_coin_container">
        <img src="${coinIconUrl}" class="coin_logo" alt="coin logo" />
        <div class="coin_info_container">
          <h1 class="coin_name">${coinName} (${coinSymbol})</h1>
          <h4 class="coin_price">Rs ${coinPrice.toFixed(4)}</h4>
        </div>
      </div>`
    }
    trendingCoinsSlideshow.innerHTML = html
    scrollAnimation()
}

async function getBitcoinValue() {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr')
    const jsonData = await res.json()
    return jsonData.bitcoin.inr
}

async function getCoins() {
    const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchInput.value}`)
    const jsonData = await res.json()
    let html = ''
    for(let i =0; i< jsonData.coins.length; i++) {
        const coin = jsonData.coins[i]
        html += `<div class="coin_box">
        <div class="coin_info">
          <h5 class="serial_number">${i+1}</h5>
          <img class="coin_image" src="${coin.large}" />
          <h4 class="coin_title">${coin.name} ${coin.symbol}</h4>
        </div>
        <button class="more_info_button">More Info</button>
      </div>`
    }
    coinsContainer.innerHTML = html
}


// let count = 0
// const endPoint = 10
// let directionFlag = true
// let distanceFlag = false

// setInterval(() => {
//     if (directionFlag) {
//         count += 1
//         if (distanceFlag) {
//             if (count === endPoint) {
//                 directionFlag = !directionFlag
//                 distanceFlag = !distanceFlag
//             }
//         } else {
//             if (count === (endPoint / 2)) {
//                 directionFlag = !directionFlag
//             }
//             if (count === endPoint) {
//                 directionFlag = !directionFlag
//                 distanceFlag = !distanceFlag
//             }
//         }
//     } else {
//         count -= 1
//         if (distanceFlag) {
//             if (count === 0) {
//                 directionFlag = !directionFlag
//                 distanceFlag = !distanceFlag
//             }
//         } else {
//             if (count === (endPoint / 2)) {
//                 directionFlag = !directionFlag
//             }
//             if (count === 0) {
//                 directionFlag = !directionFlag
//                 distanceFlag = !distanceFlag
//             }
//         }
//     }
//     console.log(count)
// }, 1000)

async function getCoinInfo() {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
    const jsonData = await res.json()
    coinDescription.innerHTML = jsonData.description.en
    coinInfoHeading.innerText = `${jsonData.name} (${jsonData.symbol.toUpperCase()})`
    coinInfoIcon.setAttribute('src',jsonData.image.large)
    coinPrices[0].innerText = `₹ ${jsonData.market_data.current_price.inr}`
    coinPrices[1].innerText = `$ ${jsonData.market_data.current_price.usd}`
    coinPrices[2].innerText = `€ ${jsonData.market_data.current_price.eur}`
    coinPrices[3].innerText = `£ ${jsonData.market_data.current_price.gbp}`
}


async function createChart() {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=1&interval=hourly`)
    const jsonData = await res.json()
    console.log(jsonData)
    const xValues = [];
    const yValues = [];
    for(const price of jsonData.prices) {
        const d = new Date(0)
        d.setUTCMilliseconds(price[0])
        xValues.push(`${d.getHours()}:${d.getMinutes()}`)
        yValues.push(price[1])
    }
    new Chart('coin_chart',{
        type: 'line',
        data: {
            labels: xValues,
            datasets: [
                {
                    label: 'Price',
                    data: yValues,
                    fill: false,
                    borderColor: 'red'
                }
            ]
        }
    })
}