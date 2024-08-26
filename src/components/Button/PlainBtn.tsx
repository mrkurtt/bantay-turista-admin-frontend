"use client";
import { IPlainBtnProps } from "@/utils/interfaces";
import { Button } from "@nextui-org/react";
import React from "react";

const PlainBtn = ({ label, fullWidth = false, as, href, onClickHandler }: IPlainBtnProps) => {
  return (
    <Button onClick={onClickHandler} as={as} href={href} fullWidth={fullWidth} variant="flat" radius="sm">
      {label}
    </Button>
  );
};

export default PlainBtn;
