"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [lineInfo, setLineInfo] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(
      "https://staging-poc-api.antrein.com/events"
    );
    eventSource.onmessage = (event) => {
      console.log(event);
      const newData = JSON.parse(event.data);
      console.log(newData);
      setLineInfo(newData);
    };

    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://ticket.antrein.com/";
    }, 5000);

    return () => {
      eventSource.close();
      clearTimeout(redirectTimeout); // Clear the timeout to prevent memory leaks
    };
  }, []);

  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content text-center text-neutral-content bg-[rgba(100,100,100,0.5)] px-[80px] backdrop-blur rounded-xl py-8 w-[32%]">
        <div className="">
          <h1 className="mb-5 text-4xl font-bold text-white">
            YOU ARE NOW IN LINE
          </h1>
          <p className="mb-5 text-white">
            You are in line for TEST EVENT. When it is your turn, you will have
            10 minutes to finish the order.
          </p>

          <div>
            {/* <progress className="progress w-56" value={50} max="100"></progress> */}
            <progress className="progress progress-primary w-72"></progress>
          </div>

          <p className="mt-5 text-white">You number in line: </p>
          <p className="text-white">You estimated wait time: </p>

          <button className="btn btn-primary mt-5">Redirect</button>
        </div>
      </div>
    </div>
  );
}
