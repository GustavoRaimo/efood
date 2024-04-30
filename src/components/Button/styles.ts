import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const BotaoContainer = styled(Link)<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.rosa};
  text-decoration: none;
  font-size: ${(props) => (props.type === 'link' ? '14px' : '12px')};
  cursor: ${(props) => (props.type === 'link' ? 'pointer' : 'default')};
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  padding: 6px 4px;
  font-weight: bold;
  display: inline-block;
`
