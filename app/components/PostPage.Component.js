// import React, { Component } from 'react';
//
// import { WebView } from 'react-native';
//
//
// const cl = console.log;
//
// export default class PostPage extends Component {
//     // componentDidMount() {
//     //     htmlService.getHTML()
//     //     .then( page => cl(typeof(page)) )
//     // }
//
//     render() {
//         const html = `
//         <div>
//             <h1>A Sample H1 Title</h1>
//             <h2>A Sample H2 Title</h2>
//         </div> `
//
//         return (
//
//             <WebView
//                 source={{uri: 'https://github.com/facebook/react-native'}}
//                 style={{marginTop: 20}}
//             />
//
//         )
//     }
// }
var React = require('react')
//var ReactNative = require('react-native')
//var {Text, View, ListView} = ReactNative

var HTMLView = require('react-native-htmlview')

var App = React.createClass({
    render() {
        var htmlContent = '<p><a href="http://jsdf.co">&hearts; nice job!</a></p>'

        return (
            <HTMLView
                value={htmlContent}
                stylesheet={styles}
            />
        )
    }
})

var styles = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#FF3366', // pink links
    },
})
