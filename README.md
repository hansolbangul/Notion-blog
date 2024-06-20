# UDangTangTang 커뮤니티

[notion-blog](https://bangul-log.vercel.app/) This project is a web application developed with Next.js version 13 based on React. The application serves as an interface to interlock with Notion posts using the Notion API. The project is being developed with an emphasis on SEO-friendly development

<img width="1710" alt="" src="https://github.com/hansolbangul/notion-blog/assets/71314689/9be50209-bf01-4bd3-a7aa-fb58d350fa97">

## Features

The following features are included in the project:

- Interlocking with Notion posts using Notion API
- Implementation of DDD architecture (Currently refactoring)
- SEO-friendly development
- Project development with SSG and dynamic programming with partial CSR
- Support for formats other than Notion's table, tag's page, and post
- Error and loading page implementation
- Implementation of dark mode and white mode using Tailwind (Currently refactoring)
- Background music set using YouTube Music

## Installation

To install the project, follow the steps below:

1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Run `yarn install` to install the required packages.
4. Run `yarn dev` to start the development server.

## Usage

To use the project, follow the steps below:

1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Modify the `site.config.ts` file to suit your project needs.
4. Modify the `.env` file to include your Notion page ID and Vercel project ID.
   - `NOTION_PAGE_ID`: This is the ID of the Notion page you want to use as the source for your blog posts. You can find this ID in the URL of the page.
   - `V_ID`: this is the ID of the Notion page..
5. Run `yarn install` to install the required packages.
6. Run `yarn dev` to start the development server.
7. Open the project in a web browser and start using the blog.

## Contributing

To contribute to the project, follow the steps below:

1. Fork the repository.
2. Make your changes to the code.
3. Create a pull request.

## License

The [MIT License](LICENSE).
