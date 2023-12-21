import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TotalInfoDashboard from '../Components/Overview/TotalInfoDashboard'
import TopSellingDashboard from '../Components/Overview/TopSellingDashboard'
import RevenueDashboard from '../Components/Overview/RevenueDashboard'
import CourierWiseDashboard from '../Components/Overview/CourierWiseDashboard'
import PopularCustomerDashboard from '../Components/Overview/PopularCustomerDashboard'
import WeightProfile from '../Components/Shipment/WeightProfile'
import ShipmentOverview from '../Components/Shipment/ShipmentOverview'
import ZoneWiseData from '../Components/Shipment/ZoneWiseData'


const Shipment = () => {
  return (
    <>
      <Row>
        <Col className="col-3 cardsSpace">
        <WeightProfile />
        <ZoneWiseData />
        </Col>
        <Col className="col-6 cardsSpace">
          <ShipmentOverview />
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

export default Shipment