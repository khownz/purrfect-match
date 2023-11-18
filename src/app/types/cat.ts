export type Cat = {
  name: string;
  // TODO: should not be optional
  likes?: string[];
  bio: string;
  imagePathNames: string[];
};
