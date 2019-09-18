import React, { Component } from 'react'
import { PrimaryNav } from 'mineral-ui/Navigation'
import IconMenu from 'mineral-ui-icons/IconMenu'
import './head.css'

export default class Head extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    text: 'Все категории',
                    iconStart: <IconMenu />,
                    className: 'all-categories'
                },
                {
                    text: 'Все категории'
                },
                {
                    text: 'Все категории'
                },
                {
                    text: 'Все категории'
                },
                {
                    text: 'Все категории'
                },
                {
                    text: 'Все категории'
                },
                {
                    text: 'Все категории'
                },
                {
                    text: 'Все категории'
                },
                {
                    text: 'Все категории'
                },
                {
                    text: 'Все категории'
                }
            ]
        }
    }

    categoriesList() {

    }

    render() {
        const { categories } = this.state
        return (
            <div className='head'>
                <div className='head-container'>
                    <PrimaryNav align='start' minimal items={categories} overflowAtIndex={2} />
                </div>
            </div>
        )
    }
}

