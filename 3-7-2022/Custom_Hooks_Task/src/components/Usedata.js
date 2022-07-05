import { useState } from "react";

const Usedata = (Email, Password) => {
  const [Defaule_Email, setEmail] = useState("aiman@gmail.com");
  const [Default_Password, setPass] = useState("12345");
  const [Email_status, setEmail_status] = useState("Invalid Email");
  const [pass__status, setpass__status] = useState(
    "Enter your Email and passsword"
  );
  const check = () => {
    if (Email == Defaule_Email) {

      if (Password == Default_Password) {
        setpass__status("Login Success");
      } 
      
      if(Password != Default_Password) {
        setpass__status("Invalid Password");
      }


    } else if (Password == Default_Password) {
      setpass__status("Invalid Email");
    } else {
      setpass__status("Invalid Email and Password");
    }
  };

  return { Email_status, pass__status, check };
};

export default Usedata;
