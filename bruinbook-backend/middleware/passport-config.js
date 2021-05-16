const LocalStrategy = require('passport-local').Strategy
const Account = require('../models/account')
const bcrypt = require('bcrypt')


function initialize(passport) {
    const authenticateUser = (email, password, done) => {
        Account.findOne( {email: email} )
            .then(async user => {
                if (!user) return done(null, false, { message: 'No user with that email'})
                try {
                    if (await bcrypt.compare(password, user.password)) {
                        console.log(user.name)
                        return done(null, user)
                    } else {
                        return done(null, false, {message: 'Password does not match'})
                    }
                } catch (e) {
                    return done(e)
                }
            })
    }

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        Account.findById(id, (err, user) => {
            done(err, user)
        }) 
    })
}

module.exports = initialize