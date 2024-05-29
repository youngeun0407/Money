import { Link } from "react-router-dom";
import styled from "styled-components";

const ExpenditureItem = ({ item }) => {
  const { id, date, category, cost, content } = item;

  return (
    <Link to={`/detail/${id}`} style={StLink}>
      <StItemWrapper>
        <StItemContent>
          <span id="date">{date}</span>
          <span id="content">{`${category} - ${content}`}</span>
        </StItemContent>
        <StItemCost>{`${cost} 원`}</StItemCost>
      </StItemWrapper>
    </Link>
  );
};

const StLink = {
  textDecoration: "none",
};

const StItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: #feffee;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

const StItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  #date {
    margin-bottom: 5px;
    color: gray;
    font-size: 14px;
  }

  #content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    font-size: 16px;
    font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
  font-style: normal;
    color:  #000000;
    font-weight: 600;
  }
`;

const StItemCost = styled.span`
  font-size: 16px;
  color: #000000;
  font-weight: 600;
`;

export default ExpenditureItem;