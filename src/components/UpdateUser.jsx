import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usersContext } from "../usersContext";

const UpdateContact = () => {
  const { getOneUser, oneUser, updateUser } = useContext(usersContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [img, setimg] = useState("");
  const [number, setnumber] = useState("");

  useEffect(() => {
    getOneUser(id);
  }, []);

  useEffect(() => {
    if (oneUser) {
      setName(oneUser.name);
      setimg(oneUser.img);
      setnumber(oneUser.number);
    }
  }, [oneUser]);

  function saveChanges() {
    if (!name || !img || !number) {
      alert("Some inputs are empty!");
      return;
    }

    let editedUser = {
      name,
      img,
      number,
    };

    updateUser(id, editedUser);
    navigate("/contacts");
  }

  return(
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={img}
        onChange={(e) => setimg(e.target.value)}
      />

      <input
        type="text"
        placeholder="number"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
      />

      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

export default UpdateContact;
