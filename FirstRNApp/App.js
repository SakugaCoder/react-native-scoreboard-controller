import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';

import ControlScore from './components/ControlScore';

const TEAM_R = 'red';
const TEAM_B = 'blue';

const ScoreBoardApp = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#1D3557');
  }, []);

  const [points_team_r, setPointsTeamR] = useState(0);
  const [points_team_b, setPointsTeamB] = useState(0);

  let add_point = (team) => {

    team == TEAM_R ? 
      setPointsTeamR(points_team_r < 19 ? points_team_r + 1 : points_team_r):
      setPointsTeamB(points_team_b < 19 ? points_team_b + 1 : points_team_b);
  };

  let substract_point = (team) => {
    team == TEAM_R ?
      setPointsTeamR(points_team_r > 0 ? points_team_r - 1 : points_team_r):
      setPointsTeamB(points_team_b > 0 ? points_team_b - 1 : points_team_b);
  };

  return (
    <ScrollView style={{backgroundColor: '#1D3557', flex: 1}}>
      <Text style={styles.title}>Marcador</Text>

      <View style={{flexDirection: 'row'}}>
        <ControlScore
          add_point={add_point}
          substract_point={substract_point}
          points={points_team_r}
          team='red'
          reverse={false}
        />

        <ControlScore
          add_point={add_point}
          substract_point={substract_point}
          points={points_team_b}
          team='blue'
          reverse={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 34,
    textAlign: 'center',
    color: '#F1FAEE',
    fontFamily: 'Cochin',
  },
});

export default ScoreBoardApp;
