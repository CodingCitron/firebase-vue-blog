import deepCopy from '../utils/deepCopy'

export default function resetStore({ store }) {
  const initialState = deepCopy(store.$state)
  store.$reset = () => store.$patch(deepCopy(initialState))
}