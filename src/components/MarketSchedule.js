import React from "react";
import Market from "./Market";
// import { getByDisplayValue } from "@testing-library/react";

const masterMarketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ]
//  let now = new Date();
//  let today = day[now.getDay()];
//  for(let i = 0; i < masterMarketSchedule.length; i ++)
//  if (masterMarketSchedule.day === today[i]) {
//  }

 
 
//  console.log(today);
let scheduleView = {
  textAlign: 'center',
  height: "100%"
}
 
 function MarketSchedule(){
   return (
     <React.Fragment>
       <div style= {scheduleView}>
     {masterMarketSchedule.map((market, index) => 
     <Market day = {market.day}
       location = {market.location}
       hours = {market.hours}
       key={index}
       />
       )}
       </div>
       </React.Fragment>
      

       
      //  for(let i = 0; i < masterMarketSchedule.length; i++) {
      //    var displayDay = (masterMarketSchedule.day.getDay([i]));
      //     if(masterMarketSchedule.day[i] === getDay([i]));
      //     return displayDay; 
    
       );
     }

 export default MarketSchedule; 