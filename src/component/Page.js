import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(62.93deg, #fc46c9 19.68%, #000fff 89.55%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
