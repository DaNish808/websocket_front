import { POST } from '../constants';

const devDefaultState = [
  {
    user: 'OtherUser',
    message: 'Hello World!',
    timestamp: new Date()
  }
];

export default function(state = devDefaultState, { type, payload }) {
  console.log(type === POST);
  switch(type) {
    case POST: 
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}