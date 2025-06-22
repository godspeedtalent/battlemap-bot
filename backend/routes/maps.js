import express from 'express';
import { createMap, addToken, moveToken, saveMap, loadMap } from '../controllers/mapsController.js';

const router = express.Router();

router.post('/create', createMap);          // /api/maps/create
router.post('/:mapId/token', addToken);     // /api/maps/:mapId/token
router.post('/token/:tokenId/move', moveToken); // /api/maps/token/:tokenId/move
router.get('/:mapId/save', saveMap);        // /api/maps/:mapId/save
router.get('/:mapId/load', loadMap);        // /api/maps/:mapId/load

export default router;
