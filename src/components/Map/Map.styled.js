import styled from 'styled-components';

export const StyledMap = styled.div`
  .map__row {
    display: flex;
  }

  .map__cell {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    display: inline-block;
  }

  .map__cell--player {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
  }
`;

export default StyledMap;
