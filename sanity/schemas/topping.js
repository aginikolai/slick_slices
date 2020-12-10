export default {
  name: 'topping',
  title: 'Topings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of the topping',
    },
    {
      name: 'vegeterian',
      title: 'Vegeterian',
      type: 'boolean',
      description: 'Name of the topping',
      options: {
        layout: 'checkbox',
      }
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegeterian: 'vegeterian',
    },
    prepare: (fields) => ({
      title: `${fields.name}`,
    })
  }
};
