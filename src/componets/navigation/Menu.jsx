import { useState, useRef, useEffect } from "react"
import styled from "styled-components"

const Dots = styled.img`
  cursor: pointer;
`
const StyledMenu = styled.div`
  width: 200px;
  position: absolute;
  right: 0;
  box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);

  background-color: ${props => props.theme.white};

  display: ${props => props.show ? 'block' : 'none'};
`
const StylesOption = styled.div`
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.inputBackground}
  }
`

const StyledContainerMenu = styled.div`
  position: relative;
`

function Menu({ options = [] }) {
  const [show, setShow] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setShow(false)
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [menuRef])

  return (
    <StyledContainerMenu>
      <Dots src="/three-dots.svg" height="20px" onClick={() => setShow(!show)} />
      <StyledMenu show={show} ref={menuRef} onBlur={() => setShow(false)} >
        {
          options.map((option, pos) =>
            <StylesOption
              key={`menu-option-${pos}`}
              onClick={option.onClick}
            >
              {option.text}
            </StylesOption>
          )
        }
      </StyledMenu>
    </StyledContainerMenu>
  )
}

export default Menu