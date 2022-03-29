import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import InboxSidebar from "../partials/inbox/InboxSidebar";
import InboxBody from "../partials/inbox/InboxBody";
import Waterfall from "../images/waterfall.png";

function Yields() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inboxSidebarOpen, setInboxSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-900 flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="relative flex">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              {/* Section header */}
              <div className="flex w-screen">
                <div
                  className="box-content h-72 w-3/6 p-6 
                border-2 border-blue-900 rounded shadow-2xl shadow-cyan-500/20"
                >
                  <div className="grid grid-rows-4">
                    <h1 className="text-3xl font-extrabold text-gray-800">
                      Single Stake v2 (3, 3)
                    </h1>
                    <h6 className="text-sm font-extrabold text-gray-800">
                      6 hrs, 30 mins to next rebase
                    </h6>

                    <div className="grid grid-cols-3  text-center">
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
