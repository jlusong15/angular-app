import { Component } from '@angular/core';
import { Breadcrumb } from '@shared/component/breadcrumb/breadcrumb';
import { RightSidebar } from '@shared/component/right-sidebar/right-sidebar';
import { FormSelect } from "@shared/component/form-select/form-select";
import { CircleCheck, LucideAngularModule } from 'lucide-angular';
import { FormDatePicker } from '@shared/component/form-date-picker/form-date-picker';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-my-tasks',
  imports: [RightSidebar, Breadcrumb, FormSelect, FormDatePicker, InputTextModule, TextareaModule, LucideAngularModule],
  templateUrl: './my-tasks.html',
  styleUrl: './my-tasks.css',
  standalone: true,
})
export class MyTasks {
  readonly Icons = {
    CircleCheck
  }
  readonly breadcrumbs = [{ label: 'Tasks' }, { label: 'Add Task' }]
  readonly taskCategoryList = [{ name: 'Story', code: 'story' }, { name: 'Bug', code: 'bug' }, { name: 'Support', code: 'support' }]
  readonly taskNameList = [
    {
      code: "planning",
      name: "Development Planning",
    },
    {
      code: "grooming",
      name: "Backlog Grooming",
    },
    {
      code: "review",
      name: "Sprint Review",
    },
  ]
  readonly groupList = [
    {
      code: "dev",
      name: "Dev Team",
    },
    {
      code: "qa",
      name: "QA Team",
    },
    {
      code: "sr",
      name: "Senior/Lead",
    },
  ]
}
