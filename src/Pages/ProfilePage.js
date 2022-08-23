import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const signoutHandler = () => {
    localStorage.setItem("authState", null);
    navigate("/");
  };
  return <button onClick={signoutHandler}>signout</button>;
};

export default ProfilePage;
