import React from 'react'
import CancelOrders from '../../../../../assets/image/CancelOrders.png'

const PrepaidCOD = () => {
  return (
    <>
 <div className="box-shadow shadow-sm p10">
            <div className="row">
                <div className="col">
                    <h4 className="title">Prepaid V/S COD Orders</h4>
                    <img src={CancelOrders} alt="CancelOrders" width={250}/>
                </div>
            </div>
        </div>    </>
  )
}

export default PrepaidCOD