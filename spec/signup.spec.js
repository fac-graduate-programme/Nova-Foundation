const insertUser = require('../src/database/queries/insertUser');
const buildTestDB = require('../src/database/config/buildTestDB');

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');

describe('Signup route', () => {

  beforeAll(async (done) => {
    await buildTestDB();
    done();
  })

  // Test Query
  it('Insert User Query', async (done) => {
    try {
      const user = {
        username: 'Sozan Halabi',
        displayName: 'Sozan',
        babyName: 'leen',
        password: '1234567',
        email: 'suzan@gmail.com',
      }
      const insertedUser = await insertUser(user.username, user.displayName, user.babyName, user.email, user.password);
      expect(insertedUser).toBeDefined();
      expect(insertedUser.username).toEqual('Sozan Halabi');
      done();
    } catch (error) {
      done(error);
    }
  });

  // Test Route
  it('Send Request to Signup route', (done) => {
    const requestBody = {
      name: 'Lillie',
      nickName: "Kitty's Mom",
      email: 'lillie@gmail.com',
      password: '123456',
      babyName: 'Kitty',
    }
    request(app)
      .post('/api/v1/register')
      .send({ data: requestBody })
      .expect(200)
      .expect('content-type', /json/)
      .end((error, res) => {
        if (error) done(error);
        expect(res.body.data).toBeDefined();
        expect(res.body.data.message).toEqual('Success');
        expect(res.header['set-cookie']).toBeDefined();
        done();
      });
  })

  afterAll(() => mongoose.disconnect());

})
