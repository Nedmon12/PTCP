import React, { useState, useContext, useEffect } from "react";
import Map from "./Map";
import Table, { SelectColumnFilter, StatusPill, LocateCell } from "./Table";
import "./styles.css";
import { MapProvider } from "./map-context";
import { SchoolContext } from "../../../context/schoolState/schoolContext";
import axios from "axios";


export default function  SchoolTable() {
    // const {state} = useContext(SchoolContext)
    // const {users} = state;
    // const {users} = state;
    // const getData = () => {
    //     users
    // }
    const [users,setUsers] = useState([])
    useEffect(() => {
        const fetchSchools = async () => {
          const res = await axios.get("/admin/schools");
          setUsers(res.data);
        };
        fetchSchools();
      }, []);
      const getData = () => users
    const [mapFly, setMapFly] = useState(null);

    const columns = React.useMemo(
      () => [
        {
          Header: "School ID",
          accessor: "_id"
        },
        {
          Header: "School Name",
          accessor: "schoolName"
        },
        {
          Header: "Email",
          accessor: "email",
          Cell: LocateCell,
          posAccessor: "posCoords"
        },
        {
          Header: "Subscription status",
          accessor: "subscriptionStatus",
          Cell: StatusPill
        },
        {
          Header: "Role",
          accessor: "role",
          Filter: SelectColumnFilter,
          filter: "includes"
        }
      ],
      []
    );
  
    const data = React.useMemo(() => getData(), []);
      // console.log("schools pulled ? : "+users)
      // console.log("")
    return (
      <>
        <div className="App" style={{ height: "100%" }}>
          <div className="min-h-screen bg-gray-100 text-gray-900">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="">
                <h1 className="text-xl font-semibold">Find Transmitters</h1>
              </div>
              <div className="mt-4">
                <Table columns={columns} data={data} />
                {/* <Table columns={columns} data={data} map={mapFly} /> */}
              </div>
            </main>
          </div>
        </div>
      </>
    );
}