import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

import PoolBox from "../partials/PoolBox";
import PoolBg from "../partials/PoolBg";

function Pools() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-900 flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="bg-gray-900  relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="relative flex">
            <div className="max-w mx-auto px-4 sm:px-6 lg:w-8/12 sm:w-11/12">
              <div className="pb-12 md:pb-20 w-full">
                {/* Section header */}
                <div className="text-center pb-12 md:pb-6">
                  <div className="hidden sm:block">
                    <PoolBg />
                  </div>
                  <h1
                    className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                    data-aos="zoom-out"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-teal-400">
                      Pools
                    </span>
                  </h1>
                  <div className="max-w-3xl mx-auto">
                    <p
                      className="text-2xl text-custom-100 tracking-wide font-bold lg:mb-8"
                      data-aos="zoom-out"
                      data-aos-delay="150"
                    >
                      Just stake some tokens to earn. High APR, low risk.
                    </p>
                  </div>
                </div>
                {/* Hero image */}
                <div>
                  <div className="relative flex justify-center mb-8 w-full">
                    <div className="flex flex-col justify-center w-full">
                      <PoolBox />
                      <PoolBox />
                      <PoolBox />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Pools;
