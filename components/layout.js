import { motion } from 'framer-motion';
const Layout = props => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      {props.children}
    </motion.div>
  );
};
export default Layout;
