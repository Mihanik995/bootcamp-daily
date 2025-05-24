class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
    }
}

const video = new Video('+100500', 'Dan', 324)
video.watch()

const anotherVideo = new Video('Most popular memes', 'Ally', 546)

const data = [
    {title: 'JS course', uploader: 'Avner', time: 1347},
    {title: 'Python hints', uploader: 'Raquel', time: 842},
    {title: 'Web essentials', uploader: 'Juliana', time: 923}
]

const videos = []
for (const item of data) {
    const {title, uploader, time} = item
    videos.push(new Video(title, uploader, time))
}
console.log(videos)