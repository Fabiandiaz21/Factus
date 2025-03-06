import Cliente from '../models/Clientes.js';

const clientesController = {
  // Crear un nuevo cliente
  createCliente: async (req, res) => {
    try {
      const cliente = new Cliente(req.body);
      await cliente.save();
      res.status(201).json({ message: "Cliente creado con éxito", cliente });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }a
  },

  // Obtener todos los clientes
  getClientes: async (req, res) => {
    try {
      const clientes = await Cliente.find();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtener un cliente por su identificación
  getClienteById: async (req, res) => {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findById(id);

      if (!cliente) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }

      res.json(cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },



};


export default clientesController;
