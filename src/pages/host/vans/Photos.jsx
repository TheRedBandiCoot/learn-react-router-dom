import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import VansModal from '../../../components/VansModal';

export function loader({ request }) {
  return request;
}

const Photos = () => {
  const van = useOutletContext();
  const { url } = useLoaderData();

  return <VansModal url={url} van={van} clsName={'host-van-detail-image'} />;
};

export default Photos;
