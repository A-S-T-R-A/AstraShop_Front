import { StateSchema } from "app/providers/StoreProvider"

export const getNavigationTree = (state: StateSchema) => state.catalogNavigation.tree
export const getCurrentTree = (state: StateSchema) => state.catalogNavigation.currentTree
