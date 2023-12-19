import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

function TopSellingDashboard() {
    const [popularProduct, setPopularProduct] = useState([]);
    const requestData = {
        "sellerId" : "150",
        "start" : "2023-10-01",
        "end" : "2023-10-30"
    };
    useEffect(()=>{
        axios.post(
            "https://www.shipease.in/api/microservices/dashboard/overview/most-popular-products",
            requestData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((response)=>{
            setPopularProduct(response.data.data.slice(0, 5));
        }).catch((error)=>{
            console.error(error);
        })
    },[requestData]);

    return (
        <div className="box-shadow shadow-sm p10 mt15">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="title">Top Selling Products</h2>
            </div>
            <div className="table-responsive">
                <Table hover className="table-ui mt20">
                    <thead>
                    <tr>
                        <th scope="col" className="text-center">S.No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {popularProduct.map((product,cnt) => (
                        <tr className="text-nowrap">
                            <td>{cnt + 1}</td>
                            <td>{product?.product_name}</td>
                            <td>Glossary</td>
                            <td>
                                <span className="bg-green-light round-8 text-green x5-y10">
                                  In Stock
                                </span>
                            </td>
                            <td>{product?.total}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default TopSellingDashboard;