"use client";

import { useState } from "react";
import PendingTable from "./PendingTable";
import ApprovedTable from "./ApprovedTable";

const Timelogs = () => {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <>
      <h1>Timlogs</h1>
      {/* Search */}
      {/* <div className="w-full pb-4">
                <div className="flex justify-end gap-2">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    </div>
                    <input
                    type="search"
                    id="table-search"
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    />
                </div>
                </div>
            </div> */}
      {/* Tabs */}
      {/* <div className="bg-white sm:rounded-lg shadow"> */}
      {/* Tab buttons */}
      {/* <div className="mb-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 sm:rounded-t-lg">
                    <ul className="flex flex-wrap -mb-px text-md font-medium text-center justify-center">
                        <li className="mr-2" onClick={() => setActiveTab('pending')}>
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                    activeTab === 'pending' ? 'border-blue-700 text-blue-700 border-b-4' : 'border-transparent'
                                }`}
                            >
                                PENDING
                            </button>
                        </li>
                        <li className="mr-2" onClick={() => setActiveTab('approved')}>
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                    activeTab === 'approved' ? 'border-blue-700 text-blue-700 border-b-4' : 'border-transparent'
                                }`}
                            >
                                APPROVED
                            </button>
                        </li>
                    </ul>
                </div> */}
      {/* Tab Content */}
      {/* <div>
                    <div className={`p-0 ${activeTab === 'pending' ? '' : 'hidden'}`}>
                        <PendingTable />
                    </div>
                    <div className={`p-0 ${activeTab === 'approved' ? '' : 'hidden'}`}>
                        <ApprovedTable />
                    </div>
                </div>
            </div> */}
    </>
  );
};

export default Timelogs;
