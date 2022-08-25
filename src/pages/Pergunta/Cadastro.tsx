import { AppContainer } from '../../components/Containers/AppContainer';
import { Flex } from '../../components/Containers/Flex';

export default function Cadastro() {
  return (
    <AppContainer>
      <Flex
        flexDirection="column"
        paddingTop="30px"
        paddingBottom="10px"
        paddingLeft="20px"
        paddingRight="20px"
      >
        <h1>Cadastro</h1>
      </Flex>
    </AppContainer>
  );
}
