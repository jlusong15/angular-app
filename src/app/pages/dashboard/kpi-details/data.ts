
// Donut Chart Data
export const DonutChartData = {
  data: [90, 10],
  labels: ['Stories', 'Bugs']
}

// Simple Table Data
export const SimpleTableData = {
  data: [{
    projectName: 'Project 1',
    stories: '1,296',
    bugs: '32',
    total: '1,328'
  },
  {
    projectName: 'Project 2',
    stories: '1,296',
    bugs: '32',
    total: '1,328'
  },
  {
    projectName: 'Project 3',
    stories: '1,296',
    bugs: '32',
    total: '1,328'
  },
  {
    projectName: 'Project 4',
    stories: '1,296',
    bugs: '32',
    total: '1,328'
  },
  {
    projectName: 'Project 5',
    stories: '1,296',
    bugs: '32',
    total: '1,328'
  }],
  columns: [
    { field: 'projectName', header: 'Project Name', sortable: true },
    { field: 'stories', header: 'Stories', sortable: false },
    { field: 'bugs', header: 'Bug', sortable: false },
    { field: 'total', header: 'Total' }
  ]
}
