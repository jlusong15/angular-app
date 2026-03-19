import { Component } from '@angular/core';
import { RightSidebar } from '@shared/component/right-sidebar/right-sidebar';

@Component({
  selector: 'app-my-tasks',
  imports: [RightSidebar],
  templateUrl: './my-tasks.html',
  styleUrl: './my-tasks.css',
  standalone: true,
})
export class MyTasks {
  // readonly Icons = {
  //   ListFilter,
  //   Crown,
  //   Clock,
  //   CalendarClock,
  //   Rocket
  // };
}
