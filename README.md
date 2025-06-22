# Discord Battlemap Bot

This is a full-stack Node.js application that simulates a Discord bot for managing tabletop battle maps. The project is split into a backend API built with Express and MongoDB and a frontend built with React and TailwindCSS.

## Project Structure

- `backend` – Express server, MongoDB models, and RESTful routes
- `frontend` – React single-page application using Vite
- `shared` – Shared logic and schemas

## Setup

1. Install all dependencies:

```bash
npm run install-all
```

2. Create a `.env` file in `backend` with the following variables:

```
MONGO_URI=<your mongodb uri>
PORT=5000
```

3. Start the development servers:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000` and proxy API calls to the backend running on port `5000`.

## Commands

- `POST /api/maps/create` – create a new map
- `POST /api/maps/:mapId/token` – add a token
- `POST /api/maps/token/:tokenId/move` – move a token
- `GET /api/maps/:mapId/save` – save a map
- `GET /api/maps/:mapId/load` – load a map

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
