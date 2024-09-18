import React from 'react'

export default function PromoItem(props) {
    return (
        <div className='promo__item'>
            <p className='item__title'>{props.ItemTitle}</p>
            <p className='item__subtitle'>{props.ItemSubtitle}</p>
        </div>
    )
}
