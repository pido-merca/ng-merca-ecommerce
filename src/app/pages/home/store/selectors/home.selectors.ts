import { createFeatureSelector, createSelector } from '@ngrx/store';
import { homeFeatureName, HomeState } from '@home/store/state/home.state';

export const homeRootSelector = createFeatureSelector<HomeState>(
  homeFeatureName
);
