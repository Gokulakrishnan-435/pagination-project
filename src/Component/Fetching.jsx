import React, { useState, useEffect } from "react";
import axios from "../Axios/axios";
import ReactPaginate from "react-paginate";
const Fetching = () => {
  let [state, setState] = useState([]);
  let [pageNum, setPageNum] = useState(0);
  let perPage = 10;
  let visited = perPage * pageNum;
  let displayData = state.slice(visited, visited + perPage).map(val => (
    <table>
      <tr>{val.id}</tr>
      <tr>{val.title}</tr>
    </table>
  ));

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axios.get("/todos");
      let fetch = await data.json;
      console.log(fetch);
      try {
        setState(data);
      } catch (error) {}
    };

    fetchData();
  }, [state]);
  return (
    <div>
      {displayData}
          <ReactPaginate
              nextLabel={"next"}
              previousLabel={"previous"}
              
          />
    </div>
  );
};

export default Fetching;
