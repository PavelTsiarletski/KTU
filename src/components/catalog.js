import React, { Component } from 'react'
import './catalog.css'
import Button from 'mineral-ui/Button/Button';
import IconViewModule from 'mineral-ui-icons/IconViewModule'
import IconSort from 'mineral-ui-icons/IconSort'
import IconFilterList from 'mineral-ui-icons/IconFilterList'
import Card from './catalog-components/card.redux'
import Loader from 'react-loader-spinner'
import Filter from './catalog-components/filter';

export default class Catalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount() {
        this.props.getData()
    }
    render() {
        return (
            <div>
                <div className='content-head'>
                    <h1 className='content-title'>Фототехника и оптика({this.props.total})</h1>
                    <div className='btn-group'>
                        <Button className='sort' iconStart={<IconSort />} variant='warning'>Сортировка</Button>
                        <Button className='btn-primary hidden' iconStart={<IconFilterList />}>Фильтры()</Button>
                        <Button minimal variant='warning' iconStart={<IconViewModule />} />
                    </div>
                </div>
                <div className='content-body'>
                    <div className='content-container'>
                        <div className='category-body'>
                            <Filter />
                        </div>
                        {this.props.isFething ? <Loader className='loader' type="Oval" /> : <Card />}
                    </div>
                </div>
            </div>
        )
    }
}

