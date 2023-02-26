import { atom, useSetAtom, useAtomValue } from "jotai";
import { OrganizationFull } from "../api/@types";

const organizationsMapAtom = atom<Map<string, OrganizationFull>>(new Map());

export const useOrganizationsMap = () => {
  return {
    organizationsMap: useAtomValue(organizationsMapAtom),
  };
};

export const useSetOrganizationsMap = () => {
  const set = useSetAtom(organizationsMapAtom);
  return {
    setOrganizationsMap: ({
      organizationsMap,
    }: {
      organizationsMap: Map<string, OrganizationFull>;
    }) => set(organizationsMap),
  };
};
