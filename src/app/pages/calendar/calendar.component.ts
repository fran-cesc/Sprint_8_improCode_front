import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventSourceInput } from '@fullcalendar/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, CalendarComponent, FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent{

  eventsPromise?: Promise<EventSourceInput>;

  calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
  plugins: [dayGridPlugin, interactionPlugin],
  events: [
    { title: 'Marató', date: '2023-12-23' },
    { title: 'Sant Silvestre 10K', date: '2023-12-31' }
  ]
  };


  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
    console.log (arg);
    console.log (arg.dateStr);
  }


}
