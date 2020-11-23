# Saucelabs Karma Example 

> An example of using the Karma test runner with Sauce Labs' browser cloud to run JavaScript unit tests.

Inspired by [mgenereu/karma-sauce-example](https://github.com/mgenereu/karma-sauce-example) with updated package versions.

## Getting Started

To get started, clone the repo:

```bash
$ git clone git@github.com:christian-bromann/saucelabs-karma-example.git
$ cd karma-sauce-example
```

Then run the following command to install local Node.js dependencies:

```bash
npm install 
```

*Note: make sure you have [node.js](http://nodejs.org/) installed before running the above command.* 

## Run tests

To run the test on Sauce Labs ensure you have your credentials stored in the environment:

```sh
$ export SAUCE_USERNAME=<your-username>
$ export SAUCE_ACCESS_KEY=<your-access-key>
```

Then just run the Karma command via:

```sh
$ npx karma start
```

That's it!
