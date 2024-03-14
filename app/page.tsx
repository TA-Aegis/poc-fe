import Image from "next/image";

export default function Home() {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      {/* <div className="card w-[32%] glass">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body flex-col items-center">
          <h2 className="card-title mb-5 text-4xl font-bold text-white">YOU ARE NOW IN LINE</h2>
          <p className="mb-5 text-white">
            You are in line for TEST EVENT. When it is your turn, you will have
            10 minutes to finish the order.
          </p>
          <div>
            <progress className="progress w-56" value={50} max="100"></progress>
            <progress className="progress w-56"></progress>
          </div>

          <p className="my-5 text-white">You number in line: </p>
          <p className="text-white">You estimated wait time: </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div> */}

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
        </div>
      </div>
    </div>
  );
}
