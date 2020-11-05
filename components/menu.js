import { motion } from 'framer-motion';

const MainMenu = () => (
  <header>
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                alt="Workflow logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItem.map(el => {
                  const { title, link } = el;
                  return (
                    <motion.a
                    
                      href={link}
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      {title}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

const menuItem = [
  { title: 'Accueil', link: '/' },
  { title: 'About', link: '/about' },
];
export default MainMenu;
