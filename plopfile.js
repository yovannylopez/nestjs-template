module.exports = function (plop) {
  const date = new Date();
  let year = date.getFullYear();
  plop.setGenerator('template', {
    description: 'Template for Microservices with Nest.js framework',
    prompts: [
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
    actions: [
      {
        base: 'template',
        destination: 'app',
        force: true,
        globOptions: {
          dot: true,
        },
        templateFiles: 'template/**/*',
        type: 'addMany',
      },
    ],
  });
};
