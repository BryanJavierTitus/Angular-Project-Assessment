export type DataSource =
  | 'Facebook'
  | 'Google'
  | 'Monster Gulf'
  | 'JobsDB'
  | 'Twitter';

export interface User {
  firstName: string;
  lastName: string;
  country: string;
  nationality: string;
  company: string;
  designation: string;
  workExp: number;
  cv: string;
  dataSource: DataSource | string;
  username: string;
  password: string;
}