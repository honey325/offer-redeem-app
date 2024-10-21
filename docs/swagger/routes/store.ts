module.exports = {
  '/store': {
    get: {
      tags: ['Stores'],
      summary: 'Get All stores',
      produces: ['application/json'],
      parameters: [],
      responses: {
        200: {
          description: 'Get All stores',
        },
      },
    },
  },
  '/store/delete': {
    get: {
      tags: ['Stores'],
      summary: 'delete stores (soft Delete)',
      produces: ['application/json'],
      parameters: [
        {
          in: 'query',
          name: 'id',
          required: true,
          schema: {
            type: 'integer',
          },
          description: 'store Id',
        },
      ],
      responses: {
        200: {
          description: 'delete stores',
        },
      },
    },
  },
  '/store/add': {
    post: {
      tags: ['Stores'],
      summary: 'Store details',
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                about: {
                  type: 'string',
                },
                contact: {
                  type: 'string',
                },
               
                location: {
                  type: 'string',
                },
              },
              required: ['name', 'about', 'contact', 'location'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Hello world',
        },
      },
    },
  },
  '/store/update': {
    post: {
      tags: ['Stores'],
      summary: 'Store details',
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'number',
                },
                name: {
                  type: 'string',
                },
                about: {
                  type: 'string',
                },
                contact: {
                  type: 'string',
                },
                
                location: {
                  type: 'string',
                },
              },
              required: ['id', 'name', 'about', 'contact', 'location'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Hello world',
        },
      },
    },
  },
}
