# LineTap

classical reconditioning

## MVP

LineTap improves and repairs your typing patterns by starting over on the word, sentence, or line when an error is made. It encourages engagement by providing options to upload your own source material.

Features include:

- [ ] Cursor input returns to beginning of word or word group when a mistake is made
- [ ] Simple upload of source material
- [ ] Account to track stats and progress over time

## Design Docs

* [View Wireframes][view]
* [DB Schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### 1: User Authentication

User signup and authentication (BCrypt). Send signed in users to a dashboard that will display the application's root view.

[Details][phase-one]

### 2: Flux Architecture and Source/Input Comparison

Set up Flux and React view for source display and typing input. Functional comparison of user input and target source material. Display alert upon discrepancies.

[Details][phase-two]

### 3: Typing Input Overlay and Error Reaction

Implement live parsing and display of input overlaid on source text. Render errors contextually in real time and reset cursor location accordingly. Begin basic bootstrap styling.

[Details][phase-three]

### 4: Source Material Upload and Management

Add Sources JSON API and actions for CRUD functionality. Create form view allowing text box upload and file upload. Sources are added to database on successful upload and accessible from typing dashboard. React views for Form, Index, and IndexItem.

[Details][phase-four]

### 5: Stat Calculation and Display

Add user statistics JSON API and calculations resulting in meaningful displays for each user. Show WPM (or characters/minute), accuracy, and averages for each over time. Automatically begin and end timer when typing starts and finishes.

[Details][phase-five]

### 6: Record and Display Problem Areas

Keep track of word context and error made per mistake. Maintain a list for each user and organize them by word and source.

[Details][phase-six]

### 7: App Optimization and Advanced Styling

Compare timing and transitions for error reaction. Add flourishes and detailed styling, modals. Tweak database and data interactions. Implement tour and demo for new users.

[Details][phase-seven]

### Stretch Goals

- [ ] Github login, Google/Twitter/FB login
- [ ] Results detail view
- [ ] Toggle between starting at word, sentence, or line
- [ ] Add options to repeat words multiple times upon typo
- [ ] Github repo sourcing
- [ ] Add and enforce shortcuts/autocompletions
- [ ] User styling options
- [ ] Endless mode generator

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
