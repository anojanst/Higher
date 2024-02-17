import { CourseShort } from "./CourseShort";

export type CourseFull = CourseShort & {
  description: string;
  requirement: string;
  fees: string;
};
