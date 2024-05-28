import styled from "styled-components";

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  const clickMonth = (month) => setSelectedMonth(month);

  return (
    <StMonthsSection>
      {MONTHS.map((month) => (
        <StMonthButton
          key={month}
          onClick={() => clickMonth(month)}
          $selected={month === selectedMonth}
        >
          {month}월
        </StMonthButton>
      ))}
    </StMonthsSection>
  );
};

const StMonthsSection = styled.section`
  border: 5px solid #ffe978;
  border-radius: 16px;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const StMonthButton = styled.button`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  height: 50px;
  padding: 10px;
  width: 52px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  background-color: ${(props) => (props.$selected ? "#ffd478;" : "#F6F7FA")};
  color: ${(props) => (props.$selected ? "white" : "black")};

  &:hover {
    color: white;
    background-color: #ffd478;
  }
`;

export default MonthSelector;