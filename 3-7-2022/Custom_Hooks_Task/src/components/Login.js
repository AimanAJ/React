import { useState } from "react";
import Usedata from "./Usedata";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { Email_status, pass__status, check } = Usedata(email, pass);

  return (
    <div class="container" style={{ margin: 200 }}>
      <h1 style={{ marginLeft: 200}}>Login </h1>
      <br />
      <br />
     <form> 
      <div class="mb-3 w-50">
        <label class="form-label" >Email</label>
        <input
          type="email"
          class="form-control"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div class="mb-3 w-50">
        <label class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="**********"
          onChange={(e) => setPass(e.target.value)}
        ></input>
      </div>
      <button type="submit" class="btn btn-primary" onClick={check}>
        Login
      </button>
       </form> 
      <br />
      <br />
      <div>
        <h5>{pass__status}</h5>
      </div>

    </div>
  );
};

export default Login;
