import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Container = styled.div`
  padding: ${theme.spacing(2)};
  font-family: ${theme.fonts.body};

  h1, h3, h4 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.text};
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: ${theme.spacing(1)};
    text-align: left;
    border-bottom: 1px solid ${theme.colors.light};
  }

  th {
    background: ${theme.colors.primary};
    color: white;
  }

  tr:nth-child(even) {
    background: ${theme.colors.light};
  }
`;
