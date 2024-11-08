import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, BlogPage, ContactPage, GalleryPage, HomeOne, InformationPage, ServicePage, TeamPage } from "@pages/";
import Layout from "@components/Layout";

const routes = [
  {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "services",
    element: <ServicePage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "gallery",
    element: <GalleryPage />,
  },
  {
    path: "contacts",
    element: <ContactPage />,
  },
  {
    path: "team",
    element: <TeamPage />,
  },
  {
    path: "infor",
    element: <InformationPage />,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeOne />} />
          {routes.map(({ path, element }, idx) => (
            <Route key={idx} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
