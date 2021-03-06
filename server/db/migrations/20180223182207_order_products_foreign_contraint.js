exports.up = knex => knex.schema.table(
  'order_products',
  table => table.foreign('product_id').references('product_id'),
);

exports.down = knex => knex('order_products').dropForeign('product_id');
