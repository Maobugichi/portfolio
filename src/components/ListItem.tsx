interface ListItemProps {
  className?: string;
  img?: React.ReactNode;
  content?: React.ReactNode;
  pointer?: React.ReactNode;
}

const ListItem = ({
  className,
  img,
  content,
  pointer,
}: ListItemProps) => {
  return (
    <li className={className}>
      {img}
      {content}
      {pointer}
    </li>
  );
};

export default ListItem;