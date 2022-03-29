import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import InboxSidebar from "../partials/inbox/InboxSidebar";
import InboxBody from "../partials/inbox/InboxBody";
import Waterfall from "../images/waterfall.png";

function Pools() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inboxSidebarOpen, setInboxSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="bg-gray-900 relative flex">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-16 md:pb-20">
                {/* Section header */}
                <div className="text-center pb-12 md:pb-6">
                  <h1
                    className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                    data-aos="zoom-y-out"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-teal-400">
                      Pools
                    </span>
                  </h1>
                  <div className="max-w-3xl mx-auto">
                    <p
                      className="text-2xl text-custom-100 tracking-wide font-bold mb-8"
                      data-aos="zoom-y-out"
                      data-aos-delay="150"
                    >
                      Just stake some tokens to earn. High APR, low risk.
                    </p>
                  </div>
                </div>
                {/* Hero image */}
                <div>
                  <div className="relative flex justify-center mb-8">
                    <div className="flex flex-col justify-center">
                      <div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-4">
                        <div className="border-2 border-blue-900 p-2 rounded-2xl lg:w-72 sm:w-48 lg:h-96 sm:h-72  grid grid-rows-9 grid-cols-3 gap-4 shadow-2xl shadow-cyan-500/20">
                          <div className=" pl-1 pt-1">
                            <img
                              className="p-2"
                              src={Waterfall}
                              height="100px"
                              width="100px"
                            />
                          </div>
                          <div className=" col-span-2 p-3 text-right">
                            <h3 className="text-custom-100 font-bold text-2xl tracking-wider">
                              WATERFALL
                            </h3>
                          </div>
                          <div className="p-3" />
                          <div className=" p-3" />
                          <div className=" p-3" />
                          <div className=" p-3" />
                          <div className="  p-3" />
                          <div className=" p-3" />
                          <div className=" p-3" />
                          <div className="  p-3" />
                          <div className=" p-3" />
                        </div>
                        <div className="border-2 border-blue-900 rounded-2xl p-3 w-72 h-96 shadow-2xl shadow-cyan-500/20" />
                        <div className="border-2 border-blue-900 rounded-2xl p-3  w-72 h-96 shadow-2xl shadow-cyan-500/20" />
                        <div className="border-2 border-blue-900 rounded-2xl p-3  w-72 h-96 shadow-2xl shadow-cyan-500/20" />
                        <div className="border-2 border-blue-900 rounded-2xl p-3  w-72 h-96 shadow-2xl shadow-cyan-500/20" />
                      </div>
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
