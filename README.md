# LineTap

classical reconditioning

[live][heroku]

[heroku]: https://linetap.herokuapp.com/

## MVP

LineTap establishes and corrects accurate typing patterns by treating words, sentences, or lines as full units. Typos take you to the beginning of a segment instead of allowing backspace or only accounting for mistakes during accuracy calculations; bad habits are remedied, not just treated.

Users have control over the direction and focus of practice with options to upload personal source materials. Individual statistics and mistakes are tracked over time with details and summaries for common mistypes.

Features include:

- [x] User registration, authenticationsign, and sign in/sign out
- [ ] Browser input compared to source material as you type, with real-time feedback
- [ ] Cursor input returns to beginning of word or word group when a mistake is made
- [ ] Simple upload of source material
- [ ] Account tracks stats and progress over time
- [ ] Calculate and store WPM, accuracy, and error details
- [ ] Display catalog of mistakes including their context and frequency

## Design Docs

* [View Wireframes]
* [DB Schema][schema]

[View Wireframes]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### 1: User Authentication
#### 1 day

User registration and authentication (BCrypt). Send signed in users to a dashboard that will display the application's root view.

[Details][phase-one]

### 2: Flux Architecture and Source/Input Comparison
#### 2 days

Set up Flux and React view for source display and typing input. Functional comparison of user input and target source material. Display alert upon discrepancies.

[Details][phase-two]

### 3: Typing Input Overlay and Error Reaction
#### 2 days

Implement live parsing and display of input overlaid on source text. Render errors contextually in real time and reset cursor location accordingly. Begin basic bootstrap styling.

[Details][phase-three]

### 4: Source Material Upload and Management
#### 1 day

Add Sources JSON API and actions for CRUD functionality. Create form view allowing text box upload and file upload. Sources are added to database on successful upload and accessible from typing dashboard. React views for Form, Index, and IndexItem.

[Details][phase-four]

### 5: Stat Calculation and Display
#### 1 day

Add user statistics JSON API and calculations resulting in meaningful displays for each user. Show WPM (5 characters. alt, calc characters/minute), accuracy, and averages for each over time. Automatically begin and end timer when typing starts and finishes.

[Details][phase-five]

### 6: Record and Display Problem Areas
#### 1 days

Keep track of word context and error made for each mistake. Maintain a list for the user and organize them by word, source, and location.

[Details][phase-six]

### 7: App Optimization and Advanced Styling
#### 2 days

Compare timing and transitions for error reaction. Add flourishes and detailed styling, modals. Tweak database and data interactions. Implement tour and demo for new users.

[Details][phase-seven]

### Stretch Goals

- [ ] Sourcing source material (amazon, goodreads, gh, etc)
- [ ] Github auth, Google/Twitter/FB auth
- [ ] Results detail view
- [ ] Toggle between starting at word, sentence, or line
- [ ] Reset cursor when typing slows (not just on typos)
- [ ] Add options to repeat words multiple times upon typo
- [ ] Github repo sourcing
- [ ] Add and enforce shortcuts/[autocompletions][typeahead]
- [ ] User styling options
- [ ] Endless mode generator
- [ ] Rhythm game. Melody when correct, dyssonant notes on adjacent keys
- [ ] Arcade/rail shooter (typing of the dead)

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md

[typeahead]: https://github.com/twitter/typeahead.js


### TODO
* input not moving to next line until it's long enough (though source already is)
* make cursor stop blinking during active input
