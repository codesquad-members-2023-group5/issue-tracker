import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getTimeDifference } from '../../../../../utils/time';

import useFetch from '../../../../../hooks/useFetch';
import { COMMENTS } from '../../../../../constants/api';

import Button from '../../../../common/Button';
import Icon from '../../../../common/Icon';
import Label from '../../../../common/Label';
import TextArea from '../../../../common/TextArea';
import {
  $Comment,
  $CommentHeader,
  $UserInfo,
  $HeaderButtons,
  $HeaderButton,
  $CommentText,
  $UserImg,
  $UserName,
  $CommentTime,
  $Buttons,
  $DeleteButton,
} from './style';

// TODO: 내 userId -> context로 빼기.
const myId = 6;

const Comment = ({ writerId, commentData, getNewIssueData, issueId }) => {
  const isMine = commentData.commentUser.userId === myId;
  const [isEdited, setIsEdited] = useState(false);
  const [tempComment, setTempComment] = useState(commentData.content);

  const [files, setFiles] = useState([]);

  const { fetchData: patchComment } = useFetch(
    COMMENTS.PATCH_COMMENT(issueId, commentData.commentId),
    'PATCH',
    {
      content: tempComment,
    },
    true,
  );

  const { fetchData: deleteComment } = useFetch(
    COMMENTS.DELETE_COMMENT(issueId, commentData.commentId),
    'DELETE',
    {},
    true,
  );

  const commentEditHandler = ({ target }) => {
    setTempComment(target.value);
  };

  const editBtnHandler = () => {
    setIsEdited(true);
  };

  const cancelEditBtnHandler = () => {
    setIsEdited(false);
    setTempComment(commentData.content);
  };

  const completeEditHandler = async () => {
    await patchComment();
    getNewIssueData();
    setIsEdited(false);
  };

  const deleteBtnHandler = async () => {
    await deleteComment();
    getNewIssueData();
    setIsEdited(false);
  };

  const filesUploadHandler = ({ target }) => {
    setFiles([...target.files]);
  };

  return (
    <>
      <$Comment>
        <$CommentHeader>
          <$UserInfo>
            <$UserImg src={commentData.commentUser.url} />
            <$UserName>{commentData.commentUser.name}</$UserName>
            <$CommentTime>{getTimeDifference(commentData.createdAt)}</$CommentTime>
          </$UserInfo>

          <$HeaderButtons>
            {writerId === commentData.commentUser.userId && (
              <Label height={32} backgroundColor="#D9DBE9" fontColor="dark" name="작성자" />
            )}
            {isMine && (
              <React.Fragment>
                <$DeleteButton onClick={deleteBtnHandler}>
                  <Icon name="xSquare" fill="#FF3B30" />
                  <p>삭제</p>
                </$DeleteButton>
                <$HeaderButton onClick={editBtnHandler}>
                  <Icon name="edit" />
                  <p>편집</p>
                </$HeaderButton>
              </React.Fragment>
            )}
            <$HeaderButton>
              <Icon name="smile" />
              <p>반응</p>
            </$HeaderButton>
          </$HeaderButtons>
        </$CommentHeader>
        {isEdited ? (
          <TextArea
            id="commentEdit"
            value={tempComment}
            onChange={commentEditHandler}
            size="S"
            files={files}
            filesUploadHandler={filesUploadHandler}
          />
        ) : (
          <$CommentText>{commentData.content}</$CommentText>
        )}
      </$Comment>
      {isEdited && (
        <$Buttons>
          <Button type="outline" size="S" onClick={cancelEditBtnHandler}>
            <Icon name="xSquare" />
            <p>편집 취소</p>
          </Button>
          <Button type="contained" size="S" onClick={completeEditHandler}>
            <Icon name="edit" fill="#FEFEFE" />
            <p>편집 완료</p>
          </Button>
        </$Buttons>
      )}
    </>
  );
};

Comment.propTypes = {
  // isMine: PropTypes.bool.isRequired,
  issueId: PropTypes.number.isRequired,
  commentData: PropTypes.object.isRequired,
  writerId: PropTypes.number.isRequired,
  getNewIssueData: PropTypes.func.isRequired,
};

export default Comment;
