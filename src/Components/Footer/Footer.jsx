
const Footer = () => {
    return (
        <footer className="w-full  bg-black">
       <div className="max-w-full mx-auto p-20">
        <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3 sm:gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-bold uppercase text-white">Categories</h3> 
            <ul className="mt-4 space-y-2 text-white">
              <li><a href="/#features">Web Builder</a></li>
              <li><a href="/pricing">Hosting</a></li>
              <li><a href="/#faq">Data Center
</a></li>
              <li><a href="/#faq">Robotic-Automation

</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold uppercase text-white">Contact</h3>   



            <ul className="mt-4 space-y-2 text-white">
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms Of Service
</a></li>
              <li><a href="/contacts">Categories</a></li>
              <li><a href="/contacts">About</a></li>
            </ul>
          </div>
        
       <div>
       <select id="pricingType" name="pricingType"
		className="w-1/2 h-10 border-2   rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="All" selected="">United States</option>
		<option value="bangladesh">Bangladesh</option>
		<option value="india">India</option>
	</select>
       </div>
        </div>
      </div>
      </footer>
    );
};

export default Footer;