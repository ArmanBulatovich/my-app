import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Features from "./pages/Features"
import Comments from "./pages/Comments"
import ArticleList from "./pages/ArticleList"
import Contact from "./pages/Contact"
import Team from "./pages/Team"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Box paddingTop={10}>
      <Features />
      <ArticleList />
      <Comments />
      <Team/>
      <Contact />
    </Box>
    <Footer />
  </ChakraProvider>
)