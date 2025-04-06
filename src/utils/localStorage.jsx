

const employees = [{
  
        "id": 1,
        "firstName": "Aarav",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Task 1",
            "taskDescription": "Complete the quarterly report",
            "taskDate": "2025-01-05",
            "category": "Reporting",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Task 2",
            "taskDescription": "Prepare presentation for client",
            "taskDate": "2025-01-06",
            "category": "Presentation",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Task 3",
            "taskDescription": "Schedule team meeting",
            "taskDate": "2025-01-07",
            "category": "Planning",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ],
        "taskNumbers": {
          "active": 2,
          "newTask": 2,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 2,
        "firstName": "Vihaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Task 1",
            "taskDescription": "Update website content",
            "taskDate": "2025-01-05",
            "category": "Content Management",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Task 2",
            "taskDescription": "Fix bugs in the application",
            "taskDate": "2025-01-06",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ],
        "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 3,
        "firstName": "Aditya",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Task 1",
            "taskDescription": "Research competitors",
            "taskDate": "2025-01-05",
            "category": "Market Research",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Task 2",
            "taskDescription": "Draft marketing plan",
            "taskDate": "2025-01-07",
            "category": "Marketing",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Task 3",
            "taskDescription": "Coordinate with vendors",
            "taskDate": "2025-01-08",
            "category": "Logistics",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ],
        "taskNumbers": {
          "active": 2,
          "newTask": 2,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 4,
        "firstName": "Ishaan",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Task 1",
            "taskDescription": "Organize workshop",
            "taskDate": "2025-01-06",
            "category": "Training",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Task 2",
            "taskDescription": "Prepare budget proposal",
            "taskDate": "2025-01-07",
            "category": "Finance",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": true
          }
        ],
        "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 0,
          "failed": 1
        }
      },
      {
        "id": 5,
        "firstName": "Kian",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Task 1",
            "taskDescription": "Conduct user feedback survey",
            "taskDate": "2025-01-05",
            "category": "User Research",
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Task 2",
            "taskDescription": "Update product roadmap",
            "taskDate": "2025-01-06",
            "category": "Product Management",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Task 3",
            "taskDescription": "Review team performance",
            "taskDate": "2025-01-07",
            "category": "HR",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ],
        "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 1
        }
      }
    ]

  const admin = [{
    "id": 1,
    "firstName":"admin",
    "email": "admin@example.com",
    "password": "123"
  }]

  export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))   //this methiod is used to save data inside the localstorage.
    localStorage.setItem('admin',JSON.stringify(admin)) //we don't have to give the data normally as employees . but we have to stringify(convert to string) before passing the data.

  }                                               
  export const getLocalStorage =() => {
    const employees = JSON.parse(localStorage.getItem('employees'))  //JSON.parse converts the data in the form of an array.5
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees , admin}
  }