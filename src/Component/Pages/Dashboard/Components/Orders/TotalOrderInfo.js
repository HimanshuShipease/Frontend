import React, { useState, useEffect } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import axios from "axios";
import Col from "react-bootstrap/Col";
import './TotalOrderInfo.css'
import Graph from "../../../../common/Graph/Graph";
import TableDashboard from "../Overview/TableDashboard";

function TotalOrderInfo() {
  const [shipmentCounter, setShipmentCounter] = useState(null);
  const [totalCustomer, setTotalCustomer] = useState(null);
  const [dailyShipment, setDailyShipment] = useState(null);
  const [averageSelling, setAverageSelling] = useState(null);
  const [todayRevenue, setTodayRevenue] = useState(null);
  const requestData = {
    sellerId: "16",
    start: "2023-10-01 00:00:00",
    end: "2023-10-30 00:00:00",
  };

  useEffect(() => {
    axios
      .post(
        "https://www.shipease.in/api/microservices/dashboard/overview/get-summary-counter",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setShipmentCounter(response.data.data);
        if (response.data.data) {
          const newTotalRevenue = response.data.data;
          const toBePickedPercentage = newTotalRevenue?.total_customer + newTotalRevenue?.daily_shipment + newTotalRevenue?.average_selling + newTotalRevenue?.today_revenue;
          const total = newTotalRevenue?.total_customer * 100 / toBePickedPercentage;
          setTotalCustomer(total.toFixed(2));
          const daily = newTotalRevenue?.daily_shipment * 100 / toBePickedPercentage;
          setDailyShipment(daily.toFixed(2));
          const average = newTotalRevenue?.average_selling * 100 / toBePickedPercentage;
          setAverageSelling(average.toFixed(2));
          const today = newTotalRevenue?.today_revenue * 100 / toBePickedPercentage;
          setTodayRevenue(today.toFixed(2));
        }
      })
      .catch((error) => {
        console.error(error);
        setShipmentCounter(null);
      });
  }, []);

  return (
    <Col>
      <div className="grid gap-3">
        {/* Card 1 */}
        <div className="">
          <div className="box-shadow shadow-sm p10 card-height">
            <div className="row">
              <div className="col-8 col-8 col-lg-8 col-sm-12 col-md-12">
                <div className="d-flex justify-content-start">
                  <div className="infoCardIconContainer bg-blue-dark">
                    {/* <CiUser /> */}
                    <LiaShippingFastSolid className="text-white font30" />
                  </div>
                  <div className="alignWord">
                    <p className="font13 text-gray m-0">Total Orders</p>
                    <h2 className="font20 title-text p-y bold-600 m0">{parseInt(shipmentCounter?.total_customer)}</h2>
                    <p className="font12 text-blue-dark">Best customers ({shipmentCounter?.total_customer})</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg-4 col-sm-12 col-md-12 chartContainer">
              <Graph/>
                <div>
                  <span className="text-color font13 pt20 bold-600 d-block">
                    +{totalCustomer}%
                  </span>
                  <p className="text-xs text-gray font13 m0 text-gray-600">
                    this month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="">
          <div className="box-shadow shadow-sm p10 card-height">
            <div className="row">
              <div className="col-8 col-8 col-lg-8 col-sm-12 col-md-12">
                <div className="d-flex justify-content-start">
                  <div className="infoCardIconContainer bg-red">
                    <LiaShippingFastSolid className="text-white font30" />
                  </div>
                  <div className="alignWord">
                    <p className="font13 text-gray m-0">Daily Shipment</p>
                    <h2 className="font20 title-text p-y bold-600 m0">{parseInt(shipmentCounter?.daily_shipment)}</h2>
                    <p className="font12 text-red">Pending ({shipmentCounter?.daily_shipment})</p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg-4 col-sm-12 col-md-12 chartContainer">
                {/* <img src="graph-red.png" className="inline-block" /> */}
                <Graph/>
                <div>
                    <span className="text-green font13 pt20 bold-600 d-block">
                      +{dailyShipment}%
                    </span>
                    <p className="text-xs text-gray font13 m0 text-gray-600">
                      this month
                    </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="">
          <div className="box-shadow shadow-sm p10 card-height">
            <div className="row">
              <div className="col-8 col-8 col-lg-8 col-sm-12 col-md-12">
                <div className="d-flex justify-content-start">
                  <div className="infoCardIconContainer bg-green">
                    <LiaShippingFastSolid className="text-white font30" />
                  </div>
                  <div className="alignWord">
                    <p className="font13 text-gray m-0">Average Selling Price</p>
                    <h2 className="font20 title-text p-y bold-600 m0">{parseInt(shipmentCounter?.average_selling)}</h2>
                    <p className="font12 text-red">Seller </p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg-4 col-sm-12 col-md-12 chartContainer">
              <Graph/>
                <div>
                  <span className="text-green font13 pt20 bold-600 d-block">
                    +{averageSelling}%
                  </span>
                  <p className="text-xs text-gray font13 m0 text-gray-600">
                    this month
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="">
          <div className="box-shadow shadow-sm p10 card-height">
            <div className="row">
              <div className="col-8 col-8 col-lg-8 col-sm-12 col-md-12">
                <div className="d-flex justify-content-start">
                  <div className="infoCardIconContainer bg-blue">
                    <LiaShippingFastSolid className="text-white font30" />
                  </div>
                  <div className="alignWord">
                    <p className="font13 text-gray m-0">Today’s Revenue</p>
                    <h2 className="font20 title-text p-y bold-600 m0">{parseInt(shipmentCounter?.today_revenue)}</h2>
                    <p className="font12 text-blue">Yesterday {shipmentCounter?.today_revenue} </p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg-4 col-sm-12 col-md-12 chartContainer">
              <Graph/>
                <div>

                <span className="text-red font13 pt20 bold-600 d-block">
                  +{todayRevenue}%
                </span>
                <p className="text-xs text-gray font13 m0 text-gray-600">
                  comparative analysis
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TableDashboard />
    </Col>
  );
}

export default TotalOrderInfo;
