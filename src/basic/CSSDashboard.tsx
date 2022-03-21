import styled from 'styled-components';

const StyledP = styled.p`
  user-select: all;
`;

const CSSDashboard = () => {
  const onClick = () => {
    console.log('onClick');
  };
  return (
    <fieldset>
      <legend>CSS</legend>

      <p>Lorem ipsum dolor sit amet.</p>
      <StyledP>user-select: all</StyledP>
    </fieldset>
  );
};
export default CSSDashboard;
