module.exports = function (plop) {
  const date = new Date();
  let year = date.getFullYear();
  plop.setGenerator('template', {
    description: 'Template for Microservices with Nest.js framework',
    prompts: [
      {
        type: 'list',
        name: 'action',
        message: 'Project type',
        choices: ['BFF', 'MS with MongoDB', 'MS with MySQL'],
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name',
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Project description',
      },
      {
        type: 'input',
        name: 'projectVersion',
        message: 'Project version (example: 1.0.0 / default 0.0.0)',
        default: '0.0.0',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
      },
      {
        type: 'input',
        name: 'license',
        message: 'License project',
        default: 'MIT',
      },
      {
        type: 'input',
        name: 'repo',
        message: 'url repo',
        default: 'https://github.com/example_user/example_repo',
      },
      {
        type: 'input',
        name: 'year',
        default: year,
      },
    ],
    actions: (data) => {
      let actions = [];
      if (data.action === 'BFF') {
        actions = actions.concat([{
          base: 'templates/bff',
          destination: 'app',
          force: true,
          globOptions: {
            dot: true,
          },
          templateFiles: 'templates/bff/**/*',
          type: 'addMany',
        }]);
      } else if(data.action === 'MS with MongoDB') {
        actions = actions.concat(
          {
            base: 'templates/mongo',
            destination: 'app',
            force: true,
            globOptions: {
              dot: true,
            },
            templateFiles: 'templates/mongo/**/*',
            type: 'addMany',
          }
        );
      } else if (data.action === 'MS with MS with MySQL') {
        actions = actions.concat(
          {
            base: 'templates/mysql',
            destination: 'app',
            force: true,
            globOptions: {
              dot: true,
            },
            templateFiles: 'templates/mysql/**/*',
            type: 'addMany',
          }
        );
      }
      return actions;
    },
  });
};

