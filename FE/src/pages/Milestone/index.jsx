import React, { useState, useEffect } from 'react';

import useFetch from '../../hooks/useFetch';

import { LABELS, MILESTONES } from '../../constants/api';

import MilestoneHeader from '../../components/Milestone/MilestoneHeader';
import MilestoneMain from '../../components/Milestone/MilestoneMain';
import { $Milestone } from './style';

const Milestone = () => {
  const { data: labelData } = useFetch(LABELS.GET_ALL_LABELS);
  const { fetchData: getMilestoneData, data: milestoneData } = useFetch(MILESTONES.GET_ALL_MILESTONES);

  const allDataLoaded = labelData && milestoneData;

  const getNewMilestoneData = async () => {
    await getMilestoneData();
  };

  return (
    allDataLoaded && (
      <$Milestone>
        <MilestoneHeader
          labelCount={labelData.length}
          milestoneCount={milestoneData.length}
          getNewMilestoneData={getNewMilestoneData}
        />
        <MilestoneMain milestoneData={milestoneData} getNewMilestoneData={getNewMilestoneData} />
      </$Milestone>
    )
  );
};

export default Milestone;
