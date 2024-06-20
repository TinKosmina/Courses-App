export interface CourseInfoProps {
  id?: string;
  title?: string;
  description?: string;
  creationDate?: string;
  duration?: number;
  authors?: string;
  onBack?: () => void;
}
