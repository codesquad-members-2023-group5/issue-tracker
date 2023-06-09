const mockUserImageData = (userId) => {
  let url = '';

  switch (userId) {
    case 1:
      // 고뭉남
      url = 'https://avatars.githubusercontent.com/u/77562698?v=4';
      break;

    case 2:
      // 니노
      url = 'https://avatars.githubusercontent.com/u/95615105?v=4';
      break;

    case 3:
      // 에이든
      url = 'https://avatars.githubusercontent.com/u/115064144?v=4';
      break;

    case 4:
      // 아켄
      url = 'https://avatars.githubusercontent.com/u/96980857?v=4';
      break;

    case 5:
      // 솔
      url = 'https://avatars.githubusercontent.com/u/86761640?v=4';
      break;

    case 6:
      // 훈딩
      url = 'https://avatars.githubusercontent.com/u/56246060?v=4';
      break;

    default:
      url = '';
  }
  return {
    data: {
      userImgURL: url,
    },
  };
};

const issueDetailData = [
  {
    issueId: 1,
    issueTitle: '[FE]: Creating Components',
    isopened: true,
    createdAt: '2023-05-16T09:10:35.145Z',
    writer: {
      userId: 6,
      name: '훈딩',
      url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
    },
    assignee: [
      { userId: 4, name: '아켄', url: 'https://avatars.githubusercontent.com/u/96980857?v=4' },
      { userId: 6, name: '훈딩', url: 'https://avatars.githubusercontent.com/u/56246060?v=4' },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        content: 'docs에 관련된 라벨입니다.',
        backgroundColor: '#0025E6',
        fontColor: 'light',
      },
      {
        labelId: 2,
        labelName: 'bug',
        content: 'bug에 관련된 라벨입니다.',
        backgroundColor: '#DE4123',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-30T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-30T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-30T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 2,
    issueTitle: '[BE]: Designing the ERD Structure',
    isopened: true,
    createdAt: '2023-05-17T09:10:35.145Z',
    writer: {
      userId: 1,
      name: '고뭉남',
      url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
    },
    assignee: [
      { userId: 1, name: '고뭉남', url: 'https://avatars.githubusercontent.com/u/77562698?v=4' },
      { userId: 2, name: '니노', url: 'https://avatars.githubusercontent.com/u/95615105?v=4' },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        content: 'docs에 관련된 라벨입니다.',
        backgroundColor: '#0025E6',
        fontColor: 'light',
      },
      {
        labelId: 2,
        labelName: 'bug',
        content: 'bug에 관련된 라벨입니다.',
        backgroundColor: '#DE4123',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 3,
    issueTitle: '[FE]: Implementing UI Layout',
    isopened: false,
    createdAt: '2023-05-18T14:25:21.789Z',
    writer: {
      userId: 4,
      name: '아켄',
      url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
    },
    assignee: [
      { userId: 4, name: '아켄', url: 'https://avatars.githubusercontent.com/u/96980857?v=4' },
      { userId: 6, name: '훈딩', url: 'https://avatars.githubusercontent.com/u/56246060?v=4' },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 3,
        labelName: 'enhancement',
        content: 'enhancement에 관련된 라벨입니다.',
        backgroundColor: '#50C878',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 4,
    issueTitle: '[BE]: Implementing Database Queries',
    isopened: true,
    createdAt: '2023-05-19T12:45:10.621Z',
    writer: {
      userId: 2,
      name: '니노',
      url: 'https://avatars.githubusercontent.com/u/95615105?v=4',
    },
    assignee: [
      { userId: 1, name: '고뭉남', url: 'https://avatars.githubusercontent.com/u/77562698?v=4' },
      { userId: 2, name: '니노', url: 'https://avatars.githubusercontent.com/u/95615105?v=4' },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 2,
        labelName: 'bug',
        content: 'bug에 관련된 라벨입니다.',
        backgroundColor: '#DE4123',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 5,
    issueTitle: '[FE]: Implementing Authentication',
    isopened: true,
    createdAt: '2023-05-20T10:35:45.321Z',
    writer: {
      userId: 4,
      name: '아켄',
      url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
    },
    assignee: [
      { userId: 3, name: '에이든', url: 'https://avatars.githubusercontent.com/u/115064144?v=4' },
      { userId: 5, name: '솔', url: 'https://avatars.githubusercontent.com/u/86761640?v=4' },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        content: 'docs에 관련된 라벨입니다.',
        backgroundColor: '#0025E6',
        fontColor: 'light',
      },
      {
        labelId: 2,
        labelName: 'bug',
        content: 'bug에 관련된 라벨입니다.',
        backgroundColor: '#DE4123',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 6,
    issueTitle: '[BE]: Refactoring Backend Code',
    isopened: true,
    createdAt: '2023-05-21T15:12:53.987Z',
    writer: {
      userId: 1,
      name: '고뭉남',
      url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
    },
    assignee: [
      { userId: 1, name: '고뭉남', url: 'https://avatars.githubusercontent.com/u/77562698?v=4' },
      { userId: 2, name: '니노', url: 'https://avatars.githubusercontent.com/u/95615105?v=4' },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 4,
        labelName: 'task',
        content: '',
        backgroundColor: '#FFD700',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 7,
    issueTitle: '[FE]: Implementing Search Functionality',
    isopened: false,
    createdAt: '2023-05-22T08:55:10.452Z',
    writer: {
      userId: 6,
      name: '훈딩',
      url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
    },
    assignee: [
      { userId: 3, name: '에이든', url: 'https://avatars.githubusercontent.com/u/115064144?v=4' },
      { userId: 5, name: '솔', url: 'https://avatars.githubusercontent.com/u/86761640?v=4' },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        content: 'docs에 관련된 라벨입니다.',
        backgroundColor: '#0025E6',
        fontColor: 'light',
      },
      {
        labelId: 3,
        labelName: 'enhancement',
        content: 'enhancement에 관련된 라벨입니다.',
        backgroundColor: '#50C878',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 8,
    issueTitle: '[FE]: Implementing Notifications',
    isopened: false,
    createdAt: '2023-05-23T11:20:30.872Z',
    writer: {
      userId: 2,
      name: '니노',
      url: 'https://avatars.githubusercontent.com/u/95615105?v=4',
    },
    assignee: [
      { userId: 4, name: '아켄', url: 'https://avatars.githubusercontent.com/u/96980857?v=4' },
      { userId: 6, name: '훈딩', url: 'https://avatars.githubusercontent.com/u/56246060?v=4' },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 3,
        labelName: 'enhancement',
        content: 'enhancement에 관련된 라벨입니다.',
        backgroundColor: '#50C878',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 9,
    issueTitle: '[BE]: Handling File Uploads',
    isopened: false,
    createdAt: '2023-05-24T13:40:15.521Z',
    writer: {
      userId: 4,
      name: '아켄',
      url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
    },
    assignee: [
      { userId: 4, name: '아켄', url: 'https://avatars.githubusercontent.com/u/96980857?v=4' },
      { userId: 6, name: '훈딩', url: 'https://avatars.githubusercontent.com/u/56246060?v=4' },
    ],
    milestone: {
      milestoneId: 2,
      milestoneName: 'IssueTracker',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        content: 'docs에 관련된 라벨입니다.',
        backgroundColor: '#0025E6',
        fontColor: 'light',
      },
      {
        labelId: 4,
        labelName: 'task',
        content: '',
        backgroundColor: '#FFD700',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 10,
    issueTitle: '[FE]: Improving Performance',
    isopened: false,
    createdAt: '2023-05-25T16:30:20.963',
    writer: {
      userId: 1,
      name: '고뭉남',
      url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
    },
    assignee: [
      { userId: 3, name: '에이든', url: 'https://avatars.githubusercontent.com/u/115064144?v=4' },
      { userId: 5, name: '솔', url: 'https://avatars.githubusercontent.com/u/86761640?v=4' },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        content: 'docs에 관련된 라벨입니다.',
        backgroundColor: '#0025E6',
        fontColor: 'light',
      },
      {
        labelId: 3,
        labelName: 'enhancement',
        content: 'enhancement에 관련된 라벨입니다.',
        backgroundColor: '#50C878',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 11,
    issueTitle: '[BE]: Fixing API Endpoint',
    isopened: false,
    createdAt: '2023-05-26T09:45:35.212',
    writer: {
      userId: 5,
      url: 'https://avatars.githubusercontent.com/u/86761640?v=4',
      name: '솔',
    },
    assignee: [
      { userId: 3, name: '에이든', url: 'https://avatars.githubusercontent.com/u/115064144?v=4' },
      { userId: 5, name: '솔', url: 'https://avatars.githubusercontent.com/u/86761640?v=4' },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 2,
        labelName: 'bug',
        content: 'bug에 관련된 라벨입니다.',
        backgroundColor: '#DE4123',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 12,
    issueTitle: '[FE]: Implementing User Profile',
    isopened: false,
    createdAt: '2023-05-27T11:20:15.587',
    writer: {
      userId: 3,
      name: '에이든',
      url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
    },
    assignee: [
      { userId: 1, name: '고뭉남', url: 'https://avatars.githubusercontent.com/u/77562698?v=4' },
      { userId: 2, name: '니노', url: 'https://avatars.githubusercontent.com/u/95615105?v=4' },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 3,
        labelName: 'enhancement',
        content: 'enhancement에 관련된 라벨입니다.',
        backgroundColor: '#50C878',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 13,
    issueTitle: '[BE]: Database Optimization',
    isopened: true,
    createdAt: '2023-05-28T14:10:40.931',
    writer: {
      userId: 1,
      name: '고뭉남',
      url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
    },
    assignee: [
      { userId: 3, name: '에이든', url: 'https://avatars.githubusercontent.com/u/115064144?v=4' },
      { userId: 5, name: '솔', url: 'https://avatars.githubusercontent.com/u/86761640?v=4' },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 4,
        labelName: 'task',
        content: '',
        backgroundColor: '#FFD700',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 14,
    issueTitle: '[FE]: Adding Unit Tests',
    isopened: true,
    createdAt: '2023-05-29T16:55:25.498',
    writer: {
      userId: 5,
      url: 'https://avatars.githubusercontent.com/u/86761640?v=4',
      name: '솔',
    },
    assignee: [
      { userId: 3, name: '에이든', url: 'https://avatars.githubusercontent.com/u/115064144?v=4' },
      { userId: 5, name: '솔', url: 'https://avatars.githubusercontent.com/u/86761640?v=4' },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 1,
        labelName: 'docs',
        content: 'docs에 관련된 라벨입니다.',
        backgroundColor: '#0025E6',
        fontColor: 'light',
      },
      {
        labelId: 3,
        labelName: 'enhancement',
        content: 'enhancement에 관련된 라벨입니다.',
        backgroundColor: '#50C878',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 15,
    issueTitle: '[BE]: Resolving Performance Bottlenecks',
    isopened: true,
    createdAt: '2023-06-01T09:30:45.731',
    writer: {
      userId: 3,
      name: '에이든',
      url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
    },
    assignee: [
      { userId: 4, name: '아켄', url: 'https://avatars.githubusercontent.com/u/96980857?v=4' },
      { userId: 6, name: '훈딩', url: 'https://avatars.githubusercontent.com/u/56246060?v=4' },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 2,
        labelName: 'bug',
        content: 'bug에 관련된 라벨입니다.',
        backgroundColor: '#DE4123',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 16,
    issueTitle: '[FE]: Implementing Notifications',
    isopened: true,
    createdAt: '2023-05-30T14:20:15.958',
    writer: {
      userId: 2,
      name: '니노',
      url: 'https://avatars.githubusercontent.com/u/95615105?v=4',
    },
    assignee: [
      { userId: 1, name: '고뭉남', url: 'https://avatars.githubusercontent.com/u/77562698?v=4' },
      { userId: 2, name: '니노', url: 'https://avatars.githubusercontent.com/u/95615105?v=4' },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 3,
        labelName: 'enhancement',
        content: 'enhancement에 관련된 라벨입니다.',
        backgroundColor: '#50C878',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
  {
    issueId: 17,
    issueTitle: '[BE]: Fixing Security Vulnerabilities',
    isopened: true,
    createdAt: '2023-06-01T16:40:30.521',
    writer: {
      userId: 1,
      name: '고뭉남',
      url: 'https://avatars.githubusercontent.com/u/77562698?v=4',
    },
    assignee: [
      { userId: 1, name: '고뭉남', url: 'https://avatars.githubusercontent.com/u/77562698?v=4' },
      { userId: 2, name: '니노', url: 'https://avatars.githubusercontent.com/u/95615105?v=4' },
    ],
    milestone: {
      milestoneId: 1,
      milestoneName: 'NewMilestone',
    },
    label: [
      {
        labelId: 4,
        labelName: 'task',
        content: '',
        backgroundColor: '#FFD700',
        fontColor: 'dark',
      },
    ],
    comment: [
      {
        commentId: 1,
        content: '마감일은 언제인가요?',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 4,
          name: '아켄',
          url: 'https://avatars.githubusercontent.com/u/96980857?v=4',
        },
      },
      {
        commentId: 2,
        content: '마감일은 6월 2일 금요일까지 입니다!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 3,
          name: '에이든',
          url: 'https://avatars.githubusercontent.com/u/115064144?v=4',
        },
      },
      {
        commentId: 3,
        content: '다들 화이팅해서 이슈트래커 완성해보자요!!',
        createdAt: '2023-05-16T09:10:35.145Z', // 작성자 및 타임스탬프 정보에 필요
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  },
];

const mockUserData = {
  data: [
    { userId: 1, name: '고뭉남', url: 'https://avatars.githubusercontent.com/u/77562698?v=4' },
    { userId: 2, name: '니노', url: 'https://avatars.githubusercontent.com/u/95615105?v=4' },
    { userId: 3, name: '에이든', url: 'https://avatars.githubusercontent.com/u/115064144?v=4' },
    { userId: 4, name: '아켄', url: 'https://avatars.githubusercontent.com/u/96980857?v=4' },
    { userId: 5, name: '솔', url: 'https://avatars.githubusercontent.com/u/86761640?v=4' },
    { userId: 6, name: '훈딩', url: 'https://avatars.githubusercontent.com/u/56246060?v=4' },
  ],
};

const mockLabelData = {
  data: [
    {
      labelId: 1,
      labelName: 'docs',
      content: 'docs에 관련된 라벨입니다.',
      backgroundColor: '#0025E6',
      fontColor: 'light',
    },
    {
      labelId: 2,
      labelName: 'bug',
      content: 'bug에 관련된 라벨입니다.',
      backgroundColor: '#DE4123',
      fontColor: 'dark',
    },
    {
      labelId: 3,
      labelName: 'enhancement',
      content: 'enhancement에 관련된 라벨입니다.',
      backgroundColor: '#50C878',
      fontColor: 'dark',
    },
    {
      labelId: 4,
      labelName: 'task',
      content: '',
      backgroundColor: '#FFD700',
      fontColor: 'dark',
    },
  ],
};

const mockMilestoneData = {
  data: [
    { milestoneId: 1, milestoneName: 'NewMilestone', openCount: 5, closeCount: 3, isopened: true },
    { milestoneId: 2, milestoneName: 'IssueTracker', openCount: 5, closeCount: 4, isopened: true },
  ],
};

const mockIssueDetailData = (issueId) => {
  return issueDetailData.filter((issue) => issue.issueId === issueId)[0];
};

const mockIssuesData = {
  data: {
    issues: issueDetailData,
  },
};

export {
  mockIssuesData,
  mockUserImageData,
  mockUserData,
  mockLabelData,
  mockMilestoneData,
  mockIssueDetailData,
  issueDetailData,
};
