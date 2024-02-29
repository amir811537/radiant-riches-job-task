
import img from '../../assets/computer1.png'
const RecentviewCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* card 1 */}
  <div className="card bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={img} alt="computer" className="rounded-xl" />
    </figure>
    <div className="card-body items-center">
      <div className="flex items-center justify-start gap-2">
        <button className="btn btn-sm">20% off</button>
        <button className="btn btn-sm">limited time</button>
      </div>
      <h2 className="card-title">Webbuilder 1</h2>
      <p>Computer Modern clasic with wix support</p>
      <div className="flex items-center justify-between gap-5">
        <p className="text-xl font-bold">$39.96</p>
        <p className="text-sm">$49.96 <span className="text-red-400">(20% off)</span></p>
      </div>
      <div className="">
        <button className="btn px-20 py-3 bg-[#1B88F4] text-white">view details</button>
      </div>
    </div>
  </div>
{/* card 2 */}
<div className="card bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={img} alt="computer" className="rounded-xl" />
    </figure>
    <div className="card-body items-center">
      <div className="flex items-center justify-start gap-2">
        <button className="btn btn-sm">20% off</button>
        <button className="btn btn-sm">limited time</button>
      </div>
      <h2 className="card-title">Webbuilder 1</h2>
      <p>Computer Modern clasic with wix support</p>
      <div className="flex items-center justify-between gap-5">
        <p className="text-xl font-bold">$39.96</p>
        <p className="text-sm">$49.96 <span className="text-red-400">(20% off)</span></p>
      </div>
      <div className="">
        <button className="btn px-20 py-3 bg-[#1B88F4] text-white">view details</button>
      </div>
    </div>
  </div>


{/* card 3 */}
<div className="card bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={img} alt="computer" className="rounded-xl" />
    </figure>
    <div className="card-body items-center">
      <div className="flex items-center justify-start gap-2">
        <button className="btn btn-sm">20% off</button>
        <button className="btn btn-sm">limited time</button>
      </div>
      <h2 className="card-title">Webbuilder 1</h2>
      <p>Computer Modern clasic with wix support</p>
      <div className="flex items-center justify-between gap-5">
        <p className="text-xl font-bold">$39.96</p>
        <p className="text-sm">$49.96 <span className="text-red-400">(20% off)</span></p>
      </div>
      <div className="">
        <button className="btn px-20 py-3 bg-[#1B88F4] text-white">view details</button>
      </div>
    </div>
  </div>
        </div>
    );
};

export default RecentviewCard;