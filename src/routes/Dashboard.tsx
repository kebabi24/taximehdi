// Theme
import { ColDef, ValueFormatterParams } from "ag-grid-community";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
// React Grid Logic
import "ag-grid-community/styles/ag-grid.css";
// Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import Example from "../components/Example";

/* Custom Cell Renderer (Display tick / cross in 'Successful' column) */
const MissionResultRenderer = (params: CustomCellRendererProps) => (
  <span
    style={{
      display: "flex",
      justifyContent: "center",
      height: "100%",
      alignItems: "center",
    }}
  >
    {
      <img
        alt={`${params.value}`}
        src={`https://www.ag-grid.com/example-assets/icons/${
          params.value ? "tick-in-circle" : "cross-in-circle"
        }.png`}
        style={{ width: "auto", height: "auto" }}
      />
    }
  </span>
);

/* Format Date Cells */
const dateFormatter = (params: ValueFormatterParams): string => {
  return new Date(params.value).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Row Data Interface
interface IRow {
  client: string;
  phone: string;
  depart: string;
  arrivy: string;
  time: string;
  type: string;
  baby: string;
  note: string;
  state: string;
  action: string;
}

// Create new GridExample component
const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState<ColDef[]>([
    {
      field: "concatenatedField",
      valueGetter: (params) => {
        // Assuming 'athlete' and 'firstName' are fields in your data
        return `${params.data.__user__.firstName} ${params.data.__user__.lastName}`;
      },
      width: 150,
      checkboxSelection: true,
      headerName: "Nom client",
    },
    {
      field: "__user__.phone",
      width: 150,
      // cellRenderer: CompanyLogoRenderer,
      headerName: "Numéro de téléphone",
    },
    {
      field: "departure",
      width: 170,
      headerName: "Point de départ",
    },
    {
      field: "destination",
      width: 170,
      headerName: "Point d'arrivé",
    },
    {
      field: "departureTime",
      width: 180,
      headerName: "Date et heure de départ",
    },
    {
      field: "type",
      width: 120,
      // cellRenderer: MissionResultRenderer,
      headerName: "Type",
    },
    {
      field: "onBoard",
      width: 120,
      // cellRenderer: MissionResultRenderer,
      headerName: "Bébé a bord",
    },
    {
      field: "tripNote",
      width: 120,
      // cellRenderer: MissionResultRenderer,
      headerName: "Note",
    },
    {
      field: "status",
      width: 120,
      cellRenderer: MissionResultRenderer,
      headerName: "Status",
    },
    {
      field: "Action",
      width: 120,
      // cellRenderer: MissionResultRenderer,
      headerName: "Action",
    },
  ]);

  // Fetch data & update rowData state
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/trips/getAllTrips")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  // Apply settings across all columns
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      filter: true,
      // editable: true,
    };
  }, []);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "100%", height: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        // rowSelection="multiple"
        onSelectionChanged={(event) => console.log("Row Selected!")}
        // onCellValueChanged={(event) =>
        //   console.log(`New Cell Value: ${event.value}`)
        // }
      />
    </div>
  );
};
const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-1 flex-col w-[100%]">
      <div className="flex    bg-white  p-7 shadow shadow-lg  md:w-[100%] mb-5">
        <div className="flex w-[50%] justify-center items-center  ">
          <Example></Example>
        </div>
        <div className="w-[50%] flex justify-end items-end">
          <a className="font-opensans  text-gray800 font-semibold cursor-pointer   text-sm ml-3 self-end">
            Taxi Mehdi (logo)
          </a>
        </div>
      </div>

      <div
        style={{
          width: "95%",
          height: "600px",
        }}
        className="flex self-center"
      >
        <GridExample />
      </div>
    </div>
  );
};

export default Dashboard;
