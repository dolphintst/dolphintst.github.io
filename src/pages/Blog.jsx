import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import { COLOR_SCHEME } from "../styles";
import BLOG_CONTENT from "../content/blog";
import { Wrapper } from '../components/index'

const BlogWrap = styled.section`
  display: grid;
`;


const ArticleTitle = styled.h3`
  margin: 0;
`;

const Blog = () => {
  
  const navigate = useNavigate();
  const handleReadMoreClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };
  const content = BLOG_CONTENT
    .map((element) => (
      <Wrapper key={element.id}>
        <ArticleTitle>{element.title}</ArticleTitle>
        <p>{element.abstract}</p>
        <Button
          onClick={() => { handleReadMoreClick(element.id) }}
          style={{
            margin: "0",
            backgroundColor: COLOR_SCHEME.BLACK,
            
            width:"8rem",
            padding: "0 1rem",
            color: COLOR_SCHEME.WHITE,
            fontFamily: "Philosopher",
          }}
          >
            Read More
          </Button>
      </Wrapper>
    )
  );

  return (
    <>
      <BlogWrap>
        {content}
      </BlogWrap>
    </>
  );
};

export default Blog;
