import Waterfall from "../images/waterfall.png";
import { ChevronUpIcon } from "@heroicons/react/solid";

const PoolBox = () => {
  return (
    <>
      <div className="bg-gray-900 p-4 lg:w-full mb-2 flex lg:flex-row xs:flex-col xs:text-center xs:items-center border-4 border-cyan-500 rounded shadow-xl shadow-cyan-500/90">
        <img src={Waterfall} height="70px" width="70px" />
        <div className="lg:ml-2 flex flex-col xs:text-center xs:items-center">
          <h3 className="text-custom-100 font-bold text-2xl tracking-wider">
            WATERFALL
          </h3>
          <div className="bg-gradient-to-t from-blue-900 to-teal-700 text-gray-800 font-bold text-center px-1 rounded w-1/2">
            900x
          </div>
        </div>

        <div className="lg:ml-auto xs:mt-4 flex flex-col lg:text-start xs:text-center">
          <span className="text-custom-100 text-xs tracking-wider">
            WATERFALL Earned
          </span>
          <span className="text-custom-100 text-2xl font-extrabold tracking-wider">
            123
          </span>
          <span className="text-custom-100 text-xs font-bold tracking-wider">
            ~$123.124 USD
          </span>
        </div>
        <div className="lg:ml-auto xs:mt-4  flex flex-col lg:text-start xs:text-center">
          <span className="text-custom-100 text-xs tracking-wider">
            WATERFALL Staked
          </span>
          <span className="text-custom-100 text-2xl font-extrabold tracking-wider">
            123
          </span>
          <span className="text-custom-100 text-xs font-bold tracking-wider">
            ~$123.124 USD
          </span>
        </div>
        <div className="lg:ml-auto xs:mt-4  flex flex-col gap-0 lg:text-start xs:text-center">
          <span className="text-custom-100 text-xs tracking-wider">
            Total Staked
          </span>
          <span className="text-custom-100 text-2xl font-extrabold tracking-wider">
            1230 WATERFALL
          </span>
        </div>
        <div className="lg:m-auto xs:mt-4   lg:text-start xs:text-center">
          <div className="flex flex-row text-gray-800 justify-center lg:m-auto">
            <span className="tracking-widest">Details</span>
            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              }  max-h-6 max-w-6`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PoolBox;
