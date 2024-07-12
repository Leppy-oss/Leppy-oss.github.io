const slugify = require('slugify');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'Title',
        required: true,
      },
      {
        type: 'input',
        name: 'excerpt',
        message: 'Excerpt/Description',
        required: true,
      },
      {
        type: 'input',
        name: 'category',
        message: 'Category',
        required: true,
      },
      {
        type: 'input',
        name: 'tags',
        message: 'Tags',
        required: true,
      },
      {
        type: 'input',
        name: 'image',
        message: 'Cover Image (src)',
        required: true,
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        initial: 'Leppy-oss'
      },
      {
        type: 'input',
        name: 'date',
        message: 'Date of blog post? (ex: 2022-12-01)',
        initial: new Date().toISOString().split('T')[0],
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { title, author, tags } = answers;

      return {
        ...answers,
        slug: slugify(title, { lower: true }),
        authorImage: `${slugify(author, { lower: true })}.jpg`,
        tags: tags.split(',').map((tag) => tag.trim()),
      };
    });
  },
};
