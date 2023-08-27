const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const keys = require('../config/keys');
const User = require('../models/user.model');

const router = express.Router();

router.post("/signup", (req, res) => {
  let errors = {};
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        errors.msg = "Email already exists";
        return res.status(400).json(errors);
      } else {
        User.findOne({ roll_no: req.body.roll_no })
        .then((user) => {
            if (user) {
                errors.msg = "Roll No already exists";
                return res.status(400).json(errors);
            }
        })
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          roll_no: req.body.roll_no,
          password: req.body.password,
        });

        bcrypt.genSalt(7, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.log(err);
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                const payload = {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  roll_no: user.roll_no,
                };

                jwt.sign(
                  payload,
                  keys.secret,
                  { expiresIn: 86400 },
                  (err, token) => {
                    res.json({
                      token: "Bearer " + token,
                    });
                  }
                );
              })
              .catch((err) => console.log(err));
          });
        });
      }
    })
    .catch((err) => {
      errors.msg = "Server error. Try again";
      return res.status(500).json(errors);
    });
});

router.post("/signin", (req, res) => {
  let errors = {};

  const roll_no = req.body.roll_no;
  const password = req.body.password;

  User.findOne({ roll_no })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password).then((matches) => {
          if (matches) {
            const payload = { id: user.id, name: user.name, email: user.email, roll_no: user.roll_no };

            jwt.sign(
              payload,
              keys.secret,
              { expiresIn: 86400 },
              (err, token) => {
                // res.json({
                //   token: "Bearer " + token,
                // });
                res.send("Logged in");
              }
            );
          } else {
            errors.msg = "Password incorrect";
            res.status(400).json(errors);
          }
        });
      } else {
        errors.msg = "Email not found";
        return res.status(400).json(errors);
      }
    })
    .catch((error) => console.log(error));
});

router.get(
    '/usersecrets',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        roll_no: req.user.roll_no
      });
    }
  );

module.exports = router;