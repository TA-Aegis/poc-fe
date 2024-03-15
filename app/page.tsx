"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LineInfo = {
  id: string;
  queueNumber: number;
  estimatedTime: number;
  percentageProgress: number;
  isFinished: boolean;
};

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export default function Home() {
  const [lineInfo, setLineInfo] = useState<LineInfo | null>(null);

  useEffect(() => {
    const eventSource = new EventSource(
      "https://staging-poc-api.antrein.com/queue"
    );
    eventSource.onmessage = (event) => {
      const newData: LineInfo = JSON.parse(event.data);
      if (newData.isFinished) {
        window.location.href = "https://marathon-ticket.antrein.com/";
        return;
      }
      setLineInfo(newData);
    };

    // const redirectTimeout = setTimeout(() => {
    //   window.location.href = "https://marathon-ticket.antrein.com/";
    // }, 5000);

    return () => {
      eventSource.close();
      // clearTimeout(redirectTimeout); // Clear the timeout to prevent memory leaks
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
            You are in line for Marathon Run. When it is your turn, you will
            have 10 minutes to finish the order.
          </p>

          <div>
            {/* <progress className="progress w-56" value={50} max="100"></progress> */}
            {/* <progress
              className="progress progress-primary w-72"
              value={progressPercentage}
              max="100"
            ></progress> */}
            <div className="progress-bar">
              <div
                className="completed-bar"
                style={{
                  width: `${lineInfo?.percentageProgress || 0}%`,
                  opacity: 1,
                }}
              >
                <div className="stickman">
                  <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fman-running-silhouette-vector%2Fman-running-silhouette-vector-9.png&f=1&nofb=1&ipt=611c80349f21355248d9ca4fa575b2507ef5cd6f9bc7c4e80f0eb0694fba509e&ipo=images" />
                </div>
              </div>
            </div>
            <div className="progress-information">
              <p className="text-colour--primary-red--80">
                {lineInfo?.percentageProgress || 0}%
              </p>
            </div>
          </div>

          <p className="mt-5 text-white">
            You number in line: {lineInfo?.queueNumber || "-"}
          </p>
          <p className="text-white">
            {formatTime(lineInfo?.estimatedTime || 0)}
          </p>

          <button className="btn btn-primary mt-5">Redirect</button>
        </div>
      </div>
    </div>
  );
}
