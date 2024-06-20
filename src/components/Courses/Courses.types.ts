export interface CoursesProps {
  courses: {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
  }[];
  authorsList: { id: string; name: string }[];
  onCourseClick: (courseId: string) => void;
}
