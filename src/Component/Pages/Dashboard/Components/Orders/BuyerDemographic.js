import React from 'react'
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";

const BuyerDemographic = () => {
    return (
        <>
            <div className="box-shadow shadow-sm p10">
                <div className="row">
                    <div className="col">
                        <h4 className="title">Buyer Demographic</h4>
                        <div className='content-container'>
                            <div className='gender-side'>
                                <div className='gender-icon female'>
                                    <FaFemale height={30} />
                                </div>
                                <div>
                                    <h5>Female</h5>
                                    <h5>40%</h5>
                                </div>
                            </div>
                            <div className='gender-side'>
                                <div className='gender-icon male'>
                                    <FaMale />
                                </div>
                                <div>
                                    <h5>Male</h5>
                                    <h5>60%</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyerDemographic