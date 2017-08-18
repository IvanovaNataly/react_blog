class HTMLService {
    constructor() {
        this.url = "../data/posts/html/";
    }

    getHTML() {
        return fetch(this.url + "AngularJS - Controllers.html")
                 .then(response => {
                     return response.text()
                 })
        // .then(txt=> {
        //     console.log('txt: ',txt)
        // })
    }
}

module.exports = new HTMLService();
