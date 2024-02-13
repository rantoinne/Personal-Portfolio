import { SKILL_LEVEL, SKILL_TYPE } from "./enums";

export default {
  [SKILL_TYPE.FRONT_END]: [
    {
      title: 'REACT NATIVE',
      logo: require('../assets/icons/react-native.png'),
      level: SKILL_LEVEL.ADVANCED
    },
    {
      title: 'REACT',
      logo: require('../assets/icons/react.png'),
      level: SKILL_LEVEL.ADVANCED
    },
    {
      title: 'HTML',
      logo: require('../assets/icons/html.png'),
      level: SKILL_LEVEL.ADVANCED
    },
    {
      title: 'CSS',
      logo: require('../assets/icons/css.png'),
      level: SKILL_LEVEL.ADVANCED
    },
    {
      title: 'TAILWIND CSS',
      logo: require('../assets/icons/tailwind.png'),
      level: SKILL_LEVEL.INTERMEDIATE
    }
  ],
  [SKILL_TYPE.BACK_END]: [
    {
      title: 'NODE JS',
      logo: require('../assets/icons/nodejs.png'),
      level: SKILL_LEVEL.ADVANCED
    },
    {
      title: 'GRAPHQL',
      logo: require('../assets/icons/graphql.png'),
      level: SKILL_LEVEL.ADVANCED
    },
    {
      title: 'MYSQL',
      logo: require('../assets/icons/mysql.png'),
      level: SKILL_LEVEL.ADVANCED
    },
  ],
};
