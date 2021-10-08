import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 34px;
`;

export const Image = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
  border-radius: 50%;
  width: 100%;
  max-width: 302px;
  margin-bottom: 34px;

  @media (min-width: 768px) {
    max-width: 380px;
  }
`;
