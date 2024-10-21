module.exports = {
  '/gallery/select/{id}': {
    get: {
      tags: ['Gallery'],
      summary: 'fetch avg rating of of all stores or specific',
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
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
  '/gallery/add': {
    post: {
      tags: ['Gallery'],
      summary: 'Photo or Video Add in Gallery',
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                path: {
                  type: 'string',
                },
                contentType: {
                  type: 'number',
                },
                storeId: {
                  type: 'number',
                },
              },
              required: ['path', 'contentType', 'storeId'],
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
  '/gallery/delete': {
    get: {
      tags: ['Gallery'],
      summary: 'delete (soft delete) content from gallery',
      produces: ['application/json'],
      parameters: [
        {
          in: 'query',
          name: 'content',
          type: 'integer',
          required: true,
          description: 'photo or video id',
        },
        {
          in: 'query',
          name: 'contentType',
          type: 'integer',
          required: true,
          description: 'type of content (if photo insert 4 if video insert 5)',
        },
      ],
      responses: {
        200: {
          description: 'delete content from gallery',
        },
      },
    },
  },
}
