import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/courses/categories/css",
    title: "CSS",
    key: 1,
  },
  {
    path: "/courses/categories/html",
    title: "HTML",
    key: 2,
  },
  {
    path: "/courses/categories/html-css",
    title: "HTML-CSS",
    key: 3,
  },
];

const Sidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column bg-gray p-4 m-5 mx-4 rounded-2 gap-3"
        style={{ minWidth: "19rem" }}
      >
        <h3 className="mb-4 fw-bold">Categorías &gt;</h3>
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.path}
            nbr={item.key}
            path={item.path}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
