const BASE_URL = '';

const API_TYPE = Object.freeze({
  LOGIN: 'login',
  USERS: 'users',
  ISSUES: 'issues',
  COMMENTS: 'comments',
  LABELS: 'labels',
  MILESTONES: 'milestones',
});

const LOGIN = Object.freeze({
  POST_LOGIN: `${BASE_URL}/${API_TYPE.LOGIN}`,
});

const USERS = Object.freeze({
  GET_ALL_USERS: `${BASE_URL}/${API_TYPE.USERS}`,
  GET_USER_IMG: (userId) => `${BASE_URL}/${API_TYPE.USERS}/${userId}`,
});

const ISSUES = Object.freeze({
  GET_ALL_ISSUES: `${BASE_URL}/${API_TYPE.ISSUES}`,
  GET_ISSUE: (issueId) => `${BASE_URL}/${API_TYPE.ISSUES}/${issueId}`,
  PATCH_ISSUE: (issueId) => `${BASE_URL}/${API_TYPE.ISSUES}/${issueId}`,
  DELETE_ISSUE: (issueId) => `${BASE_URL}/${API_TYPE.ISSUES}/${issueId}`,
  POST_ISSUE: `${BASE_URL}/${API_TYPE.ISSUES}`,
});

const COMMENTS = Object.freeze({
  GET_ALL_COMMENTS: (issueId) => `${BASE_URL}/${API_TYPE.ISSUES}/${issueId}/${API_TYPE.COMMENTS}`,
  PATCH_COMMENT: (issueId, commentId) => {
    return `${BASE_URL}/${API_TYPE.ISSUES}/${issueId}/${API_TYPE.COMMENTS}/${commentId}`;
  },
  DELETE_COMMENT: (issueId, commentId) => {
    return `${BASE_URL}/${API_TYPE.ISSUES}/${issueId}/${API_TYPE.COMMENTS}/${commentId}`;
  },
  POST_COMMENT: (issueId) => {
    return `${BASE_URL}/${API_TYPE.ISSUES}/${issueId}/${API_TYPE.COMMENTS}`;
  },
});

const LABELS = Object.freeze({
  GET_ALL_LABELS: `${BASE_URL}/${API_TYPE.LABELS}`,
  POST_LABEL: `${BASE_URL}/${API_TYPE.LABELS}`,
  PATCH_LABEL: (labelId) => `${BASE_URL}/${API_TYPE.LABELS}/${labelId}`,
  DELETE_LABEL: (labelId) => `${BASE_URL}/${API_TYPE.LABELS}/${labelId}`,
});

const MILESTONES = Object.freeze({
  GET_ALL_MILESTONES: `${BASE_URL}/${API_TYPE.MILESTONES}`,
  POST_MILESTONE: `${BASE_URL}/${API_TYPE.MILESTONES}`,
  PATCH_MILESTONE: (milestoneId) => `${BASE_URL}/${API_TYPE.MILESTONES}/${milestoneId}`,
  DELETE_MILESTONE: (milestoneId) => `${BASE_URL}/${API_TYPE.MILESTONES}/${milestoneId}`,
});

export { LOGIN, USERS, ISSUES, COMMENTS, LABELS, MILESTONES };
