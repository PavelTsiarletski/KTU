import React, { Component } from 'react'
import './index.css'
import Header from './header';
import Catalog from './catalog.redux';
import Head from './catalog-components/head';

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header />
                <Head />
                <div className='content-body'>
                    <div className='main-page'>
                        <Catalog />
                    </div>
                </div>
            </div>
        )
    }
}

