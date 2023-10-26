import { HostVansDetailsCommon } from './HostVansDetailsCommon';
import axios from 'axios';
import React, { useState, useCallback, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const HostVansDetails = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  const fetchHostVansDetails = useCallback(async () => {
    const {
      data: { vans },
    } = await axios.get(`/api/host/vans/${id}`);
    setCurrentVan(vans);
  }, []);

  useEffect(() => {
    fetchHostVansDetails();
  }, []);

  return (
    <>
      <HostVansDetailsCommon currentVan={currentVan} />
      <Outlet context={currentVan} />
    </>
  );
};

export default HostVansDetails;
