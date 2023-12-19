import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const sidebarItems = [
  { icon: "bx bxs-dashboard", to: "/", label: "Dashboard" },
  { icon: "bx bx-user-check", to: "/", label: "Orders" },
  { icon: "bx bx-conversation", to: "/", label: "More On Orders" },
  { icon: "bx bx-conversation", to: "/", label: "More--- On Orders" },
  { icon: "bx bx-conversation", to: "/", label: "Shipments" },
  { icon: "bx bx-conversation", to: "/", label: "Channels" },
  { icon: "bx bx-conversation", to: "/", label: "OMS" },
  { icon: "bx bx-conversation", to: "/billing", label: "Billing" },
  { icon: "bx bx-conversation", to: "/", label: "Weight Reco." },
  { icon: "bx bx-user-check", to: "/", label: "Customer" },
  { icon: "bx bx-conversation", to: "/", label: "Tools" },
  { icon: "bx bx-conversation", to: "/", label: "MIS" },
  { icon: "bx bx-conversation", to: "/order", label: "Customer Support" },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <div
        className="absolute-sidebar side-navbar active-nav d-flex justify-content-between flex-wrap"
        id="sidebar"
      >
        <ul className="nav flex-column text-white w-100">
          <div
            className={` ${
              expanded ? "large-img-wrapper" : "small-img-wrapper"
            } company-logo`}
          >
            {expanded ? (
              <img
                alt="company-logo"
                src="./assets/logo/companyLogo.png"
                className="inline-block"
                width="100%"
                height="100%"
              />
            ) : (
              <img
                alt="company-logo"
                src="./assets/logo/ShipEaseLogo.jpeg"
                className="inline-block"
              />
            )}
          </div>

          {sidebarItems.map((item, index) => (
            <Link
              key={`${item.label}_${index}`}
              to={item.to}
              className="nav-link"
            >
              <div className="sidebar-label-wrapper">
                <i className={item.icon}></i>
                {expanded && <span className="mx-2">{item.label}</span>}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
