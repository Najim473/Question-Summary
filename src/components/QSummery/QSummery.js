import React from 'react'
import qsStyle from './Styles.module.css'
import groupImg from '../../view/images/Group 905.png';
import check from '../../view/images/Check 1.png';
const summary = [
    {
        title: 'Your business industry is infrastructure & Construction'
    },
    {
        title: 'You are a male employee aged 21-29 years looking to access relevant job profiles and impacts, explore technological impacts on your industry and explore job opportunitites across multiple locations'
    }, {
        title: 'You\'d like to receive regular updates about our products,services,events and research insights via a newsletter.'
    }
]
function QSummery() {
    return (
        <div>
            <div className={qsStyle.container}>
                <div className={qsStyle.groupImg}>
                    <img src={groupImg} alt="" />
                </div>
                <div className={qsStyle.text}>
                    <header>Great! Here's a short summary based on your answers.</header>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={` d-flex ${qsStyle.summary}`}>
                            <img src={check} alt="" />
                            <h2>Your business industry is infrastructure & Construction</h2>
                        </div>
                        <div className={` d-flex ${qsStyle.summary}`}>
                            <img src={check} alt="" />
                            <h2>You are a male employee aged 21-29 years looking to access relevant job profiles and impacts, explore technological impacts on your industry and explore job opportunitites across multiple locations</h2>
                        </div>
                        <div className={` d-flex ${qsStyle.summary}`}>

                            <img src={check} alt="" />
                            <h2>You'd like to receive regular updates about our products,services,events and research insights via a newsletter</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QSummery