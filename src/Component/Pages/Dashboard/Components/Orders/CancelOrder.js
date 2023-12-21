import React from "react";
import CancelOrders from '../../../../../assets/image/CancelOrders.png'

function CancelOrder() {

    return (
        <div className="box-shadow shadow-sm p10">
            <div className="row">
                <div className="col">
                    <h4 className="title">Cancel Orders</h4>
                    <img src={CancelOrders} alt="CancelOrders" width={250}/>
                </div>
            </div>
        </div>
    );
}

export default CancelOrder;
