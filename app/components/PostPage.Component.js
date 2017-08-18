import React, { Component } from 'react';
// import HTML from 'react-native-render-html'

import { WebView } from 'react-native';


const cl = console.log;

export default class PostPage extends Component {
    // componentDidMount() {
    //     htmlService.getHTML()
    //     .then( page => cl(typeof(page)) )
    // }

    render() {
        const html = `
        <div>
            <h1>A Sample H1 Title</h1>
            <h2>A Sample H2 Title</h2>
        </div> `

        return (


                <WebView
                    source={{uri: 'https://github.com/facebook/react-native'}}
                    style={{marginTop: 20}}
                />

        )
    }
}
