import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './neighborhoods/Header';
import Footer from './neighborhoods/Footer';

class Demo extends Component {
    render() {
        return (
            <div className="demo">
                <Header title="Chat Bot Demo" subtitle="Watch how it works."/>
                <Footer/>
            </div>
        );
    }
}

module.exports = Demo;