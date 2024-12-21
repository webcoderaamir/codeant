import Layout from "../Components/Layout.tsx";
import {
  ArrowPathIcon,
  CircleStackIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { DataRepo } from "../../data.ts";
import { ChangeEvent, useState } from "react";

const Home = () => {
  const [filteredData, setFilteredData] = useState(DataRepo);

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filtered = DataRepo.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.language.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="bg-white rounded-xl border shadow-sm flex flex-col">



          {/* Header Section */}
          <div className="border-b p-6 space-y-4">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h2 className="text-xl font-semibold">Repositories</h2>
                <p className="text-sm text-gray-600">33 total repositories</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-sm border rounded-md hover:bg-gray-100">
                  <ArrowPathIcon className="w-4 h-4" />
                  Refresh All
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  <PlusIcon className="w-4 h-4" />
                  Add Repository
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 border rounded-md px-3 py-2 w-fit">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              <input
                id="inputSearch"
                placeholder="Search Repositories"
                onChange={handleFilter}
                className="w-[200px] text-sm placeholder-gray-500 outline-none"
              />
            </div>
          </div>
          


          {/* Repository List */}
          <div className="flex flex-col">
            {filteredData.length >= 1 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col p-4 gap-3 hover:bg-gray-50 ${
                    index !== filteredData.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.title}</span>
                    <span className="px-2 text-xs text-blue-600 bg-blue-50 border border-blue-200 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      {item.language}
                      <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                    </span>
                    <span className="flex items-center gap-2">
                      <CircleStackIcon className="w-4 h-4" />
                      {item.size}
                    </span>
                    <span>{item.updatedAt}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col p-4 text-center text-gray-500">
                Looks like there is no repository to show.
              </div>
            )}
          </div>


        </div>
      </div>
    </Layout>
  );
};

export default Home;
