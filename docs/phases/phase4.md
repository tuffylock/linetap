# Phase 4: Source Material Upload and Management

Add Sources JSON API and actions for CRUD functionality. Implement Flux architecture. Create form view allowing text box upload and file upload. Sources are added to database on successful upload and accessible from typing dashboard. React views for Form, Index, and IndexItem.

## Rails
### Models
* Source

### Controllers
* Api::SourcesController (index, show, create)

### Views
* sources/index.json.jbuilder
* sources/show.json.jbuilder

## Flux
### Views (React Components)
* SourceIndex
  - SourceIndexItem
* SourceForm

### Stores
* Sources

### Actions
* ApiActions.receiveAllSources
* ApiActions.receiveSingleSource
* SourceActions.fetchAllSources
* SourceActions.fetchSingleSource
* SourceActions.createSource

### ApiUtil
* ApiUtil.fetchAllSources
* ApiUtil.fetchSingleSource
* ApiUtil.createSource

## Gems/Libraries
* Flux Dispatcher (npm)
* jQuery-File-Upload
