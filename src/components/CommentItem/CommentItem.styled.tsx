import styled from 'styled-components';
import { ReactComponent as User } from '../../images/user.svg';
import { ReactComponent as DownArrow } from '../../images/downArrow.svg';
import { ReactComponent as UpArrow } from '../../images/upArrow.svg';

export const StyledMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
` 

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
`

export const UserWrapper = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px black solid;
    background-color: #fb6518;
`
export const StyledUser = styled(User)`
    width: 20px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    fill: white;
`

export const StyledUserName = styled.span`
    font-size: 14px;
    margin-left: auto;
    margin-right: auto;
    color: white;
`
export const StyledMessageWrapper = styled.div`
    margin-left: 4px;
    width: 500px;
    height: 100px;
    overflow-y: hidden;
    overflow-x: hidden;
    &:hover{
        overflow-y: scroll;
        overflow-x: scroll;
    }
    &::-webkit-scrollbar {
    width: 8px;
    }
    &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
`

export const StyledMessage = styled.span`
    font-size: 14px;
`

export const StyledDownArrow = styled(DownArrow)`
    width: 20px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    fill: #fb6518;
`

export const StyledUpArrow = styled(UpArrow)`
    width: 20px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    fill: #fb6518;
`

