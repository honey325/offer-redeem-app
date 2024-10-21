module.exports = {
  '/offer/select/{id}': {
    get: {
      tags: ['offer'],
      summary: 'Get All Offer',
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          type: 'integer',
          description: 'Store Id',
        },
      ],
      responses: {
        200: {
          description: 'Get All offer',
        },
      },
    },
  },
  '/offer/delete': {
    post: {
      tags: ['offer'],
      summary: 'delete offer',
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                storeId: {
                  type: 'integer',
                },
                offerId: {
                  type: 'integer',
                },
              },
              required: ['storeId', 'offerId'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'offer Delete from store (soft delete)',
        },
      },
    },
  },
  '/offer/add': {
    post: {
      tags: ['offer'],
      summary: 'add offer',
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                offerName: { type: 'string' },
                description: { type: 'string' },
                storeId: { type: 'number' },
                startDate: { type: 'date' },
                endDate: { type: 'date' },
                tNc: { type: 'string' },
              },
              required: ['offerName', 'description', 'storeId', 'startDate', 'endDate', 'tNc'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'offer added to store',
        },
      },
    },
  },
  '/offer/update': {
    post: {
      tags: ['offer'],
      summary: 'update offer',
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                storeId: { type: 'number' },
                offerId: { type: 'number' },
                startDate: { type: 'date' },
                endDate: { type: 'date' },
                tNc: { type: 'string' },
              },
              required: ['offerId', 'storeId', 'startDate', 'endDate', 'tNc'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'offer updated to store',
        },
      },
    },
  },
}
