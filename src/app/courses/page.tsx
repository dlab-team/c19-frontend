import React from "react";
import { redirect } from "next/navigation";
const page = () => {
  redirect("/courses/categories/css");
  return <div>page</div>;
};

export default page;
