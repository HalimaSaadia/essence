

const ButtonPrimary = ({text, width}) => {
    return (
        <button className={`bg-primaryColor  font-semibold text-white py-4 px-8 rounded mt-7 w-${width}`}>{text}</button>
    );
};

export default ButtonPrimary;