import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TopSellingDashboard from '../Components/Overview/TopSellingDashboard'
import PopularCustomerDashboard from '../Components/Overview/PopularCustomerDashboard'
import ChannelByOrder from '../Components/Orders/ChannelByOrder'
import TotalOrderInfo from '../Components/Orders/TotalOrderInfo'
import CancelOrder from '../Components/Orders/CancelOrder'
import BuyerDemographic from '../Components/Orders/BuyerDemographic'

const Orders = () => {
  return (
    <>
    <Row>
      <ChannelByOrder/>
      <Col className="col-6">
        <TotalOrderInfo />
        <TopSellingDashboard />
      </Col>
      <Col className="col-3 cardsSpace">
        <CancelOrder />
        <BuyerDemographic />
        <PopularCustomerDashboard />
      </Col>
    </Row>
  </>
  )
}

export default Orders