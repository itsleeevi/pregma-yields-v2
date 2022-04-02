import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function Yields() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00739D",
      },
      secondary: {
        light: "#0066ff",
        main: "#0044ff",
        contrastText: "#ffcc00",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

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
            <div className="max-w mx-auto my-auto px-4 sm:px-6">
              <div className="pb-12 md:pb-20">
                {/* Section header */}
                <div className="text-center pb-12 md:pb-6">
                  <div
                    className="absolute bottom-1/3   left-10 transform -translate-x-1/2  pointer-events-none -z-1 rotate-45"
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
                    className="absolute -top-1/4  transform -translate-x-1/2  pointer-events-none -z-1 rotate-90 "
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
                    className="absolute inset-y-0 top-1/3 -right-80 pointer-events-none -z-1 origin-center rotate-0"
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
                          stroke="#DADADA"
                          stroke-width="2"
                          d="M546 350l59 69-69.088-17.704z"
                          filter="url(#shadow)"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                {/* Hero image */}
                <div>
                  <div className="relative flex justify-center mb-8">
                    <div className="flex flex-col justify-center">
                      <div
                        className="bg-gray-900 box-content lg:h-full lg:w-auto p-8 
                        border-2 border-cyan-500 rounded p-6 shadow-xl shadow-cyan-500/90"
                        data-aos="zoom-in"
                      >
                        <div className="flex flex-col gap-6">
                          <div className="flex flex-col">
                            <h1 className="text-3xl font-extrabold text-gray-800">
                              Single Stake v2 (3, 3)
                            </h1>
                            <div className="flex flex-row gap-1 ">
                              <h6 className="text-xs font-extrabold text-gray-800">
                                6 hrs, 30 mins
                              </h6>

                              <h6 className="text-xs text-gray-800">
                                to next rebase
                              </h6>
                            </div>
                          </div>
                          <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:text-center sm:text-start ">
                            <div>
                              <h1 className="text-2xl text-gray-800 font-medium">
                                APY
                              </h1>
                              <h1 className="text-2xl text-blue-900 font-medium">
                                200.1%
                              </h1>
                            </div>
                            <div>
                              <h1 className="text-2xl text-gray-800 font-medium">
                                Total Value Deposited
                              </h1>
                              <h1 className="text-2xl text-blue-900 font-medium">
                                $60,750,176
                              </h1>
                            </div>
                            <div>
                              <h1 className="text-2xl text-gray-800 font-medium">
                                Current Index
                              </h1>
                              <h1 className="text-2xl text-blue-900 font-medium">
                                8.89 PREGMA
                              </h1>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <>
                              {/* <button
                          className="bg-transparent hover:bg-blue-900 text-custom-100 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-transparent rounded w-1/4 mb-2"
                          onClick={(e) => {
                            e.preventDefault();
                            setConnected(true);
                          }}
                        >
                          Connect Wallet
                        </button>
                        <h6 className="text-xs  text-gray-800">
                          Connect your wallet to stake PREGMA
                        </h6>*/}
                              <div class="text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700">
                                <ThemeProvider theme={theme}>
                                  <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    textColor="#FEFEFE"
                                    indicatorColor="primary"
                                    aria-label="secondary tabs example"
                                  >
                                    <Tab
                                      sx={{
                                        display: "inline",
                                        fontWeight: "medium",
                                        fontSize: 20,
                                        textTransform: "none",
                                      }}
                                      value="one"
                                      icon={
                                        <h1 className="text-custom-100">
                                          Stake
                                        </h1>
                                      }
                                    />
                                    <Tab
                                      sx={{
                                        display: "inline",
                                        fontWeight: "medium",
                                        fontSize: 20,
                                        textTransform: "none",
                                      }}
                                      value="two"
                                      icon={
                                        <h1 className="text-custom-100">
                                          Unstake
                                        </h1>
                                      }
                                    />
                                  </Tabs>
                                </ThemeProvider>
                              </div>
                              <div className="mt-6 flex flex-row w-full">
                                <div className="text-gray-800 text-lg leading-none italic text-center justify-center basis-3/4 w-full">
                                  <p>
                                    First time staking PREGMA? <br /> Please
                                    approve Pregma Yields to use your PREGMA for
                                    staking.
                                  </p>
                                </div>

                                <button
                                  className="basis-1/4 hover:bg-transparent bg-blue-900 text-custom-100 font-semibold hover:text-white px-4 border-2 hover:border-blue-900 border- 2 border-transparent rounded h-auto w-full"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setConnected(true);
                                  }}
                                >
                                  Approve
                                </button>
                              </div>
                              <div className="mt-6 flex flex-col w-full">
                                <div className="flex flex-row w-full justify-between text-xl text-gray-800">
                                  <p>Your Balance</p>
                                  <p>0.0 PREGMA</p>
                                </div>
                                <div className="flex flex-row w-full justify-between text-xl text-gray-800">
                                  <p>Your Staked Balance</p>
                                  <p>0 sPREGMA</p>
                                </div>
                                <div className="flex flex-row w-full justify-between text-xl text-gray-800">
                                  <p>Next Reward Amount</p>
                                  <p>0.0 sPREGMA</p>
                                </div>
                                <div className="flex flex-row w-full justify-between text-xl text-gray-800">
                                  <p>Next Reward Yield</p>
                                  <p>0.0972%</p>
                                </div>
                                <div className="flex flex-row w-full justify-between text-xl text-gray-800">
                                  <p>ROI (5-Day Rate)</p>
                                  <p>1.4692%</p>
                                </div>
                              </div>
                            </>
                          </div>
                        </div>
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

export default Yields;
