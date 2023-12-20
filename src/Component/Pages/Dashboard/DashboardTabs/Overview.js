import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TotalInfoDashboard from '../Components/Overview/TotalInfoDashboard'
import TopSellingDashboard from '../Components/Overview/TopSellingDashboard'
import RevenueDashboard from '../Components/Overview/RevenueDashboard'
import CourierWiseDashboard from '../Components/Overview/CourierWiseDashboard'
import PopularCustomerDashboard from '../Components/Overview/PopularCustomerDashboard'
import TotalShipment from '../Components/Overview/TotalShipment'

const Overview = () => {
  return (
    <>
      <Row>
        <TotalShipment />
        <Col className="col-6">
          <TotalInfoDashboard />
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

export default Overview