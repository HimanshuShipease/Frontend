import React from 'react'
import CancelOrders from '../../../../../assets/image/CancelOrders.png'

const WeightProfile = () => {
    return (
        <>
            <div className="box-shadow shadow-sm p10">
                <div className="row">
                    <div className="col">
                        <h4 className="title">Weight Profile in Kgs</h4>
                        <img src={CancelOrders} alt="CancelOrders" width={250} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeightProfile