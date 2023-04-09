import { createSelector } from "@reduxjs/toolkit"
import { ModalsSchema } from "../../types/modalsSchema"
import { getModals } from "../getModals/getModals"

export const getModalsCurrent = createSelector(getModals, (modals: ModalsSchema) => modals.current)
