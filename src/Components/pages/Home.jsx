import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { TbExclamationCircle } from "react-icons/tb";
import { FaGreaterThan } from "react-icons/fa6";
import Card from "./Card";
import RecentviewCard from "./RecentviewCard";



const Home = () => {
    return (
        <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto w-full "> 
{/* this is title section  */}
<div>
<h1 className="lg:text-5xl lg:text-left text-center text-2xl lg:py-10 py-2">Best Website builders in the US</h1>
</div>
{/* hr & timing section  */}
<hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"/> 
<div className="flex flex-col lg:flex-row justify-evenly lg:justify-between items-center">
  <div className="flex items-center gap-2 mb-4 lg:mb-0">
    <p className="flex items-center gap-2"><IoCheckmarkCircleOutline className="text-xl" /> Last Updated - February 22, 2020</p>
    <p className="ml-2 flex items-center gap-2 "> <TbExclamationCircle  className="text-xl"/>Advertising Disclosure</p>
  </div>
  
  <div>
    <ul className="flex flex-col gap-2 mx-auto">
      <li>
        <details>
          <summary className="flex items-center justify-between gap-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex gap-2">
              <span>Top Relevant</span>
            </span>
            <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </summary>
          <article className="px-4 pb-4">
            <ul className="flex flex-col gap-1 pl-2">
              <li><a href="">Course title</a></li>
              <li><a href="">Course title</a></li>
              <li><a href="">Course title</a></li>
            </ul>
          </article>
        </details>
      </li>
    </ul>
  </div>
</div>     
<hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>  
          {/*  button section */}


 <div className="flex flex-wrap justify-center lg:justify-start gap-4 py-3">
  <button className="flex items-center bg-white rounded-2xl py-3 px-4 lg:px-10">Tools</button>
  <button className="flex items-center bg-white rounded-2xl py-3 px-4 lg:px-10">AWS Builder</button>
  <button className="flex items-center bg-white rounded-2xl py-3 px-4 lg:px-10">Start Build</button>
  <button className="flex items-center bg-white rounded-2xl py-3 px-4 lg:px-10">Build Supplies</button>
  <button className="flex items-center bg-white rounded-2xl py-3 px-4 lg:px-10">Tooling</button>
  <button className="flex items-center bg-white rounded-2xl py-3 px-4 lg:px-10">BlueHosting</button>
</div>

{/* pagination section  */}
<div className="flex text-left p-4 flex-wrap items-center justify-start">
  <div className="flex items-center lg:gap-2 lg:mr-2">
    Home <FaGreaterThan />
  </div>
  <div className="flex items-center lg:gap-2 lg:mr-2">
    Hosting for all <FaGreaterThan />
  </div>
  <div className="flex items-center lg:gap-2 lg:mr-2">
    Hosting <FaGreaterThan />
  </div>
  <div className="flex items-center lg:gap-2 lg:mr-2">
    Hosting6 <FaGreaterThan />
  </div>
  <div className="flex items-center lg:gap-2 lg:mr-2">
    Hosting5 
  </div>
</div>
{/*card section  */}
<Card></Card>
<h3 className=" text-xl text-center lg:text-left lg:text-3xl font-bold py-8">Related deals you might like for</h3>
{/* recent views card  */}
<div>
  <RecentviewCard></RecentviewCard>
</div>

<div className="py-9">

<div className="flex flex-col md:flex-row justify-evenly items-center">
    <div className="text-center md:text-left">
        <p className="text-xl lg:text-5xl">Sign up and get exclusive <br /> special deals</p>
    </div>

    <div className="flex mt-4 md:mt-0">
        <input type="text" placeholder="Enter your Email"
            className="w-full md:w-80 px-3 h-10 rounded-l focus:outline-none focus:border-sky-500"
        />
        <button type="submit" className="bg-[#1B88F4] text-white rounded-r px-2 md:px-3 py-1">Sign Up</button>
    </div>
</div>

</div>
</div>

        </div>
    
    );
};

export default Home;