# Phase 5: Stat Calculation and Display

Add user statistics JSON API and calculations resulting in meaningful displays for each user. Show WPM (or characters/minute), accuracy, and averages for each over time. Automatically begin and end timer when typing starts and finishes.

## Rails
### Models
* Stat

### Controllers
* Api::StatsController (index, show, create)

### Views
* stats/index.json.jbuilder
* stats/show.json.jbuilder

## Flux
### Views (React Components)
* StatsIndex
  - StatsIndexItem

### Stores
* Stat

### Actions
* ApiActions.receiveAllStats
* ApiActions.receiveSingleStat
* StatActions.fetchAllStats
* StatActions.fetchSingleStat
* StatActions.createStat

### ApiUtil
* ApiUtil.fetchAllStats
* ApiUtil.fetchSingleStat
* ApiUtil.createStat

## Gems/Libraries
* chartkick (npm)
