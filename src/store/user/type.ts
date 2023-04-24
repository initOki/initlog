export interface RepositoryState {
  repositoryName: string;
  languagesUrl: string;
  repositoryUrl: string;
}

export interface RepositoryLanguageState {
  [key: string]: number;
}

export interface UserState {
  name: string;
  profileImage: string;
  repositories: RepositoryState[];
  repositoryLanguage: RepositoryLanguageState;
}

export interface UserStore extends UserState {
  setProfile: (payload: { name: UserState['name']; profileImage: UserState['profileImage'] }) => void;
  setRepositories: (payload: UserState['repositories']) => void;
  setRepositoryLanguage: (payload: UserState['repositoryLanguage']) => void;
}
