// src/components/GridData.js
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./action";
import { useEffect } from "react";
import Grid from "./Grid.css";

const DashboardComponent = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log("data", data);
  return (
    <div className="grid">
      {!!data &&
        data.map((item) => (
          <div key={item.id} className="grid-item">
            <h3>{item.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default DashboardComponent;
