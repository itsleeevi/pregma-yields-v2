import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

import BankBg from "../partials/BankBg";

const Bank = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-900 flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-hidden overflow-x-hidden ">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="max-w mx-auto my-auto px-4">
              <div className="pb-12 md:pb-20">
                {/* Section header */}
                <div className="flex justify-center text-center mx-auto xs:ml-20 xs:mt-24">
                  <div className=" triangles">
                    <div className="triangle"></div>
                    <div className="triangle"></div>
                    <div className="triangle"></div>
                  </div>
                </div>
                <div className="pb-12 md:pb-20">
                  <div
                    className="grid grid-cols-2 gap-4 lg:gap-20 md:grid-cols-4 text-center"
                    data-aos-id-stats
                  >
                    {/* 1st item */}
                    <div
                      className="bg-gray-900 py-10 px-10 border-4 border-cyan-500 rounded shadow-xl shadow-cyan-500/90"
                      data-aos="fade-down"
                      data-aos-anchor="[data-aos-id-stats]"
                    >
                      <div className="text-gray-800 font-red-hat-display text-3xl font-extrabold tracking-tighter">
                        9.9M
                      </div>
                      <div className="text-gray-400 font-semibold">
                        Treasury
                      </div>
                    </div>
                    {/* 2nd item */}
                    <div
                      className="bg-gray-900 py-10 px-10 border-4 border-cyan-500 rounded shadow-xl shadow-cyan-500/90"
                      data-aos="fade-down"
                      data-aos-anchor="[data-aos-id-stats]"
                    >
                      <div className="text-gray-800 font-red-hat-display text-3xl font-extrabold tracking-tighter">
                        $9.9B
                      </div>
                      <div className="text-gray-400 font-semibold">
                        Market Cap
                      </div>
                    </div>
                    {/* 3rd item */}
                    <div
                      className="bg-gray-900 py-10 px-10 border-4 border-cyan-500 rounded shadow-xl shadow-cyan-500/90"
                      data-aos="fade-down"
                      data-aos-anchor="[data-aos-id-stats]"
                    >
                      <div className="text-gray-800 font-red-hat-display text-3xl font-extrabold tracking-tighter">
                        $99
                      </div>
                      <div className="text-gray-400 font-semibold">Price</div>
                    </div>
                    {/* 4th item */}
                    <div
                      className="bg-gray-900 py-10 px-10 border-4 border-cyan-500 rounded shadow-xl shadow-cyan-500/90"
                      data-aos="fade-down"
                      data-aos-anchor="[data-aos-id-stats]"
                    >
                      <div className="text-gray-800 font-red-hat-display text-3xl font-extrabold tracking-tighter ">
                        999%
                      </div>
                      <div className="text-gray-400 font-semibold">APY</div>
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
};

export default Bank;

/*
        <div class="triangles">
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                  </div>
                  */
