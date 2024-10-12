#Front-end

# Contacts Management Application - Frontend

This is the frontend code for a contacts management application, built using React.js, Redux, and TypeScript. It allows users to manage their contacts by adding, viewing, updating, and deleting contact details.
![ss2](https://github.com/mdrianislam0or1/contacts-management-frontend/assets/67714964/5f14df7e-8e60-4ba3-93ae-eaee511bad6f)

## Project Structure

The frontend codebase is organized into several directories:

- **src/components**: Contains reusable React components used throughout the application.
- **src/pages**: Contains page-level components responsible for rendering different pages of the application, such as the "Add Contacts" page and the "All Contacts" page.
- **src/redux**: Contains the Redux store setup, including reducers, actions, and slices for managing application state.
- **src/utils**: Contains utility functions used across the application.

## Setup

To set up and run the frontend code:

1. Clone the repository to your local machine.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Access the application in your browser at `http://localhost:5173`.

## Dependencies

The frontend code utilizes the following dependencies:

- **React.js**: JavaScript library for building user interfaces.
- **Redux**: State management library for managing application state.
- **Redux Toolkit**: Provides utilities for efficient Redux development, including simplified Redux setup.
- **React Router**: Routing library for navigation within the application.
- **Styled Components**: Library for styling React components using tagged template literals.
- **Axios**: HTTP client for making requests to the backend API.
- **React Query**: Library for data fetching and caching, used for API data fetching.
- **Ant Design**: styling and model and dashbord layout.
- **framer-motion**: styling animation.

## Development Environment

The frontend code is developed using:

- **Visual Studio Code**: Code editor for writing and debugging code.
- **ESLint**: JavaScript linting tool for maintaining code quality and consistency.
- **Prettier**: Code formatter for ensuring consistent code style.
- **TypeScript**: Superset of JavaScript that adds static typing and improves code quality and readability.

## Contributors

- [Rian Islam](https://github.com/mdrianislam0or1)

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.



#Backend 

# Contacts Management Application - Backend

This is the backend code for a contacts management application, built using Node.js, Express.js, and MongoDB. It provides RESTful API endpoints for managing contact details, including adding, viewing, updating, and deleting contacts.
![ss1](https://github.com/mdrianislam0or1/contacts-management-backend/assets/67714964/61dc80f6-120e-49a1-bac8-2b93082b98e3)

## Project Structure

The backend codebase is organized into several directories:

- **src/controllers**: Contains controller functions responsible for handling HTTP requests and responses.
- **src/models**: Contains Mongoose models for defining database schemas and interacting with MongoDB.
- **src/routes**: Contains route definitions for mapping HTTP methods to controller functions.
- **src/services**: Contains service functions for performing business logic and interacting with the database.
- **src/utils**: Contains utility functions used across the application.

## Setup

To set up and run the backend code:

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory.

```PORT=5000
   DATABASE_URL=mongodb+srv://**********:**********@cluster0.vnnz93j.mongodb.net/**********?retryWrites=true&w=majority&appName=Cluster0
   NODE_ENV=development
   SUPPER_ADMIN_PASSWORD=**********
```

3. Run `npm install` to install dependencies.
4. Set up a MongoDB database and update the connection string in the `.env` file.
5. Run `npm start` to start the Node.js server.
6. The backend API will be accessible at `http://localhost:5000`.

## Dependencies

The backend code utilizes the following dependencies:

- **Express.js**: Web application framework for building RESTful APIs.
- **Mongoose**: MongoDB object modeling tool for Node.js, used for defining schemas and interacting with MongoDB.
- **dotenv**: Library for loading environment variables from a `.env` file.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **http-status**: Library for standard HTTP status codes.
- **express-validator**: Middleware for validating and sanitizing incoming request data.

## Development Environment

The backend code is developed using:

- **Visual Studio Code**: Code editor for writing and debugging code.
- **ESLint**: JavaScript linting tool for maintaining code quality and consistency.
- **Prettier**: Code formatter for ensuring consistent code style.
- **Postman**: API development tool for testing and debugging HTTP APIs.

## Contributors

- [Rian Islam](https://github.com/mdrianislam0or1)

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.
