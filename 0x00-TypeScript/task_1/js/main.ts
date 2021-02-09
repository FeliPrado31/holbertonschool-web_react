/* Task 1 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [propName: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

// Task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3
/* eslint-disable @typescript-eslint/class-name-casing */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printFullName(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

export const printTeacher: printTeacherFunction = printFullName;
/* eslint-enable @typescript-eslint/class-name-casing */
