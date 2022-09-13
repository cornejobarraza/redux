// Mock function to mimic making an async request
export function fakeBackend(user) {
  return new Promise((resolve) => setTimeout(() => resolve({ data: user }), 1500));
}
