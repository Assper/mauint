import passport from 'koa-passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/User'

export function init() {
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user.email)))

  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, (email, password, done) => {
    return done()
  }))
}
