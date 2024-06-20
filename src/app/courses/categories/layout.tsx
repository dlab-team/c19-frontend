import Sidebar from "@/components/courses/Sidebar";
import React from "react";

const CoursesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="d-flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default CoursesLayout;
