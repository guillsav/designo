interface Props {
  className: string;
  text: string | undefined;
}

export const Heading = ({ className, text }: Props) => {
  return <h3 className={className}>{text}</h3>;
};
