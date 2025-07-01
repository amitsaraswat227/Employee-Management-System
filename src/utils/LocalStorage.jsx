// localStorage.clear();
const employees = [
  {
    id: 1,
    firstname: "Rahul",
    email: "employee1@example.com",
    password: "12345",
    role:"Frontened",
    taskCount: {
      active: 2,
      newtask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        tasktitle: "Prepare project report",
        description: "Compile and format the weekly project report.",
        date: "2025-06-24",
        category: "Documentation",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        tasktitle: "Team meeting",
        description: "Attend and summarize the weekly team meeting.",
        date: "2025-06-22",
        category: "Meeting",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        tasktitle: "Code review",
        description: "Review code submitted by junior devs.",
        date: "2025-06-23",
        category: "Development",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "12345",
     role:"Backened",
    taskCount: {
      active: 2,
      newtask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        tasktitle: "Fix login bug",
        description: "Resolve issue with user login flow.",
        date: "2025-06-21",
        category: "Bugfix",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        tasktitle: "Implement logout",
        description: "Add secure logout to auth system.",
        date: "2025-06-23",
        category: "Development",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        tasktitle: "Write tests",
        description: "Write unit tests for user API.",
        date: "2025-06-24",
        category: "Testing",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        tasktitle: "Debug UI glitch",
        description: "Fix layout issue in mobile view.",
        date: "2025-06-20",
        category: "UI/UX",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstname: "Amit",
    email: "employee3@example.com",
    password: "12345",
     role:"Devops",
    taskCount: {
      active: 1,
      newtask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        tasktitle: "Design dashboard",
        description: "Create wireframe for new dashboard layout.",
        date: "2025-06-25",
        category: "Design",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        tasktitle: "Create icons",
        description: "Design 5 new icons for mobile view.",
        date: "2025-06-22",
        category: "Graphics",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        tasktitle: "Team sync",
        description: "Organize sync call with frontend team.",
        date: "2025-06-21",
        category: "Communication",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstname: "Neha",
    email: "employee4@example.com",
    password: "12345",
     role:"Full Stack",
    taskCount: {
      active: 2,
      newtask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        tasktitle: "Setup CI/CD",
        description: "Configure GitHub Actions for deployment.",
        date: "2025-06-26",
        category: "DevOps",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        tasktitle: "Update dependencies",
        description: "Upgrade outdated npm packages.",
        date: "2025-06-22",
        category: "Maintenance",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        tasktitle: "Database backup",
        description: "Schedule weekly database backup.",
        date: "2025-06-21",
        category: "Database",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      },
      {
        tasktitle: "Create environment config",
        description: "Set up .env for staging environment.",
        date: "2025-06-24",
        category: "Configuration",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstname: "Karan",
    email: "employee5@example.com",
    password: "12345",
     role:"Salesforce",
    taskCount: {
      active: 2,
      newtask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        tasktitle: "Customer feedback analysis",
        description: "Review survey responses for trends.",
        date: "2025-06-23",
        category: "Analysis",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        tasktitle: "QA testing",
        description: "Perform regression testing on new release.",
        date: "2025-06-21",
        category: "QA",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        tasktitle: "Prepare training doc",
        description: "Write onboarding document for new hires.",
        date: "2025-06-25",
        category: "Training",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        tasktitle: "Handle support tickets",
        description: "Resolve pending customer issues.",
        date: "2025-06-22",
        category: "Support",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    
    id: 0,
    email: "admin@example.com",
    password: "12345"
  }
];


export const setLocalstorage=()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalstorage=()=>{
   const employees=JSON.parse(localStorage.getItem('employees'))
   const admin=JSON.parse(localStorage.getItem('admin'))
   return{employees,admin}

}