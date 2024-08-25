export const homeRoutes = [

  {
    name: "Home",
    path: "/",
    // element: <HomeLayout />,
  },
  //   food
  {
    name: "Food",
    path: "food",
    // element: <FoodsLayout />,
  },
  //   faq
  {
    name: "FAQ",
    path: "faq",
    // element: <FAQ />,
  },
  // blog
  {
    name: "Blog",
    path: "blog",
    // element: <BlogLayout />,
  },
  {
    path: "blog/:id",
    // element: <BlogDetailPage match={undefined} />,
  },
  // recipes
  {
    name: "Recipes",
    path: "recipe/new",
    // element: <RecipePageLayout />,
  },
  {
    path: "recipe/:id",
    // element: <RecipeDetailPage />
  },
];
