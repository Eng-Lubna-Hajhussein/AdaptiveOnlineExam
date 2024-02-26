const {Teachers} = require("../../../database/models/database");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: {}, password: {} ,userExists: {}};

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = {en:'That email is not registered',ar:"البريد الالكتروني غير مسجل"};
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = {en:'That password is incorrect',ar:"كلمة المرور غير صحيحة"};
  }

  // duplicate email error
  if (err.code === 11000||err.message === "user exists") {
    errors.email = {en:'That email is already registered',ar:"هذا البريد الالكتروني مسجل مسبقا"};
    // return errors;
  }

  return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'net ninja secret', {
    expiresIn: maxAge
  });
};

// controller actions
module.exports.signup_post = async (req, res) => {
  
  const { email, password, fullname } = req.body;

  try {
    const userExists = await Teachers.findOne({ where: { email: email } });
    if(userExists){
      throw Error("user exists")
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await Teachers.create({ email, password: hashedPassword, fullname });
    const token = createToken(user.teacherID);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user.teacherID });
  }
  catch(err) {
    console.log(err.message)
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
}

module.exports.login_post = async (req, res) => {
  console.log("request body: ",req.body);
  const { email, password } = req.body;
  try {
    const user = await Teachers.findOne({where:{email}});
    if(!user){
      throw Error("incorrect email");
    }
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (!auth) {
        throw Error('incorrect password');
      }
    }
    const token = createToken(user.teacherID);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user.teacherID });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}