import Map from '../models/Map.js';
import Token from '../models/Token.js';

export const createMap = async (req, res) => {
  try {
    const { name, width, height } = req.body;
    const map = await Map.create({ name, width, height, tokens: [] });
    res.json({ message: `Map '${map.name}' created.` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const addToken = async (req, res) => {
  try {
    const { mapId } = req.params;
    const { name, x, y, image, meta } = req.body;
    const token = await Token.create({ name, x, y, image, meta });
    const map = await Map.findByIdAndUpdate(mapId, { $push: { tokens: token._id } }, { new: true });
    res.json({ message: `Token '${token.name}' added to map '${map.name}'.`, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const moveToken = async (req, res) => {
  try {
    const { tokenId } = req.params;
    const { x, y } = req.body;
    const token = await Token.findByIdAndUpdate(tokenId, { x, y }, { new: true });
    res.json({ message: `Token '${token.name}' moved to (${x}, ${y}).`, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const saveMap = async (req, res) => {
  try {
    const { mapId } = req.params;
    const map = await Map.findById(mapId).populate('tokens');
    res.json({ message: `Map '${map.name}' saved.`, map });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const loadMap = async (req, res) => {
  try {
    const { mapId } = req.params;
    const map = await Map.findById(mapId).populate('tokens');
    res.json({ message: `Map '${map.name}' loaded.`, map });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
