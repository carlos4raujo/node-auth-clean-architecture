export interface Employee {
  id: string,
  name: string,
  email: string,
  employeeNumber: string,
  boss: Employee,
  location: {
    id: string
    name: string,
  },
  position: {
    id: string
    name: string,
  },
}