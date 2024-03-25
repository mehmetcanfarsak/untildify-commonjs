# untildify-commonjs

* Convert a tilde path to an absolute path: `~/dev` → `/Users/john/dev`
* Inspired by [untilify](https://github.com/sindresorhus/untildify) by [Sindre Sorhus](https://github.com/sindresorhus)
* Since untildify uses ES6 syntax, I created this package to for those who use CommonJS environment.

  
## Install

```sh
npm install untildify-commonjs
```

## Usage

```js
const untildify = require('untildify-commonjs');

untildify('~/dev');
//=> '/Users/sindresorhus/dev'
```

## Related

See [tildify-commonjs](https://github.com/mehmetcanfarsak/tildify-commonjs) for the inverse.


## How to Contribute

Thank you for considering contributing to this project! Contributions are essential to keep the project thriving and improving. Below are steps on how you can contribute to the project:

### 1. Fork the Repository

- Navigate to the repository on GitHub.
- Click on the "Fork" button in the top-right corner of the page.
- This will create a copy of the repository in your GitHub account.

### 2. Clone the Repository

- On your GitHub account, find the forked repository.
- Click on the "Code" button and copy the URL provided.
- Open your terminal or command prompt.
- Use the `git clone` command followed by the URL to clone the repository to your local machine.

```bash
git clone <repository_URL>
```

### 3. Make Changes

- Navigate to the project directory on your local machine.
- Make the necessary changes or additions to the files you want. Ensure your changes adhere to the project's contribution guidelines and formatting standards.

### 4. Commit Your Changes

- After making the desired changes, save the files you have changed.
- In your terminal or command prompt, navigate to the project directory.
- Use the following commands to stage and commit your changes:

```bash
git add README.md # Replace README.md with the file you have changed
git commit -m "Brief description of changes"
```

### 5. Push Changes to Your Fork

- Once committed, push your changes to your forked repository on GitHub:

```bash
git push origin main
```

### 6. Submit a Pull Request

- Go to your forked repository on GitHub.
- Click on the "Pull Request" button.
- Provide a brief description of the changes you've made in the pull request.
- Click on "Create Pull Request" to submit your changes for review.

### 7. Await Review and Feedback

- Your pull request will be reviewed as soon as possible.
- Be open to feedback and be willing to make further changes if necessary.
- Once approved, your changes will be merged into the main project.

## Thank You!

Thank you for taking the time to contribute to our project. Your efforts are greatly appreciated and help make the project better for everyone. If you have any questions or need further assistance, feel free to reach out via GitHub issues. Happy coding!
