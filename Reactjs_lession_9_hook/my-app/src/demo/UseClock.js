import React from "react";
import { useState, useEffect } from "react"

export default function useClock() {
    const [time, setTime] = useState("");

    const updateTime = () => {
        let dateInfo = new Date();
        let hour = dateInfo.getHours();
        let minutes = dateInfo.getMinutes();
        let seconds = dateInfo.getSeconds();
        setTime(`${hour}:${minutes}:${seconds}`);
    }
    setInterval(() => {
        updateTime();
    }, 1000);

    return [time]
}