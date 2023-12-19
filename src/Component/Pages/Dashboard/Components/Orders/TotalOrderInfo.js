import React, { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import '../Overview/totalInfoDashboard.css'
import LineGraph from "../../../../common/Graph/LineGraph";
import DataTable from "../Overview/DataTable/DataTable";
import './TotalOrderInfo.css'
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";

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
              <div className="col-10 col-lg-10 col-sm-12 col-md-12">
                <div className="d-flex justify-content-start gap-10">
                  <div className="infoCardIconContainer bg-blue-dark">
                    {/* <CiUser /> */}
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6003 12.8877C16.3904 12.7943 16.1805 12.7099 15.9676 12.6316C17.4399 11.417 18.38 9.56363 18.38 7.49021C18.38 3.84364 15.4709 0.878174 11.8937 0.878174C8.31639 0.878174 5.40728 3.84364 5.40728 7.49021C5.40728 9.56664 6.35038 11.4231 7.82267 12.6346C3.26388 14.3313 0 18.7976 0 24.0263H2.16114C2.16114 18.5565 6.52776 14.1083 11.8907 14.1083C13.23 14.1083 14.5249 14.3795 15.7399 14.9129L16.6003 12.8877ZM11.8937 3.08118C14.2795 3.08118 16.2189 5.05816 16.2189 7.49021C16.2189 9.92226 14.2795 11.8992 11.8937 11.8992C9.50783 11.8992 7.56842 9.91924 7.56842 7.49021C7.56842 5.06117 9.50783 3.08118 11.8937 3.08118ZM14.8855 17.8543C14.8855 18.1617 15.0511 18.442 15.3172 18.5836L19.1014 20.6209C19.2196 20.6841 19.3497 20.7173 19.4798 20.7173C19.6099 20.7173 19.74 20.6841 19.8582 20.6209L23.6424 18.5836C23.9085 18.4389 24.0741 18.1587 24.0741 17.8543C24.0741 17.5499 23.9085 17.2666 23.6424 17.125L19.8582 15.0847C19.6217 14.9581 19.3379 14.9581 19.1014 15.0847L15.3172 17.125C15.0511 17.2666 14.8855 17.5469 14.8855 17.8543ZM19.4798 16.7513L21.5286 17.8543L19.4798 18.9573L17.431 17.8543L19.4798 16.7513Z" fill="white" />
                      <path d="M19.9179 21.4567L15.5718 19.3967L14.8149 20.6826L19.9179 23.1004L25.0001 20.6932L24.2433 19.4073L19.9179 21.4567Z" fill="white" />
                      <path d="M19.9268 24.2319L15.5731 22.1746L14.8149 23.4577L19.9268 25.8783L25.0001 23.4763L24.2419 22.1905L19.9268 24.2319Z" fill="white" />
                    </svg>
                  </div>
                  <div className="alignWord">
                    <p className="font13 text-gray m-0">Total Customer</p>
                    <h2 className="font20 title-text p-y bold-600 m0">{parseInt(shipmentCounter?.total_customer)}</h2>
                    <p className="font12 text-blue-dark">Best customers ({shipmentCounter?.total_customer})</p>
                  </div>
                </div>
              </div>
              <div className="col-2 col-lg-2 col-sm-12 col-md-12 chartContainer">
                <LineGraph cardColor="rgba(75, 192, 192, 1)" />
                <div className="card-footer">
                  <span className="text-red font13 pt20 bold-600 d-block text-end">
                    +{totalCustomer}%
                  </span>
                  <p className="text-xs text-gray font12 m0 text-gray-600 ws-no-wrap">
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
              <div className="col-10 col-lg-10 col-sm-12 col-md-12">
                <div className="d-flex justify-content-start gap-10">
                  <div className="infoCardIconContainer bg-red">
                    <svg width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.47192V3.56283H21.1875V19.2447H14.6465C14.1733 17.4478 12.5298 16.1083 10.5625 16.1083C8.59522 16.1083 6.95166 17.4478 6.47852 19.2447H5.25V14.0174H3.125V21.3356H6.47852C6.95166 23.1324 8.59522 24.4719 10.5625 24.4719C12.5298 24.4719 14.1733 23.1324 14.6465 21.3356H23.4785C23.9517 23.1324 25.5952 24.4719 27.5625 24.4719C29.5298 24.4719 31.1733 23.1324 31.6465 21.3356H35V12.8086L34.9336 12.6452L32.8086 6.37249L32.5762 5.65374H23.3125V1.47192H1ZM2.0625 5.65374V7.74465H11.625V5.65374H2.0625ZM23.3125 7.74465H31.0488L32.875 13.1026V19.2447H31.6465C31.1733 17.4478 29.5298 16.1083 27.5625 16.1083C25.5952 16.1083 23.9517 17.4478 23.4785 19.2447H23.3125V7.74465ZM3.125 9.83556V11.9265H9.5V9.83556H3.125ZM10.5625 18.1992C11.7495 18.1992 12.6875 19.1221 12.6875 20.2901C12.6875 21.4581 11.7495 22.381 10.5625 22.381C9.37549 22.381 8.4375 21.4581 8.4375 20.2901C8.4375 19.1221 9.37549 18.1992 10.5625 18.1992ZM27.5625 18.1992C28.7495 18.1992 29.6875 19.1221 29.6875 20.2901C29.6875 21.4581 28.7495 22.381 27.5625 22.381C26.3755 22.381 25.4375 21.4581 25.4375 20.2901C25.4375 19.1221 26.3755 18.1992 27.5625 18.1992Z" fill="white" stroke="#E8F1FA" />
                    </svg>
                  </div>
                  <div className="alignWord">
                    <p className="font13 text-gray m-0">Daily Shipment</p>
                    <h2 className="font20 title-text p-y bold-600 m0">{parseInt(shipmentCounter?.daily_shipment)}</h2>
                    <p className="font12 text-red">Pending ({shipmentCounter?.daily_shipment})</p>
                  </div>
                </div>
              </div>
              <div className="col-2 col-lg-2 col-sm-12 col-md-12 chartContainer">
                {/* <img src="graph-red.png" className="inline-block" /> */}
                {/* <Graph/> */}
                <LineGraph cardColor="rgba(75, 192, 192, 1)" />
                <div className="card-footer">
                  <span className="text-red font13 pt20 bold-600 d-block text-end">
                    +{dailyShipment}%
                  </span>
                  <p className="text-xs text-gray font12 m0 text-gray-600 ws-no-wrap">
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
              <div className="col-10 col-lg-10 col-sm-12 col-md-12">
                <div className="d-flex justify-content-start gap-10">
                  <div className="infoCardIconContainer bg-green">
                    <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.77778 1.15137V19.2069H23.2222V1.15137M1 19.2069H26M12.8056 24.7625C12.4221 24.7625 12.1111 25.0734 12.1111 25.4569C12.1111 25.8404 12.4221 26.1514 12.8056 26.1514C13.189 26.1514 13.5 25.8404 13.5 25.4569C13.5 25.0734 13.189 24.7625 12.8056 24.7625ZM12.8056 24.7625V19.2069M7.94444 12.2625V8.09581L13.5 12.2625L19.0556 6.70692M19.0556 6.70692H14.8889M19.0556 6.70692V10.8736M12.8056 25.4569H12.8194M1 1.15137H26" stroke="#FFFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className="alignWord">
                    <p className="font13 text-gray m-0">Average Selling Price</p>
                    <h2 className="font20 title-text p-y bold-600 m0">{parseInt(shipmentCounter?.average_selling)}</h2>
                    <p className="font12 text-red">Seller </p>
                  </div>
                </div>
              </div>
              <div className="col-2 col-lg-2 col-sm-12 col-md-12 chartContainer">
                <LineGraph cardColor="rgba(75, 192, 192, 1)" />
                <div className="card-footer">
                  <span className="text-red font13 pt20 bold-600 d-block text-end">
                    +{averageSelling}%
                  </span>
                  <p className="text-xs text-gray font12 m0 text-gray-600 ws-no-wrap">
                    comparative analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="">
          <div className="box-shadow shadow-sm p10 card-height">
            <div className="row">
              <div className="col-12">
                <div className="row align-items-center">
                <div className="col-10 left-text">
                  <div className="infoCardIconContainer bg-red">
                    <svg
                      width={37}
                      height={27}
                      viewBox="0 0 37 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect width={37} height={27} fill="url(#pattern0)" />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use
                            xlinkHref="#image0_946_7143"
                            transform="matrix(0.0175439 0 0 0.0240416 0 -0.00487329)"
                          />
                        </pattern>
                        <image
                          id="image0_946_7143"
                          width={57}
                          height={42}
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  </div>
                  <p className="font14 text-gray m-0 ws-no-wrap">RTO Orders</p>
                  <h2 className="font20 title-text p-y bold-600 m0">{parseInt(shipmentCounter?.average_selling)}</h2>
                </div>
                  <div className="col-2">
                  <HiArrowTrendingDown />
                  </div>
              </div>
              </div>
              <div className="col-12">

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TableDashboard /> */}
      <div className="mt-3 datatable-container">
        <h2 className="title mb-3">Last 30 Days Order</h2>
        <DataTable />
      </div>
    </Col>
  );
}

export default TotalOrderInfo;
