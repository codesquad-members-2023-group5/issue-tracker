import { rest } from 'msw';

import { LOGIN, USERS, ISSUES, COMMENTS, LABELS, MILESTONES } from '../constants/api';
// import {
//   mockIssuesData,
//   mockUserImageData,
//   mockUserData,
//   mockLabelData,
//   mockMilestoneData,
//   mockIssueDetailData,
//   issueDetailData,
// } from './mockData';
import { mockUserImageData } from './mockData';

const getIssues = (request, response, context) => {
  const mockIssuesData = JSON.parse(localStorage.getItem('issueDetailData'));
  const body = {
    data: {
      issues: mockIssuesData,
    },
  };

  return response(context.status(200), context.json(body));
};

const getUserImage = (request, response, context) => {
  const { userId } = request.params;

  return response(context.status(200), context.json(mockUserImageData(Number(userId))));
};

const getUserData = (request, response, context) => {
  const mockUserData = JSON.parse(localStorage.getItem('mockUserData'));

  return response(context.status(200), context.json(mockUserData));
};

const getLabelData = (request, response, context) => {
  const mockLabelData = JSON.parse(localStorage.getItem('mockLabelData'));

  return response(context.status(200), context.json(mockLabelData));
};

const getMilestoneData = (request, response, context) => {
  const mockMilestoneData = JSON.parse(localStorage.getItem('mockMilestoneData'));

  return response(context.status(200), context.json(mockMilestoneData));
};

const getIssueDetailData = (request, response, context) => {
  const { issueId } = request.params;
  const issueDetailData = JSON.parse(localStorage.getItem('issueDetailData'));

  const targetData = issueDetailData.filter((issue) => issue.issueId === Number(issueId))[0];

  const data = {
    data: targetData,
  };

  return response(context.status(200), context.json(data));
};

const postNewIssueData = (request, response, context) => {
  const issueDetailData = JSON.parse(localStorage.getItem('issueDetailData'));
  const mockUserData = JSON.parse(localStorage.getItem('mockUserData'));
  const mockMilestoneData = JSON.parse(localStorage.getItem('mockMilestoneData'));
  const mockLabelData = JSON.parse(localStorage.getItem('mockLabelData'));

  const lastIssueId = issueDetailData.length !== 0 ? issueDetailData[issueDetailData.length - 1].issueId : 0;
  const { issueTitle, comment, assignee, writer, label, milestone } = request.body;
  const createdAt = new Date();

  const responseBody = {
    issueId: lastIssueId + 1,
    issueTitle,
    isopened: true,
    createdAt,
    writer: {
      userId: 6,
      name: '훈딩',
      url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
    },
    assignee: mockUserData.data.filter(({ userId }) => assignee.includes(userId)),
    milestone: mockMilestoneData.data.filter(({ milestoneId }) => milestone === milestoneId)[0] || null,
    label: mockLabelData.data.filter(({ labelId }) => label.includes(labelId)),
    comment: [
      {
        commentId: 1,
        content: comment,
        createdAt,
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  };

  issueDetailData.push(responseBody);
  localStorage.setItem('issueDetailData', JSON.stringify(issueDetailData));

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: '요청이 완료되었습니다.',
      data: responseBody,
    }),
  );
};

const editTargetIssueData = (request, response, context) => {
  const issueDetailData = JSON.parse(localStorage.getItem('issueDetailData'));
  const mockUserData = JSON.parse(localStorage.getItem('mockUserData'));
  const mockMilestoneData = JSON.parse(localStorage.getItem('mockMilestoneData'));
  const mockLabelData = JSON.parse(localStorage.getItem('mockLabelData'));

  const { issueId } = request.params;

  const { title, isopened, assigneeId, milestoneId, labelId } = request.body;

  let targetIssueIndex = -1;

  issueDetailData.forEach((issue, index) => {
    if (issue.issueId === Number(issueId)) {
      targetIssueIndex = index;
    }
  });

  const targetIssue = issueDetailData[targetIssueIndex];

  if (title) {
    targetIssue.issueTitle = title;
  }

  if (isopened !== undefined) {
    targetIssue.isopened = isopened;
  }

  if (assigneeId !== undefined) {
    if (assigneeId === null) {
      targetIssue.assignee = null;
    } else {
      const assignee = mockUserData.data.find((user) => user.userId === assigneeId);

      if (assignee) {
        targetIssue.assignee = [assignee];
      }
    }
  }

  if (milestoneId !== undefined) {
    if (milestoneId === null) {
      targetIssue.milestone = null;
    } else {
      const milestone = mockMilestoneData.find((item) => item.milestoneId === milestoneId);

      if (milestone) {
        targetIssue.milestone = [milestone];
      }
    }
  }

  if (labelId !== undefined) {
    if (labelId === null) {
      targetIssue.labels = [];
    } else {
      const labels = labelId.map((id) => {
        const label = mockLabelData.find((item) => item.labelId === id);

        return label;
      });

      targetIssue.labels = [labels];
    }
  }

  issueDetailData[targetIssueIndex] = {
    ...issueDetailData[targetIssueIndex],
    issueTitle: title || issueDetailData[targetIssueIndex].issueTitle,
    isopened: isopened !== undefined ? isopened : issueDetailData[targetIssueIndex].isopened,
  };

  localStorage.setItem('issueDetailData', JSON.stringify(issueDetailData));

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'issue Data Patch 완료',
      data: issueDetailData[targetIssueIndex],
    }),
  );
};

