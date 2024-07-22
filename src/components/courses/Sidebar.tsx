"use client";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import Link from "next/link";

const menuItems = [
  {
    path: "/courses/categories/css",
    title: "css",
    key: 1,
  },
  {
    path: "/courses/categories/html",
    title: "html",
    key: 2,
  },
  {
    path: "/courses/categories/html-css",
    title: "html-css",
    key: 3,
  },
];

const Sidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column bg-gray p-4 m-5 mx-4 rounded-2 gap-3"
        style={{ minWidth: "20rem" }}
      >
        <h3 className="mb-4 fw-bold">Categorías &gt;</h3>
        <Accordion style={{ minWidth: "16rem" }} defaultActiveKey={["0"]}>
          {menuItems.map((item, index) => (
            <Accordion.Item key={item.path} eventKey={index.toString()}>
              <Link
                href={item.path}
                className={`text-decoration-none text-dark rounded-1`}
              >
                <AccordionHeader bsPrefix="red" className="red">
                  {item.key}.- {item.title.toUpperCase()}
                </AccordionHeader>
              </Link>

              <Accordion.Body>
                <SidebarMenuItem
                  key={item.path}
                  path={item.path}
                  title={item.title}
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Sidebar;
