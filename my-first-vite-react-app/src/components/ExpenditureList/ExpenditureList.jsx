import styled from "styled-components";
import ExpenditureItem from "../ExpenditureItem";

const ExpenditureList = ({ itemList, selectedMonth }) => {
  return (
    <StListSection>
      {itemList.filter((item) => item.month === selectedMonth).length === 0 ? (
        <StBlankDiv>지출 내역이 없습니다.</StBlankDiv>
      ) : (
        itemList.map((item) => <ExpenditureItem key={item.id} item={item} />)
      )}
    </StListSection>
  );
};

const StListSection = styled.section`
  border: 5px solid #ffe978;
  border-radius: 15px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StBlankDiv = styled.div`
  text-align: center;
  font-size: 15px;
  color: #000000;
  background-color: #feffee;
  border-radius: 8px;
  padding: 20px;
`;

export default ExpenditureList;