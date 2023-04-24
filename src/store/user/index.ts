import { create } from 'zustand';
import { user } from './state';
import type { UserStore } from './type';

export const useUserStore = create<UserStore>((set) => ({
  ...user,
  setProfile: (payload) => {
    set(() => ({
      name: payload.name,
      profileImage: payload.profileImage,
    }));
  },
  setRepositories: (payload) => {
    set(() => ({
      repositories: payload,
    }));
  },
  setRepositoryLanguage: (payload) => {
    set(() => ({
      repositoryLanguage: payload,
    }));
  },
}));
