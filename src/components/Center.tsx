import React, { HTMLAttributes } from 'react';
import styled from "styled-components";

type CenterProps = HTMLAttributes<HTMLDivElement> & CenterStyledProps;

export function Center(props: CenterProps) {
  return (
    <CenterStyled {...props} />
  )
}

type CenterStyledProps = {
  padding_top?: string;
  padding_bottom?: string;
  padding_left?: string;
  padding_right?: string;
  margin_top?: string;
  margin_bottom?: string;
  margin_left?: string;
  margin_right?: string;
};

const CenterStyled = styled.div<CenterProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${(props) => props.padding_top || "0"};
  padding-bottom: ${(props) => props.padding_bottom || "0"};
  padding-left: ${(props) => props.padding_left || "0"};
  padding-right: ${(props) => props.padding_right || "0"};
  margin-top: ${(props) => props.margin_top || "0"};
  margin-bottom: ${(props) => props.margin_bottom || "0"};
  margin-left: ${(props) => props.margin_left || "0"};
  margin-right: ${(props) => props.margin_right || "0"};
`;