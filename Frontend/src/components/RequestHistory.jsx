import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select, Box, Typography } from "@mui/material";
import "./RequestHistory.css";
import DropdownCommon from "./DropdownCommon";
import CustomInfoCard from "./CustomInfoCard";

const tempHistoryData = [
  {
    date: "2024-06-01",
    items: ["Mobile Phones", "Laptops"],
    weight: "2.5 kg",
  },
  {
    date: "2024-05-15",
    items: ["Televisions"],
    weight: "8.0 kg",
  },
  {
    date: "2024-04-20",
    items: ["Batteries"],
    weight: "1.0 kg",
  },
  // Add more data as needed
];

const filterData = (data, timeFrame) => {
  const now = new Date();
  let filteredData = [];

  switch (timeFrame) {
    case "last_seven_days":
      filteredData = data.filter(
        (item) => (now - new Date(item.date)) / (1000 * 60 * 60 * 24) <= 7
      );
      break;
    case "this_month":
      filteredData = data.filter(
        (item) => new Date(item.date).getMonth() === now.getMonth()
      );
      break;
    case "this_year":
      filteredData = data.filter(
        (item) => new Date(item.date).getFullYear() === now.getFullYear()
      );
      break;
    case "all_time":
    default:
      filteredData = data;
      break;
  }

  return filteredData;
};

const RequestHistory = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("last_seven_days");
  const [filteredData, setFilteredData] = useState([]);
  const [isTimeFrameDropdownOpen, setIsTimeFrameDropdownOpen] = useState(false);

  const timeFrameOptions = [
    { value: "last_seven_days", title: "Last 7 Days" },
    { value: "this_month", title: "This Month" },
    { value: "this_year", title: "This Year" },
    { value: "all_time", title: "All-Time" },
  ];

  useEffect(() => {
    setFilteredData(filterData(tempHistoryData, selectedTimeFrame));
  }, [selectedTimeFrame]);

  return (
    <>
      <DropdownCommon
        className="selection"
        selectedOption={selectedTimeFrame}
        setSelectedOption={setSelectedTimeFrame}
        isDropdownOpen={isTimeFrameDropdownOpen}
        setIsDropdownOpen={setIsTimeFrameDropdownOpen}
        options={timeFrameOptions}
        title="Timeframe"
      />
      <Box sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
        {/* <Typography variant="h4" gutterBottom className="text">
        Request History
      </Typography> */}

        <FormControl fullWidth margin="normal" className="box"></FormControl>
        <div className="BoxStyle">
          <Box className="BoxData">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 2,
                    p: 2,
                    border: "1px solid #ccc",
                    borderRadius: "30px",
                  }}
                >
                  <Typography variant="h6">Date: {item.date}</Typography>
                  <Typography>Items: {item.items.join(", ")}</Typography>
                  <Typography>Weight: {item.weight}</Typography>
                </Box>
              ))
            ) : (
              <Typography>
                No data available for the selected timeframe.
              </Typography>
            )}
          </Box>
        </div>
      </Box>
    </>
  );
};

export default RequestHistory;
