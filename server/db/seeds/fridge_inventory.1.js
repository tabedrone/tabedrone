// export the seed
exports.seed = knex => knex('fridge_inventory').del()
  .then(() => knex('fridge_inventory').insert([
    {
      product_id: 1,
      amount: 3,
      customer_id: 1,
    },
    {
      product_id: 2,
      amount: 5,
      customer_id: 1,
    },
  ]));
