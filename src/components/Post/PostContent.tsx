import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 1080px;
  margin: 0 auto;
  padding: 80px 20px;
  word-break: break-all;
  background-color: white;

  // Markdown Style
  font-size: 18px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 700;
  }

  * + h1,
  * + h2,
  * + h3 {
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 50px;
    margin: 40px 0;
  }

  h2 {
    font-size: 45px;
    margin: 35px 0;
  }

  h3 {
    font-size: 40px;
    margin: 30px 0;
  }
  h4 {
    font-size: 35px;
  }
  h5 {
    font-size: 30px;
  }
  h6 {
    font-size: 25px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 700;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    // padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 1096px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    line-height: 1.6;
    font-size: 15px;
    padding: 60px 20px;

    h1 {
      font-size: 34px;
      margin: 20px 0;
    }
    h2 {
      font-size: 30px;
      margin: 15px 0;
    }
    h3 {
      font-size: 26px;
      margin: 10px 0;
    }
    h4 {
      font-size: 22px;
    }
    h5 {
      font-size: 20px;
    }
    h6 {
      font-size: 18px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
