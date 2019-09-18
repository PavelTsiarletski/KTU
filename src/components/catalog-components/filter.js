import React, { Component } from 'react'
import './filter.css'

export default class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    text: 'Все категории'
                },
                {
                    text: 'Техника'
                },
                {
                    text: 'Фототехника и оптика',
                    selected: true
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className='filter-category-container'>
                    {this.state.categories.map((cat, index) =>
                        <p
                            key={index + cat.text}
                            className={`category-item-${index} category-item ${cat.selected === true ? 'category-item-selected' : ''}`}
                        >
                            {cat.text}
                        </p>
                    )}
                </div>
                <div className='filter-price-container'>
                    <h3>Цена</h3>
                    <div className='filer-price-input-container'>
                        <input
                            type='number'
                            step='0.01'
                            className='filter-price-input filter-price-input-first'
                            min='0'
                            placeholder='От'
                        />
                        <input
                            type='number'
                            step='0.01'
                            className='filter-price-input filter-price-input-second'
                            min='0'
                            placeholder='До'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

