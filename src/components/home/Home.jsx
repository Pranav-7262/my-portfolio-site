import React from "react";

const Home = () => {
  const image =
    "https://cdni.iconscout.com/illustration/premium/thumb/developer-using-laptop-illustration-download-in-svg-png-gif-file-formats--programming-coding-pack-design-development-illustrations-11934874.png";
  return (
    <div className="text-white flex w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:p-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hi ,I am Pranav
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iste
          officia neque deserunt illum magnam labore. Sint, quis culpa?
          Similique voluptate deleniti dolorem nobis distinctio numquam nam
          dolor tempora cumque.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className="" src={image} alt="image" />
      </div>
    </div>
  );
};

export default Home;
