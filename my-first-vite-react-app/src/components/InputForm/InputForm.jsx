import { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const InputForm = ({ itemList, setItemList }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState(0);
  const [content, setContent] = useState("");

  // 새로운 지출 내역 추가
  const addExpenseItem = () => {
    if (date.length && category.length && cost !== 0 && content.length) {
      const newItem = {
        id: uuid(),
        date,
        category,
        cost,
        content,
        month: new Date(date).getMonth() + 1,
      };

      setItemList([...itemList, newItem]);
    } else {
      alert("알맞은 지출 양식을 작성해주세요!");
    }
  };

  const changeDateInputValue = (e) => setDate(e.target.value);
  const changeCategoryInputValue = (e) => setCategory(e.target.value);
  const changeCostInputValue = (e) => setCost(e.target.value);
  const changeContentInputValue = (e) => setContent(e.target.value);

  return (
    <StInputSection>
      <StDiv>
        <label htmlFor="input-date">날짜</label>
        <input
          id="input-date"
          type="date"
          placeholder="YYYY-MM-DD"
          min="2024-01-01"
          max="2024-12-31"
          value={date}
          onChange={changeDateInputValue}
        />
      </StDiv>
      <StDiv>
        <label htmlFor="input-category">항목</label>
        <input
          id="input-category"
          type="text"
          placeholder="지출 항목"
          value={category}
          onChange={changeCategoryInputValue}
        />
      </StDiv>
      <StDiv>
        <label htmlFor="input-cost">금액</label>
        <input
          id="input-cost"
          type="number"
          placeholder="지출 금액"
          value={cost}
          onChange={changeCostInputValue}
        />
      </StDiv>
      <StDiv>
        <label htmlFor="input-content">내용</label>
        <input
          id="input-content"
          type="text"
          placeholder="지출 내용"
          value={content}
          onChange={changeContentInputValue}
        />
      </StDiv>
      <StInputButton onClick={addExpenseItem}>저장</StInputButton>
    </StInputSection>
  );
};

const StInputSection = styled.section`
  border: 2px solid #ffe978;
  border-radius: 16px;
  padding: 20px;

  display: flex;
  gap: 10px;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;

  label {
    font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
  font-style: normal;
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    padding: 8px;
    border: 1px solid #ffe978;
    border-radius: 4px;
    font-size: 14px;
    font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
  font-style: normal;
  }
`;

const StInputButton = styled.button`
  padding: 8px 20px;
  height: 34px;
  background-color: #ffe978;
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
  margin-top: auto;
  margin-bottom: 2px;

  &:hover {
    background-color:  #ffd478;
  }
`;

export default InputForm;