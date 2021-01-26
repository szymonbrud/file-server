import request from 'supertest';
import app from '../../index';

describe('→router password', () => {
  it('Should correct login', (done) => {
    request(app)
      .post('/authenticationPassword')
      .send({ password: 'haslo' })
      .expect((res) => {
        expect(res.body).toHaveProperty('auth', true);
      })
      .end(done);
  });

  it('Should incorrect login', (done) => {
    request(app)
      .post('/authenticationPassword')
      .send({ password: 'askdjflkasdjf' })
      .expect((res) => {
        expect(res.body).toEqual({ status: 'OK', auth: false });
      })
      .end(done);
  });
});
