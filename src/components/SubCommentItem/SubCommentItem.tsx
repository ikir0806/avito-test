import React from 'react';
import * as Styled from './SubCommentItem.styled';

type SubCommentItemType = {
    level: number
    author: string
    text: string
}

const SubCommentItem = ({ level, author, text }: SubCommentItemType) => (
    <Styled.StyledSubCommentItemWrapper level={level}>
        <Styled.StyledNickNameWrapper>
            <Styled.StyledUpArrow />
            <Styled.StyledNickName dangerouslySetInnerHTML={{ __html: author}}></Styled.StyledNickName>
        </Styled.StyledNickNameWrapper>
        <Styled.StyledText dangerouslySetInnerHTML={{ __html: text}} level={level}></Styled.StyledText>
    </Styled.StyledSubCommentItemWrapper>
)

export default SubCommentItem;