# Containerized Calculator Web Application

This project demonstrates a containerized web application that implements a simple calculator. It utilizes Docker for containerization, NGINX as a reverse proxy, and GitHub Actions for continuous integration and continuous deployment (CI/CD).

## Overview

The application is a basic calculator built with Node.js and Express.js. It provides a user interface through an HTML form, allowing users to perform arithmetic operations directly in their web browser. NGINX acts as a reverse proxy, routing incoming requests to the Node.js application.

## Technologies Used

- **Docker:** For containerizing the application and NGINX.
- **Docker Compose:** For orchestrating multi-container deployments.
- **NGINX:** As a reverse proxy to handle incoming requests.
- **Node.js & Express.js:** For the application's backend logic.
- **HTML:** For the user interface.
- **GitHub Actions:** For CI/CD automation.
- **Docker Hub:** For storing and distributing Docker images.

## Setup

1.  Clone the repository:

    ```bash
    git clone [repository URL]
    ```

2.  Navigate to the application directory:

    ```bash
    cd my-web-app
    ```

3.  Run the application using Docker Compose:

    ```bash
    docker-compose up --build
    ```

4.  Access the application in your browser:

    Open your web browser and go to `http://localhost:3000`.

## CI/CD Pipeline

The CI/CD pipeline is set up using GitHub Actions. On every push to the `main` branch, the pipeline automatically:

1.  Builds the Docker images.
2.  Pushes the images to Docker Hub.

## Usage

- Open the application in your web browser.
- Enter the numbers and select the operation.
- Click the "Calculate" button to see the result.
