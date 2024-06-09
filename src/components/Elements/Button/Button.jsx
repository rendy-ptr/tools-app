const Button = (props) => {
  const { type, children } = props;
  return (
    <button type={type} className="btn btn-neutral mt-5 mr-5">
      {children}
    </button>
  );
};

export default Button;
