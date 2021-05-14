
chrome.runtime.onInstalled.addListener((details) => {
    const date= new Date()
    var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
    .toISOString()
    .split("T")[0];
    fetch(` http://api.tvmaze.com/schedule/web?date=2021-05-13&country=US`)
    .then(res => res.json())
    .then(data => {
        console.log('show data',data)
        chrome.storage.local.set({
            shows: data,
        })  
    })


})

