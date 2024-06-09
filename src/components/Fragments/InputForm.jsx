import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import React, { useState } from "react";

const InputForm = (props) => {
    const { onLinkSubmit, onResetSubmit } = props;

  const [link, setLink] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(link);
    onLinkSubmit(link);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Masukin Link Disini..."
        />
        <Button type="submit">Klik Woi!</Button>
        <Button type="submit" onSubmit={onResetSubmit}>Reset</Button>
      </form>
    </>
  );
};

export default InputForm;
