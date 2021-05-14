chrome.action.setBadgeText({text: 'PLAY'})
const movieList= document.getElementById('movieList')
const list= document.createElement('li')
const link= document.getElementById('link')
// console.log('link', link)

const redirect=()=>{
    console.log('redirect')
        chrome.tabs.create({
        url: "https://www.youtube.com/c/MovieclipsTRAILERS/videos"
    })
}



chrome.storage.local.get(["shows"], (res) => {
    // console.log('got shows again', res.shows)
    for (let i=0; i<res.shows.length; i++) {
        let show=res.shows[i]
        // console.log('each show', show.summary)
        if(!show.summary || !show.image) continue
 
        // var image = document.createElement("img");
        // image.src = chrome.runtime.getURL(show.image.medium);
        // console.log('image',image)
        // movieList.innerHTML+=`<li>Name: ${show.name} <br/> Description: ${show.summary} <br/> ${show.image? `<img src=${show.image.medium}/>`: ''}</li>`
        // movieList.innerHTML+=`<li>Name: ${show.name} <br/> Description: ${show.summary} <br/> <a id='link${i}' href="https://www.youtube.com/results?search_query=${show.name}">Go to Show</a></li>`
        movieList.innerHTML+=`<li>Name: ${show.name} <br/> Description: ${show.summary} <br/> <button name='${show.name}' id='link${i}'>Go to Show</button></li>`

        // window.addEventListener('DOMContentLoaded', function() {
        //     // your button here
        //     console.log('button click')
        //     var link = document.getElementById(`link`);
        //     // onClick's logic below:
        //     link.addEventListener('click', function() {
        //         var newURL = "http://stackoverflow.com/";
        //         chrome.tabs.create({ url: newURL });
        //     });
        // });
        const newButton=document.getElementById(`link${i}`)
        // console.log('new button', newButton)
        // newButton.addEventListener('click', function(){ 
        //     console.log('button clicked')
        //     chrome.tabs.create({
        //     url: "https://www.youtube.com/c/MovieclipsTRAILERS/videos"
        //     })}
        // );
        // console.log('new button after event listener', newButton)
        // document.addEventListener('DOMContentLoaded', function() {
        //     console.log('clicked', newButton)
        //     newButton.addEventListener("click", redirect);
        //   });



    }


})

window.onclick = function(event) {
    var target = event.target ;
    // if(target.matches('.clickableBtn')) {
    //     var clickedEle = document.activeElement.id ;
    //     var ele = document.getElementById(clickedEle);
    //     alert(ele.text);
    // }
    console.log('target',target.tagName)
    if(target.tagName==='BUTTON'){
        chrome.tabs.create({
            url: `https://www.youtube.com/results?search_query=${target.name}`
        })
    }
}


