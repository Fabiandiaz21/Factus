import Item from '../models/items.js';

const itemsController = {
  // Crear un nuevo ítem
  createItem: async (req, res) => {
    try {
      const item = new Item(req.body);
      await item.save();
      res.status(201).json({ message: "Ítem creado con éxito", item });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtener todos los ítems
  getItems: async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtener un ítem por su ID
  getItemById: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findById(id);

      if (!item) {
        return res.status(404).json({ message: "Ítem no encontrado" });
      }

      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Editar un ítem por su ID
  updateItem: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });

      if (!updatedItem) {
        return res.status(404).json({ message: "Ítem no encontrado" });
      }

      res.json({ message: "Ítem actualizado con éxito", item: updatedItem });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Eliminar un ítem por su ID
  deleteItem: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findByIdAndDelete(id);

      if (!item) {
        return res.status(404).json({ message: "Ítem no encontrado" });
      }

      res.json({ message: "Ítem eliminado con éxito" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default itemsController;
