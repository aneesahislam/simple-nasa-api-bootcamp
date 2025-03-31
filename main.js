const APIKEY = 'Xjlyd5dVHPuN0pJeQhVh51ZKbM0vtydvw9ZKKJY7'

document.querySelector('.button').addEventListener('click', buttonClickEvent)
function buttonClickEvent() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&date=` + document.querySelector('.date').value)
        .then(res => res.json())
        .then(data => {
        
            document.querySelector('.picture').src=data.url
            document.querySelector('.description').innerText=data.explanation
            return (data)
        })
        
        .catch(err => {
            return (`error ${err}`)
        });
}