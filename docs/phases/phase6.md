# Phase 6: Record and Display Problem Areas

Keep track of word context and error made per mistake. Maintain a list for each user and organize them by word and source.

## Rails
### Models
* Mistake

### Controllers
* Api::MistakesController (index, show, create)

### Views
* mistakes/index.json.jbuilder
* mistakes/show.json.jbuilder

## Flux
### Views (React Components)
* MistakeIndex
  - MistakeIndexItem

### Stores
* Mistake

### Actions
* ApiActions.receiveAllMistakes
* ApiActions.receiveSingleMistake
* MistakeActions.fetchAllMistakes
* MistakeActions.fetchSingleMistake
* MistakeActions.createMistake

### ApiUtil
* ApiUtil.fetchAllMistakes
* ApiUtil.fetchSingleMistake
* ApiUtil.createMistake

## Gems/Libraries
