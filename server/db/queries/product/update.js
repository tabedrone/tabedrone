module.exports = knex => (params) => {
  // error validation
  if (!params) {
    throw new Error('please add object');
  }
  if (params.name === '' || params.name === undefined) {
    throw new Error('please add the name');
  }
  if (params.id === '' || params.id === undefined) {
    throw new Error('please add the id');
  }
  if (!Number.isInteger(params.id)) {
    throw new Error('id should be a number');
  }
  if (params.id <= 0) {
    throw new Error('number-value in the property id should be greater 0');
  }

  // update db-data
  return knex('product')
    .update({ name: params.name })
    .where({ id: params.id });
};
