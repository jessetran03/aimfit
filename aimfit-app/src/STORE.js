const STORE = {
    exercises: [
      {
        id: 1,
        name: 'Bench Press',
        muscleGroups: [ 'Chest', 'Triceps' ],
        workoutId: 2,
      },
      {
        id: 2,
        name: 'Squat',
        muscleGroups: ['Quads', 'Hamstrings', 'Glutes'],
      },
      {
        id: 3,
        name: 'Cable Fly',
        muscleGroups: ['Chest'],
        workoutId: 2,
      },
      {
        id: 4,
        name: 'Dumbbell Overhead extension',
        muscleGroups: ['Triceps'],
      },

    ],
    workouts: [
      {
        id: 1,
        title: 'Cardio Workout',
        exerciseIds: [ 1, 2 ],
      },
      {
        id: 2,
        title: 'Push Workout',
        exercises: ['Bench Press', 'Squat'],
      },
      {
        id: 3,
        title: 'Pull Workout',
        exercises: ['Bench Press', 'Squat'],
      },
      {
        id: 4,
        title: 'Legs Workout',
        exercises: ['Bench Press', 'Squat'],
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