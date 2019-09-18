import React, { Component } from 'react'
import logo from '../logo.svg'
import './index.css'
import Button from 'mineral-ui/Button'
import TextInput from 'mineral-ui/TextInput'
import IconAdd from 'mineral-ui-icons/IconAdd'
import IconRoom from 'mineral-ui-icons/IconRoom'
import IconSearch from 'mineral-ui-icons/IconSearch'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='header'>
                <div className='header-body'>
                    <div className='header-container'>
                        <div className='logo'>
                            <img src={logo} alt='logo-lg' className='header-logo-lg' />
                            <p className='logo-text'>kufar</p>
                        </div>
                        <div className='search-container'>
                            <TextInput
                                iconStart={<IconSearch />}
                                placeholder='Поиск во всех категориях'
                                className='search'
                            />
                        </div>
                        <div className='locate'>
                            <IconRoom size='large' className='icon-locate' />
                            Вся Беларусь
                    </div>
                    </div>
                    <div className='btn-group-spaced'>
                        <Button
                            primary
                            iconStart={<IconAdd />}
                        >
                            Подать объявление
                        </Button>
                        <Button className='btn-primary'>Вход</Button>
                    </div>
                </div>
            </div>
        )
    }
}

