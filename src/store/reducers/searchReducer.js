const initialState = {
  searchType: null,
  searchTerm: null,
  searchParams: {
    glassType: null,
    alcoholContent: null
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}