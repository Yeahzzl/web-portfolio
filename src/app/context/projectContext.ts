import data from "../../../db.json";
import { createContext } from "react";

export const projectContext = createContext<typeof data | undefined>(undefined);
