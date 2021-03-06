import { types } from 'mobx-state-tree';
import { NavStore } from './../NavStore/NavStore';
import { ViewStore } from './../ViewStore/ViewStore';
import { FolderStore } from './../FolderStore/FolderStore';
import { PermissionsStore } from './../PermissionsStore/PermissionsStore';
import { TeamsStore } from './../TeamsStore/TeamsStore';

export const RootStore = types.model({
  nav: types.optional(NavStore, {}),
  permissions: types.optional(PermissionsStore, {
    fetching: false,
    items: [],
  }),
  view: types.optional(ViewStore, {
    path: '',
    query: {},
    routeParams: {},
  }),
  folder: types.optional(FolderStore, {}),
  teams: types.optional(TeamsStore, {
    map: {},
  }),
});

type RootStoreType = typeof RootStore.Type;
export interface RootStoreInterface extends RootStoreType {}
