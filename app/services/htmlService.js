class HTMLService {
    constructor() {
        this.url = "../data/posts/html/";
    }

    getHTML(title) {
        return fetch(this.url + title + ".html")
            .then(response => {
                return response.text()
        })
    }

    getMarkup(mdPath) {
        return fetch(mdPath)
            .then(response => {
                return response.text()
        })
    }
}

module.exports = new HTMLService();
