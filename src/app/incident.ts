export interface Incident{

  id: number,
  title: String,
  shortDescription: String,
  reportDate: Date,
  assignedUser: String,
  category: String,
  severity: String,
  updates: String[],
  isSolved: Boolean
}
