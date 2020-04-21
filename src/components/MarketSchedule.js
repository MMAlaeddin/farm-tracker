import React from "react";
import Market from "./Market";
import { getByDisplayValue } from "@testing-library/react";

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
 
 function marketSchedule(){
   return (
     <React.Fragment>
     {
       masterMarketSchedule.map((schedule, index) => <Market day = {schedule.day}
       hours = {schedule.hours}
       key={index}/>
       )}
       </React.Fragment>
       
      //  for(let i = 0; i < masterMarketSchedule.length; i++) {
      //    var displayDay = (masterMarketSchedule.day.getDay(i));

      //     return displayDay; 
    
   );

 export default marketSchedule; 