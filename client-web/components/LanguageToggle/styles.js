import styled from 'styled-components';

export const Toggle = styled.button`
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 999px;
  padding: 6px 8px 5px;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`;