const postMilestoneNewData = (request, response, context) => {
  const mockMilestoneData = JSON.parse(localStorage.getItem('mockMilestoneData'));

  const lastMilestoneId =
    mockMilestoneData.data.length !== 0
      ? mockMilestoneData.data[mockMilestoneData.data.length - 1].milestoneId
      : 1;
  const { title, content, deadline } = request.body;
  const responseBody = {
    milestoneId: lastMilestoneId + 1,
    milestoneName: title,
    content: content === undefined ? null : content,
    deadline: deadline === undefined ? null : deadline,
    openCount: 0,
    closeCount: 0,
    isopened: true,
  };

  mockMilestoneData.data.push(responseBody);
  localStorage.setItem('mockMilestoneData', JSON.stringify(mockMilestoneData));

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: '요청이 완료되었습니다.',
      data: responseBody,
    }),
  );
};

const editMilestoneData = (request, response, context) => {
  const mockMilestoneData = JSON.parse(localStorage.getItem('mockMilestoneData'));
  const { milestoneId } = request.params;

  const { title, content, deadline, isopened } = request.body;
  let targetMilestoneIndex = -1;

  mockMilestoneData.data.forEach((milestone, index) => {
    if (milestone.milestoneId === Number(milestoneId)) {
      targetMilestoneIndex = index;
    }
  });

  mockMilestoneData.data[targetMilestoneIndex] = {
    ...mockMilestoneData.data[targetMilestoneIndex],
    milestoneName: title === undefined ? mockMilestoneData.data[targetMilestoneIndex].milestoneName : title,
    content: content === undefined ? null : content,
    deadline: deadline === undefined ? null : deadline,
    isopened,
  };

  localStorage.setItem('mockMilestoneData', JSON.stringify(mockMilestoneData));

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'milestone Data Patch 완료',
      data: mockMilestoneData.data[targetMilestoneIndex],
    }),
  );
};

const deleteMilestone = (request, response, context) => {
  const mockMilestoneData = JSON.parse(localStorage.getItem('mockMilestoneData'));
  const { milestoneId } = request.params;

  const updatedMilestoneData = mockMilestoneData.data.filter(
    (milestone) => milestone.milestoneId !== Number(milestoneId),
  );

  mockMilestoneData.data = updatedMilestoneData || []; // 해당 id에 해당하는 데이터를 지운 데이터로 바꿔줌.

  localStorage.setItem('mockMilestoneData', JSON.stringify(mockMilestoneData));

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'milestone Data Delete 완료',
      data: mockMilestoneData.data,
    }),
  );
};

const postLabelNewData = (request, response, context) => {
  const mockLabelData = JSON.parse(localStorage.getItem('mockLabelData'));
  const lastLabelId =
    mockLabelData.data.length !== 0 ? mockLabelData.data[mockLabelData.data.length - 1].labelId : 1;
  const { labelName, content, backgroundColor, fontColor } = request.body;
  const responseBody = {
    labelId: lastLabelId + 1,
    labelName,
    content: content === undefined ? null : content,
    backgroundColor,
    fontColor,
  };

  mockLabelData.data.push(responseBody);

  localStorage.setItem('mockLabelData', JSON.stringify(mockLabelData));

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'label 생성 완료',
      data: responseBody,
    }),
  );
};

const editLabelData = (request, response, context) => {
  const mockLabelData = JSON.parse(localStorage.getItem('mockLabelData'));
  const { labelId } = request.params;

  const { labelName, content, backgroundColor, fontColor } = request.body;
  let targetLabelIndex = -1;

  mockLabelData.data.forEach((label, index) => {
    if (label.labelId === Number(labelId)) {
      targetLabelIndex = index;
    }
  });

  mockLabelData.data[targetLabelIndex] = {
    ...mockLabelData.data[targetLabelIndex],
    labelName,
    content: content === undefined ? null : content,
    backgroundColor,
    fontColor,
  };

  localStorage.setItem('mockLabelData', JSON.stringify(mockLabelData));

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'Label Data Patch 완료',
      data: mockLabelData.data[targetLabelIndex],
    }),
  );
};

