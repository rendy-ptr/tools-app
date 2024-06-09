import InputForm from "../Fragments/InputForm";

function AuthLayouts(props) {
  const { onLinkSubmit, onResetSubmit } = props;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <InputForm onLinkSubmit={onLinkSubmit} onResetSubmit={onResetSubmit}></InputForm>
    </div>
  );
}

export default AuthLayouts;
