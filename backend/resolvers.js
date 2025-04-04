const missions = [];

const resolvers = {
  Query: {
    missions: () => missions,
  },
  Mutation: {
    addMission: (_, { mission_name, launch_year }) => {
      const newMission = {
        id: missions.length + 1,
        mission_name,
        launch_year,
      };
      missions.push(newMission);
      return newMission;
    },
  },
};

module.exports = resolvers;
