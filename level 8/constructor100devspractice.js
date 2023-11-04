// create a netflix tv show class with constructor that makes netflix tv shows with 4 properties and 3 methods

class MakeNetflixTvShows{
    constructor(showAge,showGenre,showTime,showLength){
        this.age = showAge
        this.genre = showGenre
        this.time = showTime
        this.length = showLength
    }
    nextEpisode(){
        alert('Starting next epidsode')
    }
    pauseShow(){
        alert('the show is paused')
    }
    howLongTillOver(){
        alert(`there is ${show.length} time left.`)
    }
    }

    let rickAndMorty = new MakeNetflixTvShows('18 and older','comedy','8 pm', '1 hour')

