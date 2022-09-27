import React from "react";
import { useState , useEffect } from "react";
import useClock from "./UseClock";

export default function MyClock() {
    const [time] = useClock()

    return (
        <div>{time}</div>
    )
}