import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

import Waterfall from "../images/waterfall.png";
import { ChevronUpIcon } from "@heroicons/react/solid";

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
            <div className="max-w mx-auto px-4 sm:px-6">
              <div className="pb-12 md:pb-20">
                {/* Section header */}
                <div className="text-center pb-12 md:pb-6">
                  <div
                    className="absolute right-1/4 top-1/3 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
                    aria-hidden="true"
                  >
                    <svg
                      width="1056"
                      height="792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <filter id="shadow">
                          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                          <feOffset dx="0" dy="0" result="offsetblur" />
                          <feFlood flood-color="#0DB6D4" />
                          <feComposite in2="offsetblur" operator="in" />
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <linearGradient id="grad3">
                          <stop offset="20%" stop-color="#06B6D4" />
                          <stop offset="80%" stop-color="#00739D" />
                        </linearGradient>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <path
                          filter="url(#shadow)"
                          fill="#DADADA"
                          d="M324 411v107.999l-108 48.085L323.999 411z"
                        />
                        <path
                          fill="url(#grad3)"
                          d="M581.649 279.235l-102.49-34.373 124.272-74.407z"
                        />
                        <path
                          filter="url(#shadow)"
                          d="M729.866 411.103l15.25 21.253 1.397-.522-.728 1.453.344.48-.719.268-52.076 104.006.466.65-.66-.264-.71 1.417-.715-.287-110.281-44.182-.296.11-.231-.323-1.783-.713 1.001-.374-15.25-21.254 3.236-1.21-.23-.318.522.208 161.463-60.398zm-2.426 2.619l14.046 20.134 2.012-.796-14.045-20.134-2.013.796zm-2.18.782L570.506 472.59l32.362 12.95 56.771-21.309 50.138-18.818 15.485-30.908zm1.562 1.598l-13.893 27.941 27.145-9.79-13.252-18.151zM677.53 515.17l14.155 19.744 49.119-98.07-29.6 11.096-33.674 67.23zm30.672-66.603L607.227 486.73l68.18 27.21 32.795-65.373zm-103.025 39.08l-17.345 6.647 66.366 26.343 35.07 13.92-13.35-18.83-70.741-28.08zm-32.174-13.005l12.344 17.486 16.115-6.228-28.46-11.258zm-5.225-.719l14.55 19.77 1.596-.566-14.551-19.77-1.595.566z"
                          fill="#DADADA"
                        />
                        <path
                          filter="url(#shadow)"
                          stroke="#DADADA"
                          stroke-width="2"
                          d="M546 350l59 69-69.088-17.704z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    className="absolute left-4/7 bottom-1/3 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
                    aria-hidden="true"
                  >
                    <svg
                      width="1056"
                      height="792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <filter id="shadow">
                          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                          <feOffset dx="0" dy="0" result="offsetblur" />
                          <feFlood flood-color="#0DB6D4" />
                          <feComposite in2="offsetblur" operator="in" />
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <linearGradient id="grad3">
                          <stop offset="20%" stop-color="#06B6D4" />
                          <stop offset="80%" stop-color="#00739D" />
                        </linearGradient>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <path
                          filter="url(#shadow)"
                          stroke="#DADADA"
                          stroke-width="2"
                          d="M546 350l59 69-69.088-17.704z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    className="absolute inset-y-0 -right-80 pointer-events-none -z-1 origin-center rotate-90"
                    aria-hidden="true"
                  >
                    <svg
                      width="1056"
                      height="1092"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <filter id="shadow">
                          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                          <feOffset dx="0" dy="0" result="offsetblur" />
                          <feFlood flood-color="#0DB6D4" />
                          <feComposite in2="offsetblur" operator="in" />
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <linearGradient id="grad3">
                          <stop offset="20%" stop-color="#06B6D4" />
                          <stop offset="80%" stop-color="#00739D" />
                        </linearGradient>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="url(#grad3)"
                          d="M324 411v107.999l-108 48.085L323.999 411z"
                        />
                        <path
                          fill="url(#grad3)"
                          d="M581.649 279.235l-102.49-34.373 124.272-74.407z"
                        />
                        <path
                          d="M729.866 411.103l15.25 21.253 1.397-.522-.728 1.453.344.48-.719.268-52.076 104.006.466.65-.66-.264-.71 1.417-.715-.287-110.281-44.182-.296.11-.231-.323-1.783-.713 1.001-.374-15.25-21.254 3.236-1.21-.23-.318.522.208 161.463-60.398zm-2.426 2.619l14.046 20.134 2.012-.796-14.045-20.134-2.013.796zm-2.18.782L570.506 472.59l32.362 12.95 56.771-21.309 50.138-18.818 15.485-30.908zm1.562 1.598l-13.893 27.941 27.145-9.79-13.252-18.151zM677.53 515.17l14.155 19.744 49.119-98.07-29.6 11.096-33.674 67.23zm30.672-66.603L607.227 486.73l68.18 27.21 32.795-65.373zm-103.025 39.08l-17.345 6.647 66.366 26.343 35.07 13.92-13.35-18.83-70.741-28.08zm-32.174-13.005l12.344 17.486 16.115-6.228-28.46-11.258zm-5.225-.719l14.55 19.77 1.596-.566-14.551-19.77-1.595.566z"
                          fill="#DADADA"
                          filter="url(#shadow)"
                        />
                        <path
                          filter="url(#shadow)"
                          stroke="#DADADA"
                          stroke-width="2"
                          d="M546 350l59 69-69.088-17.704z"
                        />
                      </g>
                    </svg>
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
                  <div className="relative flex justify-center mb-8">
                    <div className="flex flex-col justify-center">
                      <div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-4">
                        <div
                          className="bg-gray-900 flex flex-col border-2 border-cyan-500 rounded p-6 shadow-xl shadow-cyan-500/90"
                          data-aos="zoom-in"
                        >
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
                        <div
                          className="bg-gray-900 flex flex-col border-2 border-blue-900 rounded p-6 shadow-2xl shadow-cyan-500/20"
                          data-aos="zoom-in"
                        />
                        <div
                          className="bg-gray-900 flex flex-col border-2 border-blue-900 rounded p-6 shadow-2xl shadow-cyan-500/20"
                          data-aos="zoom-in"
                        />
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
