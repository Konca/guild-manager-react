import React from "react";
const SortRaids = React.createContext({
  penis: false,
});

// export const LoadPlannedRaids = (props) => {
//   const fetchTeams = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         "../../../../dummy/" + params.raidId + ".json"
//       );
//       const data = await response.json();
//       const teams = [];
//       let bench = {};
//       data.SortedRaids.forEach((team) => {
//         team.TeamName !== "Benched" ? teams.push(team) : (bench = team);
//       });
//       const benchteam = [bench];
//       console.log(benchteam);
//       setRaid(data);
//       setRaidTeams(teams);
//       setUnsortedClasses(benchteam);
//     } catch (error) {
//       setError(error.message);
//     }
//     setIsLoading(false);
//   }, [params.raidId]);

//   useEffect(() => {
//     fetchTeams();
//   }, [fetchTeams]);

//   return <SortRaids.Provider>{props.children}</SortRaids.Provider>;
// };

export default SortRaids;
