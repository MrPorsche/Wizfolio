"use client"
import React, { useEffect, useState } from "react";

const createFly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`
});

const FliesBg = () => {

    const [flies, setFlies] = useState([]);

    useEffect(() => {
        const addFlyPeriodically = () => {
            const newFly = createFly();
            setFlies(currentFlies => 
                [
                    ...currentFlies.slice(-14),
                    newFly
                ]
            );
        };

        const interval = setInterval(addFlyPeriodically, 1000);

        return () => clearInterval(interval)

    }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {
            flies.map((fly) => {
                return (
                    <div
                         key={fly.id}
                         className="absolute rounded-full w-[10px] h-[10px] bg-fly-radial"
                         style={{
                            top: fly.top,
                            left: fly.left,
                            animation:`move ${fly.animationDuration} infinite alternate`
                         }}
                    ></div>
                )
            })
        }
    </div>
  )
}

export default FliesBg;