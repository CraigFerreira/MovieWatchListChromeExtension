// const redirect=()=>{
//         chrome.tabs.create({
//         url: "https://www.youtube.com/c/MovieclipsTRAILERS/videos"
//     })
// }

chrome.runtime.onInstalled.addListener((details) => {
    const date= new Date()
    var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
    .toISOString()
    .split("T")[0];
    // console.log('date', dateString)
    fetch(` http://api.tvmaze.com/schedule/web?date=2021-05-13&country=US`)
    .then(res => res.json())
    .then(data => {
        // console.log('data on click',data)
        chrome.storage.local.set({
            shows: data,
        })  
    })



    // const link= document.getElementById('link')
    // console.log('link',link)
    // link.addEventListener('click', ()=>{
    //     console.log('click listener called')
    //     redirect()
    // })
    // console.log(details)
    // chrome.storage.local.set({
    //     shows: [],
    // })

    // chrome.tabs.create({
    //     url: "https://www.youtube.com/c/MovieclipsTRAILERS/videos"
    // })
    // let elems = document.body.getElementsByTagName("*");
    // console.log('elems', elems)

    // chrome.contextMenus.create({
    //     title: "Search TV Show",
    //     id: "contextMenu1",
    //     contexts: ["page", "selection"]
    // })
    // chrome.contextMenus.create({
    //     title: "Read This Text",
    //     id: "contextMenu2",
    //     contexts: ["page", "selection"]
    // })
    // chrome.contextMenus.onClicked.addListener((event) => {
    //     fetch(`http://api.tvmaze.com/schedule/full`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log('data on click',data)
    //                 chrome.storage.local.set({
    //                     shows: data,
    //                 })
    //             })
    //     if (event.menuItemId === "contextMenu1") {
    //         fetch(`http://api.tvmaze.com/schedule/full`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log('data on click',data)
    //                 chrome.storage.local.set({
    //                     shows: data,
    //                 })
    //             })
    //     } else if (event.menuItemId === "contextMenu2") {
    //         chrome.tts.speak(event.selectionText, {
    //             lang: "zh-CN",
    //             rate: 1,
    //         })
    //     }
    // })
})

// console.log('background scripts running')