import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { usersContext } from "../usersContext";
const CreateUser = () => {
  const { addUser } = useContext(usersContext);
  const [name, setName] = useState("");
  const [img, setimg] = useState("");
  const [number, setNumber] = useState("");
  function addForm() {
    if (!name || !img || !number) {
      alert("Some inputs are empty!");
      return;
    }

    let newUser = {
      name,
      img,
      number,
    };

    addUser(newUser);

    setName("");
    setimg("");
    setNumber("");
  }
  return (
    <div>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Form.Control
        size="lg"
        type="text"
        placeholder="Img"
        value={img}
        onChange={(e) => setimg(e.target.value)}
      />

      <Form.Control
        size="lg"
        type="text"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={addForm}>CreateUser</button>
    </div>
  );
};

export default CreateUser;
