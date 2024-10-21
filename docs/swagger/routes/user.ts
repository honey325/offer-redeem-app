module.exports = {
  '/user': {
    get: {
      tags: ['Users'],
      summary: 'Get All stores',
      produces: ['json'],
      parameters: [],
      responses: {
        200: {
          description: 'Get All users',
        },
      },
    },
  },
  '/user/delete': {
    get: {
      tags: ['Users'],
      summary: 'delete store',
      produces: ['json'],
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
          description: 'delete user',
        },
      },
    },
  },

  '/user/update': {
    post: {
      tags: ['Users'],
      summary: 'update user',
      security: [
        {
          auth_token: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                email: { type: 'string' },
                fname: { tupe: 'string' },
                lname: { type: 'string' },
                contact: { type: 'string' },
              },
              required: ['email', 'fname', 'lname', 'contact'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Store Update',
        },
        400: {
          description: 'something went wrong',
        },
      },
    },
  },
};
