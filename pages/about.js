import MainMenu from '../components/menu';
import Layout from '../components/layout';

const About = () => (
  <>
    <MainMenu />
    <Layout>
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="text-gray-500">
          with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method
          for production builds.
        </p>
      </div>
    </Layout>
  </>
);
export default About;
