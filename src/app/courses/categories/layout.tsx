import Sidebar from "@/components/courses/Sidebar";
import React from "react";

const CoursesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="body-color bg-light-gray d-flex justify-content-center align-items-center ">
      <div className="d-flex bg-white2">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default CoursesLayout;
