export interface ProjectModel {
  projectName: string;
  stories: number,
  bugs: number,
  total: number
}

export interface ProjectDropdownModel {
  name: string;
  code: string;
}

export const ProjectDropdownList: ProjectDropdownModel[] = [
  {
    name: 'AZA Project',
    code: 'project1'
  },
  {
    name: 'BNA',
    code: 'project2'
  },
  {
    name: 'Direct Hire PH',
    code: 'project3'
  },
  {
    name: 'Meow Corp.',
    code: 'project4'
  },
  {
    name: 'Project Mochi',
    code: 'project5'
  },
]

export const ProjectList: ProjectModel[] = ProjectDropdownList?.map((p) => ({
  projectName: p.name,
  stories: 0,
  bugs: 0,
  total: 0
}))

export const MonthsList: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const SixMonthsList: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
