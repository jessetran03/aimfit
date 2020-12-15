const STORE = {
    exercises: [
      {
        id: 1,
        exercise_name: 'Bench Press',
        muscleGroups: [ 'Chest', 'Triceps' ],
        workoutId: 2,
      },
      {
        id: 2,
        exercise_name: 'Squat',
        muscleGroups: ['Quads', 'Hamstrings', 'Glutes'],
      },
      {
        id: 3,
        exercise_name: 'Cable Fly',
        muscleGroups: ['Chest'],
        workoutId: 2,
      },
      {
        id: 4,
        exercise_name: 'Dumbbell Overhead extension',
        muscleGroups: ['Triceps'],
      },
      {
        id: 5,
        exercise_name: 'Row Machine',
        workoutId: 1
      }

    ],
    workouts: [
      {
        id: 1,
        title: 'Cardio Workout',
        exerciseIds: [ 1, 2 ],
        day: 'Monday',
      },
      {
        id: 2,
        title: 'Push Workout',
        exercises: ['Bench Press', 'Squat'],
        day: 'Tuesday',
      },
      {
        id: 3,
        title: 'Pull Workout',
        exercises: ['Bench Press', 'Squat'],
        day: 'Wednesday',
      },
      {
        id: 4,
        title: 'Legs Workout',
        exercises: ['Bench Press', 'Squat'],
        day: 'Thursday',
      },
    ],
    workoutLog: [
      {
        id: '1',
        workoutId: '1',
        date: '01/02/2020'
      },
    ],
    exerciseLog: [
      {
        id: '1',
        date: '01/02/2020',
        weight: 185,
        setCount: 3,
        repCount: 8,
      },
    ],
  }

  export default STORE;