import { Link } from "react-router-dom";
import styled from "styled-components";

export const BreadcrumbWrapper = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 1rem;
  list-style: none;
`;

export const BreadcrumbItem = styled.li`
  color: ${({ theme }) => theme.mediumBlack};

  & + & {
    padding-left: 0.5rem;

    &::before {
      float: left;
      padding-right: 0.5rem;
      color: #6c757d;
      content: "/";
    }
  }
`;

export const BreadcrumbItemLink = styled(Link)`
  color: ${({ theme }) => theme.red};
  text-decoration: none;
  line-height: 0.8rem;
  font-weight: 500;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 5px;
    width: 80%;
    height: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.red};
  }
`;
