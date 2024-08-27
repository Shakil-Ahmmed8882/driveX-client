import { ReactNode } from 'react';

export type TRoute = {
  path?: string;
  index?: boolean;
  element: React.ReactNode;
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
} | undefined;


export type TUserPath = {
  name: string;
  index?:boolean;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
