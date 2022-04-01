import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import InboxSidebar from "../partials/inbox/InboxSidebar";
import InboxBody from "../partials/inbox/InboxBody";
import Waterfall from "../images/waterfall.png";
import { ChevronUpIcon } from "@heroicons/react/solid";

function Pools() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inboxSidebarOpen, setInboxSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-900  flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="relative flex">
            <div className="max-w  mx-auto px-4 sm:px-6">
              <div className="pb-12  md:pb-20">
                {/* Section header */}
                <div className="text-center pb-12 md:pb-6 ">
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
                      className="text-2xl text-custom-100 tracking-wide font-bold lg:mb-8"
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
                        <div className="flex flex-col border-2 border-cyan-500 rounded p-6 shadow-xl shadow-cyan-500/90">
                          <div className="flex flex-row justify-between gap-10">
                            <img src={Waterfall} height="60px" width="60px" />
                            <div className="place-end ">
                              <h3 className="text-custom-100 font-bold text-2xl tracking-wider">
                                WATERFALL
                              </h3>
                              <div className="flex flex-row gap-1 justify-end">
                                {/* <div className="bg-transparent text-blue-900 font-medium text-center px-1 border-2 border-blue-900 rounded inline-flex">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                  <span>No Fees</span>
                                </div> */}

                                <div className="bg-gradient-to-t from-blue-900 to-teal-700 text-gray-800 font-bold text-center px-1 rounded">
                                  900x
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between mt-3">
                            <span className="text-custom-100 text-lg tracking-wider">
                              Earn:
                            </span>
                            <span className="text-custom-100 text-lg font-medium tracking-wider">
                              WATERFALL
                            </span>
                          </div>
                          <div className="flex flex-row justify-between">
                            <span className="text-custom-100 text-2xl tracking-wider">
                              Emissions:
                            </span>
                            <span className="text-custom-100 text-2xl  font-medium tracking-wider">
                              Ended
                            </span>
                          </div>
                          <div className="flex flex-row justify-start mt-3">
                            <span className="text-custom-100 text-xs tracking-wider">
                              WATERFALL EARNED
                            </span>
                          </div>
                          <div className="flex flex-row justify-between">
                            <div className="flex flex-col text-center">
                              <span className="text-custom-100 text-2xl tracking-wider">
                                123
                              </span>
                              <span className="text-custom-100 text-xs tracking-wider">
                                ~$123.124 USD
                              </span>
                            </div>
                            <button className="tracking-wider bg-transparent hover:bg-blue-900 text-custom-100 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-transparent rounded">
                              Harvest
                            </button>
                          </div>
                          <div className="flex flex-row justify-start mt-3">
                            <span className="text-custom-100 text-xs tracking-wider">
                              WATERFALL STAKED
                            </span>
                          </div>
                          <div className="flex flex-row justify-center">
                            <button
                              className="mt-1 hover:bg-transparent bg-blue-900 text-custom-100 font-semibold hover:text-white  py-2 px-4 border-2 hover:border-blue-900 border-2 border-transparent rounded"
                              onClick={(e) => {
                                e.preventDefault();
                                setConnected(true);
                              }}
                            >
                              Approve Contract
                            </button>
                          </div>
                          <div className="flex flex-row text-gray-800 justify-center mt-10">
                            <span className="tracking-widest">Details</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              }  max-h-6 max-w-6`}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col border-2 border-blue-900 rounded p-6 shadow-2xl shadow-cyan-500/20" />
                        <div className="flex flex-col border-2 border-blue-900 rounded p-6 shadow-2xl shadow-cyan-500/20" />
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
