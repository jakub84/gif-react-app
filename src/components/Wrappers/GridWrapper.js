import styled from 'styled-components';

const GridWrapper = styled.div`
  width: 100%;
  /* max-width: 1238px; */
  /* padding: 0 34px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: ${props => (props.flexWrap ? 'wrap' : 'nowrap')};
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  z-index: 10;
  position: relative;
`;
export default GridWrapper;
