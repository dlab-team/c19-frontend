"use server";

import { cookies } from "next/headers";

const getServerCookies = () => {
  const cookieStore = cookies();
  const cookieAdvance = cookieStore.get("AdvanceStatus");
  let cookieList;
  if (cookieAdvance) {
    cookieList = JSON.parse(cookieAdvance.value);
  } else {
    cookieList = {};
  }
  return cookieList;
};

export { getServerCookies };
