interface Props {
  className?: string;
  type?: string;
  text: string | undefined;
}

export const Button = ({ className, type, text }: Props): JSX.Element => {
  return (
    <button
      className={`px-7 py-0.5 h-14 rounded-lg bg-${
        type === 'primary'
          ? 'japonica-500 text-white'
          : 'white text-shipGray-500 lg:hover:bg-opacity-40 lg:hover:text-white transition-all duration-200'
      } ${className} uppercase text-btn-text font-medium`}>
      {text}
    </button>
  );
};
