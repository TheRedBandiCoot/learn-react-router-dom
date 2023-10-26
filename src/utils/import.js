//@ React lib
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

//@ components
import Layout from '../components/Layout';
import HostLayout from '../components/HostLayout';

//@ utils
import { useScrollHandler } from './useScrollHandler';
import { reducer } from './reducer';
import { initialState } from './initialState';

//@ Pages
import Home from '../pages/Home';
import About from '../pages/About';

//@ Pages => vans
import Vans from '../pages/vans/Vans';
import VansDetails from '../pages/vans/VansDetails';

//@ Pages => host
import Dashboard from '../pages/host/Dashboard';
import Income from '../pages/host/Income';
import Review from '../pages/host/Review';
import HostVans from '../pages/host/HostVans';
import HostVansDetails from '../pages/host/HostVansDetails';

//@ Pages => host => vans
import Details from '../pages/host/vans/Details';
import Photos from '../pages/host/vans/photos';
import Pricing from '../pages/host/vans/pricing';

export {
  Link,
  Route,
  Routes,
  Home,
  About,
  initialState,
  useScrollHandler,
  reducer,
  Vans,
  React,
  Layout,
  VansDetails,
  Dashboard,
  Income,
  Review,
  HostLayout,
  HostVans,
  HostVansDetails,
  Details,
  Photos,
  Pricing,
};
