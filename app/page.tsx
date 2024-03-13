import Image from "next/image";

export default function Home() {
  return (
//     <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen">
//       <div className="card w-96 bg-base-100 shadow-xl">
  
//   <div className="card-body">
//     <h2 className="card-title">Festival!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//     </div>
//   </div>
// </div>
//     </div>
    <div className="hero min-h-screen " style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content bg-white rounded-xl">
      <div className="min-w-[40vw]">
        <h1 className="mb-5 text-5xl font-bold">Festival</h1>
        <div>
        {/* <progress className="progress w-56" value={50} max="100"></progress> */}
        <progress className="progress w-56"></progress>

        </div>
        <p className="mb-5">You number in line: </p>
        <p className="mb-5">You estimated wait time: </p>
      </div>
    </div>
  </div>
  );
}
