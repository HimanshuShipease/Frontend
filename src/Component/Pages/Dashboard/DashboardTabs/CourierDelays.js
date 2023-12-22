import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TopSellingDashboard from '../Components/Overview/TopSellingDashboard'
import WeightProfile from '../Components/Shipment/WeightProfile'
import ShipmentOverview from '../Components/Shipment/ShipmentOverview'
import ZoneWiseData from '../Components/Shipment/ZoneWiseData'
import OFDDataCard from '../Components/Shipment/OFDDataCard'
import ExpectedDate from '../Components/Shipment/ExpectedDate'

const CourierDelays = () => {
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
          <OFDDataCard />
          <ExpectedDate />
        </Col>
      </Row>
    </>
  )
}

export default CourierDelays