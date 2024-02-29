import { IoMdCheckmark } from "react-icons/io";
import img from '../../assets/computer1.png'
import { GiTrophyCup } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";

const Card = () => {
    return (
        <div>
            <div className=" p-4 py-10">
  {/* card 1 */}
<div className="flex relative bg-base-100 rounded-xl shadow-xl">

  {/* - Left Section - */}
  <div className="p-6">
    <figure className="text-center">
      <img src={img} alt="computer"/>
    </figure>
    <p className="text-center mt-4">Builder 1</p>
  </div>  
  
  {/* -- Middle Section - */}
  <div className="flex flex-col justify-between p-6 sm:p-9">
    <div> 
      <p className="font-bold">WixPro 72-Inch Responsive Website Builder</p>
      <p className="mt-2">Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
      <p className="mt-2 font-bold">Main highlights</p>
      <p className="mt-2">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
      <button className="mt-4 text-[#1b88f4]">Show More</button>

    
    </div>
   <div className="lg:hidden py-3">
   <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-2xl">
      View
    </button>
   </div>
  </div>

  
  {/*  Right Section */}
  <div className="hidden lg:flex items-end lg:p-9 ">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded-2xl">
      View
    </button>
  </div>



<div> 

<div className="bg-[#FF7724] flex items-center gap-2 z-0 left-0 -top-7 lg:-left-1 lg:bottom-64 absolute lg:px-16 px-6 text-white py-2 rounded-xl">   <GiTrophyCup />
  Best Choice</div>
</div>
<div>
<div className="bg-[#fff] z-0 -left-5 lg:bottom-48 border absolute px-5 py-3 text-black  rounded-full">1</div>
</div>


<div> 

<div className="bg-[#F3F9FF] z-0 lg:right-7  right-0 lg:bottom-44 -top-14 lg:-top-0 absolute text-center lg:w-36 lg:h-28 text-black  rounded-xl">
  <p className="text-xl "> 9.8</p>
  <p>Exceptional</p>
  <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
</div>
  
  </div>
</div>


  </div>
  {/* end card 1 */}

  

  

</div>

{/* card 2 */}
<div className="p-4 py-4">
<div className="flex py-6 relative bg-base-100 rounded-xl shadow-xl">

{/* - Left Section - */}
<div className="p-6">
  <figure className="text-center">
    <img src={img} alt="computer"/>
  </figure>
  <p className="text-center mt-4">Builder</p>
</div>  

{/* -- Middle Section - */}
<div className="flex flex-col justify-between p-6 sm:p-9">
  <div> 
    <p className="font-bold">SiteCraft 68-Inch Ultimate Web Design Studio-</p>
    <p className="mt-2">Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
    <p className="mt-2 font-bold">Main highlights</p>
    <p className="mt-2">[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
    <button className="mt-4 text-[#1b88f4]">Show More</button>

  
  </div>
 <div className="lg:hidden py-3">
 <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-2xl">
    View
  </button>
 </div>
</div>


{/*  Right Section */}
<div className="hidden lg:flex items-end lg:p-9 ">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded-2xl">
    View
  </button>
</div>



<div> 

<div className="bg-[#FF7724] flex items-center gap-2 z-0 left-0 -top-7 lg:-left-1 lg:bottom-64 absolute lg:px-16 px-6 text-white py-2 rounded-xl h-10 lg:h-14"> <IoDiamondOutline />Best Value
</div>
</div>
<div>
<div className="bg-[#fff] z-0 -left-5 lg:bottom-48 border absolute px-5 py-3 text-black  rounded-full">2</div>
</div>


<div> 

<div className="bg-[#F3F9FF] z-0 lg:right-7  right-0 lg:bottom-44 -top-14 lg:-top-0 absolute text-center lg:w-36 lg:h-28 text-black  rounded-xl">
<p className="text-xl "> 9.5</p>
<p>Excellent</p>
<div className="rating rating-xs">
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
</div>

</div>
</div>


</div>
</div>



{/* card 3 */}
<div className="p-4 py-4">
<div className="flex py-6 relative bg-base-100 rounded-xl shadow-xl">

{/* - Left Section - */}
<div className="p-6">
  <figure className="text-center">
    <img src={img} alt="computer"/>
  </figure>
  <p className="text-center mt-4">Builder 1</p>
</div>  

{/* -- Middle Section - */}
<div className="flex flex-col justify-between p-6 sm:p-9">
  <div> 
    <p className="font-bold">SiteCraft 68-Inch Ultimate Web Design Studio-</p>
    <p className="mt-2">Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
    <p className="mt-2 font-bold">Main highlights</p>
    <p className="mt-2">[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
    <button className="mt-4 text-[#1b88f4]">Show More</button>

  
  </div>
 <div className="lg:hidden py-3">
 <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-2xl">
    View
  </button>
 </div>
</div>


{/*  Right Section */}
<div className="hidden lg:flex items-end lg:p-9 ">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded-2xl">
    View
  </button>
</div>




<div>
<div className="bg-[#fff] z-0 -left-5 lg:bottom-48 border absolute px-5 py-3 text-black  rounded-full">3</div>
</div>


<div> 

<div className="bg-[#F3F9FF] z-0 lg:right-7  right-0 lg:bottom-44 -top-14 lg:-top-0 absolute text-center lg:w-36 lg:h-28 text-black  rounded-xl">
<p className="text-xl "> 9.2</p>
<p>Exceptional</p>
<div className="rating rating-xs">
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"/>
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
</div>

</div>
</div>


</div>
</div>

{/* card 4 */}
<div className="p-4 py-4">
<div className="flex py-6 relative bg-base-100 rounded-xl shadow-xl">

{/* - Left Section - */}
<div className="p-6">
  <figure className="text-center">
    <img src={img} alt="computer"/>
  </figure>
  <p className="text-center mt-4">CDK</p>
</div>  

{/* -- Middle Section - */}
<div className="flex flex-col justify-between p-6 sm:p-9">
  <div> 
    <p className="font-bold">CDK Responsive Builder:</p>
    <p className="mt-2"> An extensive library of widgets and apps, and detailed step-by-step guides</p>

    <button className="btn btn-sm">26% off</button>
    <p className="mt-2 font-bold">Main highlights</p>
    <div className="bg-[#FFF4ED] rounded p-2">
    <div className="flex items-center gap-2"><button className="btn btn-sm">9.9</button>building responsive</div>
    <div className="flex items-center gap-2"><button className="btn btn-sm">8.9</button>Cool</div>
    <div className="flex items-center gap-2"><button className="btn btn-sm">8.9</button>Docs</div>

    </div>


    <p className="mt-2">Why we love it</p>
    <div className="flex items-center gap-2"><IoMdCheckmark className="rounded-full bg-gray-200" />Documentation</div>
    <div className="flex items-center gap-2"><IoMdCheckmark className="rounded-full bg-gray-200" />Easy Use</div>
    <div className="flex items-center gap-2"><IoMdCheckmark className="rounded-full bg-gray-200" />Out of box</div>

    
    <button className="mt-4 text-[#1b88f4]">Show More</button>

  
  </div>
 <div className="lg:hidden py-3">
 <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-2xl">
    View
  </button>
 </div>
</div>


{/*  Right Section */}
<div className="hidden lg:flex items-end lg:p-9 ">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded-2xl">
    View
  </button>
</div>




<div>
<div className="bg-[#fff] z-0 -left-5 lg:bottom-3/4 border absolute px-5 py-3 text-black  rounded-full">4</div>
</div>


<div> 

<div className="bg-[#F3F9FF] z-0 lg:right-7  right-0 lg:bottom-44 -top-14 lg:-top-0 absolute text-center lg:w-36 lg:h-28 text-black  rounded-xl">
<p className="text-xl "> 9.1</p>
<p>Very Good</p>
<div className="rating rating-xs">
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"/>
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
</div>

</div>
</div>


</div>
</div>
        </div>
    );
};

export default Card;