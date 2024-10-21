module.exports = {
  '/register': {
    post: {
      tags: ['login'],
      summary: 'Register',
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
                fname: { type: 'string' },
                lname: { type: 'string' },
                contact: { type: 'string' },
                roleId: { type: 'number' },
                pwd: { type: 'string' },
              },
              required: ['email', 'fname', 'lname', 'contact', 'roleId', 'pwd'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'user registerd',
        },
      },
    },
  },
  '/login': {
    post: {
      tags: ['login'],
      summary: 'login',
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
                pwd: { type: 'string' },
              },
              required: ['email', 'pwd'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'login succesfully',
        },
      },
    },
  },
  '/logout': {
    get: {
      tags: ['login'],
      summary: 'logout',
      produces: ['application/json'],
      parameters: [],
      responses: {
        200: {
          description: 'logout sucessfully',
        },
      },
    },
  },
  // '/login/activeaccount': {
  //   get: {
  //     tags: ['login'],
  //     summary: 'user activation link',
  //     produces: ['application/json'],
  //     parameters: [
  //       {
  //         in: 'path',
  //         name: 'code',
  //         type: 'string',
  //         description: 'Activation Code',
  //       },
  //       {
  //         in: 'path',
  //         name: 'email',
  //         type: 'string',
  //         description: 'user email',
  //       },
  //     ],
  //     responses: {
  //       200: {
  //         description: 'activate account',
  //       },
  //     },
  //   },
  // },
  // '/login/generatepwd': {
  //   post: {
  //     tags: ['login'],
  //     summary: 'Generate Password',
  //     security: [
  //       {
  //         auth_token: [],
  //       },
  //     ],
  //     requestBody: {
  //       required: true,
  //       content: {
  //         'application/x-www-form-urlencoded': {
  //           schema: {
  //             type: 'object',
  //             properties: {
  //               email: {
  //                 type: 'string',
  //               },
  //               pwd: {
  //                 type: 'string',
  //               },
  //               conpwd: {
  //                 type: 'string',
  //               },
  //             },
  //             required: ['email', 'pwd', 'conpwd'],
  //           },
  //         },
  //       },
  //     },
  //     responses: {
  //       200: {
  //         description: 'password Generated',
  //       },
  //     },
  //   },
  // },
};
