// A mock function to mimic making an async request for data
export function fetchUser(user) {
  return new Promise((resolve) => setTimeout(() => resolve({ data: user }), 1500));
}
