import React from "react";
import ContactUsers from "./components/ContactUsers";
import CreateUser from "./components/CreateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersContextProvider from "./usersContext";
import UpdateContact from "./components/UpdateUser";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <UsersContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/create" element={<CreateUser />} />
            <Route path="/contacts" element={<ContactUsers/>}/>
            <Route path="/edit/:id" element={<UpdateContact />} />
          </Routes>
        </BrowserRouter>
      </UsersContextProvider>
    </>
  );
};

export default App;
