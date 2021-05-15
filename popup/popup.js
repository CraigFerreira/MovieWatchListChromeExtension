chrome.action.setBadgeText({text: 'PLAY'})
const movieList= document.getElementById('movieList')
const list= document.createElement('li')
const link= document.getElementById('link')
const date= document.getElementById('show-date')
const dateButton= document.getElementById('date-button')



chrome.storage.local.get(["shows"], (res) => {
    for (let i=0; i<res.shows.length; i++) {
        let show=res.shows[i]
        if(!show.summary) continue
        movieList.innerHTML+=`<li class='list-item'>Name: ${show.name} <br/> Description: ${show.summary} <br/> <button name='${show.name}' id='link${i}' season='${show.season}' episode='${show.number}'>Watch Preview</button> </li>`

    }


})

window.onclick = function(event) {
    var target = event.target ;
    
    if(target.tagName==='BUTTON' && target.id==='date-submit' && date.value!==''){
        console.log('date value', typeof date.value)
        fetch(` http://api.tvmaze.com/schedule/web?date=${date.value}&country=US`)
        .then(res => res.json())
        .then(data => {
            movieList.innerHTML=''
            for (let i=0; i<data.length; i++) {
                let show=data[i]
                console.log('show111', show)
                if(!show.summary || !show.image) continue
                // console.log('show111', show)
                movieList.innerHTML+=`<li class='list-item'>Name: ${show.name} <br/> Description: ${show.summary} <br/>  <button name='${show.name}' id='link${i}' season='${show.season}' episode='${show.number}'>Watch Preview</button> </li>`
            }
        })
    }
    
    else if(target.tagName==='BUTTON'&& target.id!=='date-submit'){
        chrome.tabs.create({
            url: `https://www.youtube.com/results?search_query=${target.name}+tv+show+episode`
        })
        // console.log('target 100001',target, 'season',target.season, 'name', target.name, 'episode', target.number)
    }
}



