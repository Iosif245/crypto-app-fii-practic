import styled from "styled-components";

export const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  overflow: hidden;
  justify-content: center;
  gap: 80px;
  padding: 20px;
`;

export const ChartEmptyMessage = styled.div`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.textPrimary};
`;
