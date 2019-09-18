import React, { Component } from 'react'
import '../catalog.css'
import Moment from 'react-moment'
import 'moment/locale/ru'
import IconRoom from 'mineral-ui-icons/IconRoom'
import IconAlarm from 'mineral-ui-icons/IconAlarm'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleClickAd(id) {
        document.getElementById(id).click()
    }
    render() {
        const { data } = this.props
        console.log(data)
        return (
            <div>
                {data.map((data, index) => {
                    return (
                        <div onClick={() => this.handleClickAd(data.ad_id)} key={data.ad_id + index} className='card'>
                            <a id={data.ad_id} href={data.ad_link} target="_blank" />
                            <div className='card-image-body'
                                style={data.images[0] === undefined
                                    ? {backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZpyY9QYRMynrghmCSlbcylGbApELQaI6Xziyx-69PBEca5JJ)'}
                                    : {backgroundImage: `url(https://content.kufar.by/line_thumbs_2x/${data.images[0].id.substring(0, 2)}/${data.images[0].id}.jpg)`}}>
                            </div>
                            <div className='card-body'>
                                <h3 className='card-title'>{data.subject}</h3>
                                <p>
                                    {data.ad_parameters.map((param, index) =>
                                        <span key={`param_${index}`}>
                                            {(
                                                index
                                                    && param.p !== 'area'
                                                    && param.p !== 'region'
                                                    && param.p !== 'remuneration_type'
                                                    ? ', '
                                                    : ''
                                            ) + (
                                                    param.p !== 'area'
                                                        && param.p !== 'region'
                                                        && param.p !== 'remuneration_type'
                                                        ? param.vl
                                                        : '')}
                                        </span>)}
                                </p>
                                <div className='card-footer'>
                                    <div className='price'>
                                        <p>{data.price_byn === '0'
                                            ? 'Договорная'
                                            : data.price_byn.slice(0, 2) + ' р.'
                                        }
                                        </p>
                                    </div>
                                    <div className='card-about'>
                                        <div className='card-about-item'>
                                            <IconRoom size='large' className='icon-locate' />
                                            {data.ad_parameters.map((param, index) =>
                                                <div key={index + param.p}>
                                                    <span>
                                                        {param.p === 'region' ? param.vl + ', ' : ''}
                                                    </span>
                                                    <span>
                                                        {param.p === 'area' ? param.vl : ''}
                                                    </span>
                                                </div>)}
                                        </div>
                                        <div className='card-about-item' >
                                            <IconAlarm className='icon-locate' />
                                            <Moment fromNow locale="ru" key={data.list_time + data.list_id}>{data.list_time}</Moment>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

