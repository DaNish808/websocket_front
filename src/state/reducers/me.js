const defaultUser = {
  username: 'Guest',
  dateJoined: new Date()
};

export default function me(state = defaultUser, { type, payload }) {
  switch(type) {
    default:
      return state;
  }
}