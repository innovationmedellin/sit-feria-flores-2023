import styled from 'styled-components'

export const HeadlineText = styled.h2`
  width: ${({ width }) => width || 'auto'};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.md};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  font-family: ${({ fontFamily }) => fontFamily}, sans-serif;
  color: ${({ theme, color }) => color || theme.colors.white};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  text-transform: ${({ textTransform }) => textTransform || 'none'};
  line-height: ${({ lineHeight }) => `calc(${lineHeight} + 8px)` || '1.5'};
  border-bottom: ${({ border, theme }) =>
    border ? `2px solid ${theme.colors.lightGray}` : 'none'};
  text-shadow: ${({ theme, textShadow }) =>
    textShadow ? theme.textShadow : 'none'};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
    text-align: ${({ mobileAlignment }) => mobileAlignment || 'left'};
  }
`