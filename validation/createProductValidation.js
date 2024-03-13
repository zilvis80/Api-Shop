function createProductValidation(props) {
  if (!props?.title?.trim()) {
    throw new Error('Title is not providet, Please provide a title.');
  }
  if (!props?.description?.trim()) {
    throw new Error('Description is not providet, Please provide title.');
  }
}
module.exports = { createProductValidation };
