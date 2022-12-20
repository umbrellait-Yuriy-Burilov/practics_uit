import styled from "styled-components";
export const StyledTask = styled.div<{ after: JSX.Element | null }>`
  display: grid;
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
  grid-template-columns: 1fr 50px ${({ after }) => (after ? "auto" : "")};
  gap: 0 8px;
`;

export const TaskLabel = styled.label`
  cursor: pointer;
`;

export const TaskTitle = styled.span<{ state: boolean }>`
  text-decoration: ${({ state = false }) => (state ? "line-through" : "none")};
`;
