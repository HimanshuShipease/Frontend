import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TopSellingDashboard from '../Components/Overview/TopSellingDashboard'
import RevenueDashboard from '../Components/Overview/RevenueDashboard'
import CourierWiseDashboard from '../Components/Overview/CourierWiseDashboard'
import PopularCustomerDashboard from '../Components/Overview/PopularCustomerDashboard'
import ChannelByOrder from '../Components/Orders/ChannelByOrder'
import TotalOrderInfo from '../Components/Orders/TotalOrderInfo'
import TodayOrderDashboard from '../Components/Overview/TotalShipment'

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
        <RevenueDashboard />
        <CourierWiseDashboard />
        <PopularCustomerDashboard />
      </Col>
    </Row>
  </>
  )
}

export default Orders