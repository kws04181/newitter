import styled from "styled-components";
import Timeline from "../components/timeline";
import PostTweetForm from "../components/post-tweet-form";

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Wrapper>
      <PostTweetForm />
      <Timeline />
    </Wrapper>
  );
}
