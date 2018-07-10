// Private API
let post = (payload) => {
  console.log(payload);
}

// Public API
const price = () => {
  let payload = '10$';

  post(payload);

  return payload;
}

// Export Api
export const Api = {
  price
}