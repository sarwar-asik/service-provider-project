import React from 'react';
import { toast } from 'react-toastify';

const AuthToken = (user) => {


    const currentUser = {
        email: user.email,
      };


      fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })

      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //////// local storage is not best for jwt but easy .
  
        localStorage.setItem("Sh-travel-token", data.token);
        toast("added token");
  
      });

};

export default AuthToken;