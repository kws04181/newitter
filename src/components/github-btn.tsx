import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  margin-top: 50px;
  background: white;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  width: 100%;
  color: black;
  border: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/public/vite.svg" />
      Continue with Github
    </Button>
  );
}
