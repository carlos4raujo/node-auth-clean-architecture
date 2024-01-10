import { Employee } from "./employee.interface"

export interface Responsive {
  id: string,
  serialNumber: string,
  brand: string,
  model: string,
  type: string,
  comment: string,
  isSigned: string,
  createdAt: string,
  referenceNumbe: string,
  assigner: Employee,
  approver: Employee,
  receiver: Employee,
}