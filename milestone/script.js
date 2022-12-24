// const trendingCoinsSlideshow = document.getElementById('trending_coins_slideshow')

// init()

// function init() {
//     getTrendingCoins()
// }

// function scrollAnimation() {
//     let count = 0
//     let flag = true // true means going up else down
//     setInterval(() => {
//         //     const paddingLeft = Number(getComputedStyle(trendingCoinsSlideshow).paddingLeft.replace("px", ""))
//         // const paddingRight = Number(getComputedStyle(trendingCoinsSlideshow).paddingLeft.replace("px", ""))
//         const endPoint = trendingCoinsSlideshow.scrollWidth - trendingCoinsSlideshow.offsetWidth
//         if (flag) {
//             count += 1
//             if (count === endPoint) {
//                 flag = false
//             }
//         } else {
//             count -= 1
//             if (count === 0) {
//                 flag = true
//             }
//         }
//         trendingCoinsSlideshow.scrollTo(count, 0)
//     }, 10)

// }

// async function getTrendingCoins() {
//     const res = await fetch('https://api.coingecko.com/api/v3/search/trending')
//     const jsonData = await res.json()
//     const bitcoinVaue = await getBitcoinValue()
//     const coins = jsonData.coins
//     let html = ''
//     for (let i = 0; i < coins.length; i++) {
//         const coinName = coins[i].item.name
//         const coinPrice = coins[i].item.price_btc * bitcoinVaue
//         const coinSymbol = coins[i].item.symbol
//         const coinIconUrl = coins[i].item.small
//         html += `<div class="trending_coin_container">
//         <img src="${coinIconUrl}" class="coin_logo" alt="coin logo" />
//         <div class="coin_info_container">
//           <h1 class="coin_name">${coinName} (${coinSymbol})</h1>
//           <h4 class="coin_price">Rs ${coinPrice.toFixed(4)}</h4>
//         </div>
//       </div>`
//     }
//     trendingCoinsSlideshow.innerHTML = html
//     scrollAnimation()
// }

// async function getBitcoinValue() {
//     const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr')
//     const jsonData = await res.json()
//     return jsonData.bitcoin.inr
// }


let count = 0
const endPoint = 10
let directionFlag = true
let distanceFlag = false

setInterval(() => {
    if (directionFlag) {
        count += 1
        if (distanceFlag) {
            if (count === endPoint) {
                directionFlag = !directionFlag
                distanceFlag = !distanceFlag
            }
        } else {
            if (count === (endPoint / 2)) {
                directionFlag = !directionFlag
            }
            if (count === endPoint) {
                directionFlag = !directionFlag
                distanceFlag = !distanceFlag
            }
        }
    } else {
        count -= 1
        if (distanceFlag) {
            if (count === 0) {
                directionFlag = !directionFlag
                distanceFlag = !distanceFlag
            }
        } else {
            if (count === (endPoint / 2)) {
                directionFlag = !directionFlag
            }
            if (count === 0) {
                directionFlag = !directionFlag
                distanceFlag = !distanceFlag
            }
        }
    }
    console.log(count)
}, 1000)