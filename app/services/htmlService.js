class HTMLService {
    constructor() {
        this.url = "../";
    }

    getHTML(htmlPath) {
        return fetch(this.url + htmlPath)
            .then(response => {
                return response.text()
        })
    }

    getMarkdown(mdPath) {
        return fetch(mdPath)
            .then(response => {
                return response.text()
        })
    }
}

module.exports = new HTMLService();
