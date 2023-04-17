const { __ } = require("i18n");

const UserError = {



  handlerError: function(errs){
    const errors = [];
    Object.values(errs).forEach((error) => {
      console.log(error.type)
      errors.push({"path": __(error.path), "type": __(error.type)})
    });

    return errors;
  }


};

module.exports = UserError