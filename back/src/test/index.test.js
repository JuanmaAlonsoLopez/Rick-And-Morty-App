const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS (get) onsearch y detail', () => {
  describe('Get /onsearch/{id}', () => {
    it('Responde con status 200', async () => {
      await agent.get('/onsearch/1');
      expect(200);
    });

    it('Si hay un error responde con status 500', async () => {
      await agent.get('/onsearch/10000');
      expect(500);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
      const { body } = await agent.get('/onsearch/1');
      const keys = Object.keys(body);
      expect(keys).toContain('id');
      expect(keys).toContain('name');
      expect(keys).toContain('species');
      expect(keys).toContain('gender');
      expect(keys).toContain('image');
    });
  });
});

describe('Test de RUTAS (get) onsearch y detail', () => {
  describe('Get /detail/{id}', () => {
    it('Responde con status 200', async () => {
      await agent.get('/detail/1');
      expect(200);
    });

    it('Si hay un error responde con status 500', async () => {
      await agent.get('/detail/10000');
      expect(500);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "image", "status" y "origin"', async () => {
      const { body } = await agent.get('/detail/1');
      const keys = Object.keys(body);
      expect(keys).toContain('id');
      expect(keys).toContain('name');
      expect(keys).toContain('species');
      expect(keys).toContain('gender');
      expect(keys).toContain('image');
      expect(keys).toContain('status');
      expect(keys).toContain('origin');
    });
  });
});

describe('TEST de RUTAS /fav', () => {
  it('Responde con status 200 y un array de favoritos', async () => {
    const { body } = await agent.get('/fav');
    expect(200);
    expect(body).toBeDefined();
    expect(body).toBeInstanceOf(Array);
    expect(body).toEqual([]);
    expect(body).toMatchObject([]);
  });

  it('Responde con status 200 y un objeto con los datos del personaje guardado', async () => {
    const char = {
      id: '1',
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    };
    const data = await agent.post('/fav').send(char);
    expect(200);
    expect(data.body).toMatchObject(char);
  });

  it('Responde con un status 200 y un objeto con una propiedad success en TRUE', async () => {
    const data = await agent.delete('/fav/1');
    expect(200);
    expect(data.body.success).toBe(true);
  });
});
