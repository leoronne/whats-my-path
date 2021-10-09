import styled from 'styled-components';

interface TypographyProps extends ThemeProps {
  color_scheme: 'accent' | 'light' | 'dark' | 'none';
}

export const Title = styled.h1<TypographyProps>`
  color: ${({ theme, color_scheme }: TypographyProps) => theme.colors[color_scheme].text};
  ${({ theme }: TypographyProps) => theme.typography.h1};
`;

export const Caption = styled.h2<TypographyProps>`
  color: ${({ theme, color_scheme }: TypographyProps) => theme.colors[color_scheme].text};
  ${({ theme }: TypographyProps) => theme.typography.h2};
`;

export const SubTitle = styled.h6<TypographyProps>`
  color: ${({ theme, color_scheme }: TypographyProps) => theme.colors[color_scheme].text};
  ${({ theme }: TypographyProps) => theme.typography.h6};
`;

export const Text = styled.span`
  font-size: 18px;
  line-height: 22px;
  padding: 0 5px 0 10px;
`;
