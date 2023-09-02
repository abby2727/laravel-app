import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick


function Calendar() {

  return (
      <>
          <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
          />
      </>
  );
}

export default Calendar
