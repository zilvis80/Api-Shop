const { Types } = require('mongoose');

function updateProductValidation(id, data) {
  console.log('cia yra data', data);
  if (
    !data ||
    (!data.hasOwnProperty('title') && !data.hasOwnProperty('description'))
  ) {
    throw new Error('Negeri duomenys');
  }

  if (!Types.ObjectId.isValid(id)) {
    throw new Error('id is required');
  }
}

module.exports = { updateProductValidation };
