export interface AuthorItemProps {
  authorName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddAuthor: () => void;
}
