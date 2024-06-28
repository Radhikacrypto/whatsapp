// utils/ApiRoutes.js
export const HOST = "http://localhost:3005"; // Ensure 'http' is spelled correctly

// Remove extra spaces and ensure no trailing slashes if not needed
export const AUTH_ROUTE = `${HOST}/api/auth`;

// Ensure the endpoint path matches the backend definition
export const CHECK_USER_ROUTE = `${AUTH_ROUTE}/check-user`; // Use 'check-user' to match the backend route
