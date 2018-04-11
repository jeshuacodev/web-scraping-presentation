// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Code,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps textColor="secondary">
            Web Scraping / Web Automation
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            via Javascript
          </Text>
          <Cite>jeshua ensong</Cite>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} textColor="secondary">
            Tools needed
          </Heading>
          <List>
            <ListItem>PhantomJS (<a href="http://phantomjs.org" _target="blank">http://phantomjs.org</a>)</ListItem>
            <ListItem>CasperJS (<a href="http://casperjs.org" _target="blank">http://casperjs.org</a>)</ListItem>
            <ListItem>Text Editor</ListItem>
          </List>
          <Text margin="40px 0 20px 0" size={1} bold>
            or you can just
          </Text>
          <Code fit>
            docker pull vitr/casperjs
          </Code>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary">
            Why use a Headless Browser vs cURL or similar tools e.g. python(urllib2 & BeautifulSoup)?
          </Heading>
          <List fit size={6}>
            <ListItem>You don't have to be an expert in APIs or AJAX.</ListItem>
            <ListItem>You don't have to worry about authentication/cookies.</ListItem>
            <ListItem>Fairly easy to integrate OCR tools.</ListItem>
            <ListItem>You need to be able to render the HTML page into an image.</ListItem>
            <ListItem>You are already familiar with Javascript.</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary">
            When not to use a Headless Webkit?
          </Heading>
          <List>
            <ListItem>When it's easier to access the data by reverse engineering the REST API.</ListItem>
            <ListItem>You need a lightweight and high performance web crawler.</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            How will the infrastructure look like in an enterprise level application?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
