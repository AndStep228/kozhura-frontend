import React from 'react'
import YtVideo from '../YtVideo';

import Button from '../Button';

export default function PartnerItem(props) {
    if (!props.TabletWrap && !props.MobileWrap) {
        if (!props.LeftFlow) {
            return (
                <div className='partners__block'>
                    <div className='partners__promo'>
                        <img src={props.PartnerImg} alt={props.PartnerImgAlt} />
                        <div className='promo__video'>
                            <YtVideo videoLink={props.PartnerVideoLink} />
                        </div>
                    </div>
                    <div className='partners__info'>
                        <h2>{props.PartnerTitle}</h2>
                        <h5>{props.PartnerSubtitle}</h5>
                        <div className='info__btns'>
                            <Button buttonTxt='Все курсы' />
                            <Button buttonTxt='Полный курс' />
                            <Button buttonTxt='Базовый курс' />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className='partners__block left-wrap'>
                    <div className='partners__info'>
                        <h2>{props.PartnerTitle}</h2>
                        <h5>{props.PartnerSubtitle}</h5>
                        <div className='info__btns'>
                            <Button buttonTxt='Все курсы' />
                            <Button buttonTxt='Полный курс' />
                            <Button buttonTxt='Базовый курс' />
                        </div>
                    </div>
                    <div className='partners__promo'>
                        <img src={props.PartnerImg} alt={props.PartnerImgAlt} />
                        <div className='promo__video'>
                            <YtVideo videoLink={props.PartnerVideoLink} />
                        </div>
                    </div>
                </div>
            )
        }
    }
    else if (props.TabletWrap && !props.MobileWrap) {
        if (!props.LeftFlow) {
            return (
                <div className='partners__block'>
                    <div className='partners__promo'>
                        <img src={props.PartnerImg} alt={props.PartnerImgAlt} />
                        <div className='promo__video'>
                            <YtVideo videoLink={props.PartnerVideoLink} />
                        </div>
                    </div>
                    <div className='partners__info'>
                        <h2>{props.PartnerTitle}</h2>
                        <h5>{props.PartnerSubtitle}</h5>
                    </div>
                    <div className='info__btns'>
                        <Button buttonTxt='Все курсы' />
                        <Button buttonTxt='Полный курс' />
                        <Button buttonTxt='Базовый курс' />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className='partners__block left-wrap'>
                    <div className='partners__info'>
                        <h2>{props.PartnerTitle}</h2>
                        <h5>{props.PartnerSubtitle}</h5>
                    </div>
                    <div className='partners__promo'>
                        <img src={props.PartnerImg} alt={props.PartnerImgAlt} />
                        <div className='promo__video'>
                            <YtVideo videoLink={props.PartnerVideoLink} />
                        </div>
                    </div>
                    <div className='info__btns'>
                        <Button buttonTxt='Все курсы' />
                        <Button buttonTxt='Полный курс' />
                        <Button buttonTxt='Базовый курс' />
                    </div>
                </div>
            )
        }
    }
    else if (!props.TabletWrap && props.MobileWrap) {
        return (
            <div className='partners__block'>
                <div className='partners__promo'>
                    <img src={props.PartnerImg} alt={props.PartnerImgAlt} />
                    <div className='promo__video'>
                        <YtVideo videoLink={props.PartnerVideoLink} />
                    </div>
                </div>
                <div className='partners__info'>
                    <h2>{props.PartnerTitle}</h2>
                    <h5>{props.PartnerSubtitle}</h5>
                </div>
                <div className='info__btns'>
                    <Button buttonTxt='Все курсы' />
                    <Button buttonTxt='Полный курс' />
                    <Button buttonTxt='Базовый курс' />
                </div>
            </div>
        )
    }


}
