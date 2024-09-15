interface ButtonProps {
  label: string;
  iconURL: string;
}

const Button = ({ label, iconURL }: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border fonr-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <img
        className="ml-2 rounded-full w-5 h-5"
        src={iconURL}
        alt="arrow right icon"
      />
    </button>
  );
};

export default Button;
