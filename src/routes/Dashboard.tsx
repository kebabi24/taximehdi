import React, { useState } from "react";
// Theme
import { ColDef } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
// React Grid Logic
import "@ag-grid-community/styles/ag-grid.css";
// Core CSS
import "@ag-grid-community/styles/ag-theme-quartz.css";
import Example from "../components/Example";

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };
  return (
    <div className="flex flex-1 flex-col w-[100%]">
      <div className="flex    bg-white  p-7 shadow shadow-lg  md:w-[100%] ">
        <div className="flex w-[50%] justify-center items-center  ">
          <Example></Example>
        </div>
        <div className="w-[50%] flex justify-end items-end">
          <a className="font-opensans  text-gray800 font-semibold cursor-pointer   text-sm ml-3 self-end">
            Taxi Mehdi (logo)
          </a>
        </div>
      </div>
      <div className="mt-[12px] self-center  bg-white p-4 shadow rounded-xl shadow-lg mb-5 md:w-[95%] w-[100%] ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            <label className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Recherche"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Nom client
                </th>
                <th scope="col" className="px-6 py-3">
                  Numéro de téléphone
                </th>
                <th scope="col" className="px-6 py-3">
                  Point de départ
                </th>
                <th scope="col" className="px-6 py-3">
                  Point d'arrivée
                </th>
                <th scope="col" className="px-6 py-3">
                  Date et heure de départ
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Bébé a bord
                </th>
                <th scope="col" className="px-6 py-3">
                  Note
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {/* <img
                    className="w-10 h-10 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese image"
                  /> */}
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      Kebabi Nouaaim
                    </div>
                    <div className="font-normal text-gray-500">
                      kebabi@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">0773066634</td>
                <td className="px-6 py-4">Alger - Bab ezzouar</td>
                <td className="px-6 py-4">Guelma</td>
                <td className="px-6 py-4">23 Juillet 2024 - 19H30</td>
                <td className="px-6 py-4">Confort</td>
                <td className="px-6 py-4">Non</td>
                <td className="px-6 py-4">Climatiseur</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow me-2"></div>{" "}
                    En attente
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Modifier
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {/* <img
                    className="w-10 h-10 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese image"
                  /> */}
                  <div className="ps-3">
                    <div className="text-base font-semibold">Touati Michou</div>
                    <div className="font-normal text-gray-500">
                      michou@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">0773066634</td>
                <td className="px-6 py-4">Annaba</td>
                <td className="px-6 py-4">Guelma</td>
                <td className="px-6 py-4">15 Septembre 2024 - 19H30</td>
                <td className="px-6 py-4">Simple</td>
                <td className="px-6 py-4">Non</td>
                <td className="px-6 py-4">Calme</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                    Validé
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Modifier
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {/* <img
                    className="w-10 h-10 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese image"
                  /> */}
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      Yazid Bouderbala
                    </div>
                    <div className="font-normal text-gray-500">
                      Bourderbala@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">0773066634</td>
                <td className="px-6 py-4">Aéroport d'alger</td>
                <td className="px-6 py-4">Guelma</td>
                <td className="px-6 py-4">05 aout 2024 - 19H30</td>
                <td className="px-6 py-4">Business</td>
                <td className="px-6 py-4">Oui</td>
                <td className="px-6 py-4">Music</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red me-2"></div>{" "}
                    Refusé
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Modifier
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
