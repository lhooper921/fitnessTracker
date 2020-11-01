const API = {
  // The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async/await is similar to combining generators and promises.
  async getLastWorkout() {
    let res;
    try {
      // The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.

      // The Fetch API accesses resources across the network. You can make HTTP requests (GET, POST), download and upload files.
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },

// Update workout with new exercise
  async addExercise(data) {
    // set id equal to the end of url (split by the = sign)
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

  // Create new workout
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
