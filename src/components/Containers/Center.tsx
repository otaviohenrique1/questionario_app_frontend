import { HTMLAttributes } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";

type CenterProps = HTMLAttributes<HTMLDivElement>;

export function Center(props: CenterProps) {
  return (
    <CenterStyled {...props} flexDirection="column" alignItems="center" justifyContent="center" />
  )
}

const CenterStyled = styled(Flex)`
  width: 100%;
  height: 100%;
`;