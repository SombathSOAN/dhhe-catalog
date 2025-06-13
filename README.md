# E-Catalog

E-Catalog provides a simple catalog management platform built with **Node.js** and **Express**. The backend exposes a REST API backed by MongoDB, and a small static frontend is included for quick testing.

For an overview of the backend modules and frontend requirements, see the [specification](docs/specification.md).

## Getting Started

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Configuration

Set the following environment variables before running the server:

- `MONGODB_URI` – MongoDB connection string (e.g. `mongodb://localhost:27017/ecatalog`)
- `JWT_SECRET` – secret used to sign JSON Web Tokens

You can create a `.env` file or export the variables in your shell.

### Run the Backend

```bash
node server.js
```

The server listens on port **3001** by default.

## API Overview

The backend exposes REST endpoints for products, banners, analytics and
geolocation. Notable routes include:

- `GET /api/products/search` – advanced search and filtering
- `POST /api/products/import` – bulk product import
- `GET /api/products/export` – export all products
- `CRUD /api/banners` – manage promotional banners
- `GET /api/geolocation` – return basic geolocation data for the requester

### Launch the Frontend

The `frontend/` directory contains a minimal `index.html`. Open this file directly in your browser or run:

```bash
cd frontend
npm start
```

## Contributing

Contributions are welcome! Please open an issue to discuss your proposed changes or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
