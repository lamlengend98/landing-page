const loadState = () => {
  try {
    const serializedState: any = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.warn(error)
  }
}

export default {
  loadState,
  saveState,
}
