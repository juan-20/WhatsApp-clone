import { ReactNode, useContext } from 'react';
import { Container, MainTitle, SecondaryTitle } from './styles';
import { AiOutlineMore, AiOutlineSearch } from 'react-icons/ai'
import { FaCamera } from 'react-icons/fa'
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch'

interface props {
  toggleTheme(): void;
}


function Header({ toggleTheme }: props) {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>

      <MainTitle>
        <h1>WhatsApp</h1>
        <AiOutlineSearch/>
        <AiOutlineMore/>
        <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={true}
            uncheckedIcon={false}
            offColor={colors.titleLight}
            onColor={colors.titleDark}
          />
      </MainTitle>

      <SecondaryTitle>
        <FaCamera/>
        <h2>CONVERSAS</h2>
        <h2>STATUS</h2>
        <h2>CHAMADAS</h2>

      </SecondaryTitle>

    </Container>
  );
};

export default Header;
