import { UiuxItem } from "@/components/UiuxCard";
import data from "../../../db.json";
import { createContext } from "react";

type ProjectData = {
  webPublishing: any[];
  frontend: any[];
  uiux: UiuxItem[];
  edit: any[];
  web: any[];
  package: any[];
};

export const projectContext = createContext<ProjectData | undefined>(undefined);