const deleteLabel = (request, response, context) => {
  const mockLabelData = JSON.parse(localStorage.getItem('mockLabelData'));
  const { labelId } = request.params;

  const updatedLabelData = mockLabelData.data.filter((label) => label.labelId !== Number(labelId));

  mockLabelData.data = updatedLabelData || []; // 해당 id에 해당하는 데이터를 지운 데이터로 바꿔줌.

  localStorage.setItem('mockLabelData', JSON.stringify(mockLabelData));

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'Label Data 삭제 완료',
      data: mockLabelData.data,
    }),
  );
};

const postComment = (request, response, context) => {
  const mockIssuesData = JSON.parse(localStorage.getItem('issueDetailData'));
  const mockUserData = JSON.parse(localStorage.getItem('mockUserData'));

  const { issueId } = request.params;
  const { userId, content } = request.body;
  const targetIndex = mockIssuesData.findIndex((issue) => issue.issueId === Number(issueId));
  const { comment } = mockIssuesData.filter((issue) => issue.issueId === Number(issueId))[0];
  const lastId = comment.length;

  mockIssuesData[targetIndex].comment = [
    ...comment,
    {
      commentId: Math.floor(Math.random() * 101),
      content,
      createdAt: new Date(),
      commentUser: mockUserData.data[userId - 1],
    },
  ];

  localStorage.setItem('issueDetailData', JSON.stringify(mockIssuesData));

  return response(context.status(200), context.json());
};

const editComment = (request, response, context) => {
  const mockIssuesData = JSON.parse(localStorage.getItem('issueDetailData'));

  const { issueId, commentId } = request.params;

  const { content } = request.body; // content만 바꿀거임!

  const { comment } = mockIssuesData.filter((issue) => issue.issueId === Number(issueId))[0];
  const targetComment = comment.filter((item) => item.commentId === Number(commentId))[0];

  targetComment.content = content;
  targetComment.createdAt = new Date();

  localStorage.setItem('issueDetailData', JSON.stringify(mockIssuesData));

  return response(context.status(200), context.json());
};

const deleteComment = (request, response, context) => {
  const mockIssuesData = JSON.parse(localStorage.getItem('issueDetailData'));

  const { issueId, commentId } = request.params;

  const { comment } = mockIssuesData.filter((issue) => issue.issueId === Number(issueId))[0];
  const targetCommentIndex = comment.findIndex((item) => item.commentId === Number(commentId));

  console.log(targetCommentIndex, comment);
  comment.splice(targetCommentIndex, 1);
  localStorage.setItem('issueDetailData', JSON.stringify(mockIssuesData));

  return response(context.status(200), context.json());
};

const mockAPIHandler = [
  rest.get(ISSUES.GET_ALL_ISSUES, getIssues),
  rest.get(ISSUES.GET_ISSUE(':issueId'), getIssueDetailData),
  rest.post(ISSUES.POST_ISSUE, postNewIssueData),
  rest.patch(ISSUES.PATCH_ISSUE(':issueId'), editTargetIssueData),

  rest.get(USERS.GET_USER_IMG(':userId'), getUserImage),
  rest.get(USERS.GET_ALL_USERS, getUserData),

  rest.get(MILESTONES.GET_ALL_MILESTONES, getMilestoneData),
  rest.post(MILESTONES.POST_MILESTONE, postMilestoneNewData),
  rest.patch(MILESTONES.PATCH_MILESTONE(':milestoneId'), editMilestoneData),
  rest.delete(MILESTONES.DELETE_MILESTONE(':milestoneId'), deleteMilestone),

  rest.get(LABELS.GET_ALL_LABELS, getLabelData),
  rest.post(LABELS.POST_LABEL, postLabelNewData),
  rest.patch(LABELS.PATCH_LABEL(':labelId'), editLabelData),
  rest.delete(LABELS.DELETE_LABEL(':labelId'), deleteLabel),

  rest.post(COMMENTS.POST_COMMENT(':issueId'), postComment),
  rest.patch(COMMENTS.PATCH_COMMENT(':issueId', ':commentId'), editComment),
  rest.delete(COMMENTS.DELETE_COMMENT(':issueId', ':commentId'), deleteComment),
];

export { mockAPIHandler };
