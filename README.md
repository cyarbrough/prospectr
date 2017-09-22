# prospectr

Demo app that compares a job listing to potential hires. See it live at: [cy-prospectr.herokuapp.com](https://cy-prospectr.herokuapp.com/). See the original draft on [Twitter](https://twitter.com/emazo/status/911031996180082688)

## Features

* Fetches job listing & prospect data from JSONAPI structured json file
* Processes model data into local models
* Loads data into discreet components
* Compares data to determine equality
* Palette based, minimal design
* Dynamic charts
* Mobile responsive
* 100% unit test coverage


## Potential Expansion
* Better match detecting
* Dynamic match rating
* Integrations tests, Acceptance tests
* Edit as User, Edit as Employer


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/cyarbrough/prospectr`
* `cd prospectr`
* `npm run install-app`

## Running / Development

* `ember serve`
* Visit prospectr at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Running Test Coverage

* `npm run coverage`
* Coverage reports have been provided in this repo; see coverage/index.html

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* `npm run deploy-prod`

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
