import { useParams } from "react-router-dom";
import styled from "styled-components";

import BLOG_CONTENT from "../content/blog";
import { Wrapper } from "./Wrapper";

const BlogWrapper = styled.div`
  display: grid;
  align-content: center;
`;

const Text = styled.p`
margin:0;
`

export const BlogPost = () => {
  let { blogId } = useParams();
  const currBlog = BLOG_CONTENT.find((blog) => blog.id === blogId);

  return (
    <BlogWrapper>
      <Wrapper>
        <Text>{currBlog.title}</Text>
        <Text>By: {currBlog.author}</Text>
        <Text>{currBlog.date}</Text>
        {currBlog.content}
      </Wrapper>
    </BlogWrapper>
  );
};
