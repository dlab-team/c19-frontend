"use client";

import React from "react";
import SSRProvider from "react-bootstrap/SSRProvider";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return <SSRProvider >{children}</SSRProvider>;
};
