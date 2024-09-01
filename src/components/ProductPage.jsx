import React, { useState } from "react";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: require("../assets/shose one.png"),
    img2: require("../assets/shose two.png"),
    img3: require("../assets/shose three.png"),
    img4: require("../assets/shose four.png"),
  });

  const [activeImg, setActiveImg] = useState(images.img1);
  const [price, setPrice] = useState(99);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-6 lg:gap-14 p-8 lg:p-8 lg:items-center">
      <div className="flex flex-col gap-4 lg:gap-6">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-20 lg:h-24 gap-2 lg:gap-4 w-full">
          <img
            src={images.img1}
            alt=""
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImg(images.img4)}
          />
        </div>
      </div>
      {/* About */}
      <div className="flex flex-col gap-8 lg:gap-4">
        <div>
          <span className="text-violet-600 font-bold">Special Speaker</span>
          <h1 className="text-2xl lg:text-3xl font-bold">Nike Air Max 90</h1>
        </div>
        <p className="text-gray-700 text-sm lg:text-base">
          Nothing as fly, nothing as comfortable, nothing as proven. The Nike
          Air Max 90 stays true to its OG running roots with the iconic Waffle
          sole, stitched overlays and classic TPU details. Classic colors
          celebrate your fresh look while Max Air cushioning adds comfort to
          the journey.
        </p>
        <h6 className="text-xl lg:text-2xl font-semibold">$99.00</h6>
        <div className="flex flex-row items-center gap-10 lg:gap-12">
          <div className="flex flex-row items-center">
            <button className="bg-gray-200 py-1 px-3 lg:py-2 lg:px-5 rounded-lg text-violet-800 text-2xl lg:text-3xl"
            onClick={()=> setPrice((prev)=> prev <= 99? 99: prev-1)}>-</button>
            <span className="py-2 px-2 lg:py-4 lg:px-6 text-md lg:text-xl font-semibold">$ {price}.00</span>
            <button className="bg-gray-200 py-1 px-3 lg:py-2 lg:px-4 rounded-lg text-violet-800 text-2xl lg:text-3xl" 
            onClick={()=> setPrice((prev)=> prev+1)}>+</button>
          </div>
          <button className="bg-violet-800 text-white font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-xl text-sm lg:text-base">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
