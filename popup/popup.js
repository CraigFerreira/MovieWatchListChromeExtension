chrome.action.setBadgeText({text: 'PLAY'})
const movieList= document.getElementById('movieList')
const list= document.createElement('li')
const link= document.getElementById('link')
const date= document.getElementById('show-date')
const dateButton= document.getElementById('date-button')



chrome.storage.local.get(["shows"], (res) => {
    // console.log('shows',res.shows)
    for (let i=0; i<res.shows.length; i++) {
        let show=res.shows[i]
        // console.log('url', show.url)
        // if(!show.summary || !show.image) continue
        if(!show.summary) continue
        movieList.innerHTML+=`<li class='list-item'>Name: ${show.name} <br/> Description: ${show.summary} <br/> <button name='${show.name}' id='link${i}'>Watch Preview</button> </li>`

    }


})

window.onclick = function(event) {
    var target = event.target ;
    
    if(target.tagName==='BUTTON' && target.id==='date-submit' && date.value!==''){
        console.log('date value', typeof date.value)
        fetch(` http://api.tvmaze.com/schedule/web?date=${date.value}&country=US`)
        .then(res => res.json())
        .then(data => {
            // chrome.storage.local.set({
            //     shows: data,
            // })  
            movieList.innerHTML=''
            for (let i=0; i<data.length; i++) {
                let show=data[i]
                // console.log('url', show.url)
                if(!show.summary || !show.image) continue
                movieList.innerHTML+=`<li class='list-item'>Name: ${show.name} <br/> Description: ${show.summary} <br/> <button name='${show.name}' id='link${i}' season='${show.season}' episode='${show.episode}'>Watch Preview</button> </li>`
            }
        })

        // movieList.innerHTML=''
        // chrome.storage.local.get(["shows"], (res) => {
            // console.log('shows',res.shows)
            // for (let i=0; i<res.shows.length; i++) {
            //     let show=res.shows[i]
            //     // console.log('url', show.url)
            //     if(!show.summary || !show.image) continue
            //     movieList.innerHTML+=`<li class='list-item'>Name: ${show.name} <br/> Description: ${show.summary} <br/> <button name='${show.name}' id='link${i}' season=${show.season} episode=${show.episode}>Watch Preview</button> </li>`
        
            // }
        
        
        // })





    }
    
    else if(target.tagName==='BUTTON'&& target.id!=='date-submit'){
        chrome.tabs.create({
            url: `https://www.youtube.com/results?search_query=${target.name}+season+${target.season}`
        })
    }
}

// dateButton.onclick= function(){
//     chrome.storage.local.get(["shows"], (res) => {
//         // console.log('shows',res.shows)
//         for (let i=0; i<res.shows.length; i++) {
//             let show=res.shows[i]
//             // console.log('url', show.url)
//             if(!show.summary || !show.image) continue
//             movieList.innerHTML+=`<li class='list-item'>Name: ${show.name} <br/> Description: ${show.summary} <br/> <button name='${show.name}' id='link${i}'>Watch Preview</button> </li>`
    
//         }
    
    
//     })
// }


