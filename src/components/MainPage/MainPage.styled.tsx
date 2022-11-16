import styled from 'styled-components'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as DownArrow } from '../../images/downArrow.svg';
import { ReactComponent as Refresh } from '../../images/refresh.svg';

export const StyledMainPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const StyledTitel = styled.h1`
    font-size: 30px;
    text-decoration: none;
    color: white;
`

export const StyledLogo = styled(Logo)`
    display: block;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    fill: white;
`

export const StyledDownArrow = styled(DownArrow)`
    margin-left: auto;
    margin-right: auto;
    width: 70px;
    height: 35px;
    cursor: pointer;
    fill: #fb6518;
`

export const StyledRefresh = styled(Refresh)`
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fb6518;
    border-radius: 9px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color:black !important;
`

