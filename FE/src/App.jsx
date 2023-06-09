import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { USERS, ISSUES } from './constants/api';
import {
  mockIssuesData,
  mockUserData,
  mockLabelData,
  mockMilestoneData,
  mockIssueDetailData,
  issueDetailData,
} from './mocks/mockData';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from './context/themeContext';
import useFetch from './hooks/useFetch';

import Header from './components/Header';

import IssueList from './pages/IssueList';
import NewIssue from './pages/NewIssue';
import IssueDetail from './pages/IssueDetail';
import Milestone from './pages/Milestone';
import LabelList from './pages/LabelList';

const App = () => {
  const { data: userImgData } = useFetch(USERS.GET_USER_IMG(6));

  useEffect(() => {
    const isDataInLocalStorage = localStorage.getItem('mockUserData');

    if (isDataInLocalStorage) return;
    localStorage.setItem('mockUserData', JSON.stringify(mockUserData));
    localStorage.setItem('mockLabelData', JSON.stringify(mockLabelData));
    localStorage.setItem('issueDetailData', JSON.stringify(issueDetailData));
    localStorage.setItem('mockMilestoneData', JSON.stringify(mockMilestoneData));
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <BrowserRouter>
        {userImgData && <Header userImgSrc={userImgData.userImgURL} />}
        <Routes>
          <Route path="/login" />
          <Route path="/" element={<Navigate to="/issues" />} />
          <Route path="/issues" element={<IssueList />} />
          {userImgData && (
            <Route path="/issues/new" element={<NewIssue userImgSrc={userImgData.userImgURL} />} />
          )}
          <Route path="/issues/:issueId" element={<IssueDetail />} />
          <Route path="/issues/milestones" element={<Milestone />} />
          <Route path="/issues/labels" element={<LabelList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
