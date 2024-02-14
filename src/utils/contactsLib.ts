export default [
  {
    logo: require('../assets/icons/email.png'),
    title: 'raviasthana241001@gmail.com',
    action: () => window.open(`mailto:raviasthana241001@gmail.com`),
  },
  {
    logo: require('../assets/icons/linkedin.png'),
    title: 'LinkedIn',
    action: () => window.open('https://www.linkedin.com/in/ravi-asthana-rndev/'),
  },
  {
    logo: require('../assets/icons/phone.png'),
    title: 'Phone',
    action: () => navigator.clipboard.writeText('+917905177408'),
  }
]