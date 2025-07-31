const router = require('express').Router();
const passport = require('passport');

// Trigger Google login
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback from Google
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/'); // or a dashboard
    }
);

module.exports = router;
