module.exports = {
  '/ratings/select/{id}': {
    get: {
      tags: ['Ratings'],
      summary: 'fetch avg rating of of all stores or specific',
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          type: 'integer',
          description: 'store id',
        },
      ],
      responses: {
        200: {
          description: 'Get All store ratings',
        },
      },
    },
  },
  '/ratings/restore': {
    get: {
      tags: ['Ratings'],
      summary: 'restore all deleted(soft deleted) reting records',
      produces: ['application/json'],
      parameters: [],
      responses: {
        200: {
          description: 'Get All store ratings',
        },
      },
    },
  },
  '/ratings/delete': {
    get: {
      tags: ['Ratings'],
      summary: 'fetch avg rating of of all stores or specific',
      produces: ['application/json'],
      parameters: [
        {
          in: 'query',
          name: 'storeId',
          type: 'integer',
          required: true,
          description: 'store id',
        },
      ],
      responses: {
        200: {
          description: 'Get All store ratings',
        },
      },
    },
  },
  '/ratings/addupdate': {
    post: {
      tags: ['Ratings'],
      summary: 'Store rating add or update',
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                storeId: {
                  type: 'number',
                },
                
                ratings: {
                  type: 'number',
                },
                reviewContent: {
                  type: 'string',
                },
              },
              required: ['storeId', 'rating'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'rating added or update',
        },
      },
    },
  },
}
