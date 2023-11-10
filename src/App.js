import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout1 from "./views/Layout1";
import Page2 from "./pages/Page2";
import Page18 from "./pages/Page18";
import Page19 from "./pages/Page19";
import Page21 from "./pages/Page21";
import Page20 from "./pages/Page20";
import Page24 from "./pages/Page24";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 />,
    children: [
      { index: true, element: <Page2 /> },
      { path: "/page18", element: <Page18 /> },
      { path: "/page19", element: <Page19 /> },
      { path: "/page21", element: <Page21 /> },
      { path: "/page20", element: <Page20 /> },
      { path: "/page24", element: <Page24 /> },
      // { path: "page link here",, element: <Page4/> }, غير الاليمنت و الباث
      // { path: "page link here",, element: <Page4/> }, غير الاليمنت و الباث
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
//import EIT from "./media/EIT.jpeg";
// import Flag_of_Egypt from "./media/Flag_of_Egypt.png"
// import Imageuploadbro from "./media/Image upload-bro.svg"
// import Python from "./media/Python.svg.png"
// import business from "./media/business.jpg"
// import codesnap from "./media/code-snap.png"
// import images from "./media/images.png"
// import main_background from "./media/main_background.jpg"
// import secondary_background from "./media/secondary_background.jpg"
// import seff_logo_black from "./media/seff_logo_black.jpg"
// import seff_logo_transparent from "./media/seff_logo_transparent.png"
// import uploadimg from "./media/upload-img.png"
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout1/>,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <Page2/> },
//       {
//         path: "single",
//         children: [
//           { index: true, element: <Home/> },
//           { path: ":id", element: <Single/> },
//         ]
//       },
//       {
//         path: "cart",
//         element: <Cart/>
//       },
//       {
//         path: "categories",
//         children: [
//           { path: ":id", element: <Categories/> },
//         ]
//       },
//       {
//         path: "favlist",
//         element: <FavList/>,
//       },
//     ]
//   },
// ]);
