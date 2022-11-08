# Data layer

## Data

- Robots array
- Robot object
  - name
  - image
  - id
  - stats
    - speed
    - endurance
    - creation date

## Receive interactions

- Create new robot
- Modify existing robot
- Delete robot
- Navigate to each page

# Components

## App

### Show data

- Header
- RobotsList

## Header

### Show data

- A heading level 1 with text “Robots”
- A navigation component

## RobotsList

### Show data

- Heading level 2 with text “Robots list”
- Show a robotCard item for each received result

## RobotCard

### Show data

- The received robot image
- A heading level 2 with the received robot name
- A list with the received stats
  - speed
  - endurance
  - creation date
- A button component with text “Delete”
- A button component with text “Edit”

### Receive interactions

- Delete robot on click
- Update robot data on click

## Button

### Show data

- The received text

### Receive interactions

- The received action on click

## Navigation

### Show data

- A list of navigation links for “home” and “create new robot”

### Receive interactions

- Navigate to the received page on click

## Form

### Show data

- A button component with text “create robot”
- A form that receives the following data in its form controls
  - name
  - image
  - speed
  - endurance
  - creation date

### Receive interactions

- Submit the received information on click
- Throws an error when some fields are empty

## HomePage

### Show data

- A header component
- A robotlist component

## FormPage

### Show data

- A header component
- A form component
