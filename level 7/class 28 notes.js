fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.subclasses)
        data.subclasses.forEach( obj => {
            console.log(obj.name)
            // create an li
            const li = document.createElement('li')
            // add text to li
            li.textContent = .name
            // append the li to the ul
            document.querySelector('ul').appendChild(li)
        })
    })