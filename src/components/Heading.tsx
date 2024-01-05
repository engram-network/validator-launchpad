import styled from 'styled-components';
import { Heading as H } from 'grommet';

export const Heading = styled(H)`
  font-family: 'Sora', sans-serif;
  color: ${p => (p.color ? p.color : p.theme.blue.dark)};
  margin: 0;
  display: block;
  text-align: ${(p: { center?: boolean }) => p.center && 'center'};
  max-width: inherit;
`;
